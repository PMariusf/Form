
// Cache DOM elements
const form = document.getElementById("data-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const outputElement = document.getElementById("output");

// Retrieve form data
function getFormData() {
    return {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim()
    };
}

// Save form data to localStorage
function saveDataToLocalStorage(data) {
    try {
        localStorage.setItem("name", data.name);
        localStorage.setItem("email", data.email);
        localStorage.setItem("message", data.message);
    } catch (error) {
        console.error("Error saving to localStorage:", error);
        throw new Error("Failed to save data.");
    }
}

// Display confirmation message
function displayConfirmation(data) {
    outputElement.innerHTML = `
        <p>Data saved successfully!</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong> ${data.message}</p>
    `;
}

// Add event listener to form
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    const formData = getFormData();

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
        outputElement.innerHTML = `<p>Please fill in all fields.</p>`;
        return;
    }

    // Process data
    try {
        saveDataToLocalStorage(formData);
        displayConfirmation(formData);
    } catch (error) {
        outputElement.innerHTML = `<p>Failed to save data. Please try again later.</p>`;
    }
});





//document.getElementById("data-form").addEventListener("submit", function (e) {
 // e.preventDefault(); // Prevent form submission

  // Get form data
 // const name = document.getElementById("name").value;
 // const email = document.getElementById("email").value;
 // const message = document.getElementById("message").value;

  // Save data to localStorage
 // localStorage.setItem("name", name);
 // localStorage.setItem("email", email);
 // localStorage.setItem("message", message);

  // Display confirmation
 // const output = document.getElementById("output");
 // output.innerHTML = `
 //     <p>Data saved successfully!</p>
 //     <p><strong>Name:</strong> ${name}</p>
 //     <p><strong>Email:</strong> ${email}</p>
 //     <p><strong>Message:</strong> ${message}</p>
 // `;
//});
