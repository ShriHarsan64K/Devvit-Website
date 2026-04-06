# Devvit Website

> A community of builders & hackers. Where progress matters more than certificates.

## Stack

- **Framework**: React 18 + React Router v6
- **Bundler**: Vite 5
- **Styling**: Tailwind CSS + CSS variables
- **Fonts**: Lexend, Inter, Space Grotesk
- **Node**: v20+

## Brand Colors

| Token           | Hex       | Usage            |
|-----------------|-----------|------------------|
| `devvit-bg`     | `#0E0E0E` | Background       |
| `devvit-purple` | `#A7A5FF` | Primary accent   |
| `devvit-orange` | `#FF7439` | Secondary accent |
| `devvit-white`  | `#FFFFFF` | Primary text     |

## Getting Started

```bash
# Requires Node v20+
nvm use 20

npm install
npm run dev
```

Open `http://localhost:5173`

## Project Structure

```
Devvit-Website/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── styles/
│   │   └── globals.css
│   ├── components/
│   │   └── shared/
│   │       ├── Navbar.jsx       # KAN-6 ✅
│   │       ├── Footer.jsx       # KAN-7 ✅
│   │       ├── Button.jsx       # KAN-8 ✅
│   │       └── Card.jsx         # KAN-9 ✅
│   └── pages/
│       ├── LandingPage.jsx      # KAN-11 🔧 In Progress
│       ├── EventsPage.jsx       # KAN-16 ⏳ Todo
│       ├── CareersPage.jsx      # KAN-22 ⏳ Todo
│       └── ContactPage.jsx      # KAN-27 ⏳ Todo
├── public/
│   ├── images/
│   └── fonts/
└── docs/
    └── style-guide.md
```

## Component Status

| Component | KAN Ticket | Status      |
|-----------|------------|-------------|
| Navbar    | KAN-6      | ✅ Done     |
| Footer    | KAN-7      | ✅ Done     |
| Button    | KAN-8      | ✅ Done     |
| Card      | KAN-9      | ✅ Done     |
| Tailwind  | KAN-10     | ✅ Done     |

## Pages Status

| Page        | KAN Ticket | Status         |
|-------------|------------|----------------|
| Landing     | KAN-11     | 🔧 In Progress |
| Events      | KAN-16     | ⏳ Todo        |
| Careers     | KAN-22     | ⏳ Todo        |
| Contact     | KAN-27     | ⏳ Todo        |

## Button Variants

```jsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="orange">Orange</Button>
<Button variant="ghost">Ghost</Button>
```

## Card Variants

```jsx
<Card variant="feature" title="Hackathons" description="..." />
<Card variant="event" title="Hack & Ship" date="APR 17-19, 2026" description="..." />
<Card variant="team" name="N. Raghav" role="Co-founder" quote="..." />
```

