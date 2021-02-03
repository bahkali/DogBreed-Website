import React, { useState, useEffect } from "react";

import Navigation from "./components/navigation/navigation.component";
import ImageLinkForm from "./components/imageLinkForm/imageLinkForm.component";
import PredictResult from "./components/predictResult/predictResult.component";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [testVal, setTestVal] = useState();
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
            <ImageLinkForm />
          </div>
        </section>
      </main>
      <PredictResult imgeUrl={imageUrl} />
    </div>
  );
}
export default App;
