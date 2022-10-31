import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {v4 as uuid} from "uuid";

import Dog from "./Dog";

function DogList({dogs}){
    const [dogInfo, setDogInfo] = useState(dogs);
    const { name } = useParams();

    useEffect(()=>{
        for(let i = 0; i < dogs.length; i++){
            if(name === dogs[i].name.toLowerCase()) {
                setDogInfo([dogs[i]])
            }
        }
    }, [ name ])

    return (
        <>
        <h1>Dog List</h1>
        <section className="Dog-container">
            {dogInfo.map( dg => (
                <Dog key={uuid()}
                     src={dg.src}
                     name={dg.name}
                     age={dg.age}
                     facts={dg.facts}
                />
            ))}
        </section>
        </>
    )
}

export default DogList;
