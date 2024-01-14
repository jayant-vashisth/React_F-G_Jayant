import React, { useContext } from "react";
import { ToasterContext } from "../state/ToasterContext";
import warning from "../assets/svg/warning.svg";
import check from "../assets/svg/check.svg";
import cross from "../assets/svg/cross.svg";

export const WarningToast = () => {
  const { setIsErrorVisible } = useContext(ToasterContext);

  return (
    <div
      id="toast-warning"
      class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
      role="alert"
    >
      <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
        <img className="w-5 h-5" src={warning} alt="warning" />
        <span class="sr-only">Warning icon</span>
      </div>
      <div class="ms-3 text-sm font-normal">All Fields Are Mandatory</div>
      <button
        type="button"
        class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-warning"
        aria-label="Close"
        onClick={() => {
          setIsErrorVisible(false);
        }}
      >
        <span class="sr-only">Close</span>
        <img className="w-3 h-3" src={cross} alt="cross" />
      </button>
    </div>
  );
};

export const SuccessToast = () => {
  const { setIsVisible } = useContext(ToasterContext);

  return (
    <div
      id="toast-success"
      class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
      role="alert"
    >
      <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <img className="w-5 h-5" src={check} alt="check" />
        <span class="sr-only">Check icon</span>
      </div>
      <div class="ms-3 text-sm font-normal">
        Thank you for completing the information
      </div>
      <button
        type="button"
        class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-success"
        aria-label="Close"
        onClick={() => {
          setIsVisible(false);
        }}
      >
        <span class="sr-only">Close</span>
        <img className="w-3 h-3" src={cross} alt="cross" />
      </button>
    </div>
  );
};
