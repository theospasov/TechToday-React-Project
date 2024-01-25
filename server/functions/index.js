const server = require('./server')

/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const {setGlobalOptions} = require("firebase-functions/v2");
const logger = require("firebase-functions/logger");

setGlobalOptions({
    region: 'europe-central2'
})

//This connect the FirebaseFunction with our server
exports.api = onRequest((req, res) => {
    server.emit('request', req, res)
})
