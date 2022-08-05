import React, {useState} from "react";

export default function Unit({code, title, offerings}) {
    const [unitTitle, setTitle] = useState(title);

    return (
        <div>
        <p>{code} {unitTitle}, Offered in {offerings.map(offering => (
            <span>{offering} </span>
        ))}
        <button onClick = {() => setTitle(unitTitle.toUpperCase())}>Up</button>
        <button onClick = {() => setTitle(unitTitle.toLowerCase())}>Down</button>        
        </p>
        
        </div>
    );
}

