import { sql } from "@vercel/postgres";

export default async function Cart({
  params,
}: {
  params: { user: string };
}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * FROM employees`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.first_name} {row.last_name}
        </div>
      ))}
    </div>
  );
}
