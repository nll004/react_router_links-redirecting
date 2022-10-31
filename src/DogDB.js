import whiskeyImg from './dogImages/whiskey.jpg';
import dukeImg from './dogImages/duke.jpg';
import perryImg from './dogImages/perry.jpg';
import tubbyImg from './dogImages/tubby.jpg';

const DogDB = {
        dogs: [
          {
            name: "Whiskey",
            age: 5,
            src: whiskeyImg,
            facts: [
              "Whiskey loves eating popcorn.",
              "Whiskey is a terrible guard dog.",
              "Whiskey wants to cuddle with you!"
            ]
          },
          {
            name: "Duke",
            age: 3,
            src: dukeImg,
            facts: [
              "Duke believes that ball is life.",
              "Duke likes snow.",
              "Duke enjoys pawing other dogs."
            ]
          },
          {
            name: "Perry",
            age: 4,
            src: perryImg,
            facts: [
              "Perry loves all humans.",
              "Perry demolishes all snacks.",
              "Perry hates the rain."
            ]
          },
          {
            name: "Tubby",
            age: 4,
            src: tubbyImg,
            facts: [
              "Tubby is really stupid.",
              "Tubby does not like walks.",
              "Angelina used to hate Tubby, but claims not to anymore."
            ]
          }
        ]
    }

export default DogDB;
