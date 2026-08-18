const message = document.getElementById("message");
const acceptBtn = document.getElementById("acceptBtn");
const declineBtn = document.getElementById("declineBtn");

function changeMessage(content) {
  message.classList.remove("changed");

  // Restart animation
  void message.offsetWidth;

  message.innerHTML = content;
  message.classList.add("changed");
}

acceptBtn.addEventListener("click", () => {
  changeMessage(`
    <p>( ♥‿♥ ) &nbsp; friend request accepted!</p>
    <p>(100%) friendship unlocked ♡</p>
  `);
});

declineBtn.addEventListener("click", () => {
  changeMessage(`
    <p>(╥﹏╥) &nbsp; request declined...</p>
    <p>maybe next time? ♡</p>
  `);
});
