# Hiking Log

登山記録アプリ。日付、山名、天気、時間などを記録できます。

🌐 **Demo**: https://hiking-log-nu.vercel.app/

## 機能

- 登山記録の作成・編集・削除
- 記録の検索とフィルタリング
- ダークモード対応
- localStorageに保存

## 技術スタック

- Next.js 16
- TypeScript
- Tailwind CSS 4
- Zustand

## Features

- 📝 Create hiking logs
- 🔍 Search and filter records (by a mountain name)
- ✏️ Edit logs (mountain name, entry/exit points)
- 🗑️ Delete logs
- 💾 Local storage persistence (backend/database integration planned for future)
- 🌓 Dark mode support
- 🎨 Weather icons

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Zustand** - State management
- **React Modal** - Modals
- **React Icons** - Icons


## Project Structure

```
hiking-log/
├── src/
│   ├── components/
│   │   ├── formModal/     # Create log form
│   │   ├── logModal/      # View/edit modal
│   │   └── mainView/      # Main list & header
│   ├── constants/         # Constants (weather options, etc.)
│   ├── stores/            # Zustand store
│   ├── types/             # TypeScript types
│   ├── utils/             # Utility functions
│   └── pages/             # Next.js pages
└── public/                # Static assets
```

## Data Flow

Uses 3 different log type representations:

1. **FormLog** - Raw form input (all strings)
2. **Log** - App data model (Date objects, numbers)
3. **StoredLog** - localStorage format (strings/numbers)
