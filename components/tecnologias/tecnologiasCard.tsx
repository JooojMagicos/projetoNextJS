import Image from 'next/image';

interface TecnologiaCardProps {
  title: string;
  image: string;
}

export default function TecnologiaCard({ title, image }: TecnologiaCardProps) {
  return (
    <div className="w-48 h-48 bg-gray-900 rounded-2xl shadow-xl border border-gray-800 flex flex-col items-center justify-center p-6 hover:border-gray-600 transition-all duration-300">
      <Image
        src={`/tecnologias/${image}`}
        alt={title}
        width={80}
        height={80}
        className="mb-4 object-contain"
        unoptimized
      />
      <h3 className="text-lg font-semibold text-white text-center">
        {title}
      </h3>
    </div>
  );
}