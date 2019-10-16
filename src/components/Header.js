
import React from 'react';

import UploadButton from "./UploadButton";
import ClipArea from "./ClipArea";
import SettingButton from "./SettingButton";


class Header extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
        };

        this.settingButtonClick = this.settingButtonClick.bind(this);
        this.uploadButtonClick = this.uploadButtonClick.bind(this);
    }

    onLoginStateChange(e){

    }

    settingButtonClick(e){
        this.setState({
            loggedIn: true
        });
    }
    uploadButtonClick(e){

    }

    render(){
        console.log(this.props);
        return <div className="Header" style={
                Object.assign({
                background: "violet",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                }, this.props.style)}>
            <SettingButton
                    onClick={ this.settingButtonClick }
                    style={{
                    height: "80%",
                    flex: "0 0 100px",
                    }}></SettingButton>
            <ClipArea style={{
                    height: "80%",
                    flex: "0 1 500px",
            }}></ClipArea>
            <UploadButton
                    onClick={ this.uploadButtonClick }
                    loggedIn={ this.state.loggedIn }
                    style={{
                    height: "80%",
                    flex: "0 0 100px",
                    }}></UploadButton>

        </div>;
    }
}

export default Header;
