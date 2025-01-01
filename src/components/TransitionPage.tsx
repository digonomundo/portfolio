"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

const TransitionPage: React.FC = () => {
    useEffect(() => {
        gsap.fromTo(
            ".loading-page",
            { opacity: 1 },
            {
                opacity: 0,
                display: "none",
                duration: 1.5,
                delay: 0.5,
            }
        );
    }, []);

    return (
        <div className="h-screen w-screen fixed z-[9999] pointer-events-none" aria-hidden="true">
            <div className="loading-page absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center gap-6 bg-black">
                <Image
                    src={"/assets/transicao.gif"}
                    alt={"Play"}
                    width={200}
                    height={200}
                    priority
                    unoptimized
                    className={"object-contain isPlaying"}
                />
            </div>
        </div>
    );
};

export default TransitionPage;
