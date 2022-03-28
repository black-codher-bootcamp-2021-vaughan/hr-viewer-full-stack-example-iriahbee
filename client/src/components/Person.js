import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Person = (props) => {
    const person  = props.person;

    return(
        <div className="card-container">
            <img src={`${person.picture.medium}`} alt={person.first} />
            <div className="desc">
                <h2>
                    <Link to={`/person-details/${person._id}`}>
                        { `${person.name.title} ${person.name.first} ${person.name.last}` }
                    </Link>
                </h2>
                <h3>Registration Date: {person.registered.date}</h3>
                <p>Age: {person.dob.age}</p>
            </div>
        </div>
    )
};

export default Person;