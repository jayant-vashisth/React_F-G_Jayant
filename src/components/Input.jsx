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
    <div className="flex flex-col gap-1 w-full min-w-80 relative font-customFont">
      <span>{title}</span>
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
        <span className="text-custom-sm text-red absolute -bottom-4 left-1">
          Enter Correct Email
        </span>
      )}
      {showPhoneError && (
        <span className="text-red text-custom-sm absolute -bottom-4 left-1">
          Enter Phone Number
        </span>
      )}
    </div>
  );
};

export const RadioInput = ({ title, handleInputChange, name }) => {
  return (
    <div className="flex flex-col gap-1 w-full font-customFont">
      <span>{title}</span>
      <div className="flex flex-row gap-3">
        <div className="flex flex-row items-center gap-2 justify-center">
          <span>Excellent</span>
          <input
            onChange={(e) => {
              handleInputChange(e);
            }}
            className="cursor-pointer"
            type="radio"
            name={name}
            value="Excellent"
          />
        </div>
        <div className="flex flex-row items-center gap-2 justify-center">
          <span>Good</span>
          <input
            onChange={(e) => {
              handleInputChange(e);
            }}
            type="radio"
            name={name}
            value="Good"
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-row items-center gap-2 justify-center">
          <span>Fair</span>
          <input
            onChange={(e) => {
              handleInputChange(e);
            }}
            type="radio"
            name={name}
            value="Fair"
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-row items-center gap-2 justify-center">
          <span>Bad</span>
          <input
            onChange={(e) => {
              handleInputChange(e);
            }}
            type="radio"
            name={name}
            value="Bad"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

// export const RadioGroup = ({title, group}) => {
//   return (
//     <div>
//       <span>Bad</span>
//       <input type="radio" name="fav_language" />
//     </div>
//   );
// };
