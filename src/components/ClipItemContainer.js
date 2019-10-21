
import React from 'react';

class ClipItemContainer extends React.Component
{
    render(){
        return <div style={ Object.assign({
            background: "#aaf"
        }, this.props.style) }>
            { this.props.children }
        </div>;
    }
}

export default ClipItemContainer;
