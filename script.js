// Select container to manipulate
const container = document.querySelector(".container");

// Select button to manipulate
const button = document.querySelector(".button");

// Prompt user for their specified grid size

// Create Grid function using user's specified grid size

function createGrid(size) {
  if (container) {
    // Empty grid
    container.innerHTML = "";
    console.log("container found");

    // Loop to create a grid

    for (let i = 0; i < size * size; i++) {
      // Create a square in each loop
      const square = document.createElement("div");

      // Add newly created square into CSS
      square.classList.add("square");

      // Make sure the sizes are accurate
      square.style.width = `${960 / size}px`;
      square.style.height = `${960 / size}px`;

      // Append to container
      container.appendChild(square);
    }

    // ForEach to create hover (mouseover) colour effect

    // Select all the squares that were created
    const squares = document.querySelectorAll(".square");

    // ForEach
    squares.forEach((square) => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
      });
    });
  } else {
    console.log("container not found");
  }
}

// Call the function
createGrid(20);

// Make grid size editable with a button and event listener

button.addEventListener("click", () => {
  let newSize = parseInt(prompt("Enter a number between 1 and 100"));
  if (newSize < 1 || newSize > 100 || isNaN(newSize)) {
    alert("Not accepted. Enter a number between 1 and 100.");
    newSize = 20;
  } else {
    size = newSize;
  }
  createGrid(newSize);
});
