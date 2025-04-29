export default function BotonAzul({ texto,className }: { texto: string,className?: string }) {
  return (
    <button className={`bg-blue-800 text-white font-bold mx-auto rounded-2xl p-3 cursor-pointer ${className}`}>
      {texto}
    </button>
  );
}