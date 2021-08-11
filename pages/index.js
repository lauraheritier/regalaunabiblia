import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Regalá una biblia</title>
        <meta name="description" content="Regalá una biblia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ¡Hola, amigos!
        </h1>

        <p className={styles.description}>
          Iniciamos la campaña de recaudación de dinero a fin de comprar biblias para donar al Hogar de niños <b><a href="http://sierradorada.com.ar/projectos/hogar_de_ninios/">Sierra Dorada</a></b>
        <br/>
        Creemos que este es un deseo que nació en el corazón de nuestro Señor y que se podrá concretar con el esfuerzo de todos como cuerpo de Cristo.
        </p>

        <div className={styles.grid}>
          <p className={styles.card}>
            <h2>¿Cuánto donar?</h2>
            <p>Cada biblia cuesta $500. Sin embargo, el monto que decidan donar será suficiente.</p>
          </p>
            
            <p className={styles.card}>
            <h2>¿Hasta cuándo hay tiempo de donar?</h2>
            <p>Receptaremos el dinero hasta el 25 de agosto.</p>
          </p>

            <p className={styles.card}>
            <h2>¿Cómo realizar la donación?</h2>
            <p>Por transferencia bancaria a la siguiente cuenta:</p>
            <p>Alias: NIEVES.BELEN</p>
            <p>Titular: Noelia Belen Nieves</p>
          </p>

          <p className={styles.card}>
            <h2>¿Se puede colaborar de alguna otra manera?</h2>
            <p>
            Hay otras formas de participar: necesitamos oración por los niños y los voluntarios que trabajan en el Hogar. Nada de esto sería posible sin la guía de Espíritu Santo ¡Contamos con ello!
            </p>
          </p>
        </div>

        <h3>¡Importante!</h3>
        <p>Al realizar la compra de las biblias, enviaremos el comprobante de pago a todos los que colaboraron económicamente y, por supuesto, las imágenes de la entrega de las biblias :)</p>

        <p>Para más información, se pueden comunicar con Belén Nieves.</p>
      </main>
    </div>
  )
}
