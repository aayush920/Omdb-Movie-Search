import React from "react";

export default function Movie (props) {
  if(props.src==="N/A"){
    return null;
  }
  return (
    <div className="movie-card ">
      <div key={props.imdbID} className="card-title">
        {props.Title}
      </div>
      <img
        src={props.src}
        alt="No poster available!"
        className="poster"
      ></img>
    </div>
  );
}
