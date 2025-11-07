# Jana Hamed Al-madadha - Personal Portfolio Website

A modern, high-end personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Ultra-modern, visually striking design with smooth animations
- **Fully Responsive**: Perfect display on desktop, tablet, and mobile devices
- **Performance Optimized**: Built with Next.js 14 and optimized for speed
- **Smooth Animations**: Beautiful transitions using Framer Motion
- **SEO Friendly**: Proper meta tags and semantic HTML

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Sections

1. **Hero Section**: Bold introduction with name, title, and logo
2. **About Section**: Professional background and journey
3. **Skills Section**: Technical and soft skills with visual presentation
4. **Experience Section**: Work experience and education
5. **Testimonials Section**: Client and colleague feedback
6. **Contact Section**: Contact form and information

## Customization

### Updating Content

- Personal information is in the component files under `/components`
- Logo is located in `/public/logo.svg`
- Colors can be customized in `tailwind.config.js` and `app/globals.css`

### Adding Social Links

Update the social media links in:
- `components/Contact.tsx`
- `components/Footer.tsx`

Replace the `#` placeholders with your actual profile URLs.

## Project Structure

```
janafolder/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Skills.tsx
│   └── Testimonials.tsx
├── lib/
│   └── utils.ts
├── public/
│   └── logo.svg
└── package.json
```

## License

This project is created for Jana Hamed Al-madadha.

## Contact

Jana Hamed Al-madadha
- Email: madadhajana880@gmail.com
- Phone: +962 79 606 2704
- Location: Amman, Jordan
