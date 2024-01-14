import React, { useContext } from "react";
import { Form } from "../components/Form";
import { ActiveContext } from "../state/NavigationContext";
import { DataDashboard } from "../components/DataDashboard";

export const LandingPage = () => {
  const { active } = useContext(ActiveContext);

  return (
    <div
      className="flex flex-col relative items-center min-h-screen"
      style={{ background: "#ECEFF0" }}
    >
      <div
        className="header bg-black w-full h-56 pt-7 pl-5"
        style={{ backgroundColor: "#082142" }}
      >
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
