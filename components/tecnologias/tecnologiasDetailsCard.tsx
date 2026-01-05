import Image from "next/image";
import ContadorPersonalizado from "@/components/contador/ContadorLikes";

interface Tecnologia {
  title: string;
  image: string;
  description: string;
  rating: number;
}

interface TecnologiaDetailsCardProps {
  tech: Tecnologia;
  index: number;
}

export default function TecnologiaDetailsCard({
  tech,
  index,
}: TecnologiaDetailsCardProps) {
  return (
    <div className="bg-gray-900 rounded-3xl shadow-2xl p-10 lg:p-14 border border-gray-800">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

        <div className="flex-shrink-0">
          <Image
            src={`/tecnologias/${tech.image}`}
            alt={tech.title}
            width={150}
            height={150}
            className="rounded-xl"
            unoptimized
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-white mb-6">
            {tech.title}
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            {tech.description}
          </p>

          <div className="flex items-center gap-2 justify-center md:justify-start mb-6">
            <span className="text-gray-400 text-lg">
              Nível de domínio:
            </span>

            <div className="flex gap-1 text-3xl">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={
                    i < tech.rating
                      ? "text-yellow-400"
                      : "text-gray-700"
                  }
                >
                  ★
                </span>
              ))}
            </div>

            <span className="text-gray-500 ml-2">
              ({tech.rating}/5)
            </span>
          </div>

          <ContadorPersonalizado id={index} />
        </div>
      </div>
    </div>
  );
}
