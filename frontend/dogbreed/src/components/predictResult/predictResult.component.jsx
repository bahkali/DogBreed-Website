import React from "react";

const PredictResult = ({ imgeUrl, resultPredict }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col image-diplay">
          <figure className="figure">
            <img
              width="500px"
              height="auto"
              src={imgeUrl}
              className="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption className="figure-caption">
              A caption for the above image.
            </figcaption>
          </figure>
        </div>
        <div className="col data-result">
          <div className="row">
            <div class="col"> Dog</div>
            <div class="col"> Web Scrapper info</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictResult;
