import React from 'react';

const DogList = ({dogs}) => {
    return (
        <div>
        <h2>Here is the list of all dogs.</h2>
        <div>
            {dogs.map((dog) => (
                <div key={dog.name}>
                    <p> 
                        Name: <b>{dog.name}</b> <br/>
                        Age: <b>{dog.age}</b> <br/>
                    </p>
                    <img src={dog.src} alt={dog.name} width="150" />
                </div>
            )
        )}
        </div>
        </div>
    )
};

export default DogList;

//  <img src={dog.src} alt={dog.name} width = "150" />