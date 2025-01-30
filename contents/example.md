---
title: "example"
author: Hsieh-Ting Lin
paginate: true
headingDivider: 3
theme: main
footer: "[■](#table-of-contents)"
---

# Introduction to Lizard 🦎 Marp <br> A batteries 🔋 included, Marp Based Presentation System

<hr>

#### Hsieh-Ting Lin M.D <htlin222@kfsyscc.org>

🔗 [htlin222/lizard_marp: My Marp Template](https://github.com/htlin222/lizard_marp)

# Preface

## Introduction

<br>

> [!TIP]
> This repository contains my personal presentation templates using [Marp](https://marp.app/) (Markdown Presentation Ecosystem). Marp allows you to create beautiful presentations using simple Markdown syntax.

Before you begin, ensure you have [Node.js](https://nodejs.org/) installed on your system.

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

<br>

```txt
.
├── README.md
├── package.json
├── contents/
│   ├── presentation1.md
│   ├── presentation2.md
│   └── ...
└── ...
```

<br>

> [!WARNING]
> All presentation files (`.md`) must be placed in the `contents` directory.

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

<hr>

To html

```bash
npm run build -- contents/YOUR_FILE.md
```

To PDF

```bash
npm run build:pdf -- contents/YOUR_FILE.md
```

# Features

## Heading Rules

<br>

- Heading Divider Rule: The heading level above 3 is used as the divider for this Marp file.
- Section Definition: Each Heading 1 (#) becomes a section.
- Structural Clarity: Heading 2 (##) will appear above each Heading 3 (###) to provide a clearer structure.

<br>

```markdown

# Section 1: Introduction

## Overview
### Purpose
This document explains the rules and structure for Marp files.

# Section 2: Rules and Guidelines

```

## Basic support for markdown

- **Cellularity: Up to 90%**
- **Marrow Infiltration By small lymphoid cells**
  - Diffuse, Paratrabecular pattern
- Immunohistochemistry
  - Small lymphoid cells `Positive for CD20`
  - With plasmacytic differentiation: Plasma cells Positive for CD138, Kapp
  Light Chain
- Diagnosis
  - Lymphoplasmacytic lymphoma is favored

![bg right:50% h:780px](https://i.imgur.com/Ed5y9nH.jpeg)

## Markdown-it Plugins

- `<kbd></kbd>` <kbd>Ctrl</kbd> + <kbd>A</kbd>
- `^^` for sup like^something^
- `> text will become reference`
- **Github Alert**

    ```markdown
    > [!TIP]
    > Some tips here
    ```

> text will become reference

<br>

> [!TIP]
> Some tips here

### Even More

- `<detail>`

    ```markdown
    +++ Click me!
    Hidden text
    +++
    ```

+++ Click me!

- Hidden text
- Hidden text
+++

- result

## Change List into a Flowchart

- A (level 1)
  - A1 (level 2)
    - A2 (level 2)
  - **A3 (level 2)**
- B (level 1)
  - B1 (level 2)
  - B2 (level 2) <br> hellow
    - B2.1
      - B2.2
      - B2.2
      - B2.2
      - B2.2 hellow
  - **B3 (level 2)**

### Top to Down

<!-- _class: diagram-TD -->

- A (level 1)
  - A1 (level 2)
    - A2 (level 2)
  - **A3 (level 2)**
- B (level 1)
  - B1 (level 2)
  - B2 (level 2) <br> hellow
    - B2.1
      - B2.2
      - B2.2
      - B2.2
      - B2.2 hellow
  - **B3 (level 2)**

### Left to Right Style

<!-- _class: diagram-LR -->

- A (level 1)
  - B
    - C
    - D
    - E

## Grid List

<!-- _class: flexImg -->

- ![h:350px](https://i.imgur.com/sfQ3GZU.png)
  - An Image
- ![h:350px](https://i.imgur.com/sfQ3GZU.png)
  - Another Image

## Timeline

<!-- _class: timeline -->

- `2020-01`
  - persistent hiccups
  - 1-2 episodes of spontaneous severe nosebleeds monthly,
    - not triggered by trauma or nasal irritation.

- `2020-05`
  - CGH^*^ ENT
  - **HB:** 7.7 mg/dL
  - AG reverse
  - further workup:
    - **IgM:** 9650 mg/dL
    - **Free kappa:** Elevated.
    - Bone Marrow Biopsy: Evidence of B-cell lymphoid involvement.
    - Lost to follow-up
- `2021-03`
  - Sudden hearing loss in the right ear upon waking
  - Dx at SKH^**^:
    - MRI: Right ear stroke
  - Hyperbaric oxygen therapy was recommended but hearing did not improve.

## Two Columns

:::half

| Test                         | Value         | Unit         | Reference Range                 |
|------------------------------|---------------|--------------|---------------------------------|
| **Total protein**                | 12.53         | g/dL         | 6.0 - 8.3                      |
| Albumin                      | 3.11          | g/dL         | 3.5 - 5.0                      |
| **Globulin**                     | 9.4           | g/dL         | 2.3 - 3.5                      |
| A/G Ratio                    | 0.3           |              | 1.0 - 2.1                      |
| **Kappa light chain**            | 199.15        | mg/L         | 3.3 - 19.4                     |
| Lambda light chain           | 14.08         | mg/L         | 5.7 - 26.3                     |
| Free kappa/lambda ratio      | 14.144        |              | 0.26 - 1.65                    |
| IgA (Nephelometry)           | 108.0         | mg/dL        | 70 - 400                       |
| IgG (Nephelometry)           | 901.0         | mg/dL        | 700 - 1600                     |
| **IgM** (Nephelometry)           | 8588.0        | mg/dL        | 40 - 230                       |

:::split

| Test                         | Value         | Unit         | Reference Range                 |
|------------------------------|---------------|--------------|---------------------------------|
| **Haptoglobin**                  | 319.0         | mg/dL        | 30 - 200                       |
| Cold hemoagglutinin          | 1:4x          |              | <1:16                          |
| **Cryoglobulin**                 | Positive      |              | Negative                       |

1. **Hyperproteinemia and Dysproteinemia**: Elevated total protein, high globulin, low albumin, and abnormal A/G ratio (0.3)
2. **Monoclonal Protein Abnormality**: Extremely high IgM and abnormal free kappa/lambda ratio point to monoclonal gammopathy
3. **Hemolysis and Cold Agglutination**: Elevated haptoglobin, positive cryoglobulins, and low-titer cold agglutinins (1:4)

:::

## Code Container

:::github 8-12 h:250
htlin222/emgithub/blob/master/embed.js
:::

- this work

## Card

[Facebook](https://www.facebook.com/){card}

[2024-11-21 - 林協霆](https://oncologist.tw/posts/2024-11-21-23-13/){card}

## Containers

:::na

hi there

:::

## Test frag of code

```txt
1 {data-marpit-fragment="1"}
2 {data-marpit-fragment="2"}
3 {data-marpit-fragment="3"}
```

code here {data-marpit-fragment="1"}

# Takeaway

## Thank You 🙏 🫰

<!-- _class: center -->

<hr>

##### <!--fit-->58-year-old Man with Nasal Bleeding for Six Months

<hr>

#### Let’s Take Some Questions 🤔 🙋

## Table of Contents

[[TOC]]
