const inputs = document.getElementById("inputs");
const inputFields = document.querySelectorAll(".input");

inputs.addEventListener("input", function (e) {
  const target = e.target;
  const val = target.value;

  console.log(val);

  if (isNaN(val)) {
    target.value = "";
    return;
  }

  if (val != "") {
    const next = target.nextElementSibling;
    if (next) {
      next.focus();
    }
  }
});

// inputs.addEventListener("keyup", function (e) {
//   const target = e.target;
//   const key = e.key.toLowerCase();

//   if (key == "backspace" || key == "delete") {
//     target.value = "";
//     const prev = target.previousElementSibling;
//     if (prev) {
//       prev.focus();
//     }
//     return;
//   }
// });


inputs.addEventListener("keyup", function (e) {
  const target = e.target;
  const key = e.key.toLowerCase();

  if (key == "backspace" || key == "delete") {
    target.value = "";
    const prev = target.previousElementSibling;
    if (prev) {
      prev.focus();
    }
  } else if (key == "enter") {
    const next = target.nextElementSibling;
    if (next) {
      next.focus();
    }
  }
});



inputs.addEventListener("paste", function (e) {
  e.preventDefault();
  const target = e.target;
  const pastedDigits = e.clipboardData.getData("text");
  if (isNaN(pastedDigits)) {
    target.value = "";
    return;
  }
  if (pastedDigits) {
    for (let i = 0; i < inputFields.length; i++) {
      const digit = i < pastedDigits.length ? pastedDigits[i] : "";
      inputFields[i].value = digit;
    }
    inputFields[inputFields.length - 1].focus();
  }
});


document.getElementById("verifyBtn").addEventListener("click", function () {
  var otp = Array.from(document.querySelectorAll(".input"))
    .map(function (input) {
      return input.value;
    })
    .join("");

  console.log("Entered OTP: " + otp);
});
