import React from 'react';

export default function Preloader () {
    let style = {
        width: '9rem',
        height: '9rem',
        marginTop: '10px'
    }
    return(
        <div className="spinner-border text-info" style={style} role="status" id="preLoad"/>
    )
}

