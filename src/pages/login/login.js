import React from "react";

const LoginPresentational = ({ isUserNameValid, isUserPasswordValid }) => {
  return (
    <>
      {(isUserNameValid === false && <div>user name invalid</div>) || (
        <div></div>
      )}
      {(isUserPasswordValid === false && (
        <div>Por favor ingrese password correcto</div>
      )) || <div></div>}
    </>
  );
};

export default LoginPresentational;
