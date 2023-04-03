import React from "react";
import "../styles/Ekran.css";
function czytaj(event) {
  console.log(event.target.id);
}
function Ekran({ obraz }) {
  return (
    <div id="ekran">
      <p className="output ">{obraz}</p>
      <p className="input ">{obraz}</p>
    </div>
  );
}
export default Ekran;
