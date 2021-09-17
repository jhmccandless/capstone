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
        {name}
      </button>
    </>
  );
}

export default ButtonUI;
