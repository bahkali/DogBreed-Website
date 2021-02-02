import React from "react";

import me from "./IMG_20191225_213953_990.jpg";
const PredictResult = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col image-diplay">
          <figure className="figure">
            <img
              src={me}
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
            <div class="col">.col-6 .col-sm-4</div>
            <div class="col">.col-6 .col-sm-4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictResult;
