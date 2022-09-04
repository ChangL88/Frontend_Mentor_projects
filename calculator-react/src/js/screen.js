import React from 'react';

const Screen = props => {
    return ( 
        <h2>{props.result}</h2>
     );
}
Screen.defaultProps = {result: '0'};
 
export default Screen;