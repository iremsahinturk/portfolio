import { useLayoutEffect, useRef, useState } from "react";
import halfSun from "@/assets/vodafone/half-sun.webp"
import iremAvatar from "@/assets/irem-avatar.svg"


export const Hero = () => {
  const titleRef = useRef(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [bottom, setBottom] = useState(0);

  useLayoutEffect(() => {
    if (!imgRef.current) return;

    const updateBottom = () => {
      if (!imgRef.current) return;
      // Store the sun's height so we can position text relative to it
      setBottom(imgRef.current.offsetHeight);
    };

    updateBottom();

    // Recalculate when the sun image is resized (e.g., viewport changes)
    const observer = new ResizeObserver(updateBottom);
    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-white"
      style={
        {
          // CSS variable defines responsive sun width across all breakpoints
          "--sunWidth": "clamp(900px, 100vw, 1800px)",
        } as React.CSSProperties
      }
    >
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Container height is half the sun's width to accommodate the half-sun shape */}
        <div className="relative h-[calc(var(--sunWidth)/2)] min-h-[520px] max-h-[1000px]">
          {/* 
            HALF-SUN IMAGE:
            - Anchored to bottom center of container
            - Width controlled by --sunWidth CSS variable for consistent scaling
            - Positioned using left-1/2 + -translate-x-1/2 for perfect centering
          */}
          <img
            src={halfSun}
            ref={imgRef}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[var(--sunWidth)] max-w-none"
          />

          {/* 
            TEXT CONTENT:
            - Positioned relative to sun's actual height (stored in 'bottom' state)
            - Vertically offset by 60% (translate-y-3/5) to sit visually centered on sun
            - Horizontally centered with left-1/2 + -translate-x-1/2
            - Updates dynamically when sun resizes via ResizeObserver
          */}
          <div
            className="absolute left-1/2 -translate-x-1/2 translate-y-3/5 w-full max-w-3xl text-center"
            ref={titleRef}
            style={{ bottom } as React.CSSProperties}
          >
            <div className="flex flex-col items-center gap-10">
              <div className="flex items-center justify-center gap-10">
                <img src={iremAvatar} alt="Irem Sahinturk Avatar" className="object-cover" />
                <h2 className="lg:text-4xl md:text-2xl text-xl">Hello! I&apos;am </h2>
              </div>

              <h1 className="lg:text-9xl md:text-7xl text-5xl font-normal leading-[0.92] tracking-tight text-mavi whitespace-nowrap">
                Irem Sahinturk.
              </h1>

              <div className="max-w-4xl">
                <h2 className="lg:text-2xl text-center font-normal leading-8 tracking-normal">
                  Senior UX Designer with
                  <span className="circle-sketch-highlight">6+ years of experience</span>
                  &nbsp;&nbsp;working on high-complexity systems in mission-driven domains. I enjoy creating clear, human-centered experiences with real-world impact.
                </h2>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-3 bg-[#1a2bd8]" />
        </div>
      </div>
    </section>
  )
}
