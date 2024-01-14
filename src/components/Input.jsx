import React from "react";

export const Input = ({
  title,
  placeholder,
  type,
  handleInputChange,
  name,
  value,
  showEmailError,
  showPhoneError,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full relative font-customFont">
      <span className="flex flex-row">
        {title}
        <p className="text-customRed">*</p>
      </span>
      <input
        style={{ border: "1px solid #CFD7DC" }}
        className="h-10 pl-3 pr-3"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      {showEmailError && (
        <span className="text-custom-sm text-red absolute -bottom-4 left-1 text-customRed">
          Enter Correct Email Address
        </span>
      )}
      {showPhoneError && (
        <span className="text-red text-custom-sm absolute -bottom-4 left-1  text-customRed">
          Enter Correct Phone Number
        </span>
      )}
    </div>
  );
};

export const RadioInput = ({ title, handleInputChange, name, value }) => {
  return (
    <div className="flex flex-col gap-1 w-full font-customFont">
      <span className="flex flex-row">
        {title} <p className="text-customRed">*</p>
      </span>
      <div className="flex flex-row gap-3">
        <RadioGroup
          title={`Excellent`}
          value={value}
          name={name}
          handleInputChange={handleInputChange}
        />
        <RadioGroup
          title={`Good`}
          value={value}
          name={name}
          handleInputChange={handleInputChange}
        />
        <RadioGroup
          title={`Fair`}
          value={value}
          name={name}
          handleInputChange={handleInputChange}
        />
        <RadioGroup
          title={`Bad`}
          value={value}
          name={name}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export const RadioGroup = ({ title, value, name, handleInputChange }) => {
  return (
    <div className="flex flex-row items-center gap-2 justify-center">
      <span>{title}</span>
      <input
        onChange={(e) => handleInputChange(e)}
        checked={value == title}
        type="radio"
        name={name}
        value={title}
        className="cursor-pointer"
      />
    </div>
  );
};
