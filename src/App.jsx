import React, { useState } from "react";
import "./styles/App.css";
import Klawiatura from "./components/Klawiatura";
import Ekran from "./components/Ekran";

function App() {
  const [wynik, setWynik] = useState("");
  const [ekran, setEkran] = useState("0");
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
        : setEkran(ekran + input)
      : input.match(operandReg)
      ? ((znak = input.match(operandReg)), handleWynik(znak[0]))
      : input.match(delReg)
      ? ekran.length <= 1
        ? setEkran("0")
        : setEkran(ekran.substring(0, ekran.length - 1))
      : input.match(clearReg)
      ? (setEkran("0"), setWynik(""))
      : "";
  };

  const handleWynik = (znak) => {
    // console.log("znak:", znak, "wynik:", wynik);
    const isOperation = wynik
      .toString()
      .charAt(wynik.length - 1)
      .match(operandReg);
    // console.log("czy operacja", isOperation);
    isOperation !== null
      ? Operation(isOperation[0], znak)
      : znak === "="
      ? (setWynik(ekran), setEkran("0"))
      : wynik.length !== 0
      ? (setWynik(wynik + znak), setEkran("0"))
      : (setWynik(ekran + znak), setEkran("0"));
    // console.log("ekran", wynik);
  };

  const Operation = (staryZnak, nowyZnak) => {
    if (staryZnak === "+" && nowyZnak === "=") {
      add(nowyZnak);
    } else if (staryZnak === "-" && nowyZnak === "=") {
      subt(nowyZnak);
    } else if (staryZnak === "*" && nowyZnak === "=") {
      multi(nowyZnak);
    } else if (staryZnak === "÷" && nowyZnak === "=") {
      div(nowyZnak);
    } else if (staryZnak === "+") {
      add(nowyZnak);
    } else if (staryZnak === "-") {
      add(nowyZnak);
    } else if (staryZnak === "*") {
      add(nowyZnak);
    } else if (staryZnak === "÷") {
      add(nowyZnak);
    }
  };

  const add = (nowyZnak) => {
    const tempAdd = parseFloat(ekran) + parseFloat(wynik);
    if (nowyZnak !== "=") {
      setWynik(tempAdd + nowyZnak);
    } else {
      setWynik(tempAdd);
    }
    setEkran("0");
  };
  const subt = (nowyZnak) => {
    const tempSubt = Math.floor(parseFloat(wynik) - parseFloat(ekran));
    if (nowyZnak !== "=") {
      setWynik(tempSubt + nowyZnak);
    } else {
      setWynik(tempSubt);
    }
    setEkran("0");
  };
  const multi = (nowyZnak) => {
    const tempMulti = Math.floor(parseFloat(ekran) * parseFloat(wynik));
    if (nowyZnak !== "=") {
      setWynik(tempMulti + nowyZnak);
    } else {
      setWynik(tempMulti);
    }
    setEkran("0");
  };
  const div = (nowyZnak) => {
    let tempDiv = 0;
    if (ekran !== "0") {
      tempDiv = parseFloat(wynik) / parseFloat(ekran);
      nowyZnak !== "="
        ? Number.isInteger(tempDiv)
          ? (setEkran("0"), setWynik(tempDiv + nowyZnak))
          : (setEkran("0"), setWynik(tempDiv.toFixed(4) + nowyZnak))
        : Number.isInteger(tempDiv)
        ? (setEkran("0"), setWynik(tempDiv))
        : (setEkran("0"), setWynik(tempDiv.toFixed(4)));
    } else {
      setEkran("0");
    }
  };
  const handleEkran = (event) => {
    const temp = event.target.textContent;
    handleOperation(temp);
  };
  return (
    <div className="cal-1">
      <Ekran obrazDane={ekran} obrazWynik={wynik} />
      <Klawiatura przycisk={handleEkran} />
    </div>
  );
}
export default App;
