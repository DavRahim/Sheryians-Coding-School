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

// 🧾 1. What is a Form?
// A form is an HTML structure that collects user input.
// Example:
//<form>
// <input type="text" />
// <button type="submit">Send</button>
//</form>
/*
Forms are used for:
Login
Signup
Contact messages
Checkout pages
Payments
Searching
*/
// 🧰 2. Form Elements You Must Know
// ✔ Input fields

//<input type="text" />
//<input type="email" />
//<input type="password" />

// 🛡️ 3. What is Form Validation?
// Validation checks whether the input is correct before submitting.

// Why do we validate ?
// ✔ Avoid empty fields
// ✔ Block invalid email
// ✔ Protect from bad data
// ✔ Improve user experience
// ✔ Prevent errors in database

// 🧩 4. Two Types of Form Validation
// ✔ A) HTML Built-In Validation (quick & simple)
// <input type="email" required />
// <input type="text" minlength="3" required />


// TODO:TODO: localStorage and sessionStorage And Cookies.
// 🌐 1. Why do we store data in the browser?
/*
To:
Remember user login
Save theme (dark/light)
Save cart items
Store form data
Save temporary page info
Improve user experience
*/

// 🗂️ 2. localStorage
// localStorage stores data permanently in the browser(until deleted manually).
// ✔ Data stays even if:
// Tab is closed
// Browser is closed
// Computer is restarted
// ✔ Methods
localStorage.setItem("name", "Rahim");
localStorage.getItem("name");
localStorage.removeItem("name");
localStorage.clear();
// ✔ Example
localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme")); // "dark"

//🕒 3. sessionStorage
/*
✔ What is it?
sessionStorage stores data only for the current tab session.
✔ Data is lost when:
Tab is closed
Browser is closed
⚠️ Does NOT share data across tabs.
✔ Methods (same as localStorage)
*/
sessionStorage.setItem("token", "1243");
sessionStorage.getItem("token");
sessionStorage.removeItem("token");
sessionStorage.clear();
// ✔ Example
sessionStorage.setItem("page", "home");


// 🍪 4. Cookies
/*
✔ What are cookies?
Small data files stored in the browser, mainly used by:
Authentication
Tracking
Analytics
Server communication
✔ Cookies have:
Expiration date
Size limit (~4KB)
Can be accessed by server
*/
// ✔ Example
document.cookie = "username=Rahim; expires=Fri, 31 Dec 2025 12:00:00 UTC; path=/";
// ✔ Reading cookie
console.log(document.cookie);
// ✔ Deleting cookies
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
