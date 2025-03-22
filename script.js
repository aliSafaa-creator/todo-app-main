// Select the theme toggle icon
const themeToggleIcon = document.querySelector(".icon-sun");

// Add event listener for the theme toggle
themeToggleIcon.addEventListener("click", () => {
     const body = document.body;

     // Toggle the light-mode class on the body
     body.classList.toggle("light-mode");

     // Switch the icon
     if (body.classList.contains("light-mode")) {
          themeToggleIcon.src = "./images/icon-moon.svg"; // Switch to moon icon
     } else {
          themeToggleIcon.src = "./images/icon-sun.svg"; // Switch to sun icon
     }
});

document.addEventListener("DOMContentLoaded", () => {
     const addIcon = document.querySelector(".add-icon");
     const inputTodo = document.querySelector(".input-todo input");
     const todosContainer = document.querySelector(".todos");

     addIcon.addEventListener("click", () => {
          const inputValue = inputTodo.value.trim();

          if (inputValue) {
               // Create a new label element
               const newTodo = document.createElement("label");
               newTodo.classList.add("todo");

               // Create the checkbox input
               const checkbox = document.createElement("input");
               checkbox.type = "checkbox";
               checkbox.name = "checkbox";

               // Create the span for the checkmark
               const checkmark = document.createElement("span");
               checkmark.classList.add("checkmark");

               // Create the h5 element for the todo text
               const todoText = document.createElement("h5");
               todoText.textContent = inputValue;

               // Append the checkbox, checkmark, and text to the label
               newTodo.appendChild(checkbox);
               newTodo.appendChild(checkmark);
               newTodo.appendChild(todoText);

               // Append the new label to the todos container
               todosContainer.appendChild(newTodo);

               // Clear the input field
               inputTodo.value = "";
          }
     });
});
