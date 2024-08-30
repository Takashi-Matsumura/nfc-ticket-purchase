"use client";

import { cache } from "react";
import CustomerCard from "../components/sales/CustomerCard";
import EmployeeCard from "../components/sales/EmployeeCard";

export default function Sales() {
  // const handleCSV = async () => {
  //   try {
  //     const response = await fetch("/api/exportSales");
  //     const data = await response.json();
  //     if (response.ok) {
  //       window.location.href = data.filePath;
  //     } else {
  //       console.error("Failed to export sales data:", data.error);
  //     }
  //   } catch (error) {
  //     console.error("Error exporting sales data:", error);
  //   }
  // };

  return (
    <div className="container mx-auto flex flex-col">
      <div className="flex items-center">
        <EmployeeCard />
        <CustomerCard />
      </div>
    </div>
  );
}
