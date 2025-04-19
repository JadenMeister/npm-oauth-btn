import React from "react";
import clsx from "clsx";

export default function BaseButton({
                                       onClick,
                                       children,
                                       shape = 'rect',
                                       bgColor = 'transparent',
                                       textColor = 'text-white',
                                       fontSize = 'text-sm',
                                       type = 'button',
                                       disabled = false,
                                   }) {
    const baseSize = 'h-12';




    const shapeClass = {
        rect: 'w-52 rounded-md',
        square: 'w-12 rounded-md',
        circle: 'w-12 rounded-full',
    };

    const classes = clsx(
        'flex items-center justify-center gap-2 px-3 cursor-pointer select-none',
        shapeClass[shape],
        baseSize,
        bgColor,
        textColor,
        fontSize
    );


    return (
        <button type={type} className={classes} onClick={onClick} disabled={disabled}>
    <span className="flex items-center justify-center gap-2">
      {children}
    </span>
        </button>
    );
}