# TechEdu.uz — Virtual Engineering Laboratory Platform

A web-based virtual laboratory platform for engineering education. Students can safely learn to operate complex and expensive industrial equipment through interactive browser-based simulations.

**Live demo:** [techedu.uz](https://techedu.uz)

## About the Project

TechEdu.uz is developed as part of a PhD research project at Tashkent State Technical University (TSTU), Department of Electrical Machines and Drives Engineering. The platform addresses a critical problem in engineering education across Uzbekistan: limited access to expensive laboratory equipment.

**Scientific foundation:** The platform is based on intelligent control systems for induction electrotechnological devices, using Digital Twin and ANFIS (Adaptive Neuro-Fuzzy Inference System) approaches.

## Features

- **Interactive 2D simulation** of induction furnace heating processes
- **Real-time data visualization** using Chart.js library
- **Multi-language support:** Uzbek, Russian, English (with flag icons)
- **Dark/Light theme** toggle for user preference
- **Responsive design** — works on laptop, tablet, and phone
- **Cloud-hosted** on Netlify with custom domain (techedu.uz)
- **Google Analytics 4** integration for user tracking

## Technical Stack

### Core Technologies
- **HTML5** — semantic markup with multi-language support
- **CSS3** — modern styling with CSS variables, Flexbox, gradients, and transitions
- **JavaScript (Vanilla)** — interactive simulation logic

### External Libraries (via CDN)
- **Chart.js 4.4.1** — interactive graphs and data visualization
- **Flag Icons 6.11.1** — country flags for language switcher
- **Font Awesome 6.5.1** — icon library
- **Google Fonts (Nunito)** — typography

### Infrastructure
- **Hosting:** Netlify (continuous deployment)
- **Domain:** techedu.uz
- **Analytics:** Google Analytics 4 (Measurement ID: G-WM5091C934)

## Code Structure

The main file `index.html` (2,356 lines, ~1 MB) is a single-page application containing:

- Semantic HTML5 structure with responsive layout
- Embedded CSS with CSS variables and dark mode support
- JavaScript logic for interactive simulations and calculations
- Physical model implementation for induction heating
- Multi-language interface (Uzbek, Russian, English)

## Current Status (MVP)

- ✅ Working MVP deployed at techedu.uz
- ✅ First active module: Induction electrotechnological device simulator
- ✅ Pilot testing at Tashkent State Technical University (TSTU)
- ✅ Officially registered with the Intellectual Property Agency (State Reg. No. DGU 60865)
- ✅ Google Analytics tracking active

## Roadmap (Next 12 Months)

- 3D virtual simulations (WebGL / Three.js)
- Additional modules: Electric drives, Transformers, Rectifiers
- Student and teacher personal dashboards
- Learning progress tracking system
- Expansion to other technical universities in Uzbekistan and Central Asia

## Business Model

Institutional B2B licensing to technical universities and colleges. Partnership discussions with the Ministry of Higher Education and IT Park Uzbekistan.

## Team

- **Boboniyozov Qutbiddin** — Founder, PhD Candidate (TSTU)
- **Pulatov Abror Obidovich** — Scientific Advisor, Head of Department, PhD, Associate Professor (TSTU)
- **Shamiyev Murat Fixratovich** — Technical Advisor, PhD, Assistant Professor (TSTU)
- **Mahmatqulov Javohir** — Web Developer, Bachelor's Student (TSTU)

## Contact

- **Website:** [techedu.uz](https://techedu.uz)
- **Email:** qutbiddinboboniyozov@gmail.com
- **Telegram:** @qutbiddinboboniyozov

## License

This project is a PhD research prototype developed at Tashkent State Technical University.

---

**Project registered with the Intellectual Property Agency of the Republic of Uzbekistan under State Registration Certificate DGU No. 60865.**
