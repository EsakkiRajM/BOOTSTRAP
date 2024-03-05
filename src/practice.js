let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let male = document.getElementById("male");
let female = document.getElementById("female");
let mobileNo = document.getElementById("mobileNo");
let firstNameAlert = document.getElementById("firstNameAlert");
let checkBoxValue = document.querySelectorAll(".checkBoxValue");
let lastNameAlert = document.getElementById("lastNameAlert");
let checkBoxValidateMsg = document.getElementById("checkBoxValidateMsg");
let inputAddress1 = document.getElementById('inputAddress1');
let inputAddress2 = document.getElementById('inputAddress2');
let addressAlertMsg = document.getElementById("addressAlertMsg");
let email = document.getElementById("email");
let pinCode = document.getElementById("pinCode");
let mobileNoAlert = document.getElementById("mobileNoAlert");
let state = document.getElementById("state");
let pinCodeAlert = document.getElementById("pinCodeAlert");
let stateAlert = document.getElementById("stateAlert")
let countryAlert = document.getElementById("countryAlert");
let country = document.getElementById("country");
let cancelBtn = document.getElementById("cancelBtn");
let submitBtn = document.getElementById("submitBtn");
let form = document.getElementById("form");

//console.log(checkBoxValue.length);


let firstNameValidation = function () {

    if (firstName.value.length >= 3) {
        lastName.disabled = false;
        male.disabled = false;
        female.disabled = false;
        inputAddress1.disabled = false;
        inputAddress2.disabled = false;
        email.disabled = false;
        cancelBtn.disabled = false;
        cancelBtn.classList.remove("btn-warning");
        cancelBtn.classList.add("btn-outline-warning");
    } else if (firstName.value.length == 0) {
        firstName.classList.add("border-danger");
        firstNameAlert.innerHTML = "Please enter first name";
        firstNameAlert.style.color = "red";
        lastName.disabled = true;
        male.disabled = true;
        female.disabled = true;
        inputAddress1.disabled = true;
        inputAddress2.disabled = true;
        email.disabled = true;
        cancelBtn.disabled = true;
        cancelBtn.classList.remove("btn-outline-warning");
        cancelBtn.classList.add("btn-warning");

        // lastName.value = "";
    } else {
        lastName.disabled = true;
        // lastName.value = "";
        firstNameAlert.innerHTML = "";
        firstName.classList.remove("border-danger");
        // cancelBtn.classList.remove("btn-outline-warning");
        // cancelBtnancelBtn.classList.add("btn-warning");
    }

    commonValidation();




}



let lastNameValidation = function () {

    if (lastName.value.length >= 1) {
        male.disabled = false;
        female.disabled = false;
        lastName.classList.remove("border-danger");
        lastNameAlert.innerHTML = "";

    } else if (lastName.value.length == 0) {
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
        lastNameAlert.innerHTML = "";
    }

    commonValidation();

}


let commonValidation = function () {
    if (male.checked || female.checked) {
        mobileNo.disabled = false;
    } else {
        mobileNo.disabled = true;
        //mobileNo.value = "";
    }

    let enableCheckboxes = function () {
        if (mobileNo.value.length === 10) {
            checkBoxValue.forEach(checkbox => {
                checkbox.disabled = false;
            });
        } else if (mobileNo.value.length > 10) {
            checkBoxValue.forEach(checkbox => {
                mobileNoAlert.innerHTML = "Please enter only 10 digit numbers";
                mobileNoAlert.style.color = "red";
                checkbox.disabled = true;
            });
        } else if (mobileNo.value.length <= 10) {
            checkBoxValue.forEach(checkbox => {
                mobileNoAlert.innerHTML = "";
                checkbox.disabled = true;
            });
        }
        else {
            checkBoxValue.forEach(checkbox => {
                checkbox.disabled = true;
            });
        }
    }
    enableCheckboxes();
    enableAddressBox();
}


let enableAddressBox = function () {
    let checkedCount = document.querySelectorAll('.checkBoxValue:checked').length;
    if (checkedCount >= 2) {
        inputAddress1.disabled = false;
        inputAddress2.disabled = false;
        email.disabled = false;
        checkBoxValidateMsg.innerHTML = "";
    } else {
        inputAddress1.disabled = true;
        inputAddress2.disabled = true;
        email.disabled = true;
        checkBoxValidateMsg.innerHTML = "Please selct atleast two types of food";
        checkBoxValidateMsg.style.color = "red";
    }
};



let enablePincodeBox = function () {

    if (inputAddress1.value.length >= 6) {
        pinCode.disabled = false;

    } else if (inputAddress1.value.length == 0) {
        addressAlertMsg.innerHTML = "Please enter Address";
        addressAlertMsg.style.color = "red";
        pinCode.disabled = true;
    } else if (inputAddress1.value.length >= 1) {
        addressAlertMsg.innerHTML = "";
        pinCode.disabled = true;
    }
    else if (inputAddress1.value.length <= 5) {
        pinCode.disabled = true;
    }
};

let enableStateBox = function () {
    if (pinCode.value.length === 6) {
        state.disabled = false;
    } else if (pinCode.value.length === 0) {
        state.disabled = true;
        pinCodeAlert.innerHTML = "Please enter your pincode";
        pinCodeAlert.style.color = "red";
    } else if (pinCode.value.length >= 7) {
        state.disabled = true;
        pinCodeAlert.innerHTML = "Please enter 6 digit numbers only";
        pinCodeAlert.style.color = "red";
    }
    else if (pinCode.value.length >= 1) {
        pinCodeAlert.innerHTML = "";
        state.disabled = true;
    } else {
        pinCodeAlert.innerHTML = " ";
    }
}

let enableCountryBox = function () {
    if (state.value.length >= 3) {
        country.disabled = false;
    } else if (state.value.length === 0) {
        country.disabled = true;
        stateAlert.innerHTML = "Please enter your state";
        stateAlert.style.color = "red";
    } else if (state.value.length >= 1) {
        stateAlert.innerHTML = "";
        country.disabled = true;
    }
}

let enableSubmitBtn = function () {
    if (country.value.length >= 3) {
        submitBtn.disabled = false;
        submitBtn.classList.remove("btn-primary");
        submitBtn.classList.add("btn-outline-primary");
    } else if (country.value.length === 0) {
        submitBtn.disabled = true;
        countryAlert.innerHTML = "Please enter your country";
        countryAlert.style.color = "red";
        submitBtn.classList.remove("btn-outline-primary");
        submitBtn.classList.add("btn-primary");
    } else if (state.value.length >= 1) {
        countryAlert.innerHTML = "";
        submitBtn.disabled = true;
        submitBtn.classList.remove("btn-outline-primary");
        submitBtn.classList.add("btn-primary");
    }
}

let submitForm = function () {
    if (confirm("Are you sure you want to confirm the order?")) {
        form.submit();
    }
}


let cancelForm = function () {
    if (confirm("Are you sure you want to cancel the order?")) {
        form.reset();
    }
}


firstName.addEventListener('input', firstNameValidation);
lastName.addEventListener('input', lastNameValidation);
//lastName.addEventListener('input', firstNameValidation);
male.addEventListener('input', firstNameValidation);
female.addEventListener('input', firstNameValidation);
mobileNo.addEventListener('input', function () {
    firstNameValidation();
    lastNameValidation(); // Trigger validation function when mobile number changes
});
checkBoxValue.forEach(checkbox => {
    checkbox.addEventListener('input', firstNameValidation);
});
inputAddress1.addEventListener('input', function () {
    enablePincodeBox();
})

pinCode.addEventListener('input', function () {
    enableStateBox();
})

state.addEventListener('input', enableCountryBox);

country.addEventListener('input', enableSubmitBtn);

submitBtn.addEventListener('click', submitForm);
cancelBtn.addEventListener('click', cancelForm);
