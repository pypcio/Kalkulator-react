import React, { useState } from "react";
import "./styles/App.css";
import Klawiatura from "./components/Klawiatura";
import Ekran from "./components/Ekran";

function App() {
  const [wynik, setWynik] = useState("");
  const [ekran, setEkran] = useState("");
  const decimalReg = /^[0-9.]+$/;
  const delReg = /\bDEL\b/;
  const operandReg = /[-+*÷=]/;
  const clearReg = /\bAC\b/;
  const handleOperation = (input) => {
    let znak = [];

    // console.log("ekran ", ekran);
    input.match(decimalReg)
      ? (ekran === "0") & (input !== ".")
        ? setEkran(input)
        : (setEkran(ekran + input), console.log("ekran:", ekran + input))
      : input.match(operandReg)
      ? ((znak = input.match(operandReg)), handleWynik(znak[0]))
      : "";
  };

  const handleWynik = (znak) => {
    const isOperation = wynik.charAt(wynik.length - 1).match(operandReg);
    isOperation !== null
      ? Operation(isOperation[0])
      : (setWynik(ekran + znak), setEkran("0"));
    // console.log("ekran", wynik);
  };

  const Operation = (znak) => {
    if (znak === "+") {
      add();
    } else if (znak === "-") {
      subt();
    } else if (znak === "*") {
      multi();
    } else if (znak === "÷") {
      div();
    }
  };

  const add = () => {
    const tempAdd = parseFloat(ekran) + parseFloat(wynik);
    setEkran(tempAdd);
  };
  const subt = () => {
    const tempSubt = Math.floor(parseFloat(wynik) - parseFloat(ekran));
    setEkran(tempSubt);
  };
  const multi = () => {
    const tempMulti = Math.floor(parseFloat(ekran) * parseFloat(wynik));
    setEkran(tempMulti);
  };
  const div = () => {
    let tempDiv = 0;
    if (ekran !== "0") {
      tempDiv = parseFloat(wynik) / parseFloat(ekran);
      Number.isInteger(tempDiv)
        ? setEkran(tempDiv)
        : setEkran(tempDiv.toFixed(4));
    } else {
      setEkran("0");
    }
  };
  const handleEkran = (event) => {
    const temp = event.target.textContent;
    handleOperation(temp);
    console.log("wynik: ", wynik);
  };
  return (
    <div className="cal-1">
      <Ekran obrazDane={ekran} obrazWynik={wynik} />
      <Klawiatura przycisk={handleEkran} />
    </div>
  );
}
export default App;
