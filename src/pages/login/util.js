const validateEmail = (email) => {
  const regex = /^\S+@\S+\.\S+$/;
  if (regex.test(email) === false) {
    return false;
  }
  return true;
};

export default validateEmail;
