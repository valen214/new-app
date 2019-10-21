
import GoogleLibrary from "./GoogleLibrary";

class Mediator
{
    constructor(){

    }

    async login(){
        return GoogleLibrary.login();
    }

    async uploadItem(name, data){
        return GoogleLibrary.uploadToAppFolder(name, data);
    }

    async listItem(){
        console.log('list item');
        return GoogleLibrary.listAppFolder();
    }
}


export default Mediator;
