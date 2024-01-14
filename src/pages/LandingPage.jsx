import React, { useContext } from "react";
import { Form } from "../components/Form";
import { ActiveContext } from "../state/NavigationContext";
import { DataDashboard } from "../components/DataDashboard";
import { SuccessToast, WarningToast } from "../components/Toast";
import { ToasterContext } from "../state/ToasterContext";

export const LandingPage = () => {
  const { active } = useContext(ActiveContext);
  const { isVisible, isErrorVisible } = useContext(ToasterContext);

  return (
    <div className="flex flex-col relative items-center min-h-screen pb-10 bg-bgColor">
      <div className="absolute right-4 top-5">
        {isVisible && <SuccessToast />}
        {isErrorVisible && <WarningToast />}
      </div>
      <div className="header bg-black w-full h-56 pt-7 pl-5 bg-darkBlue">
        <span className="text-white font-bold text-custom-xl font-customFont">
          Aromatic Bar
        </span>
        <p className="text-white font-customFont">
          We are committed to providing you with the best dining experience
          possible, so we welcome your comments. Please fill out this
          questionnaire. Thank you.
        </p>
      </div>
      {active ? <Form /> : <DataDashboard />}
    </div>
  );
};
