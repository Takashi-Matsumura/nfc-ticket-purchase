"use client";

import React from "react";

import { HiOutlineHome, HiOutlineInformationCircle } from "react-icons/hi2";
import { FaFileCsv } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

type LayoutProps = {
  style?: React.CSSProperties;
};

export const Header: React.FC<LayoutProps> = ({ style }) => {
  // コンポーネントの定義
  return (
    <header style={style}>
      <div className="container bg-white mx-auto py-2 flex items-center justify-between">
        <div className="flex items-center space-x-5 w-1/4">
          <Link href="/">
            <HiOutlineHome className="text-2xl" />
          </Link>
          <Link href="/csv" className="text-xl text-green-800">
            <FaFileCsv />
          </Link>
        </div>
        {process.env.NEXT_PUBLIC_APP_NAME}
        <div className="flex items-center w-1/4 justify-end">
          <Link href="/help">
            <HiOutlineInformationCircle className="text-2xl" />
          </Link>
        </div>
      </div>
      <Separator />
    </header>
  );
};

export const SalesHeader: React.FC<LayoutProps> = ({ style }) => {
  // コンポーネントの定義
  return (
    <header style={style}>
      <div className="container bg-white mx-auto py-2 flex items-center justify-end">
        <Link href="/help">
          <HiOutlineInformationCircle className="text-2xl" />
        </Link>
      </div>
      <Separator />
    </header>
  );
};

export const Footer: React.FC<LayoutProps> = ({ style }) => {
  // コンポーネントの定義
  return (
    <footer style={style}>
      <Separator />
      <p className="text-center bg-white py-2">© 2024 MatsBACCANO</p>
    </footer>
  );
};
