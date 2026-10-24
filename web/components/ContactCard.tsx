import { useState } from "react";
import { Github, Mail, Instagram, Linkedin } from "lucide-react";

interface ContactCardProps {
  person: string;
  text: string;
  badge?: string;
  github?: string;
  email?: string;
  ig?: string;
  li?: string;
  image?: string;
}

export default function ContactCard({
  person,
  text,
  badge,
  github,
  email,
  ig,
  li,
  image,
}: ContactCardProps) {
  const [imgError, setImgError] = useState(false);

  // Generate initials for avatar
  const initials = person
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  const showImage = Boolean(image && !imgError);

  return (
    <div>
      <div className="flex items-center gap-4 mb-3">
        {showImage ? (
          <img
            src={image}
            alt={person}
            className="w-14 h-14 rounded-full object-cover bg-slate-800 flex-shrink-0"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center font-semibold text-slate-300 text-sm flex-shrink-0">
            {initials}
          </div>
        )}
        <div>
          <h3 className="font-semibold text-white">{person}</h3>
          {badge && <p className="text-sm text-slate-400">{badge}</p>}
        </div>
      </div>

      <p className="text-sm text-slate-300 leading-relaxed">{text}</p>

      <div className="mt-3 flex items-center gap-3 text-slate-500">
        {github && github !== "#" && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub de ${person}`}
            className="hover:text-white"
          >
            <Github className="w-4 h-4" />
          </a>
        )}

        {email && (
          <a
            href={email.startsWith("mailto:") ? email : `mailto:${email}`}
            aria-label={`Email de ${person}`}
            className="hover:text-white"
          >
            <Mail className="w-4 h-4" />
          </a>
        )}

        {ig && ig !== "#" && (
          <a
            href={ig}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram de ${person}`}
            className="hover:text-white"
          >
            <Instagram className="w-4 h-4" />
          </a>
        )}

        {li && li !== "#" && (
          <a
            href={li}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn de ${person}`}
            className="hover:text-white"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
