"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode;
    variant?: "primary" | "accent" | "outline";
    className?: string;
}

export const Button = ({ children, variant = "primary", className, ...props }: ButtonProps) => {
    const variants = {
        primary: "bg-primary text-white hover:bg-opacity-90",
        accent: "bg-accent text-white hover:brightness-110 shadow-lg",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
};
