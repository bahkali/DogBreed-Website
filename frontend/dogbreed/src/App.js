import React, { useState, useEffect } from "react";

import Navigation from "./components/navigation/navigation.component";
import ImageLinkForm from "./components/imageLinkForm/imageLinkForm.component";
import PredictResult from "./components/predictResult/predictResult.component";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [testVal, setTestVal] = useState(0);

  useEffect(() => {
    fetch("/test")
      .then((res) => res.json())
      .then((data) => {
        setTestVal(data.msg);
        console.log(data);
      });
  }, []);

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
              />
            </p>
            <ImageLinkForm />
          </div>
        </section>
      </main>
      <PredictResult />
    </div>
  );
}
export default App;
