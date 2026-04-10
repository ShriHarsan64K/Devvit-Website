# Devvit Website

> A community of builders & hackers. Where progress matters more than certificates.

## Stack

- **Framework**: React 18 + React Router v6
- **Bundler**: Vite 5
- **Styling**: Tailwind CSS + Inline styles + CSS variables
- **Fonts**: Lexend, Inter, Space Grotesk
- **Forms**: Web3Forms
- **Deployment**: Vercel
- **Node**: v20+

## Brand Colors

| Token    | Hex       | Usage            |
|----------|-----------|------------------|
| BG       | `#0E0E0E` | Background       |
| Purple   | `#A7A5FF` | Primary accent   |
| Orange   | `#FF7439` | Secondary accent |
| White    | `#FFFFFF` | Primary text     |

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
├── vercel.json
├── public/
│   └── images/
│       ├── hero-bg.jpg
│       ├── hackathon.jpg
│       ├── workshop.jpg
│       └── why-devvit.jpg
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── hooks/
    │   └── useReveal.js
    ├── styles/
    │   └── globals.css
    ├── components/
    │   └── shared/
    │       ├── Navbar.jsx
    │       ├── Footer.jsx
    │       └── Button.jsx
    └── pages/
        ├── LandingPage.jsx
        ├── EventsPage.jsx
        ├── ContactPage.jsx
        └── CareersPage.jsx
```

## Pages

| Page    | Route     | KAN    |
|---------|-----------|--------|
| Landing | `/`       | KAN-11 |
| Events  | `/events` | KAN-16 |
| Contact | `/contact`| KAN-27 |
| Careers | `/careers`| KAN-22 |

## Shared Components Status

| Component | KAN    | Status  |
|-----------|--------|---------|
| Navbar    | KAN-6  | ✅ Done |
| Footer    | KAN-7  | ✅ Done |
| Button    | KAN-8  | ✅ Done |
| Tailwind  | KAN-10 | ✅ Done |

## Key Links

| Purpose       | URL |
|---------------|-----|
| Registration  | https://luma.com/yq94wzmt |
| Community     | https://chat.whatsapp.com/IfGcfARdgSJE8KpSz3fraD |
| Discord       | https://discord.gg/pP7RPk7hd |
| Instagram     | https://www.instagram.com/devvit.in |
| LinkedIn      | https://www.linkedin.com/company/devvit/ |
| Contact Email | devvit.work@gmail.com |

## Button Variants

```jsx
<Button variant="primary"   size="lg" href="...">Register</Button>
<Button variant="secondary" size="lg" to="/events">Explore</Button>
<Button variant="orange"    size="lg" href="...">Join Community</Button>
<Button variant="ghost"     size="md">Ghost</Button>
```

## Responsive Breakpoints

| Breakpoint | Width    | Changes |
|------------|----------|---------|
| Mobile     | < 480px  | Single column, 1-col team grid |
| Mobile     | < 768px  | Hamburger nav, stacked cards |
| Tablet     | < 1024px | 2-col team grid, single col contact |
| Desktop    | 1024px+  | Full layout |

## Team

| Name              | Role                                        |
|-------------------|---------------------------------------------|
| N. Raghav         | Co-founder & Tech Lead                      |
| Shreya Kailash    | Co-founder & Design Lead                    |
| Shradha Chassatia | Product Manager                             |
| Sparsh Chandra    | Community & Outreach Lead                   |
| Shri Harsan M     | Technical Lead & Community & Outreach       |
| Piyush            | Design Lead                                 |
| Shristi Singh     | Content & Media Lead                        |
