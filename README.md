# MealMuse Landing Page

A production-ready, recruiter-facing portfolio landing page for the MealMuse iOS application.

## Architecture

```
mealmuse-landing/
├── index.html              # Semantic HTML structure
├── css/
│   ├── variables.css       # Design tokens (colors, spacing, typography)
│   ├── base.css            # CSS reset + global styles
│   ├── components.css      # Reusable UI components
│   ├── sections.css        # Page-specific layouts
│   └── responsive.css      # Mobile + tablet adaptations
├── js/
│   └── main.js             # Interactivity (vanilla JS, no frameworks)
├── assets/
│   ├── images/             # App screenshots (add your own)
│   └── icons/              # Custom icons (optional)
└── README.md
```

## Design Principles

- **Separation of concerns**: HTML (structure), CSS (presentation), JS (behavior)
- **CSS custom properties**: Centralized design tokens for maintainability
- **Mobile-first responsive**: Adapts from 320px to 4K
- **Accessibility**: Focus states, semantic HTML, ARIA labels
- **Performance**: No external dependencies except Google Fonts
- **Zero frameworks**: Pure HTML/CSS/JS — demonstrates fundamental skills

## Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Structure | Semantic HTML5 | Accessibility, SEO, readability |
| Styling | CSS3 + Custom Properties | Maintainable, no build step |
| Behavior | Vanilla ES6+ | Demonstrates JS fundamentals |
| Icons | Inline SVG | No icon font dependency, crisp at all sizes |
| Font | Inter (Google Fonts) | Professional, Apple-adjacent aesthetic |

## Deployment

### GitHub Pages (Free)
1. Create repository `mealmuse`
2. Push this code
3. Settings → Pages → Deploy from branch → `main`
4. Live at `https://yourname.github.io/mealmuse`

### Netlify (Drag & Drop)
1. Zip the project folder
2. Drag to [netlify.com](https://netlify.com)
3. Live in 30 seconds

### Vercel
```bash
npm i -g vercel
vercel
```

## Customization

| File | What to Change |
|------|---------------|
| `index.html` | Your name, links, bio text |
| `css/variables.css` | Colors, spacing, fonts |
| `js/main.js` | Screenshot labels, gradients |
| `assets/images/` | Add real app screenshots |

## Recruiter Signals

This codebase demonstrates:
- ✅ Semantic HTML structure
- ✅ CSS architecture (BEM-like naming, design tokens)
- ✅ Responsive design strategy
- ✅ Vanilla JavaScript (no framework dependency)
- ✅ Performance consciousness (minimal dependencies)
- ✅ Accessibility awareness
- ✅ Clean file organization

## License

MIT — use freely for your portfolio.