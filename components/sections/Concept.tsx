"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

export const Concept = () => {
    return (
        <Section className="flex flex-col items-center text-center pt-16 pb-32 bg-natural">
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-primary font-serif font-bold tracking-widest mb-6 block"
            >
                CONCEPT
            </motion.span>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl md:text-5xl font-serif font-bold text-text-main mb-12 leading-relaxed"
            >
                「あの駅の音」の作者は、
                <br />
                あなたです。
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="max-w-2xl mx-auto space-y-8 text-lg font-light leading-loose text-text-main/80"
            >
                <p>
                    鉄道ファンなら一度は想像したことがあるはず。
                    <br />
                    「もし自分が、あの駅のメロディを作れたら」
                </p>
                <p>
                    その夢が、現実になります。<br />
                    越中舟橋駅、到着前の20秒間。
                </p>
                <p>
                    そこに流れるのは、あなたの想いが込められたメロディ。<br />
                    大切な人へのメッセージ、あるいは、<br />
                    あなたが奏でる楽器の音色かもしれません。
                </p>
                <p className="font-serif font-bold text-xl text-primary mt-8">
                    「一生胸を張れる」体験を、あなたに。
                </p>
            </motion.div>
        </Section>
    );
};
