
*英語版は下にあります / English version below*

# 🏔️ Hiking Log

シンプルな登山の記録をつけるためのWebアプリです。日付、山名、天気、時間、登山口/下山口などを記録できます。前回の山行条件（天気や歩行速度）を簡単に確認するために、自分でも使用しています。

🌐 **デモサイト**: [https://hiking-log-nu.vercel.app/](https://hiking-log-nu.vercel.app/)

## 開発背景

過去のプロジェクト（geoyama、Todo_list）で直面した以下の課題を解決するために作成しました：

- **複雑化する状態管理** - コンポーネントが増えるにつれて、propsのバケツリレーが煩雑に。特にgeoyamaでは、MapboxとReactの連携でグローバルに管理すべき状態が多く苦労した
- **型管理の問題** - コメントでの型管理は非効率でエラーが発生しやすい
- **事前設計の欠如** - 計画なしに機能を追加していった結果、互換性の問題や複雑な状態管理に直面した

これらの課題を解決するため、以下の技術を学習・導入しました：
- **Zustand** - グローバル状態管理ライブラリ
- **TypeScript** - 静的型付けによる型安全性
- **設計ファーストアプローチ** - データ型、UI、コンポーネント構造を事前に設計

### プロジェクトの目的

このプロジェクトは **TypeScriptの基礎を学ぶこと** と **設計ファーストアプローチの実践** を主な目的としているため、機能は意図的にシンプルに保っています。複雑な機能の実装よりも、設計→実装のワークフローを習得することに重点を置きました。

事前に全体の設計を完了させてから実装を開始しました。TypeScriptでのZustandストアの型定義に最初は苦戦しましたが、結果としてコードの可読性が大幅に向上し、データフローもシンプルになりました。設計の重要性を実感できる良い学習機会となりました。

## 機能

- 📝 登山記録の作成
- 🔍 記録の検索とフィルタリング（英語山名のみ）
- ✏️ 記録の編集（山名、登山口、下山口）
- 🗑️ 記録の削除
- 💾 ローカルストレージでのデータ永続化（将来的にはバックエンド・DB連携を予定）
- 🌓 ダークモード対応
- 🎨 天気アイコン表示

## 使った技術

- **Next.js 16** - Reactフレームワーク
- **TypeScript** - 型安全性
- **Tailwind CSS 4** - スタイリング
- **Zustand** - 状態管理
- **React Modal** - モーダル
- **React Icons** - アイコン

## セットアップ

### 前提条件

- Node.js 20以上
- npm, yarn, pnpm, bun のいずれか

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/Saaka-y/hiking-log.git

# プロジェクトディレクトリに移動
cd hiking-log

# 依存関係をインストール
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを表示します。

または、デモサイト [https://hiking-log-nu.vercel.app/](https://hiking-log-nu.vercel.app/) にアクセスしてください。

### ビルド

```bash
npm run build
npm start
```

## フォルダ構成

```
hiking-log/
├── src/
│   ├── components/
│   │   ├── formModal/     # 記録作成フォーム
│   │   ├── logModal/      # 記録表示/編集モーダル
│   │   └── mainView/      # メインリストとヘッダー
│   ├── constants/         # 定数（天気オプションなど）
│   ├── stores/            # Zustandストア
│   ├── types/             # TypeScript型定義
│   ├── utils/             # ユーティリティ関数
│   └── pages/             # Next.jsページ
└── public/                # 静的アセット
```

## データフロー

アプリケーションでは3種類のログ型を使い分けています：

1. **FormLog** - フォーム入力データ（すべて文字列型）
2. **Log** - アプリ内部で使用するドメインモデル（Dateオブジェクト、数値型）
3. **StoredLog** - localStorage用のシリアライズ可能な形式（文字列/数値型）

## ライセンス

MIT

## 作成者

Saaka-y


---

# 🏔️ Hiking Log (EN)

A web app for tracking hiking adventures. Record date, mountain, weather, timing, entry/exit points and more.

🌐 **Live Demo**: [https://hiking-log-nu.vercel.app/](https://hiking-log-nu.vercel.app/)

## Background

This project was built to address challenges I faced in previous projects (geoyama and Todo_list):

- **State management complexity** - As projects grew, passing props through multiple component layers became increasingly difficult, especially in geoyama where managing Mapbox and React integration required extensive global state
- **Type management issues** - Managing types through comments was inefficient and error-prone
- **Lack of upfront design** - Adding features without proper planning led to compatibility issues and complex state management

To solve these challenges, I learned and implemented:
- **Zustand** - Global state management library
- **TypeScript** - Static typing for type safety
- **Design-first approach** - Planning data types, UI, and component structure before coding

### Project Goals

This project is intentionally kept simple to focus on **learning TypeScript fundamentals** and **practicing the design-first approach**. Rather than building complex features, the emphasis was on mastering the design → implementation workflow.

I completed all design work before starting development. While I initially struggled with Zustand store type definitions in TypeScript, the result was significantly improved code readability and simplified data flow. This was a valuable learning experience in understanding the importance of proper design.

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

## Getting Started

### Requirements

- Node.js 20+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone
git clone https://github.com/Saaka-y/hiking-log.git

# Navigate
cd hiking-log

# Install
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Or check out the demo at [https://hiking-log-nu.vercel.app/](https://hiking-log-nu.vercel.app/)

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

Uses 3 different log type representations:

1. **FormLog** - Raw form input (all strings)
2. **Log** - App data model (Date objects, numbers)
3. **StoredLog** - localStorage format (strings/numbers)

## License

MIT

## Author

Saaka-y

