import React from "react";

const SampleNextArrow = (props) => {
  const { onClick, type } = props;
  return (
    <>
      {type && type === "testinomial" ? (
        <i
          className="fa fa-caret-right slide-arrow next-arrow"
          onClick={onClick}
        ></i>
      ) : (
        <i
          className="fa fa-chevron-right next-arrow slick-arrow"
          onClick={onClick}
        ></i>
      )}
    </>
  );
};

export default SampleNextArrow;
