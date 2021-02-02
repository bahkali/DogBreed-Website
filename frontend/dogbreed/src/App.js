import React from "react";

import Navigation from "./components/navigation/navigation.component";
import ImageLinkForm from "./components/imageLinkForm/imageLinkForm.component";
import PredictResult from "./components/predictResult/predictResult.component";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <main role="main">
          <section className="jumbotron text-center">
            <div className="container">
              <h1 className="jumbotron-heading">DOG BREED PREDICT</h1>
              <p className="lead text-muted">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don't simply skip over it entirely.
              </p>
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
}
export default App;
