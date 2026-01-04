import Link from "next/link";

interface CaracteristicaProps {
  texto: string;
  index: number;
}

export default function Caracteristica({ texto, index }: CaracteristicaProps) {
  return (
    <Link href={`/caracteristicas/${index}`}>
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition cursor-pointer">
        <p className="text-white text-center">{texto}</p>
      </div>
    </Link>
  );
}
