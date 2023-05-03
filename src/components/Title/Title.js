import React from "react";

import './Title.css';

export default function Title({  name }) {
    return (
        <div className="title">
            <span>{ name }</span>
        </div>
    )
}