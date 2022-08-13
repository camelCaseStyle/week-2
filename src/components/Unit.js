import React, {useState} from "react";

export default function Unit({id, code, title, offerings}) {
    const [unitTitle, setTitle] = useState(title);

    return (
        <p key={id}> {code} {unitTitle}, Offered in {offerings.map(offering => (
            <span key={offering}>{offering} </span>
        ))}
        <button onClick = {() => setTitle(unitTitle.toUpperCase())}>Up</button>
        <button onClick = {() => setTitle(unitTitle.toLowerCase())}>Down</button>        
        </p>
        
    );
}

