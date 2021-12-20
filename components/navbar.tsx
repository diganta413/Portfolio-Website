import React from "react";

function navbar() {
    return (
        <nav className="flex shadow-lg mb-10 text-navBar opacity-75">
            <div className="flex ml-10 mt-6 text-5xl text-outline">D </div>
            <div className="flex space-x-10 ml-auto mr-10 mt-10">
                <a className="ml-20 text-2xl cursor-pointer hover:underline ">
                    About
                </a>
                <a className="text-2xl cursor-pointer hover:underline">Work</a>
                <a className="text-2xl cursor-pointer hover:underline">
                    Experience
                </a>
                <a className="text-2xl cursor-pointer hover:underline">
                    Contact
                </a>
            </div>
            <button
                className="border-outline border-2 p-2 text-lg 
			rounded-md mt-8 text-outline mr-10 mb-3 
			hover:text-white-700"
            >
                Resume
            </button>
        </nav>
    );
}

export default navbar;
