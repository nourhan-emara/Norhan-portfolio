/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-soft": "var(--bg-soft)",
        panel: "var(--panel)",
        "purple-deep": "var(--purple-deep)",
        purple: "var(--purple)",
        "purple-bright": "var(--purple-bright)",
        "pink-purple": "var(--pink-purple)",
        text: "var(--text)",
        "text-dim": "var(--text-dim)",
        "text-mute": "var(--text-mute)",
        line: "var(--line)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        pulse2: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.4 },
        },
        blink: {
          "50%": { opacity: 0 },
        },
        shine: {
          to: { backgroundPosition: "-200% center" },
        },
        beam: {
          to: { backgroundPosition: "200% 200%" },
        },
        scrollX: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        pulse2: "pulse2 2s infinite",
        blink: "blink 1s step-start infinite",
        shine: "shine 5s linear infinite",
        beam: "beam 4s linear infinite",
        "scroll-x": "scrollX 26s linear infinite",
      },
    },
  },
  plugins: [],
};
