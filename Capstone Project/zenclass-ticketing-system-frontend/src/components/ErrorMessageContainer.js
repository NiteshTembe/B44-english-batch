import React from "react";
import { BsExclamationCircle } from "react-icons/bs";

export const ErrorMessageContainer = ({ errMessage }) => {
  return (
    <div className="errorMessageContainer">
      <div className="row d-flex ml-1">
        <p className="errMessage">
          <BsExclamationCircle />
          &nbsp;{errMessage}
        </p>
      </div>
    </div>
  );
};
