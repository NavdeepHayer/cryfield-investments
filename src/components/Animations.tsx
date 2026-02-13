import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Fade up - classic entrance
export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Slide in from left
export function SlideLeft({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Slide in from right
export function SlideRight({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Scale + fade in
export function ScaleIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Rotate in from tilted
export function RotateIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: 15, y: 30 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      style={{ perspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Flip up from below
export function FlipUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: -30, y: 50 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ perspective: 1000, transformOrigin: "bottom center" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Blur in - fades from blurred to clear
export function BlurIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for child items
export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className = "",
}: {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={{
        visible: {
          transition: { staggerChildren: staggerDelay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger item (child of StaggerContainer)
export function StaggerItem({
  children,
  className = "",
  variant = "fadeUp",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "fadeUp" | "scaleUp" | "slideLeft" | "slideRight" | "flipUp";
}) {
  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.8, y: 20 },
      visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
    },
    slideLeft: {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
    },
    slideRight: {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
    },
    flipUp: {
      hidden: { opacity: 0, rotateX: -20, y: 30 },
      visible: {
        opacity: 1,
        rotateX: 0,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
      },
    },
  };

  return (
    <motion.div
      variants={variants[variant]}
      style={variant === "flipUp" ? { perspective: 800 } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Parallax floating orb tied to scroll
export function ParallaxOrb({
  className = "",
  speed = 0.3,
  size = 200,
}: {
  className?: string;
  speed?: number;
  size?: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.6, 0.6, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, width: size, height: size }}
      className={`absolute rounded-full pointer-events-none ${className}`}
    />
  );
}

// Scroll progress bar at top of page
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-20 left-0 right-0 h-[2px] bg-gold-500 origin-left z-50"
    />
  );
}

// Counter animation for stats
export function AnimatedStat({
  value,
  label,
  delay = 0,
}: {
  value: string;
  label: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      className="text-center"
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.3, delay: delay + 0.2 }}
        className="text-3xl lg:text-4xl font-bold text-navy-900 mb-2"
      >
        {value}
      </motion.p>
      <p className="text-navy-500 text-sm font-medium uppercase tracking-wider">
        {label}
      </p>
    </motion.div>
  );
}
