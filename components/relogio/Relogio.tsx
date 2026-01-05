"use client";

import { useEffect, useState } from "react";

export default function Relogio() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  function formatarHora(data: Date) {
    return data.toLocaleTimeString("pt-PT", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  return (
    <div className="text-3xl font-mono text-white">
      {formatarHora(hora)}
    </div>
  );
}
