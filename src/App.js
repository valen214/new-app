import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

import Header from "./components/Header";
import ClipItemContainer from "./components/ClipItemContainer";

import Mediator from "./system/Mediator";

class App extends React.Component
{
    state = {
        loggedIn: false,
    };
    constructor(props){
        super(props);
        this.mediator = new Mediator();
    }

    componentDidMount(){
    }
    componentDidCatch(error, info){
        console.warn(error, info);
    }

    loginButtonClick = async (e) =>{
        console.log("login button clicked");
        let res = await this.mediator.login();
        if(res){
            this.setState({
                loggedIn: true,
            })
        }
    };
    logoutButtonCLick = async (e) =>{
        console.log("logout button clicked");
        let res = await this.mediator.logout();
    };
    settingButtonClick = (e) =>{
        console.log("setting button clicked");
    };
    uploadButtonClick = (e) =>{
        console.log("upload button clicked");
        this.mediator.uploadItem("b.txt", "asdf");
    };

    render(){
        console.log(this.props);
        // all dimension should be controlled by parent
        return <div className="App" style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
        }}>
            <Header
                    loginButtonClick={ this.loginButtonClick }
                    logoutButtonClick={ this.logoutButtonClick }
                    settingButtonClick={ this.settingButtonClick }
                    uploadButtonClick={ this.uploadButtonClick }
                    loggedIn={ this.state.loggedIn }
                    style={{
                    width: "100vw",
                    height: "100px",
            }}></Header>
            <ClipItemContainer style={{
                    width: "100vw",
                    minHeight: "calc(100vh - 100px)",
            }}>
                <Button onClick={ this.mediator.listItem }>
                List Items
                </Button>
            </ClipItemContainer>
        </div>;
    }
}

export default App;
