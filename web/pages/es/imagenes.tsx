import { useState, useMemo } from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import LightboxModal from "../../components/LightboxModal";

interface ImagenesProps {
  pictures: string[];
}

interface PictureItem {
  id: string;
  filename: string;
  url: string;
  title: string;
  category: "all" | "electronica" | "mecanica" | "pruebas" | "eventos";
}

// Map files to human-friendly titles and categories
function categorizePicture(filename: string): PictureItem {
  const url = `/pictures/${filename}`;
  // Clean raw title
  let title = filename
    .replace(/\.jpe?g$/i, "")
    .replace(/^[0-9]+/g, "")
    .trim();

  // If starts with number pattern
  if (!title) title = "Fotografía de Fabricación";

  const lower = filename.toLowerCase();

  let category: PictureItem["category"] = "mecanica";

  if (
    lower.includes("placa") ||
    lower.includes("circuito") ||
    lower.includes("multiplexor") ||
    lower.includes("microswitch") ||
    lower.includes("cobre") ||
    lower.includes("microcontrolador") ||
    lower.includes("pistas")
  ) {
    category = "electronica";
  }

  if (
    lower.includes("consumo") ||
    lower.includes("tensión") ||
    lower.includes("probando") ||
    lower.includes("medidas") ||
    lower.includes("pruebas") ||
    lower.includes("pila")
  ) {
    category = "pruebas";
  }

  if (
    lower.includes("molde") ||
    lower.includes("agujeros") ||
    lower.includes("pintando") ||
    lower.includes("secciones") ||
    lower.includes("tacos") ||
    lower.includes("materiales") ||
    lower.includes("cables")
  ) {
    category = "mecanica";
  }

  return {
    id: filename,
    filename,
    url,
    title,
    category,
  };
}

export default function ImagenesEs({ pictures }: ImagenesProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // List of all items, starting with ONIET picture
  const allPictures: PictureItem[] = useMemo(() => {
    const list: PictureItem[] = [
      {
        id: "oniet-main",
        filename: "000Smart Toolbox en las ONIET.jpg",
        url: "/000Smart Toolbox en las ONIET.jpg",
        title: "Smart Toolbox presentada en las Olimpíadas ONIET",
        category: "eventos",
      },
      ...pictures.map(categorizePicture),
    ];
    return list;
  }, [pictures]);

  // Filtered by selected category
  const filteredPictures = useMemo(() => {
    if (activeCategory === "all") return allPictures;
    return allPictures.filter((p) => p.category === activeCategory);
  }, [allPictures, activeCategory]);

  const currentLightboxItem = lightboxIndex !== null ? filteredPictures[lightboxIndex] : null;

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredPictures.length - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! < filteredPictures.length - 1 ? prev! + 1 : 0));
  };

  return (
    <>
      <Head>
        <title>Galería | Smart Toolbox</title>
        <meta
          name="description"
          content="Fotos de la construcción de Smart Toolbox: fresado del PCB, pruebas de sensores, moldes y la presentación en las ONIET."
        />
      </Head>

      <Navbar />

      <main className="flex-1 pt-16 pb-16">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Galería
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Fotos de la construcción, desde el corte de las placas de cobre hasta la presentación en las ONIET.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <button
              onClick={() => {
                setLightboxIndex(0);
                setActiveCategory("all");
              }}
              className="lg:col-span-7 block"
              aria-label="Ampliar foto"
            >
              <img
                src="/000Smart Toolbox en las ONIET.jpg"
                alt="Smart Toolbox en las ONIET"
                className="w-full h-auto max-h-[420px] object-cover rounded-md border border-slate-800"
              />
            </button>

            <div className="lg:col-span-5 space-y-3">
              <h2 className="text-2xl font-bold text-white">Smart Toolbox en las ONIET</h2>
              <p className="text-slate-300 leading-relaxed">
                Presentamos el prototipo funcionando en las <strong className="text-white">Olimpíadas Nacionales de Innovación, Electrónica y Tecnología (ONIET)</strong>, con la caja, la app y el panel trabajando juntos.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6 border-t border-slate-800">
          <div className="flex flex-wrap gap-1">
            {[
              { id: "all", label: `Todas (${allPictures.length})` },
              { id: "electronica", label: "Electrónica y PCB" },
              { id: "mecanica", label: "Mecánica y moldes" },
              { id: "pruebas", label: "Pruebas" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-md text-sm ${
                  activeCategory === cat.id
                    ? "bg-slate-800 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-6">
            {filteredPictures.map((pic, idx) => (
              <button
                key={pic.id}
                onClick={() => setLightboxIndex(idx)}
                className="text-left"
              >
                <img
                  src={pic.url}
                  alt={pic.title}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover rounded-md bg-slate-900"
                />
                <p className="mt-2 text-sm text-slate-300 line-clamp-2">{pic.title}</p>
              </button>
            ))}
          </div>
        </section>
      </main>

      {currentLightboxItem && (
        <LightboxModal
          isOpen={lightboxIndex !== null}
          imageUrl={currentLightboxItem.url}
          imageTitle={`${currentLightboxItem.title} (${(lightboxIndex ?? 0) + 1} de ${filteredPictures.length})`}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const dirPath = path.join(process.cwd(), "public/pictures");
  let files: string[] = [];
  try {
    files = fs.readdirSync(dirPath);
    // Natural alphanumeric sorting
    files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
  } catch {
    files = [];
  }

  return {
    props: {
      pictures: files,
    },
  };
}
