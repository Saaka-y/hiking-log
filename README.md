# Hiking Log

> **Portfolio Project** - A demonstration of modern web development skills using Next.js, TypeScript, and state management.

A Next.js web application for tracking and managing your hiking adventures. Record details about your hikes including date, mountain, weather conditions, timing, and entry/exit points.

## Background

This project was born from challenges I faced in previous projects (Todo_list and geoyama).

- **State management complexity and props drilling** - As projects grew, passing props through multiple component layers became unwieldy
- **Type management** - Managing data types through code comments was inefficient and error-prone
- **Lack of upfront design** - Adding features without proper planning led to compatibility issues and convoluted state management (honestly, it was a nightmare)

To solve these challenges, I learned and implemented:
- **Zustand** - Global state management (discovering this was an eye-opener)
- **TypeScript** - Explicit type safety (I prefer it over JS because it gives me more confidence)
- **Design-first approach** - Planning data types, UI, component structure, and state management before coding

For this project, I completed all the design work before starting development. While I initially struggled with Zustand store type definitions in TypeScript, the result was dramatically improved code readability and simplified data flow. This was an excellent practice project for implementing modern React development best practices.

## Features

- 📝 **Create hiking logs** with detailed information
- 🔍 **Search and filter** your hiking history
- ✏️ **Edit logs** to update mountain name, entry, and exit points
- 🗑️ **Delete logs** you no longer need
- 💾 **Local storage** - all data persists in your browser (planning to learn backend and integrate a database in the future)
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

---

# Hiking Log (日本語版)

> **ポートフォリオプロジェクト** - Next.js、TypeScript、状態管理を使用したモダンなWeb開発スキルのデモンストレーションです。

登山の記録を管理するためのNext.jsウェブアプリケーションです。日付、山名、天気、時間、登山口/下山口などの詳細情報を記録できます。

## 背景

このプロジェクトは、過去のプロジェクト（Todo_listやgeoyama）で直面した以下の課題を解決するために作りました。

- **複雑化する状態管理とprops地獄** - プロジェクトが大きくなるにつれて、複数のコンポーネント層を通してpropsを渡すことが煩雑になった
- **型管理の問題** - データ型をコメントで管理していたが、非効率でエラーが発生しやすかった
- **事前設計の欠如** - 適切な計画なしに機能を追加していったため、互換性の問題や状態管理の複雑化に直面した（正直これは地獄だった）

これらの課題を解決するためには、以下の技術を学ぶと良いと知り、学習を始めました。
- **Zustand** - グローバル状態管理（この存在を知ったときは目から鱗でした）
- **TypeScript** - 明示的な型安全性（JSよりも安心できるので好きです）
- **設計優先のアプローチ** - コーディング前にデータ型、UI、コンポーネント構造、状態管理方法を設計

このプロジェクトでは、最初にこれらの設計を行ってから開発を始めました。TypeScriptにおけるZustandストアの型定義で最初はつまづきましたが、結果的にこれまでより圧倒的に可読性が上がり、データの流れもシンプルにすることができました。モダンなReact開発のベストプラクティスを実践する、とても良い開発練習となりました。

## 機能

- 📝 **登山記録の作成** - 詳細な情報を含む記録を作成
- 🔍 **検索とフィルタリング** - 登山履歴を検索
- ✏️ **記録の編集** - 山名、登山口、下山口を更新
- 🗑️ **記録の削除** - 不要な記録を削除
- 💾 **ローカルストレージ** - ブラウザにすべてのデータを保存 (ゆくゆくはバックエンドを学びDBを使えるようにする予定です)
- 🌓 **ダークモード対応** - システム設定に基づいた表示
- 🎨 **天気アイコン** - 視覚的な表現

## 技術スタック

- **Next.js 16** - Reactフレームワーク
- **TypeScript** - 型安全性
- **Tailwind CSS 4** - スタイリング
- **Zustand** - ローカルストレージ永続化を伴う状態管理
- **React Modal** - モーダルダイアログ
- **React Icons** - 天気アイコン

## セットアップ

### 前提条件

- Node.js 20以上がインストールされていること
- npm、yarn、pnpm、またはbun

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/Saaka-y/hiking-log.git

# プロジェクトディレクトリに移動
cd hiking-log

# 依存関係をインストール
npm install
```

### 開発

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリを表示します。

### ビルド

```bash
npm run build
npm start
```

## プロジェクト構造

```
hiking-log/
├── src/
│   ├── components/
│   │   ├── formModal/     # 記録作成フォーム
│   │   ├── logModal/      # 記録表示/編集モーダル
│   │   └── mainView/      # メインリストとヘッダー
│   ├── constants/         # 共通定数（天気オプション）
│   ├── stores/            # Zustandストアによる状態管理
│   ├── types/             # TypeScript型定義
│   ├── utils/             # ユーティリティ関数（変換、フィルター）
│   └── pages/             # Next.jsページ
└── public/                # 静的アセット
```

## データフロー

アプリは3種類の異なるログ型表現を使用しています：

1. **FormLog** - 生のフォーム入力データ（すべて文字列）
2. **Log** - 適切な型を持つドメインモデル（Dateオブジェクト、数値）
3. **StoredLog** - localStorage用のシリアライズ可能な形式（すべて文字列/数値）

## ライセンス

このプロジェクトはオープンソースで、MITライセンスの下で利用可能です。

## 作成者

Saaka-y

