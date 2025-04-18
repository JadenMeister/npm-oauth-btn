import React from "react";

export default function BaseBtn({onclick, children, shape = "rect", radius = "6px", bgColor = "#000",}) {

    const size = shape === "circle" || shape === "square" ? 48 : 200;
    const height = 48;

    const styles = {
        width : size,
        height : height,
        borderRadius: radius,
        backgroundColor: bgColor,
        color: 'white',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        gap: '8px',
        padding: '0 12px',
    }

    return (
        <button style={styles} onClick={onClick}>
            {children}
        </button>
    );

}