import React from "react";
import Ekran from "./components/Ekran";
import Klawiatura from "./components/Klawiatura";
import "./styles/Calculator.css";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      klawisz: "",
      wynik: "",
    };
  }

  pisz = (event) => {
    const { klawisz, wynik } = this.state;
    const target = event.target;
    const text = target.textContent;
    const temp = wynik + text;

    this.setState({
      klawisz: text,
      wynik: temp,
    });
  };

  render() {
    return (
      <div id="cal-1">
        <Ekran obraz={this.state.wynik} />
        <Klawiatura przycisk={this.pisz} />
      </div>
    );
  }
}

export default Calculator;
