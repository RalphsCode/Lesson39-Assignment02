import './App.css';
import DogRouter from './DogRouter';

/** Displays the header, and calls the router Component */
function App({ dogs = App.defaultProps.dogs }) {
  return (
    <div className="App">
      <h1>RalphsCode Dogs App</h1>
      <DogRouter dogs={dogs}/>
    </div>
  );
}  // END Props


// Default object containing an Array of dogs.
App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "/whiskey.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "/duke.jpg",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "/perry.jpg",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: "/tubby.jpg",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
