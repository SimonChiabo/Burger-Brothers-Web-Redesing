# Burger Brothers - Web Redesign (Phase 2)

Professional redesign of the Burger Brothers website using a high-performance, modern stack. This project focuses on a gourmet-industrial aesthetic, optimized user experience, and real-time business logic.

## 🚀 Tech Stack
- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS + Custom Design System
- **Icons**: Lucide React
- **Animations**: Framer Motion (for smooth UI transitions)

## 📁 Project Structure

```text
src/
├── assets/             # Static assets (images, logos)
├── components/         # Reusable UI components
│   ├── HeroSection     # Main landing visual
│   ├── IdentitySection # "About Us" and brand values
│   ├── MenuSection     # Dynamic menu with relational logic
│   └── LocationsSection# Real-time restaurant availability
├── data/               # Business logic and data layers
│   ├── menu.js         # Relational database for products and ingredients
│   └── locations.js    # Restaurant database with scalable schedules
├── layouts/            # Page layouts and wrappers
├── index.css           # Global styles and design tokens
└── main.jsx            # Application entry point
```

## 🏗️ Core Architecture Principles

### 1. Relational Data Layer (`src/data/menu.js`)
Unlike static menus, our architecture separates **Ingredients** from **Products**. This allows for:
- Dynamic price calculations.
- Automatic composition listing.
- Easy ingredient updates across the entire menu.

### 2. Hours Engine (`src/data/locations.js`)
We use a scalable "Schedule Template" dictionary (`schedulesDB`). This avoids hardcoding hours into components and allows for centralized management of opening times across different parishes in Andorra.

### 3. Forced Timezone Logic
To ensure tourists see accurate opening times regardless of their device settings, the "Hours Engine" forces the `Europe/Andorra` timezone for all temporal checks.

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🎨 Design System
The project uses a custom color palette defined in `tailwind.config.js`:
- `bb-charcoal`: #0F0F0F (Main background)
- `bb-accent`: #D4AF37 (Gold/Brand color)
- `bb-white`: #F5F5F5 (Typography)
