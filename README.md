# 💄 Skincare Quiz - Hair Care Routine Finder

A modern, responsive Single Page Application (SPA) built with React that helps users discover personalized hair care products through an interactive quiz experience.

![Hair Care Quiz Demo](https://img.shields.io/badge/Demo-Live-brightgreen) ![React](https://img.shields.io/badge/React-18+-blue) ![Vite](https://img.shields.io/badge/Vite-Latest-purple)

## 🌟 Features

### 🎯 Core Functionality
- **Interactive Quiz Flow** - 5-question guided experience with smooth navigation
- **Route-based Questions** - Each question has its own URL for better UX and shareability
- **Product Recommendations** - Smart product matching based on user inputs
- **Wishlist System** - Save favorite products with persistent storage
- **Responsive Design** - Optimized for all device sizes

### 🎨 UI/UX Highlights
- **Circular Progress Indicator** - Visual feedback showing quiz completion
- **Smooth Transitions** - Polished animations and micro-interactions
- **Product Slider** - Elegant carousel showcasing 2 products at a time
- **Custom Typography** - Premium font selection for enhanced readability
- **Modern Design System** - Clean, minimalist interface following design trends

### 🔧 Technical Features
- **React Router** - Client-side routing for seamless navigation
- **Context API** - Centralized state management for quiz data
- **Local Storage Integration** - Persistent wishlist and user preferences
- **API Integration** - Dynamic product fetching from external endpoint
- **Smart Product Matching** - Algorithm-based recommendations using product metadata

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AJoker0/hairCareQuiz.git
   cd hairCareQuiz
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Project Structure

```
src/
├── app/                    # Application core
│   ├── QuizContext.jsx    # Global state management
│   └── useLocalStorage.js # Local storage hook
├── components/            # Reusable UI components
│   ├── NavButtons.jsx     # Navigation controls
│   ├── OptionButton.jsx   # Quiz option buttons
│   ├── ProductCard.jsx    # Product display cards
│   ├── ProgressRing.jsx   # Circular progress indicator
│   └── Slider.jsx         # Product carousel
├── pages/                 # Route components
│   ├── Start.jsx          # Landing page
│   ├── Question.jsx       # Quiz questions
│   └── Results.jsx        # Product recommendations
├── services/              # External integrations
│   └── api.js             # Product API calls
└── utils/                 # Helper functions
    └── productMatch.js    # Recommendation algorithm
```

## 🎮 User Journey

### 1. **Welcome Screen**
- Engaging hero section with call-to-action
- Clear value proposition and quiz introduction

### 2. **Quiz Flow** (5 Questions)
- **Hair Type/Texture** - Straight, Curly, Wavy, Fine
- **Washing Frequency** - Daily to bi-weekly options
- **Desired Benefits** - Anti-breakage, Hydration, Volume, etc.
- **Hair Concerns** - Breakage, Frizz, Scalp issues, etc.
- **Natural Hair Color** - Color-based product matching

### 3. **Results & Recommendations**
- Personalized product suggestions
- Interactive product slider with navigation
- Wishlist functionality with heart icons
- Detailed product information (image, title, price)

## 🛠️ Technical Implementation

### State Management
```javascript
// Centralized quiz state using React Context
const QuizContext = createContext();

// Persistent storage integration
const useLocalStorage = (key, initialValue) => {
  // Custom hook for localStorage synchronization
};
```

### Smart Product Matching
```javascript
// Algorithm considering multiple factors:
// - Product tags alignment with user answers
// - Title/description keyword matching
// - Wishlist prioritization
// - Relevance scoring system
```

### Responsive Product Slider
```javascript
// Features:
// - Touch/mouse navigation
// - Smooth scrolling
// - Page indicators
// - Responsive breakpoints
// - Accessibility support
```

## 🎨 Design System

### Typography
- **Headers**: Playfair Display (elegant serif)
- **Body**: System fonts for optimal readability
- **Responsive scaling** across all device sizes

### Color Palette
- **Primary**: Modern blue tones (#007bff, #eaf7fd)
- **Neutral**: Sophisticated grays (#333, #666, #f8f9fa)
- **Interactive**: Subtle hover states and transitions

### Components
- **Buttons**: Rounded corners, smooth transitions
- **Cards**: Clean shadows, proper spacing
- **Navigation**: Intuitive icons and labels

## 📱 Responsive Design

- **Mobile First** - Optimized for mobile experience
- **Tablet Support** - Enhanced layouts for medium screens
- **Desktop** - Full-featured experience with advanced interactions
- **Cross-browser** - Tested on major browsers

## 🔗 API Integration

**Endpoint**: `https://jeval.com.au/collections/hair-care/products.json`

- **Dynamic Loading** - Products fetched based on pagination
- **Error Handling** - Graceful fallbacks for API issues
- **Loading States** - User feedback during data fetching
- **Caching Strategy** - Optimized performance

## ✨ Key Differentiators

1. **User-Centric Design** - Intuitive flow with clear visual hierarchy
2. **Performance Optimized** - Fast loading with efficient state management
3. **Accessible** - Keyboard navigation and screen reader support
4. **Scalable Architecture** - Clean code structure for easy maintenance
5. **Modern Stack** - Latest React patterns and best practices

## 🚀 Deployment

The application is optimized for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📈 Future Enhancements

- [ ] Advanced filtering options
- [ ] User accounts and saved quizzes
- [ ] Social sharing functionality
- [ ] A/B testing for quiz optimization
- [ ] Analytics integration
- [ ] Multi-language support

## 🤝 Contributing

This project was built as a technical assessment demonstrating modern React development practices, responsive design, and user experience optimization.

---

**Built with ❤️ using React, Vite, and modern web technologies**

*Showcasing proficiency in frontend development, UI/UX design, and technical problem-solving*
