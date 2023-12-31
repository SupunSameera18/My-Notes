import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <div className="card-body p-0">
          <div className="header d-flex">
            <div className="col-lg-10">
              <h5 className="card-title">{props.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{props.date}</h6>
            </div>
            <div className="col-lg-2 d-flex align-items-center justify-content-end">
              <iconify-icon
                className="delete-icon"
                icon="mdi:delete"
                width="30"
                onClick={handleClick}
              ></iconify-icon>
            </div>
          </div>
          <div className="content">
            <p className="card-text">{props.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
