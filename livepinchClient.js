// LivePinch API Client: https://docs.livepinch.com/api/index.html

const request = require('request');

const api_url = 'https://api.livepinch.com/api';

const api_paths = {
    'update_profile': '/profile/update',
    'push_event': '/events/push'
};

function isValidKey(key) {

    if (!key) {
        return false;
    }

    if ((key.trim()).length == 0) {
        return false;
    }

    return true;
}

function isValidObject(value) {

    if (typeof(value) != 'object') {
        return false;
    }

    if (Object.keys(value).length == 0) {
        return false;
    }

    return true;
}

function getHeader() {

    return {
        'Content-Type': 'application/json',
        'X-Api-Key': api_key
    };
}

function getURL(type) {
    return api_url + '/' + api_version + api_paths[type];
}

function getResponse(error, response, body) {

    if (!body) {

        throw "Something went wrong. No response received.";
    }

    return body;
}

function sendRequest(type, post_body) {

    var options = {
        url: getURL(type),
        method: "POST",
        headers: getHeader(),
        json: post_body
    }

    return request(options, getResponse);
}

module.exports = function(apiKey, apiVersion) {

    this.api_version = '1.0';
    this.api_key;

    if (!isValidKey(apiKey)) {
        throw "Invalid key: " + apiKey + " given for api_key";
    }
    api_key = apiKey;

    if (isValidKey(apiVersion)) {
        api_version = apiVersion;
    }

    this.updateProfile = function(profileKey, profileAttributes) {

        if (!isValidKey(profileKey)) {
            throw "Invalid key: " + profileKey + " given for profile_key";
        }

        if (!isValidObject(profileAttributes)) {
            throw "Invalid payload given";
        }

        var payload = {
            'profile_key': profileKey,
            'profile_data': profileAttributes
        };

        return sendRequest('update_profile', payload);
    }

    this.pushEvent = function(profileKey, eventName, eventAttributes) {

        if (!isValidKey(profileKey)) {
            throw "Invalid key: " + profileKey + " given for profile_key";
        }

        if (!isValidKey(eventName)) {
            throw "Invalid key: " + eventName + "given for event name";
        }

        if (!isValidObject(eventAttributes)) {
            throw "Invalid payload given";
        }

        payload = {
            'profile_key': profileKey,
            'event_name': eventName,
            'event_data': eventAttributes
        };

        return sendRequest('push_event', payload);
    }
}