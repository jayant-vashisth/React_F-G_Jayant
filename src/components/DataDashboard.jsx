import React from "react";
import { Tabs } from "./Tabs";
import { Table } from "./Table";
export const DataDashboard = () => {
  return (
    <div className="flex flex-col border w-4/5 -mt-14 rounded-t-lg bg-white px-5 py-3 pb-5 font-customFont">
      <Tabs />
      <Table />
    </div>
  );
};
