import React, { useState, useEffect } from "react";

import Navigation from "./components/navigation/navigation.component";
// import ImageLinkForm from "./components/imageLinkForm/imageLinkForm.component";
import PredictResult from "./components/predictResult/predictResult.component";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [testVal, setTestVal] = useState();
  const [urlInput, setUrlInput] = useState();
  const [imageUrl, setImageUrl] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );

  useEffect(() => {
    fetch("/predict")
      .then((res) => res.json())
      .then((data) => {
        setTestVal(data.msg);
        console.log(data);
      });
  }, []);

  const upLoadFile = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("file", this.uploadInput.files[0]);

    fetch("/api/uploadPredict", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: data,
    }).then((response) => {
      response.json().then((body) => {});
    });
  };

  const onInputChange = (event) => {
    let url = event.target.value;
    setUrlInput(url);
  };

  const urlImageHandler = (e) => {
    setImageUrl(urlInput);
  };

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (reader.readyState === 2) {
        setImageUrl(e.target.result);
        console.log(e.target.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="App">
      <Navigation />
      <main role="main">
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">DOG BREED PREDICT</h1>
            <p className="lead text-muted"> {testVal}</p>
            <p>
              <input
                id="image-select"
                className="btn btn-primary my-2"
                type="file"
                accept="image/*"
                onChange={imageHandler}
              />
            </p>
            <div>
              <p>{"You can also add a link to you pictures, Give it a Try "}</p>
              <div className="center">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Picture link"
                    aria-label="Picture link"
                    aria-describedby="basic-addon2"
                    onChange={onInputChange}
                  />
                  <div className="input-group-append">
                    <button
                      class="btn btn-outline-secondary"
                      onClick={urlImageHandler}
                      type="button"
                    >
                      Predict
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PredictResult imgeUrl={imageUrl} />
    </div>
  );
}
export default App;
