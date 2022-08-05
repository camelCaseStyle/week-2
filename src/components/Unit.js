import React, {useState} from "react";

export default function Unit({code, title}) {
    const [unitTitle, setTitle] = useState(title);

    return (
        <div>
        <p>{code} {unitTitle}
        <button onClick = {() => setTitle(unitTitle.toUpperCase())}>Up</button>
        <button onClick = {() => setTitle(unitTitle.toLowerCase())}>Down</button>        
        </p>
        
        </div>
    );
}

