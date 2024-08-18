import { sql } from "@vercel/postgres";

export async function getUserByNfcId(cardid: string) {
  try {
    const { rows } =
      await sql`SELECT user_id as userId,name,nfc_id as cardId FROM tbl_users WHERE nfc_id = ${cardid}`;
    return rows;
  } catch (error) {
    console.error("Error executing query:", error);
    throw new Error("Failed to execute query");
  }
}

export async function putUser(name: string, userid: string, cardid: string) {
  try {
    const { rows } =
      await sql`INSERT INTO tbl_users (user_id,name,nfc_id) VALUES (${userid},${name},${cardid})`;
    return rows;
  } catch (error) {
    console.error("Error executing query:", error);
    throw new Error("Failed to execute query");
  }
}
