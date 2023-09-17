/**
 * this file contains all the global helper functions
 */

//validate email
export const validateEmail = (email) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
};

//validate password
export const validatePassword = (password) => {
  // Check password length
  if (password.length < 8) {
    return false;
  }
  // Check if password has a mix of uppercase, lowercase letters, numbers and symbols
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

// compare with current date
export const isSameDate = (dateString) => {
  const dateToCompare = new Date(dateString);
  const today = new Date();

  return (
    dateToCompare.getUTCFullYear() === today.getUTCFullYear() &&
    dateToCompare.getUTCMonth() === today.getUTCMonth() &&
    dateToCompare.getUTCDate() === today.getUTCDate()
  );
};
