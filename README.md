# ⚖️ attorney. – Legal Case Management System (Frontend Module)

This repo is part of **attorney.**, a modular legal support platform built for lawyers in Sri Lanka.

---

## Overview

Legal professionals face challenges managing case data, schedules, and research due to scattered tools.  
**attorney.** solves this with:

- 📅 Centralized case tracking  
- 🧾 Secure document handling  
- 💬 In-app messaging and notifications  
- 📱 Cross-platform access  
- 🤖 AI-powered legal research (via backend integration)

---

## About This Repo

This is the **frontend module** of the attorney. ecosystem.  
It includes user interfaces for:

- 👨‍⚖️ Lawyers & Junior Lawyers  
- 📂 Clients & Case Management  
- 📱 Responsive layouts (Web & Mobile via React/React Native)  

> Designed to integrate with backend services and AI modules via shared APIs.

---

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   ├── forms/           # Form-specific components
│   ├── modals/          # Modal components
│   ├── charts/          # Chart components
│   ├── layout/          # Layout components (Header, Sidebar, etc.)
│   ├── slides/          # Hero slide components
│   ├── overview/        # Landing page sections
│   ├── pricing/         # Pricing components
│   ├── protected/       # Route protection components
│   └── UI/              # Basic UI components (Button, Input, etc.)
├── constants/           # App constants and enums
├── context/             # React context providers
├── hooks/               # Custom React hooks
├── pages/               # Page components organized by user role
│   ├── Common/          # Shared pages (login, signup, etc.)
│   ├── Lawyer/          # Lawyer-specific pages
│   ├── JuniorLawyer/    # Junior lawyer pages
│   ├── Client/          # Client pages
│   └── Admin/           # Admin pages
├── services/            # API service functions
├── utils/               # Utility functions
└── assets/              # Static assets
```

## Key Features

- **Role-based Access Control**: Different interfaces for lawyers, junior lawyers, clients, and admins
- **Case Management**: Complete case lifecycle management with hearings, documents, and timelines
- **Real-time Notifications**: In-app notification system
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modular Architecture**: Clean separation of concerns with reusable components

---

## Quick Start

```bash
# Clone the repo
git clone https://github.com/Ishan662/attorney.-frontend.git

# Navigate into the folder
cd attorney-frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Development Guidelines

### Component Organization
- Keep components under 200 lines
- Use proper imports/exports
- Follow single responsibility principle
- Create reusable components in `components/common/`

### File Naming
- Use PascalCase for component files
- Use camelCase for utility files
- Use kebab-case for asset files

### State Management
- Use React Context for global state
- Custom hooks for reusable logic
- Local state for component-specific data

### Styling
- Tailwind CSS for styling
- Consistent color palette and spacing
- Responsive design principles
- Dark/light theme support ready

---

## Contributing

1. Follow the established folder structure
2. Write clean, documented code
3. Test your changes thoroughly
4. Follow the component size guidelines
5. Use the provided utility functions and constants