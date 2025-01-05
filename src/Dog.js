import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Dog = ({dogs}) => {
    const {name} = useParams();
    const dog = dogs.find(dog => dog.name === name);
    return (
        <div>
            <h2>{dog.name}</h2>
            <img src={dog.src} alt={dog.name} width="150" />
            <p>Age: {dog.age}</p>
            <h3>Facts:</h3>
            <ul>
                {dog.facts.map((fact, idx) => (
                    <li key={idx}>{fact}</li>
                ))}
            </ul>
            <Link to="/">Back to Home</Link>
        </div>
    );
} // END Dog()

export default Dog;