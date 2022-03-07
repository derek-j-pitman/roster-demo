import React, { useState } from "react";
import "./styles.css";

function Person(props) {
  let className = "row";
  return (
    <div
      className={className}
      onClick={() =>
        console.log(
          "Your name is " + props.firstName + " " + props.lastName + "."
        )
      }
    >
      <span>{props.firstName}</span>
      <span>{props.lastName}</span>
      <span style={{ color: props.favoriteColor }}>{props.favoriteColor}</span>
    </div>
  );
}

function AddPerson(props) {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  return (
    <div>
      <h2>Add a person:</h2>
      <div>
        <span>First Name:</span>
        <input onChange={(event) => setFirstName(event.target.value)} />
      </div>
      <div>
        <span>Last Name:</span>
        <input onChange={(event) => setLastName(event.target.value)} />
      </div>
      <button onClick={() => props.updateRoster(firstName, lastName)}>
        Add!
      </button>
    </div>
  );
}

export default function App() {
  let [rosterObjects, setRoster] = useState([
    { firstName: "Derek", lastName: "Pitman", favoriteColor: "green" },
    { firstName: "Abdulwahab", lastName: "Murshed", favoriteColor: "blue" },
    { firstName: "Anton", lastName: "Schuster", favoriteColor: "orange" },
    { firstName: "Imani", lastName: "Taylor", favoriteColor: "pink" }
  ]);
  let rosterElements = rosterObjects.map((rosterEntry) => (
    <Person
      key={rosterEntry.firstName + rosterEntry.lastName}
      firstName={rosterEntry.firstName}
      lastName={rosterEntry.lastName}
      favoriteColor={rosterEntry.favoriteColor}
    />
  ));
  return (
    <div className="App">
      {rosterElements}
      <AddPerson
        updateRoster={(fName, lName) =>
          setRoster([
            ...rosterObjects,
            { firstName: fName, lastName: lName, favoriteColor: "black" }
          ])
        }
      />
    </div>
  );
}
