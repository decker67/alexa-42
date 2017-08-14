'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = 'amzn1.ask.skill.e16fee09-7328-413a-90f7-0dd8d32bc0e2';

var languageStrings = {
    'de-DE': {
        'translation': {
            'SKILL_NAME' : 'Die Antwort auf die Frage',
            'THE_ANSWER' : 'Die Antwort lautet 42'
        }
    }
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetAnswer');
    },
    'GetAnswer': function () {
        var speechOutput = this.t('THE_ANSWER');
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'));
    }
};