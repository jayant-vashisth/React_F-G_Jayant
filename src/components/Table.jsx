import React, { useEffect, useState } from "react";
import { getFormData, initializeDB } from "../config/InitializeDB";
import search from "../assets/svg/search.svg";

export const Table = () => {
  const [formDataArray, setFormDataArray] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [updatedSearchQuery, setUpdatedSearchQuery] = useState("");

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getFormData(setFormDataArray);
  }, []);

  const handleSearch = () => {
    setUpdatedSearchQuery(searchQuery);
    setFilteredData(
      formDataArray.filter(
        (data) =>
          data.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          data.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          data.phone.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  return (
    <div class="mt-4 overflow-x-auto flex h-96 flex-col gap-3 data-table">
      <div className="mt-2">
        <div>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <img
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                src={search}
                alt="search"
              />
            </div>
            <input
              type="search"
              id="default-search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Name, Email, Phone No..."
              required
            />
            <button
              onClick={handleSearch}
              class="text-white absolute end-0 -bottom-0.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </div>
      </div>
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
          {(updatedSearchQuery === "" ? formDataArray : filteredData)?.map(
            (data, index) => {
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
            }
          )}
        </tbody>
      </table>
    </div>
  );
};
