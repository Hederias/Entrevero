const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/mimikyu.png") {
    myImage.setAttribute("src", "images/mimifyu.png");
  } else {
    myImage.setAttribute("src", "images/mimikyu.png");
  }
});

let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

let myButton = document.querySelector("button");
myButton.addEventListener("click", () => {
  setUserName();
});
