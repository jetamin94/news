var CLIENT_ID = '494888416586-0brfr19qmlh8mc86mmco325vf9qtiqo0.apps.googleusercontent.com';
var API_KEY = 'AIzaSyAjxR-bVuyok3QLQmy801sKvuYBfybUGzk';
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

const gapi = window.gapi;

function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  });
}

handleClientLoad();

// function updateSigninStatus(isSignedIn) {
//   if (isSignedIn) {
//     authorizeButton.style.display = 'none';
//     signoutButton.style.display = 'block';
//     listMajors();
//   } else {
//     authorizeButton.style.display = 'block';
//     signoutButton.style.display = 'none';
//   }
// }

// function handleAuthClick(event) {
//   listMajors()
//   // gapi.auth2.getAuthInstance().signIn();
// }

// function handleSignoutClick(event) {
//   gapi.auth2.getAuthInstance().signOut();
// }

function appendPre(message) {
  var pre = document.getElementById('content');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}

export function listMajors() {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
    range: 'Class Data!A2:E',
  }).then(function (response) {
    var range = response.result;
    if (range.values.length > 0) {
      appendPre('Name, Major:');
      for (let i = 0; i < range.values.length; i++) {
        var row = range.values[i];
        // Print columns A and E, which correspond to indices 0 and 4.
        appendPre(row[0] + ', ' + row[4]);
      }
    } else {
      appendPre('No data found.');
    }
  }, function (response) {
    appendPre('Error: ' + response.result.error.message);
  });
}