import { NextRequest, NextResponse } from 'next/server';
import { parse } from 'json2csv';
import fs from 'fs';
import path from 'path';
import iconv from 'iconv-lite';
import { getSales } from '@/app/sql/sqls';
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { sql } from '@vercel/postgres';

export async function GET(request: Request) {
  try {
    //const sales = await getSales();
    try {
      const {rows} =
        await sql`SELECT * FROM tbl_ticket_purchases;`;

        console.log(rows);

      if (rows.length === 0) {
        return NextResponse.json({ message: 'No sales data available' });
      }

      const csv = parse(rows);
      const filePath = path.join(process.cwd(), 'public', 'sales_data.csv');
  
      // UTF-8 with BOM
      const csvWithBom = iconv.encode('\uFEFF' + csv, 'utf-8');
      fs.writeFileSync(filePath, csvWithBom);

      return NextResponse.json({ message: 'CSV file has been saved', filePath: '/sales_data.csv' });
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }


    // if (sales.length === 0) {
    //   return NextResponse.json({ message: 'No sales data available' });
    // }

    //   const formattedSales = sales.map((sale) => {
    //       const saleDate = toZonedTime(sale.saledate, 'Asia/Tokyo');
    //       return {
    //         ...sale,
    //         saledate: format(saleDate, 'yyyy-MM-dd HH:mm:ssXXX'),
    //       };
    //   });

    //   const csv = parse(formattedSales);
    //   const filePath = path.join(process.cwd(), 'public', 'sales_data.csv');

    //   // UTF-8 with BOM
    //   const csvWithBom = iconv.encode('\uFEFF' + csv, 'utf-8');
    //   fs.writeFileSync(filePath, csvWithBom);

    return NextResponse.json({ message: 'CSV file has been saved', filePath: '/sales_data.csv' });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}