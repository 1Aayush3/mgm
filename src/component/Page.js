import React, { Component } from "react";
import slide from "..//resources/images/qs.jpg";

class Page extends Component {
  render() {
    return (
      <section className="intro">
        <div className="inner">
          <div className="content">
            <h1>Your limitation—it's only your imagination.</h1>
          </div>
          <div className="button_wrapper">
            <a class="btn-floating btn-large waves-effect waves-light red">
              <i class="material-icons">add</i>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Page;
