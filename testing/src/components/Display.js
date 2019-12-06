import React from 'react';

const Display = (props) => {


    return (
        <div>
            <p>Balls: {props.balls}</p>
            <p>Strikes: {props.strikes}</p>
            <br /><br />
            <p>Outs: {props.outs}</p>
        </div>
    )
}

export default Display;