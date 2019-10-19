
import React from 'react';
import Button from 'react-bootstrap/Button';


class SettingButton extends React.Component
{
    render(){
        return <Button className="SettingButton"
            style={ Object.assign({
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }, this.props.style) }
            onMouseEnter={this.onMouseEnter}
            onClick={this.props.onClick}>
            <span>settings</span>
        </Button>;
    }
}

export default SettingButton;
