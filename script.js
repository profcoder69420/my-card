const myText = document.getElementById("my-text");
function myFunction() {
  navigator.clipboard.writeText("internetexplorerbeta");
  myText.innerHTML = "internetexplorerbeta<br />Copied!";
  setTimeout(() => {
    myText.innerHTML = "internetexplorerbeta<br />Tap to copy!";
  }, 2000);
}
