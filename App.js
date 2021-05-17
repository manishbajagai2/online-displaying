import React from "react";
import Container from "react-bootstrap/Container";
import "./App.css";
import Tabling from "./components/Tabling";
import Takeinputs from "./components/Takinginputs";
import Fetchingdata from "./components/Fetchingdata";

const App = () => (
  <Container>
    <Takeinputs />
    <Fetchingdata />
    <Tabling />
  </Container>
);

export default App;
