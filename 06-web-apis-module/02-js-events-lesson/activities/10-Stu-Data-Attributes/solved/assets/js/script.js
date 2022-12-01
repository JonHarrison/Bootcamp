var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  switch (element.getAttribute("data-state")) {
    case "hidden":
      element.setAttribute("data-state", "visible");
      element.textContent = element.getAttribute("data-number");
      break;
    case "visible":
      element.setAttribute("data-state", "hidden");
      element.textContent = "";
      break;  
  }
});
