import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DogList from './DogList';
import Dog from './Dog';

const DogRouter = ({dogs}) => {
    return (
        <div>
           <BrowserRouter>
                <Routes>
                    <Route path="/dogs" element={<DogList dogs={dogs}/>} />
                    <Route path="/dogs/:name" element={<Dog dogs={dogs} />}  />
                    <Route path="/DogDetails" element={<DogList dogs={dogs}/>}  />
                    <Route path="*" element={<DogList dogs={dogs}/>}  />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default DogRouter;

/** 
<Route exact path="/dogs" >
<DogList /> // what props will this need?
</Route>
<Route path="/dogs/:name" >
<DogDetails /> // what props will this need?
</Route>
<Redirect to="/dogs" />
*/