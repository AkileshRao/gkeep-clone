const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const dataStore = app.firestore()
const fileStorage = app.storage()

module.exports = {
  dataStore, fileStorage
}