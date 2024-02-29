let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let male = document.getElementById("male");
let female = document.getElementById("female");
let mobileNo = document.getElementById("mobileNo");
let firstNameAlert = document.getElementById("firstNameAlert");
let checkBoxValue = document.querySelectorAll(".checkBoxValue");
let lastNameAlert = document.getElementById("lastNameAlert");



let firstNameValidation = function () {

    if (firstName.value.length >= 3) {
        lastName.disabled = false;
    }  else if(firstName.value.length == 0) {
        firstName.classList.add("border-danger");
        firstNameAlert.innerText = "Please enter first name";
        firstNameAlert.style.color = "red";
        lastName.disabled = true;
        // lastName.value = "";
    } else {
        lastName.disabled = true;
        // lastName.value = "";
        firstNameAlert.innerHTML = "";
        firstName.classList.remove("border-danger");
    }
    
    if (lastName.value.length >= 1) {
        male.disabled = false;
        female.disabled = false;
        lastName.classList.remove("border-danger");
        lastName.innerHTML = "";

    } else if(lastName.value.length == 0) {
        lastName.classList.add("border-danger");
        lastNameAlert.innerHTML = "Please enter last name";
        lastNameAlert.style.color = "red";
        male.disabled = true;
        female.disabled = true;
    }
     else {
        male.disabled = true;
        female.disabled = true;
        male.checked = false;
        female.checked = false;
        lastName.classList.remove("border-danger");
        lastName.innerHTML = "";
    }

    if (male.checked || female.checked) {
        mobileNo.disabled = false;
    } else {
        mobileNo.disabled = true;
        mobileNo.value = "";
    }

    let enableCheckboxes = function () {
        if (mobileNo.value.length === 10) {
            checkBoxValue.forEach(checkbox => {
                checkbox.disabled = false;
            });
        } else {
            checkBoxValue.forEach(checkbox => {
                checkbox.disabled = true;
            });
        }
    }
    enableCheckboxes();




}

//firstName.addEventListener('input', firstNameValidation);
firstName.addEventListener('input', function() {
    if (firstName.value.length == 0) {
        lastNameAlert.innerText = ""; // Clear alert message in last name box when there's input in the first name box
    }
    // firstNameAlert.innerText = "";
    // lastNameAlert.innerHTML = ""; // Clear alert message in last name box when first name is being entered
    firstNameValidation(); // Trigger validation function when first name changes
});
lastName.addEventListener('input', firstNameValidation);
male.addEventListener('input', firstNameValidation);
female.addEventListener('input', firstNameValidation);
mobileNo.addEventListener('input', function() {
    firstNameValidation(); // Trigger validation function when mobile number changes
});
checkBoxValue.forEach(checkbox => {
    checkbox.addEventListener('input', firstNameValidation);
});

