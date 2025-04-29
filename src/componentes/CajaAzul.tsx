export default function CajaAzul({ texto, className, children }: { texto: string, className?: string, children?: React.ReactNode }) {
    return (
      <div className={`bg-blue-950 text-white rounded-xl p-4 text-center font-semibold ${className}`}>
        <h2 className="mb-4">{texto}</h2>
        {children}
      </div>
    );
  }