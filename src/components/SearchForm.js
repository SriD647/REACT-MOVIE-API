import { useState } from "react";

export default function Form({ getMovies }) {
  const [formData, setFormData] = useState({
    searchTerm: ""
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(formData.searchTerm);
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
      <label style={{ marginRight: "10px" }}>
        Search for film/series list:{" "}
      </label>
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
