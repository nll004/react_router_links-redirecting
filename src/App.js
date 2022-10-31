import {Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './NavBar';
import DogList from './DogList';
import DogDB from './DogDB';
import './App.css';


function App() {
  return (
    <div className="App">
        <NavBar dogs={DogDB.dogs}/>
        <Routes>
          <Route exact='true' path='dogs' element={<DogList /> } />
          <Route exact='true' path='dogs/:name' element={<DogList />} />
          <Route path='dogs' element={<Navigate replace to="/home" />} />
        </Routes>
    </div>
  );
}

DogList.defaultProps = DogDB;

export default App;
