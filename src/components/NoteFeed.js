import React from "react";
import Note from "./Note";

function NoteFeed(props) {
  return (
    <div className="container">
      <div className="row">
        {props.notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            date={note.date}
            onDelete={props.onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default NoteFeed;
