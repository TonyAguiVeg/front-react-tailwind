export default function CajaBlanca({ texto, className }: { texto: string, className?: string }) {
    return (
      <div className={`bg-[var(--white-smoke)] text-blue-950 rounded-xl p-4 text-center font-semibold
       md:text-white md:bg-transparent ${className}`}>
        {texto}
      </div>
    );
  }