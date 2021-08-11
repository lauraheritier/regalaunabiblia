import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Regalá una biblia</title>
        <meta name="description" content="Regalá una biblia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          ¡Hola, amigos!
        </h1>

        <p className="description">
          Iniciamos la campaña <b>Regalá una biblia</b> a fin de comprar biblias para donar al Hogar de niños <a href="http://sierradorada.com.ar/projectos/hogar_de_ninios/">Sierra Dorada</a>
          <br />
          Creemos que este es un deseo que nació en el corazón de nuestro Señor y que se podrá concretar con el esfuerzo de todos como cuerpo de Cristo.
        </p>

        <div className="grid">
          <p className="card">
            <h2>¿Cuánto donar?</h2>
            <p>Cada biblia cuesta $500. Sin embargo, el monto que decidan donar será suficiente.</p>
          </p>

          <div className="card">
            <h2>¿Hasta cuándo hay tiempo de donar?</h2>
            <p>Receptaremos el dinero hasta el 25 de agosto.</p>
          </div>

          <div className="card">
            <h2>¿Cómo realizar la donación?</h2>
            <p>Por transferencia bancaria a la siguiente cuenta:</p>
            <p>Alias: <b>NIEVES.BELEN</b></p>
            <p>Titular: Noelia Belen Nieves</p>
          </div>

          <div className="card">
            <h2>¿Se puede colaborar de alguna otra manera?</h2>
            <p>
              Hay otras formas de participar: necesitamos oración por los niños y los voluntarios que trabajan en el Hogar. Nada de esto sería posible sin la guía de Espíritu Santo ¡Contamos con ello!
            </p>
          </div>
        </div>

        <div class="footer">
          <h3>¡Importante!</h3>
          <small>Al realizar la compra de las biblias, enviaremos el comprobante de pago a todos los que colaboraron económicamente y, por supuesto, las imágenes de la entrega de las biblias :)</small> 
          <small>Para más información, se pueden comunicar con Belén Nieves.</small>
        </div>
      </main>
    </div>
  )
}
