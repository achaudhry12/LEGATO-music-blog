import { useState } from "react";

export default function ArtistCreate(props) {
  const [formData, setFormData] = useState({
    stage_name: "",
    full_name: "",
    image_url: "",
  });
  const { stage_name, full_name, image_url } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
      >
      <h2>ADD ARTIST</h2>
      <div className="text-field">
        <label>
          <p>Stage Name</p>
          <input
            type='text'
            name='stage_name'
            value={stage_name}
            onChange={handleChange}
            />
        </label>
      </div>
      <br />
      <div className="text-field">
        <label>
        <p>Full Name</p>
          <input
            type='text'
            name='full_name'
            value={full_name}
            onChange={handleChange}
            />
        </label>
      </div>
      <br />
      <div className="text-field">
        <label>
        <p>Image URL</p>
          <input
            type='text'
            name='image_url'
            value={image_url}
            onChange={handleChange}
            />
        </label>
      </div>
      <br />
      <button className="submit-button">SUBMIT</button>
      </form>
    </div>
  );
}
