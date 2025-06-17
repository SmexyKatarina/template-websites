'use client'

import { useState } from "react";

export default function Header() {

    const [cartMenu, setMenu] = useState(false);

    const headerClass = "flex flex-row justify-between items-center border-gray-500 border-b bg-black";
    const cartClass = "select-none border-gray-500 border-l h-full p-[5px] hover:bg-zinc-800 hover:cursor-pointer"

    // For when the cart is clicked
    if (cartMenu) {
        return (
            <div id="header" className={headerClass}>
                <h1 className="pl-[10px]">Pizzalicious</h1>
                <p className={cartClass} onClick={() => {
                    setMenu(false);
                }}>Cart open</p>
            </div>
        );
    }

    // For when the cart is inactive
    return (
        <div id="header" className={headerClass}>
            <h1 className="pl-[10px]">Pizzalicious</h1>
            <p className={cartClass} onClick={() => {
                setMenu(true);
            }}>Cart Closed</p>
        </div>
    );
}