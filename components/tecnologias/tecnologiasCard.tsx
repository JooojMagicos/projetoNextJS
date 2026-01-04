import Image from 'next/image';
import Link from 'next/link';

interface TecnologiaCardProps {
  title: string;
  image: string;
  index: number;
}

export default function TecnologiaCard({ title, image, index }: TecnologiaCardProps) {
  return (
    <Link href={`/tecnologia/${index}`}>
      <div className="w-30 h-40 bg-gray-900 rounded-2xl shadow-xl border border-gray-800 flex flex-col items-center justify-between p-8 hover:border-gray-600 hover:shadow-2xl transition-all duration-300 cursor-pointer">
        {/* Imagem centralizada e responsiva */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={`/tecnologias/${image}`}
            alt={title}
            width={100}
            height={100}
            className="max-w-full max-h-full object-contain"
            unoptimized
          />
        </div>

        {/* Título sempre na parte de baixo, centralizado */}
        <h3 className="text-lg font-semibold text-white text-center mt-4">
          {title}
        </h3>
      </div>
    </Link>
  );
}