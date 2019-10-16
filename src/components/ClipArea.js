
import React from 'react';


class ClipArea extends React.Component
{
    render(){
        console.log(this.props);
        return <div className="ClipArea" style={
                Object.assign({
                    background: "blue",
                }, this.props.style)}>
        </div>;
    }
}

export default ClipArea;
