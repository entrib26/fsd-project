// document.querySelector("h1").innerText = "Hello world";
// document.querySelector("#content").innerText = "Hello world";
// document.querySelector(".container").innerText = "Hello world";
// const container = document.querySelector(".container");
// const h1 = document.createElement("h1");

// h1.innerText = "Hey";

// container.appendChild(h1);

// document.querySelectorAll("h1").forEach((item) => {
//   item.innerText = "From the traversing";
// });

// let name = "    jack daniel.     ";

// console.log(name.trim());

// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   console.log("Clicked");
// });

// document.querySelectorAll("*").forEach((elem) => {
//   elem.addEventListener(
//     "click",
//     () => {
//       console.log(`Capturing: ${elem.tagName}`);
//     },
//     true
//   );
//   elem.addEventListener("click", () => {
//     console.log(`Bubbling: ${elem.tagName}`);
//   });
// });
// document.querySelector("#submitBtn").addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("Form submitted");
// });

// document.querySelector("form").addEventListener("submit", () => {
//   console.log("Form submitted");
// });

// setTimeout(() => {
//   console.log("First One");
//   setTimeout(() => {
//     console.log("Second One");
//     setTimeout(() => {
//       console.log("Third One");
//       setTimeout(() => {
//         console.log("Fourth One");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const data = new Promise((resolve, reject) => {
//   resolve(1);
// });

// data
//   .then((info) => {
//     return info + 10;
//   })
//   .then((value) => {
//     console.log(value);
//   });
