import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Person from './Person';

const PeopleViewer = () => {
  const [people, updatePeople] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/people')
    .then(res => {
        if (res.status !== 200) {
          console.log('PeopleViewer problem. Status Code: ' + res.status);
          return;
        }
        res.json().then(function(data) {
          updatePeople(data);
        });
      }
    )
    .catch(function(err) {
      console.log('PeopleViewer Fetch Error :-S', err);
    });
  }, []);

  let peopleList;

  if(!people) {
    peopleList = "there are no people records!";
  } 
  else {
    peopleList = people.map((person, k) =>
      <Person person={person} key={k} />
    );
  }

  return (
    <main className="PeopleViewer">
    <section className="container">
      <div className="row">
        <div className="col-md-12">
          <br />
          <h2 className="display-4 text-center">HR Viewer</h2>
        </div>

        <div className="col-md-12">
          <Link to="/create-person" className="btn btn-outline-primary btn-large float-right">
            + Add New Person
          </Link>
        </div>

      </div>

      <section className="list">
        {peopleList}
      </section>
    </section>
  </main>
  );

}

export default PeopleViewer;