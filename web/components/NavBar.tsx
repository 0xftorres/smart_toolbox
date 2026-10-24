import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X, Github, Globe } from "lucide-react";

const NAV_ITEMS_EN = [
  { label: "Home", href: "/" },
  { label: "How it works", href: "/funcionamiento" },
  { label: "Circuits", href: "/circuitos" },
  { label: "Gallery", href: "/imagenes" },
  { label: "About us", href: "/nosotros" },
];

const NAV_ITEMS_ES = [
  { label: "Inicio", href: "/es" },
  { label: "Funcionamiento", href: "/es/funcionamiento" },
  { label: "Circuitos", href: "/es/circuitos" },
  { label: "Galería", href: "/es/imagenes" },
  { label: "Nosotros", href: "/es/nosotros" },
];

export default function Navbar() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isEs = router.pathname.startsWith("/es");
  const navItems = isEs ? NAV_ITEMS_ES : NAV_ITEMS_EN;
  const homeHref = isEs ? "/es" : "/";

  // Calculate target URL when switching languages
  const getTargetUrl = () => {
    const rawPath = (router.asPath || "/").split("?")[0].split("#")[0];
    if (isEs) {
      // Currently in Spanish -> Switch to English
      if (
        rawPath === "/es" ||
        rawPath === "/es/" ||
        rawPath === "/es/pagina" ||
        rawPath === "/es/pagina/"
      ) {
        return "/";
      }
      const stripped = rawPath.replace(/^\/es/, "");
      return stripped === "" ? "/" : stripped;
    } else {
      // Currently in English -> Switch to Spanish
      if (rawPath === "/" || rawPath === "") {
        return "/es";
      }
      return `/es${rawPath}`;
    }
  };

  const targetUrl = getTargetUrl();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [router.pathname]);

  const isActive = (href: string) =>
    router.pathname === href || (href === "/es" && router.pathname === "/es/pagina");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-950 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={homeHref} className="flex items-center gap-2.5">
            <img src="/LogoSinFondo1.png" alt="" className="w-8 h-8 object-contain" />
            <span className="font-semibold text-white">Smart Toolbox</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? "text-white" : "text-slate-400 hover:text-white"}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-5 text-sm">
            <Link
              href={targetUrl}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white"
              title={isEs ? "Switch to English" : "Cambiar a español"}
            >
              <Globe className="w-4 h-4" />
              {isEs ? "English" : "Español"}
            </Link>
            <a
              href="https://github.com/impatrq/722b_smart_toolbox"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-white"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 text-slate-300 hover:text-white"
            aria-label={isEs ? "Abrir menú de navegación" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block py-2 ${isActive(item.href) ? "text-white" : "text-slate-400 hover:text-white"}`}
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-3 mt-2 border-t border-slate-800 flex gap-6 text-sm">
            <Link href={targetUrl} className="flex items-center gap-1.5 text-slate-400 hover:text-white">
              <Globe className="w-4 h-4" />
              {isEs ? "English" : "Español"}
            </Link>
            <a
              href="https://github.com/impatrq/722b_smart_toolbox"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-white"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
