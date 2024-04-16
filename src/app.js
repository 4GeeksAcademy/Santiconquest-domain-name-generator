/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  function dominio() {
    let result = "";
    for (let pro of pronoun) {
      //console.log(pro);
      for (let ad of adj) {
        //console.log(ad);
        for (let nou of noun) {
          console.log(`${pro}${ad}${nou}.com`);
        }
      }
    }
  }

  dominio();
};
