import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      /* =======================================================================
         COLORS - SemeIA Design System
         ======================================================================= */
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "hsl(var(--primary-50))",
          100: "hsl(var(--primary-100))",
          200: "hsl(var(--primary-200))",
          300: "hsl(var(--primary-300))",
          400: "hsl(var(--primary-400))",
          500: "hsl(var(--primary-500))",
          600: "hsl(var(--primary-600))",
          700: "hsl(var(--primary-700))",
          800: "hsl(var(--primary-800))",
          900: "hsl(var(--primary-900))",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          50: "hsl(var(--secondary-50))",
          100: "hsl(var(--secondary-100))",
          200: "hsl(var(--secondary-200))",
          300: "hsl(var(--secondary-300))",
          400: "hsl(var(--secondary-400))",
          500: "hsl(var(--secondary-500))",
          600: "hsl(var(--secondary-600))",
          700: "hsl(var(--secondary-700))",
          800: "hsl(var(--secondary-800))",
          900: "hsl(var(--secondary-900))",
        },

        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          50: "hsl(var(--accent-50))",
          100: "hsl(var(--accent-100))",
          200: "hsl(var(--accent-200))",
          300: "hsl(var(--accent-300))",
          400: "hsl(var(--accent-400))",
          500: "hsl(var(--accent-500))",
          600: "hsl(var(--accent-600))",
          700: "hsl(var(--accent-700))",
          800: "hsl(var(--accent-800))",
          900: "hsl(var(--accent-900))",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
          light: "hsl(var(--destructive-light))",
        },

        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
          light: "hsl(var(--success-light))",
        },

        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
          light: "hsl(var(--warning-light))",
        },

        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
          light: "hsl(var(--info-light))",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        /* Disciplinas - Cores dos Assistentes Pedagogicos */
        disciplina: {
          geral: "hsl(var(--disciplina-geral))",
          linguagens: "hsl(var(--disciplina-linguagens))",
          matematica: "hsl(var(--disciplina-matematica))",
          humanas: "hsl(var(--disciplina-humanas))",
          natureza: "hsl(var(--disciplina-natureza))",
          infantil: "hsl(var(--disciplina-infantil))",
        },

        /* Status - Badges do Sistema */
        status: {
          gerado: "hsl(var(--status-gerado))",
          editado: "hsl(var(--status-editado))",
          planejado: "hsl(var(--status-planejado))",
          aplicado: "hsl(var(--status-aplicado))",
          cancelado: "hsl(var(--status-cancelado))",
        },

        /* Content Types */
        content: {
          video: "hsl(var(--content-video))",
          reading: "hsl(var(--content-reading))",
          exercise: "hsl(var(--content-exercise))",
          quiz: "hsl(var(--content-quiz))",
          project: "hsl(var(--content-project))",
        },

        /* Gamification */
        gamification: {
          xp: "hsl(var(--xp-color))",
          badge: "hsl(var(--badge-color))",
          streak: "hsl(var(--streak-color))",
        },

        /* Neutral Scale - Cinzas alinhados com produção */
        neutral: {
          50: "hsl(var(--neutral-50))",
          100: "hsl(var(--neutral-100))",
          200: "hsl(var(--neutral-200))",
          300: "hsl(var(--neutral-300))",
          400: "hsl(var(--neutral-400))",
          500: "hsl(var(--neutral-500))",
          600: "hsl(var(--neutral-600))",
          700: "hsl(var(--neutral-700))",
          800: "hsl(var(--neutral-800))",
          900: "hsl(var(--neutral-900))",
        },

        /* Agent Colors - Agentes IA SemeIA */
        agent: {
          leonardo: {
            DEFAULT: "hsl(var(--agent-leonardo))",
            bg: "hsl(var(--agent-leonardo-bg))",
          },
          mafalda: {
            DEFAULT: "hsl(var(--agent-mafalda))",
            bg: "hsl(var(--agent-mafalda-bg))",
          },
          mario: {
            DEFAULT: "hsl(var(--agent-mario))",
            bg: "hsl(var(--agent-mario-bg))",
          },
          martha: {
            DEFAULT: "hsl(var(--agent-martha))",
            bg: "hsl(var(--agent-martha-bg))",
          },
          bento: {
            DEFAULT: "hsl(var(--agent-bento))",
            bg: "hsl(var(--agent-bento-bg))",
          },
          nina: {
            DEFAULT: "hsl(var(--agent-nina))",
            bg: "hsl(var(--agent-nina-bg))",
          },
        },

        /* Brand Extended */
        brand: {
          green: "hsl(var(--primary-500))",
          "green-light": "hsl(var(--brand-green-light))",
          blue: "hsl(var(--agent-mafalda))",
          gold: "hsl(var(--brand-gold))",
          cream: "hsl(var(--brand-cream))",
        },
      },

      /* =======================================================================
         TYPOGRAPHY
         ======================================================================= */
      fontFamily: {
        // SemeIA 3-Font Hierarchy
        // Sans (body/UI): Montserrat
        sans: ["var(--font-montserrat)", "Montserrat", "system-ui", "-apple-system", "sans-serif"],
        // Display (headings): Fraunces — organic serif with optical sizing
        display: ["var(--font-fraunces)", "Fraunces", "Georgia", "serif"],
        // Mono (labels/code/data): DM Mono
        mono: ["var(--font-dm-mono)", "DM Mono", "JetBrains Mono", "Fira Code", "monospace"],
      },

      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
      },

      /* =======================================================================
         BORDER RADIUS
         ======================================================================= */
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        full: "var(--radius-full)",
      },

      /* =======================================================================
         BOX SHADOW
         ======================================================================= */
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        // Colored shadows
        "primary-glow": "0 4px 14px 0 hsl(var(--primary) / 0.25)",
        "success-glow": "0 4px 14px 0 hsl(var(--success) / 0.25)",
        "warning-glow": "0 4px 14px 0 hsl(var(--warning) / 0.25)",
        "error-glow": "0 4px 14px 0 hsl(var(--destructive) / 0.25)",
        // LP shadows
        "brand-hover": "0 8px 25px -5px rgba(61, 139, 64, 0.4)",
        "brand-card": "0 20px 40px -15px rgba(61, 139, 64, 0.2)",
        "accent-hover": "0 8px 25px -5px rgba(232, 148, 26, 0.4)",
        "card-dark": "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      },

      /* =======================================================================
         BACKGROUND IMAGE - Gradientes
         ======================================================================= */
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #5a9a5c 0%, #3d8b40 50%, #2e7d32 100%)",
        "gradient-hero-glow": "radial-gradient(ellipse at center, rgba(61,139,64,0.15) 0%, transparent 70%)",
        "gradient-divider": "linear-gradient(90deg, #3D8B40, #4ade80)",
        "gradient-divider-accent": "linear-gradient(90deg, #E8941A, #fbbf24)",
        "gradient-text": "linear-gradient(90deg, #fff 0%, #86efac 50%, #4ade80 100%)",
        "gradient-radial-glow": "radial-gradient(circle, rgba(61,139,64,0.2) 0%, rgba(61,139,64,0.05) 40%, transparent 70%)",
      },

      /* =======================================================================
         ANIMATIONS
         ======================================================================= */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "slide-in-from-top": {
          from: { transform: "translateY(-10px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "slide-in-from-bottom": {
          from: { transform: "translateY(10px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          from: { transform: "scale(0.95)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".5" },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-5%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
        "fade-out": "fade-out 0.2s ease-out",
        "slide-in-top": "slide-in-from-top 0.3s ease-out",
        "slide-in-bottom": "slide-in-from-bottom 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        shimmer: "shimmer 2s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
      },

      /* =======================================================================
         SPACING EXTENSIONS
         ======================================================================= */
      spacing: {
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "13": "3.25rem",
        "15": "3.75rem",
        "17": "4.25rem",
        "18": "4.5rem",
        "19": "4.75rem",
        "21": "5.25rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        // Semantic spacing tokens (base unit: 4px)
        "space-xs": "var(--space-xs)",         // 4px
        "space-sm": "var(--space-sm)",         // 8px
        "space-md": "var(--space-md)",         // 16px
        "space-lg": "var(--space-lg)",         // 24px
        "space-xl": "var(--space-xl)",         // 32px
        "space-2xl": "var(--space-2xl)",       // 48px
        "space-3xl": "var(--space-3xl)",       // 64px
        "space-section": "var(--space-section)", // 96px
        "space-hero": "var(--space-hero)",     // 80px
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
