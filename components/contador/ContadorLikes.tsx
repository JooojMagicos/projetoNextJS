"use client";

import { useEffect, useState } from "react";

interface Props {
  id: number;
}

export default function ContadorLikes({ id }: Props) {
  const key = `likes-tech-${id}`;
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    // lendo do localstorage
    const saved = localStorage.getItem(key);
    // caso haja valor
    if (saved !== null) {
      setLikes(Number(saved));
    }
  }, [key]);

  useEffect(() => {
    // salvar
    localStorage.setItem(key, likes.toString());
  }, [likes, key]);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setLikes((prev) => prev + 1);
      }}
      className="px-4 py-2 bg-red-600 rounded"
    >
      👍 {likes}
    </button>
  );
}
