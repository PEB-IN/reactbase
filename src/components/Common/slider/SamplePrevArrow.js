import React from "react";

const SamplePrevArrow = (props) => {
  const { onClick, type } = props;
  return (
    <>
      {type && type === "testinomial" ? (
        <i
          className="fa fa-caret-left slide-arrow prev-arrow"
          onClick={onClick}
        ></i>
      ) : (
        <i
          className="fa fa-chevron-left prev-arrow slick-arrow"
          onClick={onClick}
        ></i>
      )}
    </>
  );
};

export default SamplePrevArrow;
