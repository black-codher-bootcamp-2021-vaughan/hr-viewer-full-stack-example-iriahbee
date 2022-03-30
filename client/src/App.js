import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import EditPerson from './components/EditPerson';
import PersonViewer from './components/PeopleViewer';
import PersonDetails from './components/PersonDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<PersonViewer/>} />
          <Route path='/person-details/:id' element={<PersonDetails/>} />
         {/* <Route path='/create-person' element={<CreatePerson/>} />*/}
          <Route path='/edit-person/:id' element={<EditPerson/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
