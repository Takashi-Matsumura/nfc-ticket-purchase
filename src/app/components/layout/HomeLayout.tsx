import React from "react";

import { HiOutlineTicket, HiOutlineInformationCircle } from "react-icons/hi2";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

type LayoutProps = {
  style?: React.CSSProperties;
};

export const Header: React.FC<LayoutProps> = ({ style }) => {
  // コンポーネントの定義
  return (
    <header style={style}>
      <div className="container mx-auto py-2 flex items-center justify-between">
        <Link href="/">
          <HiOutlineTicket className="text-2xl" />
        </Link>
        {process.env.NEXT_PUBLIC_APP_NAME}
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
      <p className="text-center py-2">© 2024 MatsBACCANO</p>
    </footer>
  );
};
