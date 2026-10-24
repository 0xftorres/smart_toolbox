import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function HomeEs() {
  const [videoError, setVideoError] = useState(false);

  return (
    <>
      <Head>
        <title>Smart Toolbox</title>
        <meta
          name="description"
          content="Smart Toolbox es una caja de herramientas que detecta qué herramientas faltan, con app móvil y panel web. Hecha en la E.E.S.T. N°7 IMPA, Quilmes."
        />
      </Head>

      <Navbar />

      <main className="flex-1 pt-16">
        <section className="relative overflow-hidden">
          {!videoError && (
            <video
              className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none mix-blend-screen"
              autoPlay
              loop
              muted
              playsInline
              onError={() => setVideoError(true)}
            >
              <source
                src="https://user-images.githubusercontent.com/80338247/180585381-5793c629-095d-4f5e-99e1-923dc61815c0.mp4"
                type="video/mp4"
              />
            </video>
          )}

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
            <p className="text-sm text-slate-400 mb-4">
              E.E.S.T. N°7 IMPA · NASA Space Apps Challenge 2022 · ONIET
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3">
              Smart Toolbox
            </h1>
            <p className="text-lg text-slate-400 mb-6">Seguridad, orden y eficiencia.</p>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              Una caja de herramientas que sabe qué herramientas se sacaron y hace sonar una alarma si se cierra un cajón con alguna faltante. La hicimos para prevenir el <strong className="text-white">FOD</strong> (daño por objetos extraños) en talleres y hangares.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/es/funcionamiento"
                className="px-5 py-2.5 rounded-md text-sm font-semibold text-white bg-brand-600 hover:bg-brand-500"
              >
                Cómo funciona
              </Link>
              <Link
                href="/es/circuitos"
                className="px-5 py-2.5 rounded-md text-sm font-semibold text-slate-200 border border-slate-700 hover:border-slate-500"
              >
                Planos y circuitos
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl font-bold text-white mb-2">Tres partes</h2>
            <p className="text-slate-400 mb-10 max-w-2xl">
              La caja, una app para el operario y un panel para el supervisor.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">La caja</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  Un ESP32 lee, a través de multiplexores 74HC4067, un microswitch debajo del lugar de cada herramienta en el molde. Un sensor magnético en cada cajón avisa cuando se cierra. Si falta una herramienta, suena un buzzer de 5V.
                </p>
                <Link href="/es/circuitos" className="text-sm text-brand-400 hover:text-brand-300">
                  Esquemáticos y PCB
                </Link>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">App móvil</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  El operario escanea el código QR de la caja para vincularse, ve las tareas del día y recibe un aviso cuando una herramienta no se devolvió.
                </p>
                <Link href="/es/funcionamiento" className="text-sm text-brand-400 hover:text-brand-300">
                  Flujo de trabajo
                </Link>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Panel de supervisión</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  Muestra todas las cajas del hangar, quién usa cada una y qué herramientas están afuera. Desde ahí el supervisor carga las tareas del día y envía la señal de fin de jornada.
                </p>
                <Link href="/es/funcionamiento" className="text-sm text-brand-400 hover:text-brand-300">
                  Panel
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl font-bold text-white mb-8">Más sobre el proyecto</h2>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 max-w-3xl">
              <div>
                <dt>
                  <Link href="/es/funcionamiento" className="font-semibold text-brand-400 hover:text-brand-300">
                    Funcionamiento
                  </Link>
                </dt>
                <dd className="text-sm text-slate-400 mt-1">El problema, una jornada de trabajo y el diagrama de flujo.</dd>
              </div>
              <div>
                <dt>
                  <Link href="/es/circuitos" className="font-semibold text-brand-400 hover:text-brand-300">
                    Circuitos
                  </Link>
                </dt>
                <dd className="text-sm text-slate-400 mt-1">Esquemático, PCB y lista de componentes.</dd>
              </div>
              <div>
                <dt>
                  <Link href="/es/imagenes" className="font-semibold text-brand-400 hover:text-brand-300">
                    Galería
                  </Link>
                </dt>
                <dd className="text-sm text-slate-400 mt-1">Fotos de la construcción: soldadura, moldes y pruebas.</dd>
              </div>
              <div>
                <dt>
                  <Link href="/es/nosotros" className="font-semibold text-brand-400 hover:text-brand-300">
                    Nosotros
                  </Link>
                </dt>
                <dd className="text-sm text-slate-400 mt-1">Los alumnos que la diseñaron y construyeron.</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
