// Select the theme toggle icon
const themeToggleIcon = document.querySelector(".icon-sun");
const addIcon = document.querySelector(".add-icon");
const inputTodo = document.querySelector(".input-todo input");
const todosContainer = document.querySelector(".todos");
const itemsLeft = document.querySelector(".items-left");

// Select filter buttons
const filterAll = document.querySelector("[data-all]");
const filterActive = document.querySelector("[data-active]");
const filterCompleted = document.querySelector("[data-completed");

// Add event listener for the theme toggle
themeToggleIcon.addEventListener("click", themeToggle);

function themeToggle() {
     const body = document.body;

     // Toggle the light-mode class on the body
     body.classList.toggle("light-mode");

     // Switch the icon
     if (body.classList.contains("light-mode")) {
          themeToggleIcon.src = "./images/icon-moon.svg"; // Switch to moon icon
     } else {
          themeToggleIcon.src = "./images/icon-sun.svg"; // Switch to sun icon
     }
}

document.addEventListener("DOMContentLoaded", () => {
     const updateItemsLeft = () => {
          const uncheckedTodos = todosContainer.querySelectorAll(
               ".todo input[type='checkbox']:not(:checked)"
          ).length;

          itemsLeft.textContent = `${uncheckedTodos} item${
               uncheckedTodos !== 1 && uncheckedTodos !== 0 ? "s" : ""
          } left`;
     };

     addIcon.addEventListener("click", createDynamicTodo);

     function createDynamicTodo() {
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

               // Update the items left count
               updateItemsLeft();

               // Add event listener to update count when checkbox is toggled
               checkbox.addEventListener("change", updateItemsLeft);
          }
     }

     // Initial update for items left
     updateItemsLeft();

     // Filter functions
     const filterTodos = (filter) => {
          const todos = todosContainer.querySelectorAll(".todo");

          todos.forEach((todo) => {
               const checkbox = todo.querySelector("input[type='checkbox']");
               switch (filter) {
                    case "all":
                         todo.style.display = "flex";
                         break;

                    case "active":
                         if (checkbox.checked) {
                              todo.style.display = "none";
                         } else {
                              todo.style.display = "flex";
                         }
                         break;

                    case "completed":
                         if (!checkbox.checked) {
                              todo.style.display = "none";
                         } else {
                              todo.style.display = "flex";
                         }
                         break;

                    default:
                         todo.style.display = "flex";
               }
          });
     };

     // Add event listeners for filters
     filterAll.addEventListener("click", () => filterTodos("all"));
     filterActive.addEventListener("click", () => filterTodos("active"));
     filterCompleted.addEventListener("click", () => filterTodos("completed"));
});
