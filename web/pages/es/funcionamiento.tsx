import { useState } from "react";
import Head from "next/head";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import LightboxModal from "../../components/LightboxModal";

export default function FuncionamientoEs() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>("");

  const openLightbox = (src: string, title: string) => {
    setLightboxImage(src);
    setLightboxTitle(title);
  };

  return (
    <>
      <Head>
        <title>Funcionamiento | Smart Toolbox</title>
        <meta
          name="description"
          content="Cómo funciona Smart Toolbox: detección de herramientas con microswitches, la app móvil del operario y el panel web del supervisor."
        />
      </Head>

      <Navbar />

      <main className="flex-1 pt-16 pb-16">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Cómo funciona
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Qué problema resuelve, cómo es una jornada de trabajo con la caja y qué hace cada parte.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-white">El problema</h2>

              <p className="text-slate-300 leading-relaxed">
                En el mantenimiento aeronáutico e industrial, una herramienta olvidada dentro de un motor o un fuselaje puede causar daños graves. Esto se conoce como <strong className="text-white">FOD (Foreign Object Debris/Damage)</strong>. Smart Toolbox lleva la cuenta de cada herramienta para que ninguna quede afuera al terminar un trabajo.
              </p>

              <dl className="space-y-4 pt-2">
                <div>
                  <dt className="font-semibold text-white">Menos accidentes y pérdidas</dt>
                  <dd className="text-sm text-slate-400 mt-1">
                    Una herramienta olvidada en una turbina, una línea de ensamblaje o una máquina puede salir muy cara.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Menos cosas que recordar para el operario</dt>
                  <dd className="text-sm text-slate-400 mt-1">
                    Las tareas del día están en el celular y la caja avisa cuando falta algo.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Supervisión</dt>
                  <dd className="text-sm text-slate-400 mt-1">
                    El supervisor ve el estado de cada caja y puede enviar la señal de fin de jornada.
                  </dd>
                </div>
              </dl>
            </div>

            <figure>
              <button
                onClick={() => openLightbox("/caja.jpg", "Prototipo de Smart Toolbox")}
                className="block w-full"
                aria-label="Ampliar foto de la caja"
              >
                <img
                  src="/caja.jpg"
                  alt="Prototipo de Smart Toolbox"
                  className="w-full h-auto rounded-md border border-slate-800"
                />
              </button>
              <figcaption className="mt-2 text-sm text-slate-500">
                El prototipo, construido en la EEST N°7 IMPA. Click para ampliar.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-2">Una jornada de trabajo</h2>
          <p className="text-slate-400 mb-10 max-w-2xl">
            Cómo interactúan el operario, la caja y el panel durante un turno.
          </p>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
            <li>
              <div className="text-sm font-mono text-slate-500 mb-1">1. Inicio de turno</div>
              <h3 className="font-semibold text-white mb-2">Vinculación por QR</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                El operario escanea el código QR de la caja con la app. Se le asignan las tareas cargadas para ese día en el panel.
              </p>
            </li>
            <li>
              <div className="text-sm font-mono text-slate-500 mb-1">2. Durante el trabajo</div>
              <h3 className="font-semibold text-white mb-2">Uso de herramientas</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Cuando se saca una herramienta, su microswitch se abre y el sistema la registra como en uso.
              </p>
            </li>
            <li>
              <div className="text-sm font-mono text-slate-500 mb-1">3. Fin de jornada</div>
              <h3 className="font-semibold text-white mb-2">Guardado</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                El supervisor envía la señal de fin de jornada desde el panel, o el operario empieza a devolver cada herramienta a su lugar en el molde.
              </p>
            </li>
            <li>
              <div className="text-sm font-mono text-slate-500 mb-1">4. Control</div>
              <h3 className="font-semibold text-white mb-2">Herramientas faltantes</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Al cerrarse un cajón, el sensor magnético dispara una lectura. Si falta una herramienta, suena el buzzer y la app muestra un aviso.
              </p>
            </li>
          </ol>

          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Diagrama de flujo</h3>
              <p className="text-sm text-slate-400 mt-1">
                La lógica del firmware del ESP32 y del servidor web.
              </p>
            </div>
            <button
              onClick={() => openLightbox("/diagramaflujo.png", "Diagrama de flujo de Smart Toolbox")}
              className="text-sm text-brand-400 hover:text-brand-300"
            >
              Ver en tamaño completo
            </button>
          </div>

          <button
            onClick={() => openLightbox("/diagramaflujo.png", "Diagrama de flujo de Smart Toolbox")}
            className="w-full flex justify-center rounded-md bg-slate-900 border border-slate-800 p-4"
            aria-label="Ampliar diagrama de flujo"
          >
            <img
              src="/diagramaflujo.png"
              alt="Diagrama de flujo de Smart Toolbox"
              className="max-h-[500px] w-auto object-contain"
            />
          </button>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-10">Qué hace cada parte</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Caja</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                Está en el puesto de trabajo y hace la detección.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300 marker:text-slate-600">
                <li><strong className="text-white">Cajones:</strong> un contacto magnético (reed) en la guía de cada cajón.</li>
                <li><strong className="text-white">Herramientas:</strong> un microswitch de palanca debajo de cada lugar del molde.</li>
                <li><strong className="text-white">Alarma:</strong> un buzzer de 5V alimentado por un step-up MT3608.</li>
                <li><strong className="text-white">Alimentación:</strong> una batería Li-Ion 18650 con módulo de carga BMS.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">App móvil</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                Para el operario. Tiene tres pestañas:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300 marker:text-slate-600">
                <li><strong className="text-white">Actividades:</strong> las tareas del turno.</li>
                <li><strong className="text-white">Herramientas:</strong> qué herramientas están fuera de la caja vinculada.</li>
                <li><strong className="text-white">Caja:</strong> un escáner QR para vincularse con una caja.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Panel web</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                Para el jefe de taller o supervisor:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300 marker:text-slate-600">
                <li>Estado de todas las cajas.</li>
                <li>Qué operario está vinculado a qué caja.</li>
                <li>Carga y asignación de las tareas del día.</li>
                <li>Envío de la señal de fin de jornada.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <LightboxModal
        isOpen={!!lightboxImage}
        imageUrl={lightboxImage || ""}
        imageTitle={lightboxTitle}
        onClose={() => setLightboxImage(null)}
      />

      <Footer />
    </>
  );
}
