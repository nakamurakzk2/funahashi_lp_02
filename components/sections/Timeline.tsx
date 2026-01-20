"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import Image from "next/image";

export const Timeline = () => {
    return (
        <div className="bg-natural py-24">
            <Section className="flex flex-col items-center">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-widest uppercase block mb-4"
                    >
                        PROCESS
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-serif font-bold text-text-main"
                    >
                        音源制作のステップ
                    </motion.h2>
                </div>

                {/* Visual Timeline Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full max-w-2xl mx-auto relative aspect-square rounded-xl overflow-hidden shadow-lg"
                >
                    <Image
                        src="/images/ekimero2.png"
                        alt="Process Steps"
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </Section>
        </div>
    );
};
