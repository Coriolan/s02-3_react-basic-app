import React from 'react';

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e, value) => {
    console.log(`e: ${e}`);
    console.log(`value: ${value}`);
    // e.preventDefault();
    // alert('link clicked');
    this.setState((state) => {
      return { isToggleOn: !state.isToggleOn };
    });
  };

  render() {
    return (
      <div>
        <button onClick={(e) => this.handleClick(e, 'some value')}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

export default ToggleButton;
