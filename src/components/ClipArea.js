
import React from 'react';


class ClipArea extends React.Component
{
    render(){
        return <div className="ClipArea" style={
                Object.assign({
                    background: "blue",
                }, this.props.style)}>
        </div>;
    }
}

export default ClipArea;
