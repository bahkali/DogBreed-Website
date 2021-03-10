import React, { useState, useEffect } from "react";
import Navigation from "./components/navigation/navigation.component";
// import ImageLinkForm from "./components/imageLinkForm/imageLinkForm.component";
import PredictResult from "./components/predictResult/predictResult.component";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

const dummyUrl =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

function App() {
  const [testVal, setTestVal] = useState();
  const [urlInput, setUrlInput] = useState();
  const [imageUrl, setImageUrl] = useState(dummyUrl);
  const [imageFile, setImageFile] = useState();

  const [resultPredict, setResultPredict] = useState();

  useEffect(() => {
    axios.get("/api/predict").then((res) => {
      console.log(res.data);
      setTestVal(res.data.msg);
    });
  }, []);

  const onInputChange = (event) => {
    let url = event.target.value;
    setUrlInput(url);
  };

  const urlImageHandler = (e) => {
    setImageUrl(urlInput);
  };

  const imageHandler = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    setImageFile(e.target.files[0]);
    let message = {};
    reader.onload = (e) => {
      if (reader.readyState === 2) {
        setImageUrl(e.target.result);
        message = {
          image: e.target.result,
        };
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    let file = e.target.files[0];
    console.log(file);
    const fd = new FormData();
    fd.append("image", file);
    fd.append("filename", file.name);
    axios
      .post("/api/uploadPredict", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className="App">
      <Navigation />
      <main role="main">
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">DOG BREED PREDICT</h1>
            <p className="lead text-muted"> {testVal}</p>
            <div>
              <input
                id="image-select"
                className="btn btn-primary my-2"
                type="file"
                name="file"
                accept="image/*"
                onChange={imageHandler}
              />
            </div>
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
                      className="btn btn-outline-secondary"
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
      <PredictResult imgeUrl={imageUrl} resultPredict={resultPredict} />
    </div>
  );
}
export default App;
