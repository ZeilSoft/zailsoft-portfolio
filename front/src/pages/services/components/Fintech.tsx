const Fintech = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-white gap-4">

      <div className="flex basis-2/2 md:basis-1/2">
        <img src="/services/security.webp" alt="Security image" className="rounded-2xl" />
      </div>

      <div className="flex flex-col basis-2/2 md:basis-1/2 gap-4">
        <h3 className="text-3xl">
          Nos especializamos en Fintech e integración de pagos con amplia
          experiencia en el mercado.
        </h3>
        <p>Ofrecemos soluciones innovadoras para optimizar los procesos de pago de tu negocio, adaptándonos a tus necesidades y las de tus clientes.</p>
      </div>

    </div>
  )
}
export default Fintech
