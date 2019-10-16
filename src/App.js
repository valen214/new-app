import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./components/Header";
import ClipItemContainer from "./components/ClipItemContainer";


function importScript(url, callback, isAsync = false){
    const script = document.createElement("script");
    script.src = url;
    script.async = isAsync;
    if(callback instanceof Function) script.onload = callback;
    document.body.appendChild(script);
}

class App extends React.Component
{
    componentDidMount(){
        new Promise(resolve => {
            importScript("https://apis.google.com/js/api.js", resolve);
        }).then(console.log);
    }

    render(){
        console.log(this.props);
        // all dimension should be controlled by parent
        return <div className="App" style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
        }}>
            <Header style={{
                    width: "100vw",
                    height: "100px",
            }}></Header>
            <ClipItemContainer style={{
                    width: "100vw",
                    minHeight: "calc(100vh - 100px)",
            }}></ClipItemContainer>
        </div>;
    }
}

export default App;
