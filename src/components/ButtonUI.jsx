import React from "react";

function ButtonUI({ handleDesiredClick, name }) {
  // console.log(handleDesiredClick);
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
