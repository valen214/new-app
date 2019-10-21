
import React from 'react';
import Button from 'react-bootstrap/Button';

class LoginButton extends React.Component
{
    render(){
        return <Button className="LoginButton"
            style={ Object.assign({
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }, this.props.style) }
            onClick={ this.props.loggedIn ?
                  this.props.logoutButtonClick :
                  this.props.loginButtonClick }>
            { this.props.loggedIn ? "logout" : "log in" }
        </Button>;
    }
}

export default LoginButton;
