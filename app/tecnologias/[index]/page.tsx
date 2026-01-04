// app/tecnologia/[index]/page.tsx

import tecnologiasData from '../../data/tecnologias.json';
import TecnologiaDetailsCard from '@/components/tecnologias/tecnologiasDetailsCard';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function TecnologiaPage({
  params,
}: {
  params: Promise<{ index: string }>;
}) {
  // tem que fazer awiat se nao ele n acha o bagulho
  const { index: indexStr } = await params;
  const index = parseInt(indexStr, 10);

  if (isNaN(index) || index < 0 || index >= tecnologiasData.length) {
    notFound(); // Mostra 404 oficial (usa sua página not-found.tsx se existir)
  }

  const tech = tecnologiasData[index];

  return (
    <div className="min-h-screen bg-black py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/tecnologias"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-10 transition-colors"
        >
          ← Voltar às tecnologias
        </Link>

        <TecnologiaDetailsCard tech={tech} />
      </div>
    </div>
  );
}

// Opcional, mas recomendado: pré-gera todas as páginas válidas
export async function generateStaticParams() {
  return tecnologiasData.map((_, index) => ({
    index: index.toString(),
  }));
}