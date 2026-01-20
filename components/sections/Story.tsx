"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const Story = () => {
    return (
        <div className="w-full bg-white py-24 overflow-hidden">
            <Section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0, ease: "easeOut" }}
                    className="relative h-[400px] md:h-[500px] w-full rounded-tr-[100px] overflow-hidden shadow-2xl"
                >
                    <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/ekimero8.png`}
                        alt="Social Value"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                </motion.div>

                {/* Text Side */}
                <div className="flex flex-col justify-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <span className="text-accent font-bold tracking-widest uppercase mb-4 block">
                            STORY
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 leading-tight">
                            鉄道を守り、
                            <br />
                            地域とつながる新しい形
                        </h2>
                        <div className="h-1 w-20 bg-accent mb-8" />
                        <div className="space-y-6 text-text-main/80 leading-relaxed font-light">
                            <p>
                                立山黒部アルペンルートなど世界的な観光資源を支えながら、日常の足として走り続ける富山地方鉄道。
                            </p>
                            <p>
                                当たり前にあるはずの「日常の足」を絶やさず守り続けることは、決して平坦な道のりではありません 。それでも、この鉄路を次世代へつなぐことは、地域というかけがえのない財産を守ることにつながります 。
                            </p>
                            <p>
                                この企画は、鉄道を「乗るもの」から「自ら関わり、形にするもの」へと変える挑戦です。あなたのクリエイティビティが、鉄道を応援する力になり、地域と鉄道をつなぐ新しい絆となります。
                            </p>
                            <div className="pt-6">
                                <Button
                                    variant="accent"
                                    onClick={() => document.getElementById("purchase")?.scrollIntoView({ behavior: "smooth" })}
                                    className="w-full md:w-auto px-8 py-4 shadow-xl"
                                >
                                    体験を購入する
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};
