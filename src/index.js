'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

var SKILL_NAME = "James Webb Space Telescope facts";
var GET_FACT_MESSAGE = "Did you know that";
var HELP_MESSAGE = "You can say tell me a fact, or, you can say exit...";
var HELP_REPROMPT = "What would you like me to do";
var STOP_MESSAGE = "Come back soon";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
  //  "A year on Mercury is just 88 days long.",
    "The James Web Telescope is named after James Webb, who played an important role in the Apollo project.",
    "The James Web Telescope was previously named the Next Generation Space Telescope.",
    "The James Web Telescope is scheduled to launch in October Two thousand and eighteen.",
    "The James Web Telescope has a larger mirror than the Hubble Telescope, at just short of three times the size.",
    "The James Web Telescope is equipped with a specialist sun shield to keep its temperature below minus two hundred and twenty degrees celsius.",
    "The James Web Telescope aims to observe the some of the most distant events and objects in the universe including the formations of the first galaxys.",
    "The James Web Telescope will produce direct imaging of exoplanets, which are planets beyond our own solar system.",
    "The James Web Telescope mission has a ten year goal.",
    "The James Web Telescope sun shield is designed to fold twelve times to fit within the Ariane 5 rocket that will be used to launch it.",
    "The James Web Telescope is expected to require a ten billion dollar budget to complete.",
    "The James Web Telescope will have a launch mass of six thousand five hundred kilograms, which is equivalent to the weight of an adult african elephant.",
    "The James Web Telescope has an expected mass which is around half that of the hubble telescope.",
    "The James Web Telescope will be operating one million five hundred thousand kilometers away from earth. The Hubble telescope only operates five hundred and fifty kilometers away from earth",
    "The James Web Telescope is an infrared telescope, to operate is must be kept very cold. The longer the infrared rays the colder it must be",
    "The James Web Telescope is the final large NASA astrophysics mission of its generation to be built as many other proposed observatories have been canceled or put on hold like the international x ray observatory and the Terrestrial planet finder.",
    "The James Web Telescope has been a collaborative pursuit involving NASA, the E S A and the C S A across twenty countries.",
    "The James Web Telescope will reach its orbit point one million and five hundred thousand kilometers away one month after launch."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};