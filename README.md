# 📝 AI Paraphrasing Tool — JustDone Test Task

## 📚 Navigation

1. [Task](#task)
2. [Design](#design)
3. [Requirements](#requirements)
4. [Technical Stack](#technical-stack)
5. [Installation & Running](#installation--running)
6. [Features](#features)
7. [Folder Structure](#folder-structure)
8. [Git Flow](#git-flow)
9. [Linting & Formatting](#linting--formatting)

---

##  Task

Реалізувати **AI Paraphrasing Tool** згідно з вимогами:

* Користувач потрапляє на Initial Screen та вводить текст.
* Заголовок та підзаголовок завантажуються з Headless CMS.
* Кнопка **Paste Text** вставляє текст із буфера обміну.
* Кнопка **Sample Text** вставляє підготовлений приклад тексту.
* Якщо поле порожнє — кнопка **Paraphrase** неактивна.
* При заповненні поля кнопка **Paraphrase** активується та зʼявляється кнопка **Clear Input**.
* **Clear Input** очищає текст.
* При кліку на **Paraphrase**:

    * Відправляється запит до OpenAI з промптом `Paraphrase: {user text}`
    * Показується **Loading**
    * Якщо успіх — виводиться переписаний текст.
    * Якщо помилка — виводиться повідомлення про помилку.

> ⚠️ Важливо: дані з Headless CMS повинні завантажуватися на сервері, а OpenAI токен **не повинен бути видно на клієнті**.

---

## Design

[Figma Design Link](https://www.figma.com/design/oWVtTaMF6GIAQtO7TdjBuo/Test-Case--Functional-?node-id=0-1&t=UQQ7kXWvXSdXrIwh-1)

---

## Requirements

* **Next.js 15 (App Router)**
* **TypeScript**
* **Material UI**
* SSR / SSG / ISR (готовність під будь-яку CMS)
* Чистий та масштабований код:

    * SOLID
    * KISS
    * DRY
* OpenAI ключ не на клієнті

---

## Technical Stack

* **Framework**: Next.js 15 App Router
* **Language**: TypeScript
* **Styling**: Material UI (custom theme + typography)
* **Validation**: кастомна валідація (Word & Character count)
* **State Management**: локальний стейт + hooks
* **SSR Ready**: Headless CMS integration
* **Deployment**: Vercel
* **Architecture**: Component-based, SOLID principles

---

## Installation & Running

1️⃣ **Клонувати репозиторій:**

```bash
git clone https://github.com/KhromenkoDaniel/boosters-justdone-test-task.git
cd boosters-justdone-test-task
```

2️⃣ **Встановити залежності:**

```bash
npm install
```

3️⃣ у **Створити файл `.env.local`** та додати OpenAI ключ:

```plaintext
OPENAI_API_KEY=your_openai_api_key_here
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4️⃣ **Запустити локальний сервер:**

```bash
npm run dev
```
Та відкрити [http://localhost:3000](http://localhost:3000)

---

## Features

* SSR-завантаження заголовків з CMS
* Валідація:

    * мін. 10 слів
    * макс. 150 слів
    * макс. 2000 символів
* UX friendly:

    * Disabled states
    * Error messages
    * Loading states
* Декомпозовані компоненти
* Темізація (MUI Theme + customTypography)
* Кастомні аліаси для зручності імпорту
* Скорочені імпорти:

```typescript
export { default as ParaphraseActions } from './ParaphraseActions';
```

---

## Folder Structure

📁 **Key folders:**

* `app/` — Next.js App Router
* `components/` — UI components
* `hooks/` — кастомні hooks
* `theme/` — тема MUI + typography
* `types/` — глобальні типи
* `utils/` — утиліти, валідація
* `public/` — іконки та статичні файли

---

## Git Flow

* **master**: production-ready
* **develop**: development
* **feature/**: feature branches

---

## Linting & Formatting

* ESLint + Prettier

📌 Перевірити лінтинг:

```bash
npm run lint
```
