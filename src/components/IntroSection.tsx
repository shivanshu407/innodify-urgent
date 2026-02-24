"use client";

import { motion } from "framer-motion";

export function IntroSection() {
    return (
        <section className="py-24 md:py-32 bg-[#0e1012] overflow-hidden relative">
            {/* Background liquid effects */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute w-[400px] h-[400px] rounded-full bg-[#00adef]/10 blur-3xl"
                    style={{ top: '10%', right: '-10%' }}
                    animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-3xl"
                    style={{ bottom: '10%', left: '-5%' }}
                    animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight">
                            The future of{" "}
                            <span className="text-gradient-liquid">technology</span> is here
                        </h2>
                        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                            We combine strategy, technology, and innovation to build
                            software solutions that transform businesses. Our
                            integrated approach ensures every product is optimized for
                            performance and growth.
                        </p>
                    </motion.div>

                    {/* Animated Liquid Glass Venn Diagram */}
                    <div className="relative h-80 md:h-[420px] flex items-center justify-center">
                        {/* Outer rotating ring */}
                        <motion.div
                            className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border border-[#00adef]/20"
                            style={{ borderStyle: 'dashed' }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Inner rotating ring */}
                        <motion.div
                            className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border border-[#00adef]/10"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Strategy Circle - Liquid Glass */}
                        <motion.div
                            className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-28 md:w-36 md:h-36"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <motion.div
                                className="w-full h-full rounded-full liquid-glass-glow flex items-center justify-center relative overflow-hidden"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(0, 173, 239, 0.3) 0%, rgba(0, 173, 239, 0.1) 100%)',
                                }}
                                whileHover={{ scale: 1.05 }}
                            >
                                {/* Shimmer effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                                    animate={{ x: ['-100%', '200%'] }}
                                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                                />
                                <span className="text-white font-bold text-sm md:text-base drop-shadow-lg z-10">Strategy</span>
                            </motion.div>
                        </motion.div>

                        {/* Technology Circle - Liquid Glass */}
                        <motion.div
                            className="absolute bottom-8 left-[10%] md:left-[15%] w-28 h-28 md:w-36 md:h-36"
                            animate={{ x: [0, 8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                            <motion.div
                                className="w-full h-full rounded-full liquid-glass flex items-center justify-center relative overflow-hidden"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(0, 100, 150, 0.4) 0%, rgba(0, 80, 120, 0.2) 100%)',
                                }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12"
                                    animate={{ x: ['-100%', '200%'] }}
                                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 3 }}
                                />
                                <span className="text-white font-bold text-sm md:text-base drop-shadow-lg z-10">Technology</span>
                            </motion.div>
                        </motion.div>

                        {/* Marketing Circle - Liquid Glass */}
                        <motion.div
                            className="absolute bottom-8 right-[10%] md:right-[15%] w-28 h-28 md:w-36 md:h-36"
                            animate={{ x: [0, -5, 0], y: [0, 5, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <motion.div
                                className="w-full h-full rounded-full liquid-glass flex items-center justify-center relative overflow-hidden"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
                                }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                                    animate={{ x: ['-100%', '200%'] }}
                                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
                                />
                                <span className="text-white/90 font-bold text-sm md:text-base z-10">Marketing</span>
                            </motion.div>
                        </motion.div>

                        {/* Center SUCCESS with liquid glass effect */}
                        <motion.div
                            className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8, type: "spring" }}
                        >
                            <motion.div
                                className="relative"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                {/* Glow ring */}
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-[#00adef]/30 blur-lg"
                                    animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.6, 0.4] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <div className="relative liquid-glass px-4 py-2 rounded-full">
                                    <span className="text-xs font-bold text-[#00adef] uppercase tracking-wider">
                                        Success
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Orbiting dots */}
                        {[0, 1, 2, 3, 4, 5].map((i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-r from-[#00adef] to-[#00d4ff]"
                                style={{ top: "50%", left: "50%" }}
                                animate={{
                                    x: [
                                        Math.cos((i * 60) * Math.PI / 180) * 140,
                                        Math.cos((i * 60 + 360) * Math.PI / 180) * 140
                                    ],
                                    y: [
                                        Math.sin((i * 60) * Math.PI / 180) * 140,
                                        Math.sin((i * 60 + 360) * Math.PI / 180) * 140
                                    ],
                                }}
                                transition={{
                                    duration: 12,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 0.5,
                                }}
                            />
                        ))}

                        {/* Connection lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 420">
                            <motion.path
                                d="M 200 100 L 80 320"
                                stroke="url(#lineGradient)"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="8 6"
                                strokeOpacity="0.4"
                                animate={{ strokeDashoffset: [0, -28] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.path
                                d="M 200 100 L 320 320"
                                stroke="url(#lineGradient)"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="8 6"
                                strokeOpacity="0.4"
                                animate={{ strokeDashoffset: [0, -28] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.3 }}
                            />
                            <motion.path
                                d="M 80 320 L 320 320"
                                stroke="url(#lineGradient)"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="8 6"
                                strokeOpacity="0.4"
                                animate={{ strokeDashoffset: [0, -28] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.6 }}
                            />
                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#00adef" />
                                    <stop offset="100%" stopColor="#00d4ff" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
