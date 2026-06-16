# ⚽ PlayerNation Match Reporter

AI-powered football match analysis application built using React Native, Expo, TypeScript, and Groq LLM.

---

## Overview

PlayerNation Match Reporter transforms raw football match event data into readable AI-generated match reports.

Using the Wyscout FIFA World Cup dataset, the application extracts key match statistics and generates professional football analysis using a Large Language Model.

---

## Features

### Match Selection

* Browse available FIFA World Cup matches
* Select a match to generate a report

### Match Statistics

* Total Passes
* Successful Passes
* Failed Passes
* Shots
* Goals
* Duels
* Saves
* Yellow Cards
* Red Cards

### AI Match Report

Generates:

* Match Summary
* Tactical Analysis
* Key Moments
* Standout Players
* Areas for Improvement

### Match Insights Dashboard

Displays key performance metrics in a card-based UI.

---

## Tech Stack

### Frontend

* React Native
* Expo
* TypeScript
* Expo Router

### AI

* Groq API
* Llama 3.1 8B Instant

### Data

* Wyscout Soccer Match Event Dataset
* FIFA World Cup Event Data

---

## Project Structure

```text
src/
├── app/
│   ├── index.tsx
│   ├── report.tsx
│
├── components/
│   ├── StatCard.tsx
│
├── services/
│   ├── llm.ts
│   ├── reportGenerator.ts
│
├── store/
├── types/
│
assets/
└── data/
```

---

## Setup

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
EXPO_PUBLIC_GROQ_API_KEY=YOUR_GROQ_API_KEY
```

### Start Application

```bash
npx expo start
```

---

## Architecture

```text
Match Selection
        ↓
Load Match JSON
        ↓
Feature Extraction
        ↓
Prompt Generation
        ↓
Groq LLM
        ↓
AI Match Report
```

---

## Dataset

Wyscout Soccer Match Event Dataset

FIFA World Cup match event files were used for analysis.

---

## Error Handling

* API failure handling
* Loading states
* Invalid match protection
* Graceful AI report fallback

---

## Future Improvements

* PDF Report Export
* Player Ratings
* Match Comparison
* Performance Charts
* Offline Caching
* Team & Player Analytics

---

## Author

Ritika Bansal

PlayerNation Software Engineer Assignment Submission
