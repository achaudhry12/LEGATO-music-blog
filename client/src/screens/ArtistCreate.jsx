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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <h1>ADD ARTIST</h1>
      <label>
        STAGE NAME:
        <input
          type="text"
          name="stage name"
          value={stage_name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        FULL NAME:
        <input
          type="text"
          name="full name"
          value={full_name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        IMAGE URL:
        <input
          type="text"
          name="image url"
          value={image_url}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}
