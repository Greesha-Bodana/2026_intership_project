import React from "react";


export default function ContentComponent() {

  var year = 2026;
  var title = "React Js";
  var isAvailable = true;

  var student = {
    name: "Greesha",
    age: 23,
    city: "Ahmedabad",
  };

  return (
    <div>

    
      <div>
        style={{
          backgroundColor: "red",
          border: "1px solid black",
          height: "100%",
          width: "100%",
          padding: "70px",
        }}
      
        <h1>HELLO</h1>
        <h1>YEAR : {year}</h1>
        <h2>Title : {title}</h2>
        <h3>Available? {isAvailable ? "TRUE" : "FALSE"}</h3>

        <h2>Name : {student.name}</h2>
        <h3>Age : {student.age}</h3>
        <h3>City : {student.city}</h3>
      </div>

    </div>
  );
}
