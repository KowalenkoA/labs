import React from 'react';

export default function Avatar (props) {
    let style = {
        width: props.width,
        height: props.height,
        borderRadius: '50%',
        border: '1px solid black'
    }
    return (
        <div>
            <img src={props.src} className="card-img-top" style={style} alt=''></img>
        </div>
    )
}