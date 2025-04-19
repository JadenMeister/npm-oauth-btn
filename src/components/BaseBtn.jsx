import React from "react";
import clsx from "clsx";

export default function BaseBtn({
                                    onClick,
                                    children,
                                    shape = 'rect',
                                    bgColor = 'transparent',
                                    hoverColor = '',
                                    textColor = 'text-white',
                                    fontSize = 'text-sm',
                                    type = 'button',
                                    radius = '',
                                    disabled = false,
                                    customClass = '',
                                }) {
    const baseSize = 'h-12';

    const shapeClass = {
        rect: 'w-52 rounded-md',
        square: 'w-12 rounded-md',
        circle: 'w-12 rounded-full',
    };

    const classes = clsx(
        'flex items-center justify-center gap-2 px-3 cursor-pointer select-none transition-all duration-200',
        shapeClass[shape],
        baseSize,
        bgColor,
        hoverColor,
        textColor,
        fontSize,
        radius,
        customClass
    );

    return (
        <button type={type} className={classes} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}