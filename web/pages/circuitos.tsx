import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import LightboxModal from "../components/LightboxModal";

interface HardwareComponent {
  name: string;
  role: string;
  specs: string;
  category: "main" | "external";
}

const HARDWARE_COMPONENTS: HardwareComponent[] = [
  {
    name: "ESP-WROOM-32",
    role: "Microcontroller",
    specs: "Dual-core 240 MHz, Wi-Fi and Bluetooth. Reads the sensors, drives the alarm and talks to the server.",
    category: "main",
  },
  {
    name: "74HC4067 multiplexer",
    role: "Reads the microswitches",
    specs: "16 channels selected with 4 pins (S0–S3).",
    category: "main",
  },
  {
    name: "MT3608 step-up module",
    role: "Boost converter",
    specs: "Raises the battery's 3.7V to the 5V the buzzer needs.",
    category: "main",
  },
  {
    name: "BJT transistor",
    role: "Switches the buzzer",
    specs: "Drives the 5V buzzer so the ESP32 pin doesn't have to supply the current.",
    category: "main",
  },
  {
    name: "Pull-up / pull-down resistors",
    role: "Stable inputs",
    specs: "Keep the microswitch inputs at a defined level so vibration doesn't cause false readings.",
    category: "main",
  },
  {
    name: "Screw terminal blocks",
    role: "Drawer wiring",
    specs: "Connect the cables coming from the drawers to the board.",
    category: "main",
  },
  {
    name: "Lever microswitches",
    role: "Tool detection",
    specs: "Under each tool's slot in the foam. The tool's weight closes the switch.",
    category: "external",
  },
  {
    name: "Magnetic reed switches",
    role: "Drawer detection",
    specs: "On the drawer slides. Detect whether each drawer is open or closed.",
    category: "external",
  },
  {
    name: "5V buzzer",
    role: "Alarm",
    specs: "Sounds when a drawer is closed with a tool missing.",
    category: "external",
  },
  {
    name: "18650 Li-Ion battery (3.7V)",
    role: "Power",
    specs: "Rechargeable, so the toolbox doesn't need to be plugged in.",
    category: "external",
  },
  {
    name: "BMS charging and protection module",
    role: "Battery management",
    specs: "Charges the battery and protects it from overcharge and deep discharge.",
    category: "external",
  },
  {
    name: "Battery holder",
    role: "Mount",
    specs: "Holds the 18650 cell in place.",
    category: "external",
  },
];

const SCHEMATIC_VIEWS = [
  {
    id: "pcb-real",
    title: "Assembled board",
    src: "/pcb2.jpg",
    description: "The Smart Toolbox control board, soldered and assembled by the team.",
  },
  {
    id: "schematic",
    title: "Schematic",
    src: "/circuito.png",
    description: "Connections between the ESP32, the 74HC4067 multiplexer, the MT3608 and the transistor stage.",
  },
  {
    id: "pcb-layout",
    title: "PCB layout",
    src: "/pcb.png",
    description: "Copper traces, laid out to be milled in the school's electronics lab.",
  },
  {
    id: "blueprints",
    title: "Mechanical drawings",
    src: "/planos.jpg",
    description: "Cutting plans, drawer layout and where the sensors go in the toolbox.",
  },
];

export default function Circuitos() {
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>("");

  const currentView = SCHEMATIC_VIEWS[activeTab];

  const openLightbox = (src: string, title: string) => {
    setLightboxImage(src);
    setLightboxTitle(title);
  };

  const componentGroups = [
    { title: "On the control board", items: HARDWARE_COMPONENTS.filter((c) => c.category === "main") },
    { title: "In the toolbox", items: HARDWARE_COMPONENTS.filter((c) => c.category === "external") },
  ];

  return (
    <>
      <Head>
        <title>Circuits and schematics | Smart Toolbox</title>
        <meta
          name="description"
          content="Smart Toolbox hardware: circuit schematic, PCB, mechanical drawings and bill of materials (ESP32, 74HC4067 multiplexer, MT3608)."
        />
      </Head>

      <Navbar />

      <main className="flex-1 pt-16 pb-16">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Circuits and schematics
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            The control board, the schematic, the PCB layout and the list of components.
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
              View full size
            </button>
          </div>

          <button
            onClick={() => openLightbox(currentView.src, currentView.title)}
            className="w-full flex justify-center items-center rounded-md bg-slate-900 border border-slate-800 p-4 sm:p-6 min-h-[380px]"
            aria-label="Enlarge image"
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
              <h2 className="text-xl font-bold text-white mb-3">Why a 74HC4067 multiplexer</h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Each drawer holds several tools, and wiring every microswitch to its own pin would use up the ESP32&apos;s GPIOs. The <span className="font-mono">74HC4067</span> is a 16-channel selector: with 4 control pins (<span className="font-mono">S0–S3</span>) the microcontroller reads the 16 microswitches one after another.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Power stage and 5V alarm</h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                A workshop or hangar is noisy, so the alarm has to be loud. We used a 5V buzzer. The <span className="font-mono">MT3608</span> boost converter raises the battery voltage to 5V, and a BJT transistor driven by the ESP32 switches the buzzer on and off.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-8">Bill of materials</h2>

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
