import React, { Component } from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";

export default class Script extends Component {
  render() {
    return (
      <>
        <Header title="Informações" />
        <Main nome="Rômulo" idade="42" codar="Linguagem JS" />
      </>
    );
  }
}
