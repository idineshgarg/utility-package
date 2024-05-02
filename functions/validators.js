function validateEmail(email) {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
}

function validatePassword(password) {
  if (!password) return "This field must not be empty.";

  const regex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;
  if (!regex.test(password)) {
    return "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one symbol.";
  }

  return "Valid password";
}
