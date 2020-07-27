import React from "react";
import NavBar from "./maincomponnent/header.jsx"; // fix this
import Body from "./maincomponnent/body.jsx";
import Footer from "./maincomponnent/footer.jsx";

export default class Project extends React.Component {
  render() {
    return (
      <div>
        <NavbBar />
        <Body />
        <Footer />
      </div>
    );
  }
}
