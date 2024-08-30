"use client";

import React, { useState } from "react";
import ConfirmButton from "../components/nfc/ConfirmButton";

const PageCsv = () => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");

  const handleCSV = async () => {
    // try {
    //   const response = await fetch(
    //     `/api/exportSales?year=${year}&month=${month}`,
    //     {
    //       method: "GET",
    //       headers: {
    //         "Cache-Control":
    //           "no-store, no-cache, must-revalidate, proxy-revalidate",
    //         Pragma: "no-cache",
    //         Expires: "0",
    //       },
    //     }
    //   );
    //   const data = await response.json();
    //   if (response.ok) {
    //     window.location.href = data.filePath;
    //   } else {
    //     console.error("Failed to export sales data:", data.error);
    //   }
    // } catch (error) {
    //   console.error("Error exporting sales data:", error);
    // }
  };

  return (
    <div className="flex flex-col p-10 items-center">
      <h1 className="text-3xl font-bold">CSVファイル出力</h1>
      <div className="flex items-center my-5">
        <select
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">選択してください</option>
          {Array.from(
            { length: 3 },
            (_, i) => new Date().getFullYear() - i
          ).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <label
          className="block text-gray-700 text-sm font-bold ml-2 mr-10"
          htmlFor="year"
        >
          年
        </label>

        <select
          id="month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">選択してください</option>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <label
          className="block text-gray-700 text-sm font-bold ml-2"
          htmlFor="month"
        >
          月
        </label>
      </div>
      <ConfirmButton
        label="管理者認証"
        onClick={() => {
          console.log("clicked");
        }}
      />
    </div>
  );
};

export default PageCsv;
