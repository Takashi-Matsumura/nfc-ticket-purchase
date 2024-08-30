"use client";

import React, { useState } from "react";
import { HiOutlineIdentification } from "react-icons/hi2";

type ConfirmButtonProps = {
  label: string;
  onClick: () => void;
};

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ label, onClick }) => {
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("NFCをかざしてクリック");

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        <HiOutlineIdentification className="text-2xl inline-flex mr-2" />
        {label}
      </button>
      {message && <p className="text-sm">{message}</p>}
    </div>
  );
};

export default ConfirmButton;
