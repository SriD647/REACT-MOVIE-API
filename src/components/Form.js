import { useState } from "react";

export default function Form({ getMovie }) {
  const [formData, setFormData] = useState({
    searchTerm: ""
  });

  // updates virtual DOM
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // updates virtual DOM
  const handleSubmit = (e) => {
    e.preventDefault();
    getMovie(formData.searchTerm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <label style={{ marginRight: "10px" }}>Search for film/series: </label>
      <input
        name="searchTerm"
        type="text"
        onChange={handleChange}
        value={formData.searchTerm}
        style={{ marginRight: "10px" }}
      />
      <input className="button" type="submit" />
    </form>
  );
}
