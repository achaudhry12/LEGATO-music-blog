import { useState } from "react";
import { useParams } from "react-router-dom"

export default function SongCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
    release_date: "",
    link: "",
  });
  const { name, release_date, link } = formData;
  const { handleCreate } = props;
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <br />
      <br />
    <div className="container">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(id, formData);
      }}
      >
      <h2>ADD SONG</h2>
      <div className="text-field">
        <label>
          <p>Name</p>
          <input
            type='text'
            name='name'
            value={name}
            onChange={handleChange}
            />
        </label>
      </div>
      <br />
      <div className="text-field">
        <label>
        <p>Release Date</p>
          <input
            type='text'
            name='release date'
            value={release_date}
            onChange={handleChange}
            />
        </label>
      </div>
      <br />
      <div className="text-field">
        <label>
        <p>Youtube Link</p>
          <input
            type='text'
            name='link'
            value={link}
            onChange={handleChange}
            />
        </label>
      </div>
      <br />
      <button className="submit-button">SUBMIT</button>
      </form>
      </div>
      <br />
      <br />
      <br />
      </>
  );
}