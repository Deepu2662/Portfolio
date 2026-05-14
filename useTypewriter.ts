"use client";
import { useEffect, useState } from "react";

export function useTypewriter(roles: string[]) {
  const [typed, setTyped] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setTyped(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setTyped(current.slice(0, charIdx - 1));
        if (charIdx === 0) {
          setDeleting(false);
          setRoleIdx((r) => (r + 1) % roles.length);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx, roles]);

  return typed;
}
