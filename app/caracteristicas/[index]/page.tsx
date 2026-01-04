import caracteristicas from "@/app/data/caracteristicas.json";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ index: string }>;
}) {
  const { index: indextStr } = await params;
  const index = parseInt(indextStr);
  const item = caracteristicas[index];


  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-2xl bg-gray-900 p-10 rounded-2xl text-center">
        <h1 className="text-4xl text-white mb-4">{item.titulo}</h1>
        <p className="text-gray-300 text-lg mb-8">{item.detalhes}</p>

        <Link href="/caracteristicas" className="text-gray-400 hover:text-white">
          ← Voltar
        </Link>
      </div>
    </div>
  );
}
