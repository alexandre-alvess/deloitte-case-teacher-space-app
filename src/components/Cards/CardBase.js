import React from "react";

import './CardBase.css';

export default function CardBase( { children, icon, name }) {
    return (
        <div className="card">
            <div className="card-header">
                { icon }
                <span className="card-name">{ name }</span>
            </div>
            { children }
        </div>
    );
}