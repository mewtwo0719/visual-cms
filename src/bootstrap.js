// bootstrap.js
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const htmlTemplate = (bodyContent = '') => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="./output.css" rel="stylesheet" />
    <title>Document</title>
  </head>
  <body>
    ${bodyContent}
  </body>
</html>`

const files = {
  'package.json': `{
    "name": "tailwind3-html",
    "version": "1.0.0",
    "main": "index.js",
    "scripts": {
      "build": "tailwindcss -i ./styles.css -o ./src/output.css"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "description": "",
    "devDependencies": {
      "au": "^2.0.0-beta.14",
      "postcss": "^8.4.38",
      "tailwindcss": "^3.4.3"
    },
    "dependencies": {
      "@tailwindcss/typography": "^0.5.13",
      "tailwindcss-animate": "^1.0.7"
    }
  }`,

  'postcss.config.js': `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`,

  'styles.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

/* Add your Tailwind layers or theme overrides here */

@layer base {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: unset;
    font-weight: unset;
  }

  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 240 5% 96%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 240 6% 80%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.2rem;
    --success: 196 52% 74%;
    --warning: 34 89% 85%;
    --error: 10 100% 86%;
  }

  [data-theme="dark"] {
    --background: 0 0% 0%;
    --foreground: 210 40% 98%;
    --card: 0 0% 4%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 0, 0%, 15%, 0.8;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
    --success: 196 100% 14%;
    --warning: 34 51% 25%;
    --error: 10 39% 43%;
  }

  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground min-h-[100vh] flex flex-col;
  }
}

html[data-theme="dark"],
html[data-theme="light"] {
  opacity: initial;
}`,

  'tailwind.config.js': `const typography = require("@tailwindcss/typography");
const tailwindcssAnimate = require("tailwindcss-animate");

module.exports = {
  content: ["./src/**/*.html"],
  darkMode: ["selector", '[data-theme="dark"]'],
  plugins: [tailwindcssAnimate, typography],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        "2xl": "2rem",
        DEFAULT: "1rem",
        lg: "2rem",
        md: "2rem",
        sm: "1rem",
        xl: "2rem",
      },
      screens: {
        "2xl": "86rem",
        lg: "64rem",
        md: "48rem",
        sm: "40rem",
        xl: "80rem",
      },
    },
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        background: "hsl(var(--background))",
        border: "hsla(var(--border))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        foreground: "hsl(var(--foreground))",
        input: "hsl(var(--input))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        ring: "hsl(var(--ring))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        success: "hsl(var(--success))",
        error: "hsl(var(--error))",
        warning: "hsl(var(--warning))",
      },
      fontFamily: {
        mono: ["var(--font-geist-mono)"],
        sans: ["var(--font-geist-sans)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      typography: () => ({
        DEFAULT: {
          css: [
            {
              "--tw-prose-body": "var(--text)",
              "--tw-prose-headings": "var(--text)",
              h1: { fontWeight: "normal", marginBottom: "0.25em" },
            },
          ],
        },
        base: {
          css: [
            {
              h1: { fontSize: "2.5rem" },
              h2: { fontSize: "1.25rem", fontWeight: 600 },
            },
          ],
        },
        md: {
          css: [
            {
              h1: { fontSize: "3.5rem" },
              h2: { fontSize: "1.5rem" },
            },
          ],
        },
      }),
    },
  },
}`,
}

export async function bootstrap(projectName, bodyContent = '') {
  const targetDir = path.resolve(process.cwd(), projectName)
  const srcDir = path.join(targetDir, 'src')
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir)
  if (!fs.existsSync(srcDir)) fs.mkdirSync(srcDir)

  for (const [fileName, content] of Object.entries(files)) {
    fs.writeFileSync(path.join(targetDir, fileName), content)
  }

  fs.writeFileSync(path.join(srcDir, 'index.html'), htmlTemplate(bodyContent))

  execSync('npm install', { cwd: targetDir, stdio: 'inherit' })
  execSync('npm run build', { cwd: targetDir, stdio: 'inherit' })

  console.log(`✅ Project "${projectName}" created.`)
}

// CLI
// const [, , name, ...htmlParts] = process.argv
// if (!name) {
//   console.error('❌ Please provide a project name.')
//   process.exit(1)
// }
// const html = htmlParts.join(' ')
// bootstrap(name, html)
