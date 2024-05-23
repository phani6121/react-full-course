import React, { useState, useEffect, useRef } from "react";

const Index = () => {
    const [firstName, setFirstName] = useState("");
    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    return (
        <>
            <input
                type="text"
                name="firstName"
                id="firstName"
                onChange={(e) => { setFirstName(e.target.value); }}
            />
            <h5>Typing: {firstName}</h5>
            <h5>Component render {renderCount.current} times</h5>
        </>
    );
};

export default Index;
