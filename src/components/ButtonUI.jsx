import React from "react";

function ButtonUI({ handleDesiredClick, name }) {
  // console.log(handleDesiredClick);
  return (
    <>
      <div
        onClick={() => {
          handleDesiredClick();
        }}
      >
        this is the a button {name}
      </div>
    </>
  );
}

export default ButtonUI;
