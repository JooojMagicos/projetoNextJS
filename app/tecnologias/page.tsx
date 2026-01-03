import Image from 'next/image'
import tecnologiasData from '../data/tecnologias.json'

const Tecnologias = () => {
    
    const tecnologias = JSON.parse(JSON.stringify(tecnologiasData)) // converte o tal do jason

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">
                Tecnologias Aprendidas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tecnologias.map((tech: any, index: number) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
                    >
                        <Image
                            src={`/tecnologias/${tech.image}`}
                            alt={tech.title}
                            width={80}
                            height={80}
                        />

                        <h3 className="text-xl font-semibold mt-4">
                            {tech.title}
                        </h3>

                        <p className="text-gray-600 mt-2">
                            {tech.description}
                        </p>

                        <div className="mt-4 text-yellow-500">
                            {'★'.repeat(tech.rating)}
                            {'☆'.repeat(5 - tech.rating)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tecnologias
