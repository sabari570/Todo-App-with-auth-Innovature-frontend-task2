const handleErrors = (error) => {
  if (error?.name !== undefined && error?.name != "") {
    return error.name;
  } else if (error?.email !== undefined && error?.email != "") {
    return error.email;
  } else if (error?.password != undefined && error?.password != "") {
    return error.password;
  }
  return error.error;
};

export default handleErrors;
