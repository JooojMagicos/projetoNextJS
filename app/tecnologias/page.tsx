// app/tecnologias/page.tsx

import tecnologiasData from '../data/tecnologias.json';
import TecnologiaCard from '@/components/tecnologias/tecnologiasCard';
import Image from 'next/image';

const Tecnologias = () => {
  const tecnologias = JSON.parse(JSON.stringify(tecnologiasData));

  return (
    <div className="p-8 lg:p-12 min-h-screen bg-black">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">
        Tecnologias Aprendidas
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center max-w-6xl mx-auto">
        {tecnologias.map((tech: any, index: number) => (
          <TecnologiaCard
            key={index}
            title={tech.title}
            image={tech.image}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Tecnologias;