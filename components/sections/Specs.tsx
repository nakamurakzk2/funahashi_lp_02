"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Check, Music, Clock, Users } from "lucide-react";
import Image from "next/image";

export const Specs = () => {
    const specs = [
        {
            icon: <Check className="w-8 h-8 text-white" />,
            label: "価格",
            value: "250,000円",
            sub: "(税込)",
        },
        {
            icon: <Users className="w-8 h-8 text-white" />,
            label: "数量",
            value: "限定5枠",
            sub: "先着順",
        },
        {
            icon: <Clock className="w-8 h-8 text-white" />,
            label: "掲載期間",
            value: "4ヶ月間",
            sub: "2026年4月〜予定",
        },
        {
            icon: <Music className="w-8 h-8 text-white" />,
            label: "仕様",
            value: "20秒以内",
            sub: "オリジナル音源",
        },
    ];

    return (
        <div className="bg-natural py-24">
            <Section>
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-widest uppercase block mb-4"
                    >
                        SPECS
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-serif font-bold text-text-main"
                    >
                        体験内容と仕様
                    </motion.h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/ekimero3.png"
                                alt="Specs Visual"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/10" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="text-left text-sm text-text-main/60 leading-relaxed pl-2 rounded-lg"
                        >
                            <p className="mb-1">※ 越中舟橋駅到着前の車内アナウンスに合わせて放送されます。</p>
                            <p>※ 公序良俗に反する内容など、審査によりお断りする場合がございます。</p>
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 lg:h-[500px]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-2 gap-6 h-full">
                            {specs.map((spec, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="bg-white rounded-lg p-6 text-center shadow-md border-b-4 border-primary hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col justify-center items-center"
                                >
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                                        <div className="text-primary">
                                            {/* Re-rendering icons with correct class */}
                                            {spec.label === "価格" && <Check className="w-6 h-6" />}
                                            {spec.label === "数量" && <Users className="w-6 h-6" />}
                                            {spec.label === "掲載期間" && <Clock className="w-6 h-6" />}
                                            {spec.label === "仕様" && <Music className="w-6 h-6" />}
                                        </div>
                                    </div>
                                    <h3 className="text-text-main/70 font-bold mb-2 text-sm">{spec.label}</h3>
                                    <div className="text-xl md:text-2xl font-bold font-serif text-primary mb-1">
                                        {spec.value}
                                    </div>
                                    <div className="text-xs text-text-main/50">{spec.sub}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};
