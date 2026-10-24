import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  const [videoError, setVideoError] = useState(false);

  return (
    <>
      <Head>
        <title>Smart Toolbox</title>
        <meta
          name="description"
          content="Smart Toolbox is a toolbox that detects which tools are missing, with a mobile app and a web dashboard. Built at E.E.S.T. N°7 IMPA, Quilmes."
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
            <p className="text-lg text-slate-400 mb-6">Safety, order and efficiency.</p>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              A toolbox that knows which tools have been taken out, and sounds an alarm if a drawer is closed with one missing. We built it to prevent <strong className="text-white">FOD</strong> (foreign object damage) in workshops and hangars.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/funcionamiento"
                className="px-5 py-2.5 rounded-md text-sm font-semibold text-white bg-brand-600 hover:bg-brand-500"
              >
                How it works
              </Link>
              <Link
                href="/circuitos"
                className="px-5 py-2.5 rounded-md text-sm font-semibold text-slate-200 border border-slate-700 hover:border-slate-500"
              >
                Circuits and schematics
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl font-bold text-white mb-2">Three parts</h2>
            <p className="text-slate-400 mb-10 max-w-2xl">
              The toolbox itself, an app for the technician and a dashboard for the supervisor.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">The toolbox</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  An ESP32 reads a microswitch under each tool&apos;s slot in the foam, through 74HC4067 multiplexers. A magnetic sensor on each drawer tells it when the drawer closes. If a tool is missing, a 5V buzzer goes off.
                </p>
                <Link href="/circuitos" className="text-sm text-brand-400 hover:text-brand-300">
                  Schematics and PCB
                </Link>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Mobile app</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  The technician scans the QR code on the toolbox to pair with it, sees the day&apos;s tasks and gets an alert when a tool hasn&apos;t been put back.
                </p>
                <Link href="/funcionamiento" className="text-sm text-brand-400 hover:text-brand-300">
                  Workflow
                </Link>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Supervisor dashboard</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  Shows every toolbox in the hangar, who is using it and which tools are out. The supervisor uploads the day&apos;s tasks and sends the end-of-shift signal from here.
                </p>
                <Link href="/funcionamiento" className="text-sm text-brand-400 hover:text-brand-300">
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl font-bold text-white mb-8">More about the project</h2>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 max-w-3xl">
              <div>
                <dt>
                  <Link href="/funcionamiento" className="font-semibold text-brand-400 hover:text-brand-300">
                    How it works
                  </Link>
                </dt>
                <dd className="text-sm text-slate-400 mt-1">The problem, a typical workday and the flowchart.</dd>
              </div>
              <div>
                <dt>
                  <Link href="/circuitos" className="font-semibold text-brand-400 hover:text-brand-300">
                    Circuits
                  </Link>
                </dt>
                <dd className="text-sm text-slate-400 mt-1">Schematic, PCB and bill of materials.</dd>
              </div>
              <div>
                <dt>
                  <Link href="/imagenes" className="font-semibold text-brand-400 hover:text-brand-300">
                    Gallery
                  </Link>
                </dt>
                <dd className="text-sm text-slate-400 mt-1">Photos of the build: soldering, foam molds and testing.</dd>
              </div>
              <div>
                <dt>
                  <Link href="/nosotros" className="font-semibold text-brand-400 hover:text-brand-300">
                    About us
                  </Link>
                </dt>
                <dd className="text-sm text-slate-400 mt-1">The students who designed and built it.</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
