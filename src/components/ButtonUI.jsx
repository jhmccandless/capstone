import React from "react";

function ButtonUI({ handleDesiredClick }) {
  // console.log(handleDesiredClick);
  return (
    <>
      <div
        onClick={() => {
          handleDesiredClick();
        }}
      >
        this is the a button
      </div>
    </>
  );
}

export default ButtonUI;
