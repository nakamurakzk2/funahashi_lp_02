"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

export const Routes = () => {
    const routes = [
        "電鉄富山 発 上市 行",
        "電鉄富山 発 中滑川 行",
        "電鉄富山 発 電鉄黒部 行",
        "電鉄富山 発 宇奈月温泉 行",
        "上市 発 電鉄富山 行",
        "中滑川 発 電鉄富山 行",
        "電鉄黒部 発 電鉄富山 行",
        "浦山 発 電鉄富山 行",
        "宇奈月温泉 発 電鉄富山 行",
        "電鉄富山 発 立山 行",
        "電鉄富山 発 寺田経由岩峅寺 行",
        "立山 発 電鉄富山 行",
        "岩峅寺 発 寺田経由電鉄富山 行",
    ];

    return (
        <Section className="py-24 bg-natural">
            <div className="text-center mb-16">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-primary font-bold tracking-widest uppercase block mb-4"
                >
                    TARGET ROUTES
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-serif font-bold text-text-main"
                >
                    あなたの音が流れる路線
                </motion.h2>
                <p className="mt-6 text-text-main/70">
                    以下の区間を走行する電車内で放送される予定です。
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {routes.map((route, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary flex items-center hover:bg-gray-50 transition-colors"
                    >
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                        <span className="font-bold text-text-main text-sm md:text-base">{route}</span>
                    </motion.div>
                ))}
            </div>
            <div className="mt-12 text-center">
                <p className="text-sm text-text-main/60">※ 実際の運行ダイヤや車両運用により、放送される路線・車両は変動します。</p>
            </div>
        </Section>
    );
};
