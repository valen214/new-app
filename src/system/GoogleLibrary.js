

const API_KEY = "AIzaSyCp8Rwg-WfaxkOz5MfdOGaXJI9R2ZXb5GM";
const CLIENT_ID =
    "948862535396-9ficl2trtv77ekjn3k2p1sg04kofmj67" +
    ".apps.googleusercontent.com";
const DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"
];
const SCOPE = "https://www.googleapis.com/auth/drive.appdata";

function importScript(url, callback, isAsync = false){
    const script = document.createElement("script");
    script.src = url;
    script.async = isAsync;
    if(callback instanceof Function) script.onload = callback;
    document.body.appendChild(script);
}

var gapi;
(async () =>{
    if("gapi" in window){

    } else{
        console.warn("'gapi' undefined, importing gapi script");
        await new Promise(ok =>{
            importScript("https://apis.google.com/js/api.js", ok);
        });
    }
    console.log("start initializing gapi");
    gapi = window["gapi"];
    await new Promise(ok => gapi.load("client:auth2", ok));
    await gapi.client.init({
        "apiKey": API_KEY,
        "clientId": CLIENT_ID,
        "discoveryDocs": DISCOVERY_DOCS,
        "scope": SCOPE
    });
    console.log("finished initializing gapi");
    gapi.auth2.getAuthInstance().isSignedIn.listen(loginListener);
})();

export async function login(){
    console.log("logging in to Google");
    var res;
    try{
        res = await gapi.auth2.getAuthInstance().signIn();
    } catch(e){
        console.log(e);
    }
    console.log("is logged in:",
        gapi.auth2.getAuthInstance().isSignedIn.get());
    return res;
}

function loginListener(isSignedIn){
    console.log(`isSignedIn: ${isSignedIn}`); // not called
}

/*
https://developers.google.com/drive/api/v3/appdata
*/
export function uploadToAppFolder(name, data){
    gapi.client.drive.files.create({
        resources: {
            name: name,
            parents: ["appDataFolder"]
        },
        media: {
            // mimeType: "text/plain",
            body: data,
        },
        fields: "id",
    }, (err, file) =>{
        if(err){
            console.error(`upload file (${name}) failed`);
        } else{
            console.log("file uploaded:", file);
        }

    });
}

export async function listAppFolder(){
    gapi.client.drive.files.list({
        spaces: "appDataFolder",
        fields: "nextPageToken, files(id, name)",
        pageSize: 100,
    }, (err, res) =>{
        if(err){
            console.error(err);
        } else{
            res.files.forEach(file =>{
                console.log("found file:", file.name, file.id);
            });
        }
    });
}

export default {
    login: login,
};
