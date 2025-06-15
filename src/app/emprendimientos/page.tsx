import Link from "next/link";
import { getAllEmprendimientos } from "@/lib/emprendimientos";

export const metadata = {
  title: "Emprendimientos",
  description: "Listado de todos los emprendimientos disponibles",
};

export default function EmprendimientosPage() {
  const emprendimientos = getAllEmprendimientos();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Emprendimientos</h1>
      <ul>
        {emprendimientos.map((e) => (
          <li key={e.slug}>
            <Link href={`/${e.slug}`}>
              {e.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
