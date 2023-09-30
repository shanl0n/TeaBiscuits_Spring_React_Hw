import { useState, useEffect } from "react";

export const Types = {
  TEAS: "teas",
  BISCUITS: "biscuits",
};

const TeaBiscuitForm = ({ onTeaSubmit, onBiscuitSubmit, initialValues }) => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");

  // used as an enum or look-up object

  useEffect(() => {
    if (initialValues) {
      setName(initialValues.name || "");
      setBrand(initialValues.brand || "");
      setType(initialValues.type || "");
    }
  }, [initialValues]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const resetForm = () => {
    setName("");
    setBrand("");
    if (!initialValues.type) setType("");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // ES6's object property shorthand, when key name and variable name are the same:
    const payload = {
      id: initialValues?.id,
      name, // shorthand for `name: name`
      brand, // shorthand for `brand: brand`
    };
    if (type === Types.TEAS) onTeaSubmit(payload);
    if (type === Types.BISCUITS) onBiscuitSubmit(payload);
    resetForm();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="id" value={initialValues?.id} hidden />
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={name} onChange={handleNameChange} />

      <label htmlFor="brand">Brand:</label>
      <input
        type="text"
        name="brand"
        value={brand}
        onChange={handleBrandChange}
      />

      <label htmlFor="type">Type</label>
      <select
        name="type"
        value={type}
        onChange={handleTypeChange}
        disabled={initialValues?.type}
      >
        <option value="" disabled>
          Choose...
        </option>
        <option value={Types.TEAS}>Tea</option>
        <option value={Types.BISCUITS}>Biscuit</option>
      </select>

      <input type="submit" value="Save" />
    </form>
  );
};

export default TeaBiscuitForm;
