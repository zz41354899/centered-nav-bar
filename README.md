# UI Designer Portfolio

A modern, dark minimalist portfolio website showcasing digital design work with fluid animations and user-centered design principles.

## 🎨 Features

- **Responsive Design** - Fully responsive RWD layout that works seamlessly on mobile, tablet, and desktop
- **Dynamic Navigation** - Interactive navbar with smooth scroll navigation and active section highlighting
- **Smooth Animations** - Framer Motion animations for engaging user experience
- **Dark Theme** - Premium dark minimalist design with glassmorphism effects
- **Mobile Menu** - Adaptive mobile menu that extends from the navbar
- **Project Showcase** - Beautiful project cards with hover effects
- **Scroll Animations** - Scroll-triggered animations for content sections

## 🛠 Technologies

This project is built with:

- **Vite** - Next generation frontend tooling
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **shadcn/ui** - High-quality UI components
- **Lucide React** - Icon library

## 🚀 Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd centered-nav-bar

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── DynamicIslandNav.tsx    # Main navigation component
│   ├── HeroSection.tsx          # Hero section with CTA buttons
│   ├── AboutSection.tsx         # About me section
│   ├── WorkSection.tsx          # Project showcase
│   ├── ProcessSection.tsx       # Design process steps
│   ├── ContactSection.tsx       # Contact form
│   └── Footer.tsx               # Footer component
├── hooks/
│   └── useScrollAnimation.tsx   # Custom scroll animation hook
├── App.tsx                      # Main app component
└── main.tsx                     # Entry point
```

## 🎯 Key Components

### DynamicIslandNav
- Responsive navigation bar with glassmorphism effect
- Smooth scroll navigation to sections
- Mobile-friendly hamburger menu
- Active section highlighting

### WorkSection
- Grid layout for project cards
- Hover effects with overlay
- Placeholder images support
- Responsive grid (1-3 columns)

### Animations
- Scroll-triggered fade-in animations
- Staggered item animations
- Smooth transitions and hover effects
- Parallax effects in hero section

## 🔧 Development

### Build for production

```sh
npm run build
```

### Preview production build

```sh
npm run preview
```

## 📝 Customization

- **Colors** - Edit Tailwind config for theme colors
- **Content** - Update component content in respective files
- **Animations** - Modify Framer Motion variants in components
- **Images** - Replace placeholder images in WorkSection

## 📱 Responsive Breakpoints

- **Mobile** - < 640px (sm)
- **Tablet** - 640px - 1024px (md)
- **Desktop** - > 1024px (lg)

## 🌟 Features Highlights

- ✨ Smooth scroll navigation with offset
- 🎬 Framer Motion scroll animations
- 📱 Fully responsive RWD design
- 🎨 Dark minimalist aesthetic
- ⚡ Fast performance with Vite
- 🔄 Automatic active section detection
- 🎯 Mobile-optimized menu

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

UI Designer Portfolio - Crafting Digital Experiences
