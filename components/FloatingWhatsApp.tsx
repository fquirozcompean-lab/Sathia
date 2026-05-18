"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowBubble(true), 5000);
    const hideTimer = setTimeout(() => setShowBubble(false), 30000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2 pb-[env(safe-area-inset-bottom)]">
      {showBubble && (
        <button
          onClick={() => setShowBubble(false)}
          className="bg-snow text-ink text-sm shadow-lg rounded-2xl py-2 px-4 animate-fadeIn mb-1 border border-snow-border hover:bg-violet-light transition"
          aria-label="Cerrar mensaje"
        >
          ¿Dudas o quieres agendar?
        </button>
      )}

      <a
        href="https://wa.me/524791037564?text=Hola%20MNC.%20Sathia%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#1ebe57] text-white p-4 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center"
        aria-label="Agendar por WhatsApp"
      >
        <FaWhatsapp size={32} aria-hidden="true" />
      </a>
    </div>
  );
}
