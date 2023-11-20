// Using jQuery for scroll event handling
$(function () {
  // When the window is scrolled...
  $(window).on("scroll", function () {
    // If the scroll position is greater than 75 pixels...
    if ($(window).scrollTop() > 75) {
      // Add the 'scrolled-menu' class to elements with the class 'menu-row'
      $(".menu-row").addClass("scrolled-menu");
    } else {
      // Otherwise, remove the 'scrolled-menu' class
      $(".menu-row").removeClass("scrolled-menu");
    }
  });
});

// Using vanilla JavaScript for DOM content loaded event
document.addEventListener("DOMContentLoaded", () => {
  // Set the student info text content
  const studentInfo = document.getElementById("studentInfo");
  studentInfo.textContent =
    "Student ID: 200534092, Name: Gopu Puzhakkaredath Selvaraj";

  // Add event listener to the order button
  const orderButton = document.getElementById("orderButton");
  orderButton.addEventListener("click", createPizzaOrder);
});

// Function to handle pizza order creation
function createPizzaOrder() {
  // Get the values from the form
  const size = document.getElementById("size").value;
  const crust = document.getElementById("crust").value;
  const sauce = document.getElementById("sauce").value;
  const extraCheese = document.getElementById("extraCheese").checked;
  const comments = document.getElementById("comments").value;

  // Initialize an array for toppings
  let toppings = [];
  // Find all checked toppings and add them to the toppings array
  document
    .querySelectorAll('input[name="toppings"]:checked')
    .forEach((topping) => {
      toppings.push(topping.value);
    });

  // Get the selected delivery option, defaulting to "N/A" if none are checked
  let deliveryOption =
    document.querySelector('input[name="deliveryOption"]:checked')?.value ||
    "N/A";

  // Create a new Pizza object with the gathered information
  const pizza = new Pizza(
    size,
    crust,
    sauce,
    toppings,
    extraCheese,
    deliveryOption,
    comments
  );
  // Display the pizza order summary
  document.getElementById("orderSummary").innerHTML = pizza.describe();
}

// Pizza class definition
class Pizza {
  // Constructor for the Pizza class
  constructor(
    size,
    crust,
    sauce,
    toppings,
    extraCheese,
    deliveryOption,
    comments
  ) {
    // Assign properties to the instance of the class
    this.size = size;
    this.crust = crust;
    this.sauce = sauce;
    this.toppings = toppings;
    this.extraCheese = extraCheese;
    this.deliveryOption = deliveryOption;
    this.comments = comments;
  }

  // Method to describe the pizza order details
  describe() {
    // Return the pizza order summary as an HTML string
    return `
        <h2>Your Pizza Order</h2>
        <p>Size: ${this.size}</p>
        <p>Crust: ${this.cryst}</p>
        <p>Sauce: ${this.sauce}</p>
        <p>Toppings: ${this.toppings.join(", ") || "None"}</p>
        <p>Extra Cheese: ${this.extraCheese ? "Yes" : "No"}</p>
        <p>Delivery Option: ${this.deliveryOption}</p>
        <p>Comments: ${this.comments}</p>
      `;
  }
}
