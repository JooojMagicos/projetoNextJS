"use client";
import Image from "next/image";
import Link from "next/link";
import ContadorPersonalizado from "@/components/contador/ContadorLikes";

interface TecnologiaCardProps {
  title: string;
  image: string;
  index: number;
}

export default function TecnologiaCard({
  title,
  image,
  index,
}: TecnologiaCardProps) {
  return (
    <Link href={`/tecnologias/${index}`}>
      <div className="w-30 h-60 bg-gray-900 rounded-2xl shadow-xl border border-gray-800 flex flex-col items-center p-6 hover:border-gray-600 transition">

        {/* Conteúdo flexível */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <Image
            src={`/tecnologias/${image}`}
            alt={title}
            width={80}
            height={80}
            className="object-contain"
            unoptimized
          />

          <h3 className="text-base font-semibold text-white text-center mt-3">
            {title}
          </h3>
        </div>

        {/* Footer fixo */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="mt-2"
        >
          <ContadorPersonalizado id={index} />
        </div>
      </div>

    </Link>
  );
}
