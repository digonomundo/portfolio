"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TextParallaxContent = ({
    imgUrl,
    heading,
    subheading,
    content,
}: {
    imgUrl: string;
    heading: string;
    subheading: string;
    content?: React.ReactNode;
}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);

    return (
        <div ref={ref} className="relative h-[150vh] px-3">
            <motion.div
                style={{ backgroundImage: `url(${imgUrl})`, scale, opacity }}
                className="sticky top-3 z-0 h-[calc(100vh-24px)] bg-cover bg-center rounded-3xl "
            />
            <motion.div
                style={{ y, opacity, scale }}
                className="absolute inset-0 flex flex-col items-center justify-center text-white"
            >
                <p className="mb-2 text-xl md:mb-4 md:text-3xl text-center">{subheading}</p>
                <h1 className="text-4xl md:text-7xl font-bold text-center">{heading}</h1>
                {content && <div className="mt-6">{content}</div>}
            </motion.div>
        </div>
    );
};

export default TextParallaxContent;
