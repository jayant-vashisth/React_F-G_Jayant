import React, { useState } from "react";

export const Table = () => {
  const [formDataArray, setFormDataArray] = useState(() => {
    // Retrieve data from local storage on component mount
    const storedData = localStorage.getItem("formDataArray");
    return storedData ? JSON.parse(storedData) : [];
  });

  return (
    <div class="mt-8 overflow-x-auto h-96 data-table">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  z-10">
        <thead class="text-xs text-gray-700 uppercase bg-bg-gray-100 dark:bg-gray-700 dark:text-gray-400 sticky top-0 z-100">
          <tr>
            <th scope="col" class="px-3 py-2">
              Name
            </th>
            <th scope="col" class="px-3 py-2">
              Email
            </th>
            <th scope="col" class="px-3 py-2">
              Phone No.
            </th>
            <th scope="col" class="px-3 py-2">
              Quality of service
            </th>
            <th scope="col" class="px-3 py-2">
              Quality of beverage
            </th>
            <th scope="col" class="px-3 py-2">
              Cleanliness
            </th>
            <th scope="col" class="px-3 py-2">
              Dining experience
            </th>
          </tr>
        </thead>
        <tbody>
          {formDataArray?.map((data, index) => {
            return (
              <tr
                key={index}
                class={`${index % 2 === 0 ? "bg-white" : "bg-bg-gray-100"}`}
              >
                <th
                  scope="row"
                  class="px-3 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data?.name}
                </th>
                <td class="px-3 py-2">{data?.email}</td>
                <td class="px-3 py-2">{data?.phone}</td>
                <td class="px-3 py-2">{data?.serviceQuality}</td>
                <td class="px-3 py-2">{data?.beverageQuality}</td>
                <td class="px-3 py-2">{data?.restaurantCleanliness}</td>
                <td class="px-3 py-2">{data?.diningExperience}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
