import React, { useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(name + "__" + email);
    setName("");
    setEmail("");
  };
  return (
    <>
      <form>
        <div className="form-control">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
        </div>
        <div className="form-control">
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </label>
        </div>
        <button className="btn" type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </>
  );
};

export default SimpleForm;
