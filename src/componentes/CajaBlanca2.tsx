export default function CajaBlanca2({ texto, className }: { texto: string, className?: string }) {
    return (
      <div className={`bg-[var(--white-smoke)] text-blue-950 rounded-xl p-4 text-center font-semibold ${className}`}>
        {texto}
      </div>
    );
  }