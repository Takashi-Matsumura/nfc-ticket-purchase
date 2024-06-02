import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const CommitButton = ({ className, onClick, children }: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-600 transition duration-500 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </Button>
  );
};

interface SubmitProps {
  type?: "submit";
  className?: string;
  children: React.ReactNode;
}

export const SubmitButton = ({ type, className, children }: SubmitProps) => {
  return (
    <Button
      type={type}
      className={`bg-green-500 hover:bg-green-600 transition duration-500 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </Button>
  );
};

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const LinkButton = ({ href, className, children }: LinkProps) => {
  return (
    <Link
      href={href}
      className={`bg-gray-700 hover:bg-gray-900 transition duration-500 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </Link>
  );
};
