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

//console.log(checkBoxValue.length);


let firstNameValidation = function () {

    if (firstName.value.length >= 3) {
        lastName.disabled = false;
        male.disabled = false;
        female.disabled = false;
        inputAddress1.disabled = false;
        inputAddress2.disabled = false;
        email.disabled = false;
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
        // lastName.value = "";
    } else {
        lastName.disabled = true;
        // lastName.value = "";
        firstNameAlert.innerHTML = "";
        firstName.classList.remove("border-danger");
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
            pinCode.disabled = false;
        } else {
            inputAddress1.disabled = true;
            inputAddress2.disabled = true;
            email.disabled = true;
            pinCode.disabled = true;
            checkBoxValidateMsg.innerHTML = "Please selct atleast two types of food";
            checkBoxValidateMsg.style.color = "red";
        }
    };

    
    
    let enablePincodeBox = function () {
        
        if (inputAddress1.value.length >= 6) {
            pinCode.disabled = false;

        } else if(inputAddress1.value.length == 0){
            addressAlertMsg.innerHTML = "Please enter Address";
            addressAlertMsg.style.color = "red";
            pinCode.disabled = true;
        } else if(inputAddress1.value.length >= 1) {
            addressAlertMsg.innerHTML = "";
            pinCode.disabled = true;
        } else if(inputAddress1.value.length <= 5){
            addressAlertMsg.innerHTML = "Please enter Address";
            addressAlertMsg.style.color = "red";
            pinCode.disabled = true;
        }
        else {
            pinCode.disabled = true;
        }
    };
//}

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
inputAddress1.addEventListener('input', function(){
    enablePincodeBox();
})