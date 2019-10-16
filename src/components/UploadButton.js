
import React from 'react';


class UploadButton extends React.Component
{
    render(){
        return <div className="UploadButton"
            style={ Object.assign({
                background: "#afa",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }, this.props.style) }>
            { this.props.loggedIn ? "upload" : "log in" }
        </div>;
    }
}

export default UploadButton;
