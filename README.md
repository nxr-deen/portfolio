# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Dark/Light Mode**: Theme toggle for user preference
- **Interactive UI Components**: Built with shadcn/ui components
- **SEO Optimized**: Meta tags and structured data for better search engine visibility
- **Fast Loading**: Optimized for performance with Next.js
- **Modern Stack**: Built with Next.js, TypeScript, and Tailwind CSS

## Sections

- Hero section with introduction
- About me section
- Skills showcase with categorization
- Project portfolio with filtering
- Testimonials from clients/colleagues
- Contact form
- Footer with social links

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/) (recommended)

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Personal Information

Edit the content in the component files under the `components/` directory:

- `hero-section.tsx`: Update your name, role, and introduction
- `about-section.tsx`: Update your bio and personal information
- `skills-section.tsx`: Update your technical skills, tools, and soft skills
- `projects-section.tsx`: Update your projects with descriptions, images, and links
- `testimonials-section.tsx`: Update testimonials from clients or colleagues
- `contact-section.tsx`: Update your contact information and form

### Styling

The project uses Tailwind CSS for styling with a customizable theme:

- Edit `globals.css` to change global styles
- Edit `tailwind.config.ts` to modify theme colors and other Tailwind settings
- Components use shadcn/ui which can be customized through their respective files in `components/ui/`

## Deployment

The easiest way to deploy your portfolio is using [Vercel](https://vercel.com/), the platform created by the makers of Next.js:

1. Push your code to a GitHub repository
2. Import your project to Vercel
3. Vercel will detect Next.js automatically and use optimal build settings

Alternatively, you can deploy to any platform that supports Node.js applications.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
