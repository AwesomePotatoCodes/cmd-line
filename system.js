var command = 0;
const output = document.getElementById("output")
function run() {
  command = document.getElementById("line").value;
  if (command == "help") {
    output.innerHTML = "Commands List:<br>help : commands<br>test : testing";
  } else if (command == "test") {
    output.innerHTML = "Testing!";
  }
}
