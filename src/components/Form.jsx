import React, { useContext, useEffect, useState } from "react";
import { Input, RadioInput } from "./Input";
import { Tabs } from "./Tabs";
import { initializeDB } from "../config/InitializeDB";
import { SuccessToast, Toast } from "./Toast";
import { ActiveContext } from "../state/NavigationContext";

export const Form = () => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    serviceQuality: "",
    beverageQuality: "",
    restaurantCleanliness: "",
    diningExperience: "",
  };

  const { setIsVisible, hideToast } = useContext(ActiveContext);

  const [formData, setFormData] = useState(initialFormData);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPhoneError, setShowPhoneError] = useState(false);

  // Function to add form data to IndexedDB
  function addFormData(formData) {
    initializeDB()
      .then((db) => {
        const transaction = db.transaction(["diningExperience"], "readwrite");
        const objectStore = transaction.objectStore("diningExperience");
        const request = objectStore.add(formData);

        request.onsuccess = () => {
          setIsVisible(true);
          hideToast();
          console.log("dasdasdasds");
        };

        transaction.oncomplete = () => {
          db.close();
        };
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Function to handle form submission
  const handleSubmit = async () => {
    // Add current form data to the array
    if (formData.email?.length != 0 && !isValidEmail(formData.email)) {
      setShowEmailError(true);
    }

    if (
      formData.email?.length != 0 &&
      !isValidIndianPhoneNumber(formData.phone)
    ) {
      setShowPhoneError(true);
    }

    if (
      isValidEmail(formData.email) &&
      isValidIndianPhoneNumber(formData.phone)
    ) {
      addFormData(formData);
      // Reset form data to its initial state
      setFormData(initialFormData);
    }
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name == "email" && (value.length == 0 || isValidEmail(value))) {
      setShowEmailError(false);
    }

    if (
      name == "phone" &&
      (value.length == 0 || isValidIndianPhoneNumber(value))
    ) {
      setShowPhoneError(false);
    }
  };

  const isValidEmail = (email) => {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidIndianPhoneNumber = (phoneNumber) => {
    // Regular expression for a simple Indian phone number validation
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phoneNumber);
  };

  return (
    <div className="flex flex-col gap-3 border w-4/5 -mt-14 rounded-t-lg bg-white px-5 py-3 font-customFont min-h-96">
      <Tabs />
      <div className="flex flex-row gap-6 mt-5">
        <Input
          title={`Customer Name`}
          placeholder={`Enter Customer Name`}
          handleInputChange={(e) => handleInputChange(e)}
          name={`name`}
          value={formData?.name}
        />
        <Input
          title={`Email`}
          placeholder={`Enter Email`}
          handleInputChange={(e) => handleInputChange(e)}
          name={`email`}
          value={formData?.email}
          showEmailError={showEmailError}
        />
      </div>

      <div className="flex flex-row gap-6 w-1/2 pr-3">
        <Input
          title={`Phone`}
          placeholder={`Enter Phone Number`}
          type={`number`}
          handleInputChange={(e) => handleInputChange(e)}
          name={`phone`}
          value={formData?.phone}
          showPhoneError={showPhoneError}
        />
      </div>

      <div className="flex flex-col gap-3 mt-2">
        <div className="flex flex-row gap-8">
          <RadioInput
            title={`Please rate the quality of the service you received from your host.`}
            handleInputChange={(e) => handleInputChange(e)}
            name={`serviceQuality`}
          />
          <RadioInput
            title={`Please rate the quality of your beverage.`}
            handleInputChange={(e) => handleInputChange(e)}
            name={`beverageQuality`}
          />
        </div>

        <div className="flex flex-row gap-8">
          <RadioInput
            title={`Was our restaurant clean?`}
            handleInputChange={(e) => handleInputChange(e)}
            name={`restaurantCleanliness`}
          />
          <RadioInput
            title={`Please rate your overall dining experience.`}
            handleInputChange={(e) => handleInputChange(e)}
            name={`diningExperience`}
          />
        </div>
      </div>

      <div className="flex flex-row items-center justify-center mt-3">
        <button
          onClick={handleSubmit}
          style={{ background: "rgb(8, 33, 66)" }}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Submit Form
        </button>
      </div>
    </div>
  );
};
