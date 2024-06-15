import React, { useState } from "react";
import "./Dropdown.css";

function Dropdown({ className, id, buttonText, onOpen, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        const newOpenState = !isOpen;
        setIsOpen(newOpenState);
        if (newOpenState && onOpen) {
            onOpen();
        }
    };

    //TODO: converter para pattern de composição
    return (
        <div className="dropdown-component" data-testid="dropdown-component">
            <button onClick={handleToggle}>
                {buttonText}
            </button>
            {isOpen && (
                <ul className={`dropdown-component-items ${className} content-spaced highlight`} id={id}>
                    {children}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;
