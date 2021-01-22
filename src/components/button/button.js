import React from 'react';

export default function Button (props) {
    const onClick = () => {
        props.onClick();
    }
    return(
        <button className="btn btn-primary" onClick={onClick}>
            {props.label}
        </button>
    )
}