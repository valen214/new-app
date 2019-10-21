
import React from 'react';

import UploadButton from "./UploadButton";
import LoginButton from "./LoginButton";
import ClipArea from "./ClipArea";
import SettingButton from "./SettingButton";


class Header extends React.Component
{
    render(){
        console.log("header:", this);
        return <div className="Header" style={
                Object.assign({
                background: "violet",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                }, this.props.style)}>
            <SettingButton
                    onClick={ this.props.settingButtonClick }
                    style={{
                    height: "80%",
                    flex: "0 0 100px",
                    }}></SettingButton>
            <ClipArea style={{
                    height: "80%",
                    flex: "0 1 500px",
            }}></ClipArea>
            { this.props.loggedIn ?
                <UploadButton
                        onClick={ this.props.uploadButtonClick }
                        style={{
                        height: "80%",
                        flex: "0 0 100px",
                        }}></UploadButton> : undefined
            }
            <LoginButton
                    loginButtonClick={ this.props.loginButtonClick }
                    logoutButtonClick={ this.props.logoutButtonClick }
                    loggedIn={ this.props.loggedIn }
                    style={{
                    height: "80%",
                    flex: "0 0 100px",
                    }}></LoginButton>
        </div>;
    }
}

export default Header;
