import React from "react";
import './ContainerScroll.css';

export default function UIContainerScroll({ children }) {
    return (
        <div className="ui-container-scroll">
            { children }
        </div>
    )
};