var prompt = require('prompt-sync')();
var ConversationV1 = require('watson-developer-cloud/conversation/v1');
var bodyParser = require('body-parser');
var express = require('express');

var app = express();

app.use(bodyParser.json());

// Set up Conversation service wrapper.
var conversation = new Conversation({
  username: '2533be81-69d0-4bd8-8cd8-f47913eb8810', // replace with service username
  password: 'qNZcHksmxsqh', // replace with service password
  version_date: '2017-05-26'
});

var workspace_id = 'd4ca2afe-3388-4262-9696-5723b8c84018'; // replace with workspace ID

// // Endpoint to be call from the client side
// app.post('/api/message', function(req, res) {
//   var workspace = process.env.WORKSPACE_ID || 'workspace_id';
//   if (!workspace || workspace === 'workspace_id') {
//     return res.json({
//       'output': {
//         'text': 'The app has not been configured with a <b>WORKSPACE_ID</b> environment variable. Please refer to the ' + '<a href="https://github.com/watson-developer-cloud/conversation-simple">README</a> documentation on how to set this variable. <br>' + 'Once a workspace has been defined the intents may be imported from ' + '<a href="https://github.com/watson-developer-cloud/conversation-simple/blob/master/training/car_workspace.json">here</a> in order to get a working application.'
//       }
//     });
//   }
//   var payload = {
//     workspace_id: workspace,
//     context: req.body.context || {},
//     input: req.body.input || {}
//   };
//
//   // Send the input to the conversation service
//   conversation.message(payload, function(err, data) {
//     if (err) {
//       return res.status(err.code || 500).json(err);
//     }
//     return res.json(updateMessage(payload, data));
//   });
// });
//
// /**
//  * Updates the response text using the intent confidence
//  * @param  {Object} input The request to the Conversation service
//  * @param  {Object} response The response from the Conversation service
//  * @return {Object}          The response with the updated message
//  */
// function updateMessage(input, response) {
//   var responseText = null;
//   if (!response.output) {
//     response.output = {};
//   } else {
//     return response;
//   }
//   // if (response.intents && response.intents[0]) {
//   //   var intent = response.intents[0];
//   //   // Depending on the confidence of the response the app can return different messages.
//   //   // The confidence will vary depending on how well the system is trained. The service will always try to assign
//   //   // a class/intent to the input. If the confidence is low, then it suggests the service is unsure of the
//   //   // user's intent . In these cases it is usually best to return a disambiguation message
//   //   // ('I did not understand your intent, please rephrase your question', etc..)
//   //   if (intent.confidence >= 0.75) {
//   //     responseText = 'I understood your intent was ' + intent.intent;
//   //   } else if (intent.confidence >= 0.5) {
//   //     responseText = 'I think your intent was ' + intent.intent;
//   //   } else {
//   //     responseText = 'I did not understand your intent';
//   //   }
//   // }
//   response.output.text = responseText;
//   return response;
// }
//
// module.exports = app;



// Start conversation with empty message.
conversation.message({
  workspace_id: workspace_id
  }, processResponse);

  var payload = {
      workspace_id: workspace,
      context: req.body.context || {},
      input: req.body.input || {}
    };

// Process the conversation response.
module.export.function processResponse(err, response) {
  if (err) {
    console.error(err); // something went wrong
    return;
  }

  // If an intent was detected, log it out to the console.
  if (response.intents.length > 0) {
    console.log('Detected intent: #' + response.intents[0].intent);
  }

  if (response.entities.length > 0) {
    console.log('Detected entity: @' + response.entities[0].entity);
  }

  var endConversation = false;

  // Display the output from dialog, if any.
  if (response.output.action === 'end_conversation') {
    // User said goodbye, so we're done.
    return res.json(response.output.text[0]);
    endConversation = true;
    console.log("end");
  } else if (response.output.text.length != 0) {
      return res.json(response.output.text[0]);
  }

  if (!endConversation) {
    var newMessageFromUser = prompt('>> ');
    conversation.message({
      workspace_id: workspace_id,
      input: { text: newMessageFromUser },
      // Send back the context to maintain state.
      context : response.context,
    }, processResponse)
  }
}
