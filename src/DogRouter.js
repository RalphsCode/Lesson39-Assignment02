import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DogList from './DogList';
import Dog from './Dog';

/** Function to route the client to the various end points:
 * /dogs --> list all dog names.
 * /dogs/:name  --> details on a particular dog.
 * /anything-else  --> a * wildcard is used to return to 
 * the full list of dog names, if the route is not found.
 */
const DogRouter = ({dogs}) => {
    return (
        <div>
           <BrowserRouter>
                <Routes>
                    <Route path="/dogs" element={<DogList dogs={dogs}/>} />
                    <Route path="/dogs/:name" element={<Dog dogs={dogs} />}  />
                    {/* catch all route */}
                    <Route path="*" element={<DogList dogs={dogs}/>}  />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default DogRouter;