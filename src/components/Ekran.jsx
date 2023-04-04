import React from "react";
import "../styles/Ekran.css";

function Ekran({ obrazDane, obrazWynik }) {
  return (
    <div id="ekran">
      <p className="output ">{obrazWynik}</p>
      <p className="input ">{obrazDane}</p>
    </div>
  );
}
export default Ekran;
