# 🏋️‍♀️ Fitness Trainer Website

A modern, responsive website for a female fitness trainer built with React and TypeScript. Features smooth scrolling navigation, animated sections, and a professional design optimized for attracting potential clients.

## ✨ Features

- **Modern React Architecture**: Built with React 18 and TypeScript for type safety
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Smooth Navigation**: Custom hooks for smooth scrolling and active section tracking
- **Component-Based Structure**: Modular, reusable components with CSS modules
- **Performance Optimized**: Lazy loading and optimized images
- **Accessibility**: ARIA labels and semantic HTML

## 🏗️ Architecture

### **Project Structure**

```
src/
├── components/          # React components
│   ├── Header/         # Navigation and logo
│   ├── Hero/           # Hero section with CTA
│   ├── About/          # About section with credentials
│   ├── Collaboration/  # Features and process
│   ├── Pricing/        # Pricing plans and cards
│   ├── Contact/        # Contact info and social links
│   └── Footer/         # Footer component
├── hooks/              # Custom React hooks
│   ├── useScrollPosition.ts
│   ├── useSmoothScroll.ts
│   └── useActiveSection.ts
├── types/              # TypeScript interfaces
│   └── index.ts
├── styles/             # Global styles and CSS variables
│   └── globals.css
├── App.tsx             # Main app component
└── main.tsx           # Entry point
```

### **Component Architecture**

Each component follows these principles:

- **Single Responsibility**: Each component has one clear purpose
- **CSS Modules**: Scoped styling to prevent conflicts
- **TypeScript Interfaces**: Strong typing for props and data
- **Responsive Design**: Mobile-first with breakpoints

### **Custom Hooks**

- `useScrollPosition`: Tracks window scroll position
- `useSmoothScroll`: Provides smooth scrolling functionality
- `useActiveSection`: Determines active navigation section

## 🎨 Design System

### **CSS Variables**

The design system uses CSS custom properties for consistency:

```css
:root {
  --color-primary: #e74c3c;
  --color-secondary: #2c3e50;
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --border-radius-md: 15px;
  --transition-fast: 0.3s ease;
}
```

### **Typography**

- **Font Family**: Poppins (Google Fonts)
- **Hierarchy**: Semantic heading structure (h1-h4)
- **Responsive**: Fluid typography with CSS clamp

### **Color Palette**

- **Primary**: Red (#e74c3c) - for CTAs and accents
- **Secondary**: Dark blue (#2c3e50) - for headers
- **Gradients**: Purple-blue gradients for hero and featured cards

## 🚀 Getting Started

### **Prerequisites**

- Node.js 18+
- npm or yarn

### **Installation**

1. **Install dependencies:**

```bash
npm install
```

2. **Start development server:**

```bash
npm run dev
```

3. **Build for production:**

```bash
npm run build
```

4. **Preview production build:**

```bash
npm run preview
```

### **Scripts**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## 📱 Sections

### **1. Header**

- Fixed navigation with blur backdrop
- Dumbbell logo with brand name
- Responsive mobile menu
- Active section highlighting

### **2. Hero**

- Eye-catching gradient background
- Professional trainer image
- Call-to-action button
- Responsive layout

### **3. About Me**

- Personal story and credentials
- Professional certifications
- Trust-building content
- Split image/text layout

### **4. Collaboration**

- Training process explanation
- Feature cards with icons
- Benefits and value propositions
- Hover animations

### **5. Pricing**

- Three-tier pricing structure
- Featured plan highlighting
- Feature comparisons
- Call-to-action buttons

### **6. Contact**

- Contact information
- Social media links
- Business hours
- Location details

## 🛠️ Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS Modules** - Scoped styling
- **CSS Grid & Flexbox** - Layout
- **CSS Custom Properties** - Design tokens
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## 📈 Performance

- **Optimized Images**: WebP format with fallbacks
- **Lazy Loading**: Images load on demand
- **CSS Optimization**: Minimal runtime styling
- **Tree Shaking**: Unused code elimination
- **Modern Build**: ES modules and modern syntax

## 🎯 Best Practices

### **React/TypeScript**

- Functional components with hooks
- Strong typing with interfaces
- Component composition over inheritance
- Custom hooks for logic reuse

### **CSS**

- Mobile-first responsive design
- CSS Grid for complex layouts
- Flexbox for component alignment
- CSS custom properties for theming

### **Accessibility**

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast ratios

## 🔧 Customization

### **Changing Colors**

Update CSS variables in `src/styles/globals.css`:

```css
:root {
  --color-primary: #your-color;
  --color-secondary: #your-color;
}
```

### **Adding Sections**

1. Create component in `src/components/`
2. Add CSS module for styling
3. Import and use in `App.tsx`
4. Update navigation in `Header/Navigation.tsx`

### **Modifying Content**

- Update trainer info in `About/About.tsx`
- Modify pricing plans in `Pricing/Pricing.tsx`
- Change contact details in `Contact/Contact.tsx`

## 📄 License

This project is created for demonstration purposes. Feel free to use it as a template for your own fitness trainer website.

---

Built with ❤️ for fitness professionals looking to showcase their services online.
