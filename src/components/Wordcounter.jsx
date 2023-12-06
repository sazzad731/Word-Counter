import React from "react";
export default class Wordcounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: this.props.cols,
      rows: this.props.rows,
      value: ``,
    };
  }
  numberValue = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    const { rows, cols, value } = this.state;
    let num = value.split(' ').length;
    return (
      <div className="container">
        <h1>Word Counter</h1>
        <form>
          <textarea
            name="wordcounter"
            value={value}
            rows={rows}
            cols={cols}
            placeholder="Enter a passages"
            onChange={this.numberValue}
          ></textarea>
        </form>
        <h3>The number of word is: {num}</h3>
      </div>
    );
  }
}