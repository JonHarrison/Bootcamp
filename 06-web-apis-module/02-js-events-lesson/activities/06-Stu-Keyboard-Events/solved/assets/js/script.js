const keyEl = document.querySelector("#key");
const codeEl = document.querySelector("#code");
const statusEl = document.querySelector("#status");

function keydownAction(event) {
  if (event.key !== undefined){
    keyEl.innerHTML = event.key;
    codeEl.innerHTML = event.keyCode; // return ASCII code, deprecated property
  }
  statusEl.innerHTML = "KEYDOWN Event";
}

function keyupAction() {
  statusEl.innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
document.addEventListener("keydown", keydownAction);

