
// Cache DOM elements
const form = document.getElementById("data-form");
// Generalized function to get form data
function getFormDataFromForm(formElement) {
    const formData = {};
    const inputs = formElement.querySelectorAll("input, textarea");

    inputs.forEach((input) => {
        formData[input.name] = input.value.trim(); // Use input 'name' attribute for keys
    });

    return formData;
}

// Generalized function to save form data to localStorage
function saveFormDataToLocalStorage(formData) {
    try {
        for (const [key, value] of Object.entries(formData)) {
            localStorage.setItem(key, value); // Dynamically save key-value pairs
        }
    } catch (error) {
        console.error("Error saving to localStorage:", error);
        throw new Error("Failed to save data.");
    }
}

// Generalized function to display confirmation
function displayConfirmationMessage(formData, outputElement) {
    let confirmationHTML = `<p>Data saved successfully!</p>`;
    for (const [key, value] of Object.entries(formData)) {
        confirmationHTML += `<p><strong>${capitalizeFirstLetter(key)}:</strong> ${value}</p>`;
    }
    outputElement.innerHTML = confirmationHTML;
}

// Utility function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Main event listener for any form
document.querySelectorAll("form").forEach((form) => {
    const outputElement = document.getElementById(`${form.id}-output`); // Dynamic output container

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default submission

        const formData = getFormDataFromForm(form);

        // Validate form data
        if (Object.values(formData).some((value) => !value)) {
            outputElement.innerHTML = `<p>Please fill in all fields.</p>`;
            return;
        }

        // Process data
        try {
            saveFormDataToLocalStorage(formData);
            displayConfirmationMessage(formData, outputElement);
        } catch (error) {
            outputElement.innerHTML = `<p>Failed to save data. Please try again later.</p>`;
        }
    });
});


//                          //



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
