import { sql } from "@vercel/postgres";

export default async function getUserByNfcId(id: string) {
  try {
    const { rows } = await sql`SELECT * FROM tbl_users`;
    return rows;
  } catch (error) {
    console.error("Error executing query:", error);
    throw new Error("Failed to execute query");
  }
}
