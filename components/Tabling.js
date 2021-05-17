import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import "../App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Tabling extends React.Component {
  constructor(props) {
    super(props);
    this.handleFunc = this.handleFunc.bind(this);
    this.state = {
      loading: true,
      counted: "",
      data: "",
      value: "",
      wordies: []
    };
  }

  handleFunc(s) {
    const arrToInstanceCountObj = (arr) =>
      arr.reduce((obj, e) => {
        obj[e] = (obj[e] || 0) + 1;
        return obj;
      }, {});
    const tab = arrToInstanceCountObj(s);

    let x = 2;
    this.setState({ value: x });

    let keys = Object.keys(tab).filter((k) => tab[k] === this.state.value);
    console.log(keys);
    this.setState({ wordies: keys });
    console.log(this.state.wordies);

    for (var i = 1; i <= keys.length; i++) {
      console.log(i, keys[i - 1], this.state.value);
    }
  }

  async componentDidMount() {
    const url =
      "https://raw.githubusercontent.com/invictustech/test/main/README.md";
    const response = await fetch(url);
    const got_data = await response.text();
    this.setState({ data: got_data, loading: false });
    let words = got_data.match(/\b[-?(\w+)?]+\b/gi);
    let wordCount = 0;
    if (words) {
      wordCount = words.length;
    }
    this.setState({ counted: wordCount });

    this.handleFunc(words);
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    var users = this.state.wordies;
    var frequency = this.state.value;

    var table =
      "<table><thead><tr><th>Sl No. </th><th>Words </th><th>Frequency</th></tr></thead><tbody>";

    for (var i = 0; i < users.length; i++) {
      table +=
        "<tr><td>" + (i + 1) + "</td><td>" + users[i] + "</td><td>" + frequency;
    }

    table += "</tbody></table>";
    function createMarkup() {
      return {
        __html: table
      };
    }
    return (
      <div className="container">
        <Container>
          <Row>
            <Col></Col>
            <Col md={8}>
              <Table
                responsive
                className="mt-3 justify-content-md-center"
                striped
                bordered
                hover
                dangerouslySetInnerHTML={createMarkup()}
              />{" "}
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
