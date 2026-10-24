import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import LightboxModal from "../components/LightboxModal";

export default function Funcionamiento() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>("");

  const openLightbox = (src: string, title: string) => {
    setLightboxImage(src);
    setLightboxTitle(title);
  };

  return (
    <>
      <Head>
        <title>How it works | Smart Toolbox</title>
        <meta
          name="description"
          content="How Smart Toolbox works: tool detection with microswitches, the technician's mobile app and the supervisor's web dashboard."
        />
      </Head>

      <Navbar />

      <main className="flex-1 pt-16 pb-16">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            How it works
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            The problem it solves, what a workday looks like with the toolbox, and what each part does.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-white">The problem</h2>

              <p className="text-slate-300 leading-relaxed">
                In aviation and industrial maintenance, a tool left inside an engine or an airframe can cause serious damage. This is known as <strong className="text-white">FOD (Foreign Object Debris/Damage)</strong>. Smart Toolbox keeps track of every tool so none is left behind when a job is finished.
              </p>

              <dl className="space-y-4 pt-2">
                <div>
                  <dt className="font-semibold text-white">Fewer accidents and losses</dt>
                  <dd className="text-sm text-slate-400 mt-1">
                    A tool forgotten in a turbine, an assembly line or a machine can be very expensive.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Less for the technician to remember</dt>
                  <dd className="text-sm text-slate-400 mt-1">
                    The day&apos;s tasks are on the phone, and the toolbox warns when something is missing.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Supervision</dt>
                  <dd className="text-sm text-slate-400 mt-1">
                    The supervisor sees the state of every toolbox and can send the end-of-shift signal.
                  </dd>
                </div>
              </dl>
            </div>

            <figure>
              <button
                onClick={() => openLightbox("/caja.jpg", "Smart Toolbox prototype")}
                className="block w-full"
                aria-label="Enlarge toolbox photo"
              >
                <img
                  src="/caja.jpg"
                  alt="Smart Toolbox prototype"
                  className="w-full h-auto rounded-md border border-slate-800"
                />
              </button>
              <figcaption className="mt-2 text-sm text-slate-500">
                The prototype, built at EEST N°7 IMPA. Click to enlarge.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-2">A workday</h2>
          <p className="text-slate-400 mb-10 max-w-2xl">
            How the technician, the toolbox and the dashboard interact during a shift.
          </p>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
            <li>
              <div className="text-sm font-mono text-slate-500 mb-1">1. Start of shift</div>
              <h3 className="font-semibold text-white mb-2">QR pairing</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                The technician scans the toolbox&apos;s QR code with the app. The tasks loaded for that day on the dashboard are assigned to them.
              </p>
            </li>
            <li>
              <div className="text-sm font-mono text-slate-500 mb-1">2. During work</div>
              <h3 className="font-semibold text-white mb-2">Using the tools</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                When a tool is taken out, its microswitch opens and the system records it as in use.
              </p>
            </li>
            <li>
              <div className="text-sm font-mono text-slate-500 mb-1">3. End of shift</div>
              <h3 className="font-semibold text-white mb-2">Putting tools away</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                The supervisor sends the end-of-shift signal from the dashboard, or the technician starts returning each tool to its slot in the foam.
              </p>
            </li>
            <li>
              <div className="text-sm font-mono text-slate-500 mb-1">4. Check</div>
              <h3 className="font-semibold text-white mb-2">Missing tools</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                When a drawer closes, the magnetic sensor triggers a reading. If a tool is missing, the buzzer sounds and the app shows an alert.
              </p>
            </li>
          </ol>

          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Flowchart</h3>
              <p className="text-sm text-slate-400 mt-1">
                The logic in the ESP32 firmware and the web server.
              </p>
            </div>
            <button
              onClick={() => openLightbox("/diagramaflujo.png", "Smart Toolbox flowchart")}
              className="text-sm text-brand-400 hover:text-brand-300"
            >
              View full size
            </button>
          </div>

          <button
            onClick={() => openLightbox("/diagramaflujo.png", "Smart Toolbox flowchart")}
            className="w-full flex justify-center rounded-md bg-slate-900 border border-slate-800 p-4"
            aria-label="Enlarge flowchart"
          >
            <img
              src="/diagramaflujo.png"
              alt="Smart Toolbox flowchart"
              className="max-h-[500px] w-auto object-contain"
            />
          </button>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-10">What each part does</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Toolbox</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                Sits at the workstation and does the sensing.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300 marker:text-slate-600">
                <li><strong className="text-white">Drawers:</strong> a magnetic reed switch on each drawer slide.</li>
                <li><strong className="text-white">Tools:</strong> a lever microswitch under each slot in the foam.</li>
                <li><strong className="text-white">Alarm:</strong> a 5V buzzer, powered through an MT3608 step-up.</li>
                <li><strong className="text-white">Power:</strong> an 18650 Li-Ion battery with a BMS charging module.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Mobile app</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                For the technician. It has three tabs:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300 marker:text-slate-600">
                <li><strong className="text-white">Activities:</strong> the tasks for the shift.</li>
                <li><strong className="text-white">Tools:</strong> which tools are currently out of the paired toolbox.</li>
                <li><strong className="text-white">Toolbox:</strong> a QR scanner to pair with a toolbox.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Web dashboard</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                For the workshop chief or supervisor:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300 marker:text-slate-600">
                <li>Status of every toolbox.</li>
                <li>Which technician is paired with which toolbox.</li>
                <li>Uploading and assigning the day&apos;s tasks.</li>
                <li>Sending the end-of-shift signal.</li>
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
