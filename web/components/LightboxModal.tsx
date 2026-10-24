import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  imageTitle?: string;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function LightboxModal({
  isOpen,
  onClose,
  imageUrl,
  imageTitle,
  onPrev,
  onNext,
}: LightboxModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 text-slate-300 hover:text-white"
        aria-label="Cerrar visor"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 text-slate-300 hover:text-white hidden sm:flex items-center justify-center"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 text-slate-300 hover:text-white hidden sm:flex items-center justify-center"
          aria-label="Siguiente imagen"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main image container */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt={imageTitle || "Visualización de imagen"}
          className="max-h-[75vh] w-auto max-w-full object-contain"
        />

        {imageTitle && (
          <p className="mt-3 text-slate-300 text-sm text-center">
            {imageTitle}
          </p>
        )}
      </div>
    </div>
  );
}
