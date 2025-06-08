This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# KathaKaal – Credit Scoring Platform for India’s Underserved

[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Build with Next.js](https://img.shields.io/badge/built%20with-Next.js-000?logo=next.js)](https://nextjs.org/)
[![Frontend Deploy](https://img.shields.io/badge/deployed-Vercel-blue)](https://vercel.com/)
[![Backend API](https://img.shields.io/badge/backend-FastAPI-blueviolet)](https://fastapi.tiangolo.com/)

KathaKaal is a credit scoring platform designed for India’s underserved population. It uses machine learning and narrative-based data to predict repayment capability, empowering gig workers, self-employed individuals, and small business owners.

---

## 🚀 Features

- 🧠 Predict income & repayment capability using behavior and stories
- 📄 Upload UPI summary, bill screenshots, and hand-written logs
- 🎙️ Upload or record voice message (processed via BERT NLP)
- 📊 Visual explanations (SHAP) for transparency in scoring
- 🔐 Admin dashboard to manage applicants
- ⚡ Built using Next.js + Tailwind on the frontend and FastAPI for backend ML APIs

---

## 📸 Screenshots

| Homepage                | UPI Form Page            |
|-------------------------|--------------------------|
| ![Home](./public/demo-home.png) | ![Form](./public/demo-form.png) |

> Add screenshots to `public/` and replace filenames above

---

## 📁 Project Structure
kathakaal-frontend/
├── app/ # App Router pages
├── components/ # Reusable components
├── public/ # Static files (screenshots, audio, logos)
├── styles/ # Global styling
├── .env.local # API keys & endpoints
└── next.config.js # Next.js configuration
