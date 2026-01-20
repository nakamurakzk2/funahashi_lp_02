import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const Footer = () => {
    return (
        <Section className="bg-primary text-white text-center py-24 relative overflow-hidden" id="purchase">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-10 bg-[url('/images/01_hero_fv.jpg')] bg-cover bg-center pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-3xl font-serif font-bold mb-8">
                        越中舟橋駅の車内メロディクリエイト体験を購入する
                    </h2>
                    <p className="text-lg md:text-xl font-light opacity-90 mb-12">
                        限定5枠。<br />
                        富山地方鉄道の新しい取り組みを体験してください。
                    </p>

                    <Button variant="accent" className="text-xl px-12 py-6 shadow-2xl hover:scale-105 transition-transform">
                        体験を購入する
                    </Button>
                </div>
            </div>
        </Section>
    );
};
