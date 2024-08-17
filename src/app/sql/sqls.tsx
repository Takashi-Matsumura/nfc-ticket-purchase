import { sql } from "@vercel/postgres";

export default async function getUserByNfcId(id: string) {
  try {
    const { rows } =
      await sql`SELECT user_id as userId,name,nfc_id as cardId FROM tbl_users`;
    return rows;
  } catch (error) {
    console.error("Error executing query:", error);
    throw new Error("Failed to execute query");
  }
}
