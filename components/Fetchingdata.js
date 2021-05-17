import React from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import Card from "react-bootstrap/Card";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomToggle({ children, eventKey, callback }) {
  const currentEventKey = React.useContext(AccordionContext);
  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );
  const isCurrentEventKey = currentEventKey === eventKey;
  return (
    <Button
      style={{ backgroundColor: isCurrentEventKey ? "#617C58" : "green" }}
      onClick={decoratedOnClick}
    >
      {children}
    </Button>
  );
}

export default class Fetchingdata extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      loading: true,
      counted: "",
      data: "",
      tokens: [],
      InpMax: ""
    };
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

    console.log(words);
    this.setState({ tokens: words });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    return (
      <div className="container-fluid px-4">
        <Accordion>
          <Card>
            <Card.Header>
              <CustomToggle eventKey="0">(show/hide) Sample Text</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {this.state.data}
                <br />
                <br />
                <center>
                  <h3>Total words counted is : {this.state.counted}</h3>
                </center>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}
