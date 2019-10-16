
import React from 'react';

class ClipItemContainer extends React.Component
{
    render(){
        return <div style={ Object.assign({
            background: "#aaf"
        }, this.props.style) }>

        </div>;
    }
}

export default ClipItemContainer;
