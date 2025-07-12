export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and admin dashboard.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://your-ecommerce.netlify.app',
    featured: true
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['React', 'Firebase', 'Material-UI', 'TypeScript', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    githubUrl: 'https://github.com/yourusername/task-manager',
    liveUrl: 'https://your-taskmanager.vercel.app',
    featured: true
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that displays current weather and forecasts for multiple cities with beautiful visualizations and location-based services.',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Geolocation API', 'CSS3'],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://your-weather.github.io',
    featured: false
  },
  {
    id: '4',
    title: 'Blog Platform',
    description: 'A modern blog platform with markdown support, SEO optimization, comment system, and content management capabilities.',
    technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL', 'NextAuth.js', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
    githubUrl: 'https://github.com/yourusername/blog-platform',
    liveUrl: 'https://your-blog.vercel.app',
    featured: true
  },
  {
    id: '5',
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing projects, skills, and experience. Built with modern web technologies and optimized for performance.',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vite'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://your-portfolio.github.io',
    featured: false
  },
  {
    id: '6',
    title: 'Chat Application',
    description: 'Real-time chat application with private messaging, group chats, file sharing, and emoji support. Built for scalability and performance.',
    technologies: ['React', 'Socket.io', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary'],
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&q=80',
    githubUrl: 'https://github.com/yourusername/chat-app',
    liveUrl: 'https://your-chat.herokuapp.com',
    featured: false
  }
];

export const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Vue.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'PostgreSQL',
  'Firebase',
  'TailwindCSS',
  'Sass',
  'Git',
  'Docker',
  'AWS',
  'Vercel',
  'Figma',
  'Jest',
  'Cypress'
];