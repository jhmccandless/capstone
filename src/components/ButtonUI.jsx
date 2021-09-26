import React from "react";

function ButtonUI({ handleDesiredClick, name }) {
  return (
    <>
      <button
        onClick={() => {
          handleDesiredClick();
        }}
      >
        <p>{name}</p>
      </button>
    </>
  );
}

export default ButtonUI;
