import { useState } from "react";
import Head from "next/head";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import LightboxModal from "../../components/LightboxModal";

interface HardwareComponent {
  name: string;
  role: string;
  specs: string;
  category: "main" | "external";
}

const HARDWARE_COMPONENTS: HardwareComponent[] = [
  {
    name: "ESP-WROOM-32",
    role: "Microcontrolador",
    specs: "Dual-core de 240 MHz, Wi-Fi y Bluetooth. Lee los sensores, maneja la alarma y se comunica con el servidor.",
    category: "main",
  },
  {
    name: "Multiplexor 74HC4067",
    role: "Lee los microswitches",
    specs: "16 canales seleccionados con 4 pines (S0–S3).",
    category: "main",
  },
  {
    name: "Módulo step-up MT3608",
    role: "Elevador de tensión",
    specs: "Lleva los 3,7V de la batería a los 5V que necesita el buzzer.",
    category: "main",
  },
  {
    name: "Transistor BJT",
    role: "Conmuta el buzzer",
    specs: "Maneja el buzzer de 5V para que el pin del ESP32 no tenga que entregar la corriente.",
    category: "main",
  },
  {
    name: "Resistencias pull-up / pull-down",
    role: "Entradas estables",
    specs: "Mantienen las entradas de los microswitches en un nivel definido para que las vibraciones no den lecturas falsas.",
    category: "main",
  },
  {
    name: "Borneras a tornillo",
    role: "Cableado de los cajones",
    specs: "Conectan a la placa los cables que vienen de los cajones.",
    category: "main",
  },
  {
    name: "Microswitches de palanca",
    role: "Detección de herramientas",
    specs: "Debajo del lugar de cada herramienta en el molde. El peso de la herramienta cierra el contacto.",
    category: "external",
  },
  {
    name: "Contactos magnéticos (reed)",
    role: "Detección de cajones",
    specs: "En las guías de los cajones. Detectan si cada cajón está abierto o cerrado.",
    category: "external",
  },
  {
    name: "Buzzer de 5V",
    role: "Alarma",
    specs: "Suena cuando se cierra un cajón con una herramienta faltante.",
    category: "external",
  },
  {
    name: "Batería Li-Ion 18650 (3,7V)",
    role: "Alimentación",
    specs: "Recargable, para que la caja no tenga que estar enchufada.",
    category: "external",
  },
  {
    name: "Módulo de carga y protección BMS",
    role: "Manejo de la batería",
    specs: "Carga la batería y la protege de sobrecarga y descarga profunda.",
    category: "external",
  },
  {
    name: "Portapilas",
    role: "Soporte",
    specs: "Sostiene la celda 18650.",
    category: "external",
  },
];

const SCHEMATIC_VIEWS = [
  {
    id: "pcb-real",
    title: "Placa armada",
    src: "/pcb2.jpg",
    description: "La placa de control de Smart Toolbox, soldada y armada por el equipo.",
  },
  {
    id: "schematic",
    title: "Esquemático",
    src: "/circuito.png",
    description: "Conexiones entre el ESP32, el multiplexor 74HC4067, el MT3608 y la etapa del transistor.",
  },
  {
    id: "pcb-layout",
    title: "Diseño del PCB",
    src: "/pcb.png",
    description: "Pistas de cobre, diseñadas para fresarse en el taller de electrónica de la escuela.",
  },
  {
    id: "blueprints",
    title: "Planos mecánicos",
    src: "/planos.jpg",
    description: "Planos de corte, distribución de cajones y ubicación de los sensores en la caja.",
  },
];

export default function CircuitosEs() {
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>("");

  const currentView = SCHEMATIC_VIEWS[activeTab];

  const openLightbox = (src: string, title: string) => {
    setLightboxImage(src);
    setLightboxTitle(title);
  };

  const componentGroups = [
    { title: "En la placa de control", items: HARDWARE_COMPONENTS.filter((c) => c.category === "main") },
    { title: "En la caja", items: HARDWARE_COMPONENTS.filter((c) => c.category === "external") },
  ];

  return (
    <>
      <Head>
        <title>Planos y circuitos | Smart Toolbox</title>
        <meta
          name="description"
          content="Hardware de Smart Toolbox: esquemático del circuito, PCB, planos mecánicos y lista de componentes (ESP32, multiplexor 74HC4067, MT3608)."
        />
      </Head>

      <Navbar />

      <main className="flex-1 pt-16 pb-16">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Planos y circuitos
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            La placa de control, el esquemático, el diseño del PCB y la lista de componentes.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex flex-wrap gap-1">
              {SCHEMATIC_VIEWS.map((view, index) => (
                <button
                  key={view.id}
                  onClick={() => setActiveTab(index)}
                  className={`px-3 py-1.5 rounded-md text-sm ${
                    activeTab === index
                      ? "bg-slate-800 text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {view.title}
                </button>
              ))}
            </div>

            <button
              onClick={() => openLightbox(currentView.src, currentView.title)}
              className="text-sm text-brand-400 hover:text-brand-300"
            >
              Ver en tamaño completo
            </button>
          </div>

          <button
            onClick={() => openLightbox(currentView.src, currentView.title)}
            className="w-full flex justify-center items-center rounded-md bg-slate-900 border border-slate-800 p-4 sm:p-6 min-h-[380px]"
            aria-label="Ampliar imagen"
          >
            <img
              src={currentView.src}
              alt={currentView.title}
              className="max-h-[520px] w-auto max-w-full object-contain"
            />
          </button>

          <p className="mt-3 text-sm text-slate-400">{currentView.description}</p>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">Por qué un multiplexor 74HC4067</h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Cada cajón tiene varias herramientas, y conectar cada microswitch a un pin propio agotaría los GPIO del ESP32. El <span className="font-mono">74HC4067</span> es un selector de 16 canales: con 4 pines de control (<span className="font-mono">S0–S3</span>) el microcontrolador lee los 16 microswitches uno tras otro.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Etapa de potencia y alarma de 5V</h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Un taller o un hangar es ruidoso, así que la alarma tiene que escucharse bien. Usamos un buzzer de 5V. El conversor <span className="font-mono">MT3608</span> eleva la tensión de la batería a 5V y un transistor BJT, manejado por el ESP32, prende y apaga el buzzer.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-8">Lista de componentes</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {componentGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-slate-400 mb-3">{group.title}</h3>
                <dl className="divide-y divide-slate-800 border-y border-slate-800">
                  {group.items.map((item) => (
                    <div key={item.name} className="py-3">
                      <dt className="flex flex-wrap items-baseline justify-between gap-x-3">
                        <span className="font-semibold text-white">{item.name}</span>
                        <span className="text-sm text-slate-400">{item.role}</span>
                      </dt>
                      <dd className="text-sm text-slate-300 mt-1 leading-relaxed">{item.specs}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
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
