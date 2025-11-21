import React, { Component } from "react";

export default class App extends Component {
  state = {
    value: 0,
  };
  // react hooks : useState, useMemo, useEffect 등..
  // const [value, setState] = useState(0)
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  resetValue() {
    this.setState({ value: 0 });
  }

  render() {
    return (
      <div>
        <h1>value: {this.state.value}</h1>
        <button
          onClick={() => {
            this.setState((state) => ({
              value: state.value + 1,
            }));
          }}
          /*
          onClick={() => {
           setValue(value + 1);
          }}
          */
        >
          Increase value
        </button>
        <button
          onClick={this.resetValue.bind(this)}
          /*
                  onClick={() => {
                    setValue(0);
                  }}
          */
        >
          Reset value
        </button>
      </div>
    );
  }
}
