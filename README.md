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

### 🔧 Technical Features
- **React Router** 
- **Context API** 
- **Local Storage Integration** 
- **API Integration** 
- **Smart Product Matching** 

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm

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



## 🚀 Deployment
- **Vercel** 


## 🤝 Contributing

This project was built as a technical assessment demonstrating modern React development practices, responsive design, and user experience optimization.

---
