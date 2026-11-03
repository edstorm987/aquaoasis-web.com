"use client";

import { useEffect, useRef, useState } from "react";
import { HeroStage } from "./HeroStage";

/**
 * The home page's signature moment: drag from "before" (a paper flyer pinned to
 * a noticeboard) to "after" (the business online). It sweeps across once on
 * load to show it can be dragged; reduced motion skips the sweep. A native
 * range input drives it, so it works with keyboard and screen readers.
 */
export function DigitalAgeSlider() {
  const [value, setValue] = useState(30);
  const touched = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = window.setTimeout(() => setValue(70), 0);
      return () => window.clearTimeout(id);
    }
    let frame = 0;
    const start = performance.now() + 700;
    const keys = [30, 92, 70];
    const duration = 2400;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = (now: number) => {
      if (touched.current) return;
      const t = Math.min(Math.max((now - start) / duration, 0), 1);
      const value = t < 0.55
        ? keys[0] + (keys[1] - keys[0]) * ease(t / 0.55)
        : keys[1] + (keys[2] - keys[1]) * ease((t - 0.55) / 0.45);
      setValue(value);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const split = 100 - value;

  return (
    <div className="ba" style={{ "--split": `${split}%` } as React.CSSProperties}>
      <div className="ba-before" aria-hidden="true">
        <div className="cork">
          <div className="flyer">
            <i className="tack" />
            <b>Dave&apos;s<br />Plumbing</b>
            <span>No job too small!</span>
            <span className="flyer-lines"><i /><i /><i /></span>
            <div className="tabs">{Array.from({ length: 7 }, (_, index) => <em key={index} className={index === 2 ? "torn" : undefined}>01473 ···</em>)}</div>
          </div>
          <div className="sticky">Website?<br />Maybe next year…</div>
          <div className="closed-sign"><i />Sorry, we&apos;re CLOSED</div>
        </div>
      </div>
      <div className="ba-after">
        <HeroStage />
      </div>
      <div className="ba-divider" aria-hidden="true"><span>⟷</span></div>
      <span className="ba-label left" aria-hidden="true">The old way</span>
      <span className="ba-label right" aria-hidden="true">The digital age</span>
      <label className="sr-only" htmlFor="ba-range">Drag to compare a business before and after going digital</label>
      <input
        id="ba-range"
        className="ba-range"
        type="range"
        min={0}
        max={100}
        step={1}
        value={Math.round(value)}
        aria-valuetext={`${Math.round(value)}% digital`}
        onPointerDown={() => { touched.current = true; }}
        onKeyDown={() => { touched.current = true; }}
        onChange={(event) => { touched.current = true; setValue(Number(event.target.value)); }}
      />
    </div>
  );
}
