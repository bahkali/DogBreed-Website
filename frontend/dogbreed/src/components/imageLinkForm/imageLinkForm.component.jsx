import React from "react";
// import "./imageLinkForm.styles.css";
const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p>{"You can also add a link to you pictures, Give it a Try "}</p>
      <div className="center">
        <div className="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Picture link"
            aria-label="Picture link"
            onChange={onInputChange}
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button
              onClick={onSubmit}
              class="btn btn-outline-secondary"
              type="button"
            >
              Predict
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
