import React from "react";

import Navigation from "./components/navigation/navigation.component";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { render } from "@testing-library/react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <main role="main">
          <section class="jumbotron text-center">
            <div class="container">
              <h1 class="jumbotron-heading">DOG BREED PREDICT</h1>
              <p class="lead text-muted">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don't simply skip over it entirely.
              </p>
              <p>
                <a href="#" class="btn btn-primary my-2">
                  Upload
                </a>
                <a href="#" class="btn btn-secondary my-2">
                  Predict
                </a>
              </p>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
export default App;
