import InputComponent from "@/components/Input/Input"

export default function InputPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Inputs e Tarefas
        </h1>

        <InputComponent />
      </div>
    </div>
  );
}
