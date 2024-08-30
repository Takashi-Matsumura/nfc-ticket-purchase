import { NextRequest, NextResponse } from 'next/server';
import { parse } from 'json2csv';
import fs from 'fs';
import path from 'path';
import iconv from 'iconv-lite';
import { getSales } from '@/app/sql/sqls';
import { format, toZonedTime } from 'date-fns-tz';

// export async function GET(req: NextRequest) {
//   try {
//     const salesData = await getSales();
//     //console.log('salesData:', salesData);

//     // 日付をJSTに変換
//     const jstSalesData = salesData.map((sale: any) => {
//       const jstDate = toZonedTime(sale.purchase_date, 'Asia/Tokyo');
//       return {
//         ...sale,
//         purchase_date: format(jstDate, 'yyyy-MM-dd HH:mm:ssXXX', { timeZone: 'Asia/Tokyo' })
//       };
//     });

//     const csv = parse(jstSalesData);
//     const filePath = path.join(process.cwd(), 'public', 'sales_data.csv');
    
//     // UTF-8 with BOM
//     const csvWithBom = iconv.encode('\uFEFF' + csv, 'utf-8');
//     fs.writeFileSync(filePath, csvWithBom);
    
//     return NextResponse.json({ message: 'CSV file has been saved', filePath: '/sales_data.csv' });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.error();
//   }
// }