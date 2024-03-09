import React from "react";

interface ComponentProps {
    height?: number;
}

interface addArg {
    a: number;
    b: number;
}

const add = (args : addArg) : string => {
    const {a, b} = args;
    return `${a} ${b}`;

}

export const CustomComponent = (props : ComponentProps) : React.JSX => {
    const {height} = props;
    const val = add(
        {
            a: 0,
            b: 219
        }
    );
    return (
        <>
        {"Height : " + height?.toFixed(2)}
        </>
    )
}