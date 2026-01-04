export default function Page() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-gray-950 rounded-xl shadow-2xl p-10 border border-gray-800">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          Desenvolvimento Web Moderno
        </h2>
        
        <ul className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
            <span>React e Next.js revolucionaram a criação de interfaces web.</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
            <span>São usados por empresas como Facebook, Netflix e Airbnb.</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
            <span>Dominar essas tecnologias abrirá muitas oportunidades!</span>
          </li>
        </ul>
      </div>
    </div>
  );
}