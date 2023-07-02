import React, { useState } from "react";

function AddNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    date: "",
  });

  function getDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString("default", { month: "short" });
    const day = currentDate.getDate();
    const formattedDate = year + "-" + month + "-" + ("0" + day).slice(-2);

    return formattedDate;
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick(e) {
    const datedNote = { ...note, date: getDate() };
    props.onAdd(datedNote);
    setNote({
      title: "",
      content: "",
      date: "",
    });
    e.preventDefault();
  }

  return (
    <div className="container mb-5 px-4 py-3 col-lg-6 input-area rounded">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Note Title
          </label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={note.title}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
        </div>
        <div className="mb-5">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Note Content
          </label>
          <textarea
            type="text"
            name="content"
            rows="5"
            onChange={handleChange}
            value={note.content}
            className="form-control"
            id="exampleInputPassword1"
          ></textarea>
        </div>
        <div className="d-flex justify-content-end">
          <button onClick={handleClick}>Add Note</button>
        </div>
      </form>
    </div>
  );
}

export default AddNote;
