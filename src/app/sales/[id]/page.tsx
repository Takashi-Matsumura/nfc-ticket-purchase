"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import getUserByNfcId from "@/app/sql/sqls";

export default function EmployeeSales() {
  const { id } = useParams<{ id: string }>();
  const [employeeName, setEmployeeName] = useState<string | null>(null);
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rows = await getUserByNfcId(id);
        setRows(rows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (rows.length > 0) {
      setEmployeeName(rows[0].name);
    } else {
      setEmployeeName("No employee found");
    }
  }, [rows]);

  return (
    <div className="container mx-auto">
      <h1>Sales dynamic routing {id}</h1>
      <p>Employee Name: {employeeName ? employeeName : "Loading..."}</p>
    </div>
  );
}
