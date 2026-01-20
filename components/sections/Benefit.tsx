"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const Benefit = () => {
    return (
        <Section className="py-24">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                {/* Content Side */}
                <div className="flex-1 space-y-8">
                    <motion.div>
                        <span className="text-accent font-bold tracking-widest uppercase mb-4 block">
                            SPECIAL BENEFIT
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            購入者限定特典
                            <br />
                            <span className="text-2xl md:text-3xl">「車庫内部」NFT権利証</span>
                        </h2>
                        <div className="h-1 w-20 bg-accent mb-8" />
                        <div className="space-y-6 text-text-main/80 leading-relaxed font-light">
                            <p>
                                本企画の購入者様には、感謝の証として特別なNFTを発行いたします。
                            </p>
                            <p>
                                デザインは、普段関係者しか立ち入れない「富山地方鉄道 車庫内部」の
                                貴重な写真をアートワークとして使用。
                            </p>
                            <p>
                                あなたの支援が、デジタルの確かな証明として永遠に残ります。
                                これは単なる画像データではなく、このプロジェクトに参加した
                                誇り高い証です。
                            </p>
                            <div className="pt-6">
                                <Button
                                    variant="accent"
                                    onClick={() => document.getElementById("purchase")?.scrollIntoView({ behavior: "smooth" })}
                                    className="w-full md:w-auto px-8 py-4 shadow-xl"
                                >
                                    限定5枠の権利を購入する
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Visual Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 relative w-full"
                >
                    <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-2xl border-8 border-white">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/ekimero4.png`}
                            alt="NFT Benefit"
                            fill
                            className="object-cover"
                        />
                        {/* Shine effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        {/* Badge */}
                        <div className="absolute top-4 right-4 bg-accent text-white font-bold px-4 py-2 rounded-full shadow-lg transform rotate-12">
                            Not for Sale
                        </div>
                    </div>
                    {/* Background Decor */}
                    <div className="absolute -z-10 top-6 -left-6 w-full h-full bg-primary/10 rounded-lg" />
                </motion.div>
            </div>
        </Section>
    );
};
