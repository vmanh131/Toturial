import React from "react";

const Props = () => {
  function Book(prop) {
    return (
      <ul>
        <li>Title: {prop.title}</li>
      </ul>
    );
  }
  function Books() {
    return (
      <>
        <h3>
          Book list
          <Book title="Full React Course 2020 " />
          <Book title="Full React Course 2022" />
        </h3>
      </>
    );
  }
  return <Books />;
};

export default Props;
