const h1 = document.querySelector("h1");
const helloId = document.getElementById("hello");
const className = document.getElementsByClassName("className");

let lis = document.querySelectorAll("li");
lis.forEach(function (val) {
  console.log(val.textContent);
});

// convert tag
// interHTML ,,
// h1.innerHTML = <i></i>

// Can you remove an element using removeChild()?

/*
🌱 What is the DOM?

The DOM (Document Object Model) is a structured representation of your webpage.
Think of it like a tree where:

The document is the root

Inside it, you have html

Inside html → head & body

Inside body → elements like div, h1, p, button, etc.

JavaScript can select, change, add, or remove anything in this tree.
*/

//1.TODO: 🧲 1. Selecting Elements
document.getElementById("title");
document.getElementsByClassName("box");
document.getElementsByTagName("p");

document.querySelector(".box"); // selects first match
document.querySelectorAll(".box"); // selects all matches

//2.TODO: 🎨 2. Changing Elements (Style, Text, HTML)
// ✔ Changing text:
element.textContent = "New text";
element.innerText = "Another text";
element.innerHTML = "<strong>Bold text</strong>";

// ✔ Changing style:
element.style.color = "red";
element.style.backgroundColor = "yellow";
element.style.fontSize = "20px";

// ✔ Changing attributes:
element.setAttribute("src", "image.png");
element.setAttribute("id", "newId");

//3.TODO: 🧱 3. Creating & Adding New Elements

// ✔ Create a new element:
const newDiv = document.createElement("div");
newDiv.textContent = "Hello DOM!";

// ✔ Add it into the page:
document.body.appendChild(newDiv);
// Or insert it inside another element:
parentElement.appendChild(newDiv);

// Other insertion methods:
parentElement.prepend();
parentElement.before();
parentElement.after();

// 4.TODO:🗑️ 4. Removing Elements
element.remove();

// Or remove a child:
parent.removeChild(child);

// TODO:TODO: 🎯 5. Event And Event Handling Listeners (VERY important!)

h1.addEventListener("db", function () { });

// Events let your page respond to user actions.
/*
Common events:
click
mouseenter
keyup
submit
*/
button.addEventListener("click", () => {
  alert("Button clicked!");
});

// TODO: ⚙️ 6. Practical Example
// HTML
//<h1 id="title">Hello</h1>
//<button id="btn">Change Text</button>

const title = document.getElementById("title");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  title.textContent = "Text changed!";
});


//TODO:TODO: Forms And Form Validation









// TODO:TODO: localStorage and sessionStorage And Cookies.