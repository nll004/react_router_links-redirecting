import React from "react";
import {v4 as uuid } from 'uuid';

function Dog({src, name, age, facts}){

    return (
        <section className="Dog-card" >
            <img src={src} alt={`${name}'s canine portrait`} />
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Facts:</p>
            <ul>
                {facts.map(fact => <li key={uuid()}> {fact} </li>)}
            </ul>
        </section>
    )
};

export default Dog;
