
import React from 'react';
import Button from 'react-bootstrap/Button';


class UploadButton extends React.Component
{
    render(){
        return <Button className="UploadButton"
            style={ Object.assign({
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }, this.props.style) }
            onClick={ this.props.onClick }>
            upload
        </Button>;
    }
}

export default UploadButton;
