import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Campaña Vuelta al cole</title>
        <meta name="description" content="Campaña Vuelta al cole" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          ¡Hola! ¿Qué tal?
        </h1>

        <p className="description">
          Iniciamos una nueva campaña para la vuelta al cole de nuestros 
          amigos que viven en los hogares de 
          la <a href="https://www.instagram.com/fundacionsierradorada/" target="_blank" rel="noreferrer">
            Fundación Sierra Dorada</a>.
                 </p>

        <div className="grid">
        <div className="card">
            <h2>¿A dónde va la donación?</h2>
            <p>El dinero recibido se destinará a la compra de útiles escolares para niños
              de Primaria y Secundaria. Esto incluye: folios, cartucheras, carpetas, cuadernos,
              lápices, lapiceras, entre otros útiles.</p>
          </div>
          <div className="card">
            <h2>¿Hasta cuándo hay tiempo de donar?</h2>
            <p>Receptaremos el dinero hasta el 31 de marzo de 2022.</p>
          </div>

          <div className="card">
            <h2>¿Cómo realizar la donación?</h2>
            <p>Por transferencia bancaria a la siguiente cuenta:</p>
            <p>Alias: <b>lauheritier</b></p>
    <p>CBU:<b>0720199488000025676972</b></p>
            <p>Titular: Laura Heritier</p>
    <p>Banco Stander</p>
            
          </div>

          <div className="card">
            <h2>¿Se puede colaborar de alguna otra manera?</h2>
            <p>
              Orar por los niños y los voluntarios que trabajan en los hogares
              es otra forma de participar.
            </p>
          </div>
        </div>

        <div className="footer">
        <p>¡Importante! Enviar el comprobante de transferencia al número de WhatsApp <a href="https://wa.me/543518062904" target="_blank" rel="noreferrer">3518062904</a>. Usaremos este medio para enviar las fotos de las donaciones y para receptar consultas.</p>
         
           </div>
      </main>
    </div>
  )
}
