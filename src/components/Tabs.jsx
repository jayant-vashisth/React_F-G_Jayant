import React, { useContext } from "react";
import { ActiveContext } from "../state/NavigationContext";

export const Tabs = () => {
  const { setActive, active } = useContext(ActiveContext);
  return (
    <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul class="flex flex-wrap -mb-px">
        <li class="me-2">
          <span
            className={`inline-block px-4 py-2 border-b-2 rounded-t-lg ${
              active
                ? `active dark:text-blue-500 dark:border-blue-500 border-blue-600 text-blue-600`
                : `border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`
            }  cursor-pointer`}
            onClick={() => {
              setActive(true);
            }}
          >
            Form
          </span>
        </li>
        <li class="me-2">
          <span
            className={`inline-block px-4 py-2 border-b-2 rounded-t-lg ${
              !active
                ? `active dark:text-blue-500 dark:border-blue-500 border-blue-600 text-blue-600`
                : `border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`
            }  cursor-pointer`}
            onClick={() => {
              setActive(false);
            }}
          >
            Dashboard
          </span>
        </li>
      </ul>
    </div>
  );
};
