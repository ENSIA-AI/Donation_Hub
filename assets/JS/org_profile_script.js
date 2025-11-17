const see_more_org = document.querySelector(".see_more_btn");

see_more_org.addEventListener("click", function () {
  console.log("see more organizations");
});

// ===========================================the form validation=================================
let FirstName = document.querySelector("#first_name"),
  LastName = document.querySelector("#last_name"),
  Email = document.querySelector("#email"),
  PhoneNumber = document.querySelector("#phone_number"),
  Message = document.querySelector("#message"),
  RequestType = document.querySelector("#request_type"),
  FileUploaded = document.querySelector("#File"),
  Reset_Btn = document.querySelector("#reset_btn"),
  Submit_Btn = document.querySelector("#submit_btn"),
  Small = document.querySelector("small");

// ======Submit button event =========
Submit_Btn.addEventListener("click", (event) => {
  event.preventDefault();
  checkInputs();
});

const fields = [
  { input: FirstName, message: "First name cannot be blank" },
  { input: LastName, message: "Last name cannot be blank" },
  { input: Message, message: "Message cannot be blank" },
  { input: RequestType, message: "Request type cannot be blank" },
];

// ================ CHECK INPUTS FUNCTION ===============
function checkInputs() {
  // update values INSIDE function
  const EmailValue = Email.value.trim();
  const PhoneNumberValue = PhoneNumber.value.trim();

  fields.forEach((field) => {
    const value = field.input.value.trim();

    if (value === "") {
      setErrorFor(field.input, field.message);
    } else {
      setSuccessFor(field.input);
    }
  });

  // email validation
  if (EmailValue === "") {
    setErrorFor(Email, "Email cannot be blank");
  } else if (!isEmail(EmailValue)) {
    setErrorFor(Email, "Email is not valid");
  } else {
    setSuccessFor(Email);
  }

  // phone number validation
  if (PhoneNumberValue === "") {
    setErrorFor(PhoneNumber, "Phone cannot be blank");
  } else if (!isPhone_Number(PhoneNumberValue)) {
    setErrorFor(PhoneNumber, "Phone is not valid");
  } else {
    setSuccessFor(PhoneNumber);
  }
}

function setErrorFor(input, message) {
  Small.innerText += "\n" + message;
  input.classList.add("error");
}

function setSuccessFor(input) {
  input.classList.add("success");
}

function isEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
  return regex.test(email);
}

function isPhone_Number(num) {
  return /^([0][5-7][0-9]{8})$/.test(num);
}
