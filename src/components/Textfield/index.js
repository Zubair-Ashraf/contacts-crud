import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputGroup, FormControl } from "react-bootstrap";

const TextField = ({ type, startIcon, endIcon, className, as }) => {
  return (
    <InputGroup className="mb-3">
      {startIcon && (
        <InputGroup.Prepend>
          <InputGroup.Text className="border-right-0">
            <FontAwesomeIcon icon={startIcon} className="text-light" />
          </InputGroup.Text>
        </InputGroup.Prepend>
      )}
      <FormControl
        type={type || "text"}
        as={as}
        rows={6}
        className={`${className} ${startIcon && "border-left-0"} ${
          endIcon && "border-right-0"
        }`}
      />
      {endIcon && (
        <InputGroup.Prepend>
          <InputGroup.Text className="border-left-0 rounded">
            <FontAwesomeIcon icon={endIcon} className="text-light" />
          </InputGroup.Text>
        </InputGroup.Prepend>
      )}
    </InputGroup>
  );
};

export default TextField;
