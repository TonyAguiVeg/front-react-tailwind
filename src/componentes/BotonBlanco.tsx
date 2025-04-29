export default function BotonBlanco ({ texto }: { texto: string }){
    return(
        <button className="bg-[var(--white-smoke)] text-blue-950 font-bold p-3 rounded-2xl mx-auto
         hover:bg-gray-200 cursor-pointer md:bg-transparent md:text-white">
            {texto}
        </button>
    )
}