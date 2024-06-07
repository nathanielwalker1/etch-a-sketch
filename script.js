// Select container
// Neede to manipulate HTML/CSS elements
const container = document.querySelector(".container");

// Select button element
const button = document.querySelector("button");

// Ask for a specific grid size

let size = parseInt(prompt("Enter grid size - a number between 1 and 100"));
// Rule to make sure it is between 1 & 100
if (isNaN(size || size < 1 || size > 100)) {
  alert("Please enter a valid number between 1 and 100");
  size = 16; // sets default size to 16
}

function createGrid(gridSize) {
  // clear existing grid
  container.innerHTML = "";

  //   ensure squares fit perfectly within the default 960px wide container
  const squareSize = 960 / gridSize;

  if (container) {
    console.log("Container found");

    //   For loop
    for (let i = 0; i < size * size; i++) {
      // Create a square using a div
      const square = document.createElement("div");

      // Add it to CSS
      square.classList.add("square");

      //   Ensure squares are same width and height
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;

      // Append it to container
      container.appendChild(square);
    }

    // Select the newly created square divs
    // For Each loop to add an event listener for a 'hover'
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
      });
    });
  } else {
    console.log("Container not found");
  }
}

createGrid(size);

button.addEventListener("click", function () {
  let newSize = parseInt(prompt("Enter a number between 1 and 100."));

  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert("Please enter a number between 1 and 100");
    newSize = 16;
  } else {
    size = newSize;
    createGrid(newSize);
  }
});

/* Things to do:
- Make your button look better
- Randomize the colours after a hover (look at extra credit section)
*/
