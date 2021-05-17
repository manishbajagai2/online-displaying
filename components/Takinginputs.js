import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Takeinputs extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      InpMax: ""
    };
    this.handleFunc = this.handleFunc.bind(this);
  }

  numsallowed(event) {
    this.setState({
      inputnum: event.target.value.replace(/\D/g, "")
    });
  }

  handleFunc(s) {
    const arrToInstanceCountObj = (arr) =>
      arr.reduce((obj, e) => {
        obj[e] = (obj[e] || 0) + 1;
        return obj;
      }, {});
    const tab = arrToInstanceCountObj(s);
    // console.log(tab);
    // console.log('Keys are : ',Object.keys(tab));
    // console.log('Values are : ',Object.values(tab));

    let rangeMax = Math.max(...Object.values(tab));
    console.log("The maximum input is ", rangeMax);
    this.setState({ InpMax: rangeMax });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const given_value = this.state.inputnum;
    // let given_value = event.target.value;
    // this.setState({value: given_value});
    let mini = 0;
    let maxi = this.state.InpMax;

    if (given_value > mini && given_value < maxi) {
      console.log(given_value);
      this.setState({ value: given_value });
    } else {
      alert("Number is equal to 0 or greater than 100");
    }
  };

  handleReset = (event) => {
    this.setState({ inputnum: "" });
    this.setState({ value: "" });
  };

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

    console.log(words);
    this.setState({ tokens: words });

    this.handleFunc(words);
  }

  render() {
    return (
      <div>
        <center>
          <form action="">
            <br />
            <h2> Please enter the frequency for processing </h2>
            Enter the value here :{" "}
            <input
              type="text"
              value={this.state.inputnum || ""}
              onChange={this.numsallowed.bind(this)}
              placeholder=" Input only numbers..."
            />
            <hr />
            <Button size="sm" variant="primary" onClick={this.handleSubmit}>
              Submit
            </Button>
            &ensp;
            <Button
              size="sm"
              variant="secondary"
              onClick={this.handleReset}
              type="reset"
            >
              Reset
            </Button>
          </form>
          <hr />
          <h3>The accepted value for processing is : {this.state.value}</h3>
        </center>
      </div>
    );
  }
}
export default Takeinputs;
