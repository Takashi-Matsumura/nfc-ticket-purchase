import React from "react";
import Link from "next/link";

import { HiOutlineTicket, HiOutlineInformationCircle } from "react-icons/hi2";
import { Separator } from "@/components/ui/separator";

type LayoutProps = {
  style?: React.CSSProperties;
};

export const Header: React.FC<LayoutProps> = ({ style }) => {
  // コンポーネントの定義
  return (
    <header style={style}>
      <div className="container mx-auto py-2 flex items-center justify-between">
        <HiOutlineTicket className="text-2xl" />
        Ticket Counter
        <HiOutlineInformationCircle className="text-2xl" />
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
      <p className="text-center py-2">© 2024 MatsBACCANO</p>
    </footer>
  );
};
