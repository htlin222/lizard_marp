![GitHub stars](https://img.shields.io/github/stars/htlin222/lizard_marp?style=flat-square)
![Last commit](https://img.shields.io/github/last-commit/htlin222/lizard_marp?style=flat-square)
![License](https://img.shields.io/github/license/htlin222/lizard_marp?style=flat-square)

# Marp Presentation Template

This repository contains my personal presentation templates using [Marp](https://marp.app/) (Markdown Presentation Ecosystem). Marp allows you to create beautiful presentations using simple Markdown syntax.

## Prerequisites

Before you begin, ensure you have [Node.js](https://nodejs.org/) installed on your system.

## Installation

1. Clone this repository:

```bash
git clone htlin222/lizard_marp
cd lizard_marp
```

2. Install the required dependencies:

```bash
npm install
```

## Project Structure

```
.
├── README.md
├── package.json
├── contents/
│   ├── presentation1.md
│   ├── presentation2.md
│   └── ...
└── ...
```

All presentation files (`.md`) must be placed in the `contents` directory.

## Usage

To start the development server:

```bash
npm run dev
```

This will launch a local server at `http://localhost:8080` where you can view all your presentations.

## Creating Presentations

1. Create a new `.md` file in the `contents` directory
2. Use Marp's markdown syntax to create your presentation
3. View your presentation in real-time through the development server

## Export Presentation

To html

```bash
npm run build -- contents/YOUR_FILE.md
```

To PDF

```bash
npm run build:pdf -- contents/YOUR_FILE.md
```

## Example Presentation

see [example](./contents/example.md)

```markdown
---
title: "example"
marp: true
author: Hsieh-Ting Lin
paginate: true
headingDivider: 3
theme: my-theme
footer: "[■](#table-of-contents)"
---

# example

#### 林協霆醫師，和信治癌中心醫院

**Hsieh-Ting Lin, <htlin222@kfsyscc.org>**

![h:50px](https://i.imgur.com/TLuxHNS.png)

# Preface

---

YOUR Content goes here

---

# Takeaway

---

## Table of Contents

[[TOC]]
```
