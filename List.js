import React from "react";

const List = () => {
  const exercises = [
    {
      id: 1,
      name: "Item1",
    },
    {
      id: 2,
      name: "Item2",
    },
    {
      id: 3,
      name: "Item3",
    },
  ];
  return (
    <>
      {exercises.map((exercise) => {
        const { id, name } = exercise;
        return (
          <div key={id}>
            <h4>{name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default List;
