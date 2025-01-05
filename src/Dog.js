import React from 'react';
import { Link, useParams } from 'react-router-dom';

/** Function to display the facts about a particular dog.
 * The complete dogs object is passed in as a prop.
 * The name of the dog to display is passed in as an URL paramater.
 */
const Dog = ({dogs}) => {
    const {name} = useParams();
    const {src, age, facts} = dogs.find(dog => dog.name === name);
    return (
        <div>
            <h2>{name}</h2>
            <img src={src} alt={name} width="150" />
            <p>Age: {age}</p>
            <h3>Facts:</h3>
            <ul>
                {facts.map((fact, idx) => (
                    <li key={idx}>{fact}</li>
                ))}
            </ul>
            <Link to="/">Back to list of all dogs</Link>
        </div>
    );
} // END Dog()

export default Dog;