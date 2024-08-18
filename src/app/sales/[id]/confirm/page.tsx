"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const ConfirmPage = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const userid = searchParams.get("userid");
  const cardid = searchParams.get("cardid");
  const ticket = searchParams.get("ticket");
  const book = searchParams.get("book");

  return (
    <div>
      <div>
        <h1>Hello</h1>
        <p>名前: {name}</p>
        <p>ユーザーID: {userid}</p>
        <p>カードID: {cardid}</p>
        <p>チケット枚数: {ticket}</p>
        <p>本の冊数: {book}</p>
      </div>
    </div>
  );
};

export default ConfirmPage;
