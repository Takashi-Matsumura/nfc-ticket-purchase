import React from "react";
import { RecordButton } from "../button/Buttons";

interface DataPaneProps {
  employee: {
    name: string | null;
    userid: string | null;
    cardid: string | null;
  };
}

const DataPane: React.FC<DataPaneProps> = ({ employee }) => {
  return (
    <div className="flex flex-col items-center justify-center w-1/2">
      <h1 className="text-3xl font-bold mb-5">カード情報</h1>
      <h2 className="text-5xl font-semibold">{employee.cardid}</h2>
      <p className="text-red-600">あなたのカード情報が登録されておりません</p>
      <div className="flex text-3xl mt-16 items-center">
        <p className="w-64 text-right">社員番号：</p>
        <input
          type="text"
          className="w-full p-2 border-2 rounded-lg"
          defaultValue={employee.userid ?? undefined}
        />
      </div>
      <div className="flex text-3xl my-10 items-center">
        <p className="w-64 text-right">氏名：</p>
        <input
          type="text"
          className="w-full p-2 border-2 rounded-lg"
          defaultValue={employee.name ?? undefined}
        />
      </div>
      <p></p>

      <div className="flex"></div>
      <div className="flex flex-col justify-center w-full">
        <p className="text-center w-full">確認画面へ進んでください</p>
        <RecordButton onClick={() => {}} className="text-3xl py-12">
          DB登録
        </RecordButton>
      </div>
    </div>
  );
};

export default DataPane;
