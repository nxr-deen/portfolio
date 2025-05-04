# Portfolio Website Documentation

This documentation provides information about the structure, technologies, and components used in this portfolio website project.

## Project Overview

This is a personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. The portfolio features various sections including Hero, About, Experience, Skills, Projects, Testimonials, and Contact sections.

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) 15.x
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5.x
- **UI Library**: [React](https://reactjs.org/) 19.x
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3.x
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme Switching**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Form Management**: [react-hook-form](https://react-hook-form.com/) with [zod](https://github.com/colinhacks/zod) for validation

## Project Structure

```
portfolio/
├── app/                # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Homepage component
├── components/         # React components
│   ├── ui/             # UI components (buttons, cards, etc.)
│   └── [section].tsx   # Section components (hero, about, etc.)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and helpers
├── public/             # Static assets (images, icons, etc.)
│   └── icons/          # Icon assets
└── styles/             # Additional style files
```

## Main Components

The portfolio website consists of the following main section components:

- **Navbar**: Navigation bar with links to different sections
- **Hero Section**: Main landing section introducing yourself
- **About Section**: Information about your background and skills
- **Experience Section**: Work experience and education details
- **Skills Section**: Technical skills and competencies
- **Projects Section**: Showcase of your projects
- **Testimonials Section**: Feedback and recommendations
- **Contact Section**: Contact form and information
- **Footer**: Additional links and information

## UI Components

This project uses a comprehensive set of UI components from Radix UI, including:

- Buttons
- Cards
- Dialogs
- Forms
- Accordions
- Dropdowns
- Navigation menus
- And many more

These components are located in the `components/ui/` directory.

## Features

1. **Responsive Design**: Adapts to different screen sizes (mobile, tablet, desktop)
2. **Dark/Light Mode**: Toggle between dark and light themes
3. **Smooth Animations**: Page transitions and interactive elements with Framer Motion
4. **Interactive UI**: Modern, clean UI with hover effects and transitions
5. **Content Sections**: Well-organized content sections for different aspects of your portfolio

## Running the Project

### Prerequisites

- Node.js (v18 or newer)
- PNPM package manager

### Development

1. Install dependencies:

```
pnpm install
```

2. Start the development server:

```
pnpm dev
```

The site will be available at http://localhost:3000

### Building for Production

1. Build the project:

```
pnpm build
```

2. Start the production server:

```
pnpm start
```

## Customization Guide

### Adding a New Project

To add a new project to the Projects Section:

1. Open `components/projects-section.tsx`
2. Add a new object to the `projects` array with details of your project
3. Include a relevant image in the `public/` directory

### Updating Experience

To update your work experience:

1. Open `components/experience-section.tsx`
2. Modify the `workExperience` array with your updated information

### Adding a New Skill

To add a new skill:

1. Open `components/skills-section.tsx`
2. Add the new skill to the appropriate category in the skills data structure

## Deployment

This Next.js project can be deployed to various platforms:

- [Vercel](https://vercel.com/) (recommended for Next.js projects)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- Any platform supporting Node.js applications

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [Framer Motion Documentation](https://www.framer.com/motion/)
