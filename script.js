//your JS code here. If required.
function capitalizeName() {
    var inputField = document.getElementById("fname");
    inputField.value = inputField.value.toUpperCase();
  }

  // Add event listener to trigger capitalizeName function on blur (losing focus)
  document.getElementById("fname").addEventListener("blur", capitalizeName);