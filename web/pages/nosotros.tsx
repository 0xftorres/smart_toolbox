import Head from "next/head";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";

interface TeamMember {
  person: string;
  text: string;
  badge: string;
  github: string;
  email: string;
  ig: string;
  li: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    person: "Lucas Herrera",
    badge: "Materials and documentation",
    text: "Chose the structural materials, did the technical calculations and safety specs, and wrote documentation.",
    github: "https://github.com/lucas-le-herrera",
    email: "lucassherreraa2003@gmail.com",
    ig: "https://www.instagram.com/lucas.herreraa.19",
    li: "https://www.linkedin.com/in/lucas-herrera-610780235",
    image: "/us/246200180_624932095551822_3741935654645594398_n.jpg",
  },
  {
    person: "Miqueas Vanore",
    badge: "Design and documentation",
    text: "Designed the foam molds and the drawer layout, and documented the assembly.",
    github: "https://github.com/MiqueasVanore",
    email: "vnmiqueas@gmail.com",
    ig: "https://www.instagram.com/miqueasvn",
    li: "",
    image: "/us/172616423_740296546662728_7426469589682800504_n.jpg",
  },
  {
    person: "Joaquín Martínez",
    badge: "Drawings and wiring",
    text: "Drew the mechanical plans, routed the wiring and mounted the microswitches.",
    github: "https://github.com/joacozape04",
    email: "joaquinosmartinez@gmail.com",
    ig: "https://www.instagram.com/joaquinosmartinez",
    li: "",
    image: "/us/625987438_18387824122148412_4931629658700709078_n.jpg",
  },
  {
    person: "Ramiro Mariani",
    badge: "Chassis, app and PCB",
    text: "Designed the chassis, built the mobile app and made the PCB.",
    github: "https://github.com/RamiroMariani",
    email: "ramiromariani99@gmail.com",
    ig: "https://www.instagram.com/rama_764",
    li: "https://www.linkedin.com/in/ramiro-uriel-mariani-7a16a923a",
    image: "/us/445450211_2308129889333943_3292383836840080185_n.jpg",
  },
  {
    person: "Federico Torres",
    badge: "Firmware and web",
    text: "Programmed the ESP32 and built the web platform, its API and the interface.",
    github: "https://github.com/0xftorres",
    email: "federicotorresivan@gmail.com",
    ig: "https://www.instagram.com/fedetrrs",
    li: "https://www.linkedin.com/in/federico-ivan-torres",
    image: "/us/80338247.jpeg",
  },
  {
    person: "Agustín Esquivel",
    badge: "Electronics and schematics",
    text: "Designed the circuit schematic, calculated the power stage and laid out the PCB.",
    github: "https://github.com/Agustin-Esquivel04",
    email: "esquivel.agustin04@gmail.com",
    ig: "https://www.instagram.com/agus_esquivel_1",
    li: "",
    image: "/us/80325042.png",
  },
];

export default function Nosotros() {
  return (
    <>
      <Head>
        <title>About us | Smart Toolbox</title>
        <meta
          name="description"
          content="The students from E.E.S.T. N°7 'Taller Regional Quilmes' (IMPA) who built Smart Toolbox."
        />
      </Head>

      <Navbar />

      <main className="flex-1 pt-16 pb-16">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <img
            src="/logo_impa.webp"
            alt="E.E.S.T. N°7 Taller Regional Quilmes IMPA logo"
            className="w-16 h-16 object-contain mb-6"
          />
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            About us
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            We are students at <strong className="text-white">E.E.S.T. N°7 &quot;Taller Regional Quilmes&quot; (IMPA)</strong>. We took part in NASA Space Apps Challenge 2022 with this project and presented it at ONIET.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-8">Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {TEAM_MEMBERS.map((member) => (
              <ContactCard
                key={member.person}
                person={member.person}
                badge={member.badge}
                text={member.text}
                github={member.github}
                email={member.email}
                ig={member.ig}
                li={member.li}
                image={member.image}
              />
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-2xl font-bold text-white">
                E.E.S.T. N°7 &quot;Taller Regional Quilmes&quot; (IMPA)
              </h2>

              <p className="text-slate-300 leading-relaxed">
                A technical school in Quilmes, Buenos Aires, with specialties in aeronautics, electromechanics and electronics.
              </p>

              <p className="text-slate-300 leading-relaxed">
                Working in its workshops and hangars is how we learned why tool control matters and what <strong className="text-white">FOD</strong> is.
              </p>

              <dl className="text-sm text-slate-400 space-y-1 pt-2">
                <div>
                  <dt className="inline text-slate-300">Address:</dt>{" "}
                  <dd className="inline">Av. Otamendi s/n, B1878 Quilmes</dd>
                </div>
                <div>
                  <dt className="inline text-slate-300">Province:</dt>{" "}
                  <dd className="inline">Buenos Aires, Argentina</dd>
                </div>
                <div>
                  <dt className="inline text-slate-300">Specialties:</dt>{" "}
                  <dd className="inline">Aeronautics, Electromechanics, Electronics</dd>
                </div>
              </dl>

              <a
                href="https://maps.app.goo.gl/MXYDrvrhPTt1SWv4A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-brand-400 hover:text-brand-300"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="lg:col-span-7">
              <iframe
                className="w-full h-80 sm:h-96 rounded-md border border-slate-800"
                src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Av.%20Otamendi,%20B1878%20Quilmes,%20Provincia%20de%20Buenos%20Aires+(IMPA)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                title="Map of E.E.S.T. N°7 IMPA, Quilmes"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-3">Contact</h2>
          <p className="text-slate-300 leading-relaxed max-w-2xl">
            For demonstrations, school presentations or technical questions, write to us at <a href="mailto:smart.toolbox@proton.me" className="text-brand-400 hover:text-brand-300">smart.toolbox@proton.me</a>. The code is on <a href="https://github.com/impatrq/722b_smart_toolbox" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-300">GitHub</a>.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
