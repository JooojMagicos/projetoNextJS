import tecnologiasData from '@/app/data/tecnologias.json';
import TecnologiaCard from '@/components/tecnologias/tecnologiasCard';
import Image from 'next/image';

const Tecnologias = () => {
  const tecnologias = JSON.parse(JSON.stringify(tecnologiasData));

  return (
    <div className="p-8 lg:p-12">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">
        Tecnologias Aprendidas
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center">
        {tecnologias.map((tech: any, index: number) => (
          <TecnologiaCard
            key={index}
            title={tech.title}
            image={tech.image}
          />
        ))}
      </div>

      {/* Seção extra com descrição e rating (opcional, mas útil) */}
      <div className="mt-16 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">
          Detalhes e Avaliação
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tecnologias.map((tech: any, index: number) => (
            <div
              key={`detail-${index}`}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
            >
              <div className="flex items-center gap-6 mb-4">
                <Image
                  src={`/tecnologias/${tech.image}`}
                  alt={tech.title}
                  width={60}
                  height={60}
                  unoptimized
                />
                <h4 className="text-xl font-semibold text-white">{tech.title}</h4>
              </div>
              <p className="text-gray-400 mb-4">{tech.description}</p>
              <div className="flex gap-1 text-2xl">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={i < tech.rating ? 'text-yellow-400' : 'text-gray-700'}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tecnologias;