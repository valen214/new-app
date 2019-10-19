

function importScript(url, callback, isAsync = false){
    const script = document.createElement("script");
    script.src = url;
    script.async = isAsync;
    if(callback instanceof Function) script.onload = callback;
    document.body.appendChild(script);
}
const API_KEY = "AIzaSyCp8Rwg-WfaxkOz5MfdOGaXJI9R2ZXb5GM";
const CLIENT_ID = "948862535396-" +
    "niamq8hq8ta57649seimp4olv9ktlii9" +
    ".apps.googleusercontent.com";

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
        "discoveryDocs": [],
        "scope": ""
    })
})();

export async function login(){
    console.log("logging in to Google");
    return true;
}


export default {
    login: login,
};
