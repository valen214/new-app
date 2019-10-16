
import React from 'react';


class SettingButton extends React.Component
{
    render(){
        console.log("setting button props:", this.props);
        return <div className="SettingButton"
            style={ Object.assign({
                background: "#afa",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }, this.props.style) }
            onMouseEnter={this.onMouseEnter}
            onClick={this.props.onClick}>
            <span>settings</span>
        </div>;
    }
}

export default SettingButton;
