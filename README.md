# Bloomora Flowers 🌸

A modern, production-ready e-commerce flower shop built with React, TypeScript, and Tailwind CSS.

## Features

- 🛒 **Shopping Cart** - Add products to cart with localStorage persistence
- ❤️ **Favorites** - Save favorite products with localStorage
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🎨 **Modern UI** - Clean, elegant design with smooth animations
- 🔍 **Product Filtering & Sorting** - Filter by price, sort by name/price/rating
- 📄 **Product Details** - Detailed product pages with multiple sizes
- 🏠 **Multiple Pages** - Home, Shop, Product Details, Cart, About, Contact
- ✅ **Tests** - Unit tests with Vitest
- 🔧 **Developer Tools** - ESLint, TypeScript strict mode

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Testing**: Vitest + Testing Library
- **Linting**: ESLint with TypeScript support

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm ci

# Or with yarn
yarn install
```

### Development

```bash
# Start development server
npm run dev

# The app will open at http://localhost:5173
```

### Building

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/        # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── Hero.tsx
│   └── OccasionCard.tsx
├── pages/            # Page components
│   ├── Home.tsx
│   ├── Shop.tsx
│   ├── ProductDetails.tsx
│   ├── Cart.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── hooks/            # Custom React hooks
│   ├── useCart.ts
│   └── useFavorites.ts
├── data/             # Mock data
│   └── products.ts
├── types/            # TypeScript types
│   └── index.ts
├── test/             # Test setup
│   └── setup.ts
├── App.tsx           # Root component
├── main.tsx          # Entry point
└── index.css         # Global styles with Tailwind
```

## Features Details

### Shopping Cart
- Add/remove products with different sizes
- Update quantities
- Persistent storage with localStorage
- Automatic price calculation with shipping and tax

### Favorites
- Save/unsave products
- Visual heart icon indicator
- Persistent storage with localStorage
- Quick access from shop pages

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly interface
- Optimized images

### Product Filtering
- Filter by price range
- Sort by: Featured, Price (Low-High), Price (High-Low), Rating
- Real-time filtering

## Mock Data

The app includes 15 mock flower products with:
- Product details (name, description, price)
- Multiple size options with price modifiers
- Ratings and review counts
- Product images from Unsplash
- Categories (roses, tulips, sunflowers, peonies, lavender, mixed)
- Occasions (Birthday, Anniversary, Love & Romance, etc.)

## Testing

Run the test suite:

```bash
# Run all tests
npm run test

# Run tests with UI
npm run test:ui

# Watch mode
npm run test -- --watch
```

## Code Quality

- **TypeScript** - Strict mode enabled for type safety
- **ESLint** - Code linting with TypeScript support
- **No Console Warnings** - Strict ESLint configuration

Run linting:

```bash
npm run lint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images with responsive sizes
- Code splitting with React Router
- Lazy loading for components
- Efficient re-renders with React hooks

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance

## Future Enhancements

- [ ] User authentication
- [ ] Checkout flow
- [ ] Payment processing
- [ ] Order tracking
- [ ] Admin dashboard
- [ ] Product reviews and ratings
- [ ] Wishlist sharing
- [ ] SMS notifications

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contact

**Bloomora Flowers**
- Email: hello@bloomora.com
- Phone: (555) 123-4567
- Address: 123 Flower Street, New York, NY 10001

---

Made with 💚 by the Bloomora team
