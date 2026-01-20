"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-24 pb-12 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-10 bg-[url('/images/01_hero_fv.jpg')] bg-cover bg-center pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center" id="purchase">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
                        あなたの音が、歴史になる。
                    </h2>
                    <p className="text-lg md:text-xl font-light opacity-90 mb-12">
                        限定5枠。先着順での販売となります。<br />
                        この機会を逃すと、二度と手に入らない体験かもしれません。
                    </p>

                    <Button variant="accent" className="text-xl px-12 py-6 shadow-2xl hover:scale-105 transition-transform">
                        限定5枠の権利を購入する
                    </Button>
                    <p className="mt-4 text-sm opacity-60">
                        ※ 外部決済サイトへ移動します
                    </p>
                </motion.div>

                <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-60">
                    <p>&copy; 2026 Toyama Railway Project. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">特定商取引法に基づく表記</a>
                        <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
