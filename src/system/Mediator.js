
import GoogleLibrary from "./GoogleLibrary";

class Mediator
{
    constructor(){

    }

    async login(){
        return GoogleLibrary.login();
    }
}


export default Mediator;
