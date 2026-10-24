import Link from "next/link";
import { useRouter } from "next/router";
import { Mail, Github, Instagram, Rocket } from "lucide-react";

export default function Footer() {
  const router = useRouter();
  const isEs = router.pathname.startsWith("/es");

  const homeHref = isEs ? "/es" : "/";
  const funcionamientoHref = isEs ? "/es/funcionamiento" : "/funcionamiento";
  const circuitosHref = isEs ? "/es/circuitos" : "/circuitos";
  const imagenesHref = isEs ? "/es/imagenes" : "/imagenes";
  const nosotrosHref = isEs ? "/es/nosotros" : "/nosotros";

  return (
    <footer className="mt-auto border-t border-slate-800 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-2">
            <p className="font-semibold text-white">Smart Toolbox</p>
            <p className="text-sm leading-relaxed max-w-sm">
              {isEs
                ? "Caja de herramientas que detecta qué herramientas faltan. Proyecto de alumnos de la E.E.S.T. N°7 \"Taller Regional Quilmes\" (IMPA)."
                : "A toolbox that detects which tools are missing. A student project from E.E.S.T. N°7 \"Taller Regional Quilmes\" (IMPA)."}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-200">
              {isEs ? "Páginas" : "Pages"}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={homeHref} className="hover:text-white">
                  {isEs ? "Inicio" : "Home"}
                </Link>
              </li>
              <li>
                <Link href={funcionamientoHref} className="hover:text-white">
                  {isEs ? "Funcionamiento" : "How it works"}
                </Link>
              </li>
              <li>
                <Link href={circuitosHref} className="hover:text-white">
                  {isEs ? "Circuitos" : "Circuits"}
                </Link>
              </li>
              <li>
                <Link href={imagenesHref} className="hover:text-white">
                  {isEs ? "Galería" : "Gallery"}
                </Link>
              </li>
              <li>
                <Link href={nosotrosHref} className="hover:text-white">
                  {isEs ? "Nosotros" : "About us"}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-200">
              {isEs ? "Contacto" : "Contact"}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:smart.toolbox@proton.me" className="flex items-center gap-2 hover:text-white">
                  <Mail className="w-4 h-4" />
                  smart.toolbox@proton.me
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/impatrq/722b_smart_toolbox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/smart.toolbox.2022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://2022.spaceappschallenge.org/challenges/2022-challenges/create-your-own-challenge/teams/smart-toolbox/project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Rocket className="w-4 h-4" />
                  NASA Space Apps 2022
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 pt-6 border-t border-slate-800 text-xs text-slate-500">
          © {new Date().getFullYear()} Smart Toolbox · E.E.S.T. N°7 IMPA
        </p>
      </div>
    </footer>
  );
}
