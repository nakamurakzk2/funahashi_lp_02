"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden">
            {/* Opening Animation Overlay */}
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0, transition: { delay: 3.5, duration: 0.8, ease: "easeInOut" } }}
                className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white text-text-main px-6 text-center pointer-events-none"
            >
                <div className="max-w-3xl space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-2xl md:text-4xl font-serif font-bold text-primary"
                    >
                        あなたの作ったメロディが、電車で流れる。
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.6 }}
                        className="text-base md:text-xl font-medium leading-relaxed"
                    >
                        富山地方鉄道・越中舟橋駅の「車内メロディ」を作れる、
                        <br className="hidden md:block" />
                        一生に一度のクリエイト体験。
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.7, duration: 0.6 }}
                        className="text-sm md:text-lg text-text-main/80 leading-relaxed"
                    >
                        鉄道ファン、音楽クリエイター、そして地域を愛する事業者へ贈る、
                        <br className="hidden md:block" />
                        限定5枠の特別な商品です。
                    </motion.p>
                </div>
            </motion.div>

            {/* Background Parallax */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/funahashimelody_top.png')` }}
                />
                {/* Lighter Gradient Overlay: Clear top, subtle bottom for readability without being too dark */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>

            {/* Content - Positioned at bottom */}
            <div className="relative z-10 flex h-full flex-col items-center justify-end pb-32 text-center text-white px-4">
                {/* Hidden SEO Text */}
                <h1 className="sr-only">
                    あなたの作ったメロディが、電車で流れる。富山地方鉄道・越中舟橋駅 車内メロディクリエイト体験
                </h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 4.0, ease: "easeOut" }} // Delayed to appear after overlay fades
                >
                    <Button
                        variant="accent"
                        onClick={() => document.getElementById("purchase")?.scrollIntoView({ behavior: "smooth" })}
                        className="text-xl px-10 py-5 shadow-2xl"
                    >
                        限定5枠の権利を購入する
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.5, duration: 1 }} // Delayed
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <div className="h-16 w-[1px] bg-white/50 relative overflow-hidden">
                        <motion.div
                            animate={{ y: ["-100%", "100%"] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            className="absolute inset-0 w-full bg-white"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
