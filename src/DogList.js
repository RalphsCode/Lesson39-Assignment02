import React from 'react';
import { Link } from 'react-router-dom';

const DogList = ({dogs}) => {
    return (
        <div>
        <h2>Here is the list of all dogs.</h2>
        <div>
            {dogs.map((dog) => (
                <div key={dog.name}>
                    <p> 
                       <b><Link to={`/dogs/${dog.name}`}>{dog.name} </Link></b> 
                    </p>
                </div>
            )
        )}
        </div>
        </div>
    )
};

export default DogList;