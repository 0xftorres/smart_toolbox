import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Smart Toolbox</title>
        <meta
          name="description"
          content="Caja de herramientas que detecta qué herramientas faltan, con app móvil y panel web. Proyecto de la E.E.S.T. N°7 IMPA."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/LogoSinFondo1.png" />
        <link rel="shortcut icon" href="/LogoSinFondo1.png" type="image/png" />
        <link rel="apple-touch-icon" href="/LogoSinFondo1.png" />
        <meta name="theme-color" content="#070b14" />
        <meta property="og:title" content="Smart Toolbox" />
        <meta
          property="og:description"
          content="Caja de herramientas con ESP32 que detecta qué herramientas faltan, con app móvil y panel web para talleres."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/caja.jpg" />
      </Head>
      <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col selection:bg-brand-500/30 selection:text-brand-300">
        <Component {...pageProps} />
      </div>
    </>
  );
}
