"use client";

import { useParams } from "next/navigation";

export default function EmployeeSales() {
  const id = useParams<{ id: string }>().id;

  return (
    <div className="container mx-auto">
      <h1>Sales dynamic routing {id}</h1>
    </div>
  );
}
