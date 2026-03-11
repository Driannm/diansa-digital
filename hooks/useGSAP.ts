// hooks/useGSAP.ts
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type GSAPCallback = (
  gsap: typeof import("gsap").default,
  ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger,
  ref: React.RefObject<HTMLElement>
) => void;

export function useGSAP(callback: GSAPCallback, deps: React.DependencyList = []) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Scope context ke elemen ref — animasi terisolasi, tidak bocor ke komponen lain
    const ctx = gsap.context(() => {
      callback(gsap, ScrollTrigger, ref as React.RefObject<HTMLElement>);
    }, ref.current);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}