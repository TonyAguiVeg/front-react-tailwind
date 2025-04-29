import BotonAzul from "@/componentes/BotonAzul";
import BotonBlanco from "@/componentes/BotonBlanco";
import CajaBlanca from "@/componentes/CajaBlanca";
import CajaAzul from "@/componentes/CajaAzul";
import 'bootstrap-icons/font/bootstrap-icons.css';
import CajaBlanca2 from "@/componentes/CajaBlanca2";

export default function Home() {
  return (
    <>
     <div className="min-h-screen w-full md:bg-[url('/banner-person.webp')] bg-cover bg-center bg-no-repeat pl-25 pt-5" >
     <div className="container items-center justify-center">
    <header className="p-1">
      <section className="flex flex-row hidden lg:flex pb-5">
        <li className="text-white bold hover:underline decoration-amber-600 decoration-4 underline-offset-4 
        list-none mr-3.5 text-2xl">Personas</li>
        <li className="text-white bold hover:underline decoration-amber-600 decoration-4 underline-offset-4 
        list-none ml-3.5 text-2xl">Empresas</li>
        </section>
      <nav className="flex justify-between items-center bg-[var(--white-smoke)] h-4x p-1 md:bg-transparent">
        <img src="/isotipo-rextie.svg" alt="isotipo" className="block md:hidden"/>
        <img src="/rextie-icon-redesign.svg" alt="logo" className="hidden md:block"/>
        <section className="flex justify-between flex-row ">
          <section className="flex flex-row hidden lg:flex text-center justify-center items-center">
            <li className="text-white bold list-none hover:underline underline-offset-4 mr-5 ml-5 ">Nosotros</li>
            <li className="text-white bold list-none hover:underline underline-offset-4 mr-5 ml-5 ">Blog</li>
            <li className="text-white bold list-none hover:underline underline-offset-4 mr-5 ml-5 ">Servicios</li>
            <div className="w-px h-6 bg-gray-300 mx-4"></div>
          </section>
        <section className="flex justify-between flex-row ">
        <BotonBlanco texto="Iniciar sesión" />
        <BotonAzul texto="Regístrate" />
        </section>
        <i class="bi bi-list text-4xl text-blue-950 self-auto lg:hidden cursor-pointer"></i>
        </section>
      </nav>
      </header>
      
      <main className="flex flex-col justify-center items-center">
        <CajaBlanca texto="La casa de cambio online líder del Perú" className="text-4xl font-extrabold 
        lg:-translate-x-135
        lg:translate-y-30 lg:scale-[1.5] lg:max-w-[370px] break-words lg:text-left"/>

        <CajaBlanca texto ="Celebramos un nuevo récord: 6 mil millones de dólares cambiados para nuestros clientes
        "
         className="font-thin lg:translate-y-40 lg:-translate-x-135 lg:scale-[1.5] lg:max-w-[370px] break-words text-left"/>

        <div className="flex flex-row justify-center lg:translate-y-60 lg:-translate-x-120 lg:scale-[1.5] " >
          <section className="flex flex-col ">
            <section className="flex flex-row text-center justify-center items-center ">
            <img src="/citi.png" alt="citi" className="w-9 h-5 mr-2.5 block md:hidden" />
            <img src="/citi-white.svg" alt="citi" className="w-9 h-5 mr-2.5 hidden md:block" />
            <img src="/rpp-home.svg" alt="rpp" className="w-9 h-auto  ml-2.5 " />
            </section>
        <CajaBlanca texto="Inversionistas estratégicos" className="text-xs "/>
        </section>
        <section className="flex flex-col justify-center items-center text-center">
          <img src="/visa-home.svg" alt="visa" className="w-13 h-auto self-center block md:hidden"  />
          <img src="/visa-white-yellow-logo.svg" alt="visa" className="w-13 h-auto self-cente hidden md:block" />
          
        <CajaBlanca texto="Aliado Estratégico" className="text-xs "/>
        </section>
        </div>


        <CajaAzul texto="Cambia al instante con todos los bancos en Perú"  className="md:translate-x-120  md:-translate-y-10
        md:transfom scale-y-105 md:transform scale-x-120">
  <section className="flex flex-col bg-[var(--white-smoke)] rounded-3xl p-5">
    <section className="flex flex-row justify-between bg-[var(--aqua-color)] rounded-xl p-1">
      <CajaBlanca2 texto="Compra S/ 3.6495" className="w-47"/>
      <CajaBlanca2 texto="Venta S/ 3.6845" className="w-47"/>
    </section>
<br />
    <section className="outline-blue-800 outline-1 rounded-xl p-2 h-20 mb-1 text-start">
      <label htmlFor="" className="text-blue-950 text-sm font-extralight ">Envía</label>
      <section className="flex flex-row justify-between">
      <CajaBlanca2 texto="PEN"/>
      <CajaBlanca2 texto="S/ 1,000.00"/>
      </section>
      </section>

      <section className="outline-blue-800 outline-1 rounded-xl p-2 h-20 mt-1 text-start">
        <label htmlFor="" className="text-blue-950 text-sm font-extralight self-start">Recibe</label>
        <section className="flex flex-row justify-between ">
      <CajaBlanca2 texto="USD" />
      <CajaBlanca2 texto="$271.41"/>
      </section>
    </section>


  <br />
    <span className="extrabold text-sm text-cyan-600 underline">usar un cupón o código</span><br />
    <section>
    <span className="text-blue-950 bold text-sm">Ahorro promedio*</span> 
i
    <span className="text-blue-950 bold text-sm">S/ 7.46</span></section>
    <BotonAzul texto="Regístrate" className="w-100"/>
  </section>
</CajaAzul>

<span className="text-sm text-blue-950 md:translate-x-120 md:-translate-y-5">(*)Cálculo respecto al tipo de cambio publicado por entidades bancarias.</span>
      </main>
      </div>
      </div>
    </>
  );
}
