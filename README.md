# Hiking Log

A Next.js web application for tracking and managing your hiking adventures. Record details about your hikes including date, mountain, weather conditions, timing, and entry/exit points.

## Features

- 📝 **Create hiking logs** with detailed information
- 🔍 **Search and filter** your hiking history
- ✏️ **Edit logs** to update mountain name, entry, and exit points
- 🗑️ **Delete logs** you no longer need
- 💾 **Local storage** - all data persists in your browser
- 🌓 **Dark mode** support based on system preferences
- 🎨 **Weather icons** for visual representation

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Zustand** - State management with local storage persistence
- **React Modal** - Modal dialogs
- **React Icons** - Weather icons

## Getting Started

### Prerequisites

- Node.js 20+ installed
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/Saaka-y/hiking-log.git

# Navigate to project directory
cd hiking-log

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
hiking-log/
├── src/
│   ├── components/
│   │   ├── formModal/     # Create log form
│   │   ├── logModal/      # View/Edit log modal
│   │   └── mainView/      # Main list and header
│   ├── constants/         # Shared constants (weather options)
│   ├── stores/            # Zustand store for state management
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions (converters, filters)
│   └── pages/             # Next.js pages
└── public/                # Static assets
```

## Data Flow

The app uses three different log type representations:

1. **FormLog** - Raw form input data (all strings)
2. **Log** - Domain model with proper types (Date objects, numbers)
3. **StoredLog** - Serializable format for localStorage (all strings/numbers)

## License

This project is open source and available under the MIT License.

## Author

Saaka-y

