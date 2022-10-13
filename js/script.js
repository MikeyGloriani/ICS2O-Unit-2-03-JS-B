// Created by: Mikey Gloriani
// Created on: Sep 2022
// This file contains the JS functions for index.html

/**
 * This function gets address inputed by a user and shows it back to user.
 */
function enterClicked() {
  // input
  const streetName = document.getElementById("street-name").value
  const streetNumber = parseInt(document.getElementById("street-number").value)

  // output
  document.getElementById("address").innerHTML =
    "Your address is: " + streetNumber + " " + streetName + "."
}
