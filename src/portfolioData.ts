export type VideoCategory =
  | 'All Projects'
  | 'Commercial & Brand Promotions'
  | 'Education & Institute Promotions'
  | 'AI & Motion Graphics'
  | 'Additional Creative Work';

export interface PortfolioVideo {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  youtubeUrl: string;
  category: Exclude<VideoCategory, 'All Projects'>;
  orientation: 'portrait' | 'landscape';
  clientOrBrand?: string;
  tags?: string[];
  isFeatured?: boolean;
  status: 'active' | 'coming-soon';
}

export const CATEGORIES: VideoCategory[] = [
  'All Projects',
  'Commercial & Brand Promotions',
  'Education & Institute Promotions',
  'AI & Motion Graphics',
  'Additional Creative Work',
];

export const PORTFOLIO_VIDEOS: PortfolioVideo[] = [
  // Commercial & Brand Promotions
  {
    id: 'medicare-clinic',
    title: 'Medicare Clinic — Healthcare Promotional Video',
    description: 'Dynamic healthcare promotional cut highlighting clinic care, patient reassurance, and modern medical services.',
    youtubeId: 'y7QG7CNlf4k',
    youtubeUrl: 'https://www.youtube.com/shorts/y7QG7CNlf4k',
    category: 'Commercial & Brand Promotions',
    orientation: 'portrait',
    clientOrBrand: 'Medicare Clinic',
    tags: ['Healthcare', 'Short-Form', 'Brand Promo'],
    status: 'active',
  },
  {
    id: 'revigro-brand-promo',
    title: 'Revigro Marketing — Brand Promotional Video',
    description: 'High-energy brand storytelling for Revigro Marketing crafted for high engagement, audience retention, and punchy visual flow.',
    youtubeId: 'i1rn5K8VhVg',
    youtubeUrl: 'https://www.youtube.com/shorts/i1rn5K8VhVg',
    category: 'Commercial & Brand Promotions',
    orientation: 'portrait',
    clientOrBrand: 'Revigro Marketing',
    tags: ['Marketing', 'Brand Film', 'Motion'],
    status: 'active',
  },
  {
    id: 'revigro-ai-promo',
    title: 'Revigro Marketing — AI-Powered Promotional Video',
    description: 'Futuristic AI-driven visual campaign demonstrating automated digital marketing capabilities and modern brand scale.',
    youtubeId: 'qOeYMp7Dgfc',
    youtubeUrl: 'https://www.youtube.com/shorts/qOeYMp7Dgfc',
    category: 'Commercial & Brand Promotions',
    orientation: 'portrait',
    clientOrBrand: 'Revigro Marketing',
    tags: ['AI Video', 'Commercial', 'Digital Strategy'],
    status: 'active',
  },

  // Education & Institute Promotions
  {
    id: 'reliable-training-power-bi',
    title: 'Reliable Training Institute — Power BI Promotional Video',
    description: 'Curriculum-focused educational promo built to drive institute enrollments with crisp typography and clear value propositions.',
    youtubeId: 'HGH6lGIMfCo',
    youtubeUrl: 'https://www.youtube.com/shorts/HGH6lGIMfCo',
    category: 'Education & Institute Promotions',
    orientation: 'portrait',
    clientOrBrand: 'Reliable Training Institute',
    tags: ['Education', 'Power BI', 'Course Promo'],
    status: 'active',
  },
  {
    id: 'science-by-pramod-sir',
    title: 'Science by Pramod Sir — Educational Video',
    description: 'Engaging educational short simplifying complex science concepts through dynamic pacing, subtitles, and expressive motion.',
    youtubeId: 'ZHgsdx0UnpU',
    youtubeUrl: 'https://www.youtube.com/shorts/ZHgsdx0UnpU',
    category: 'Education & Institute Promotions',
    orientation: 'portrait',
    clientOrBrand: 'Science by Pramod Sir',
    tags: ['E-Learning', 'Science', 'Content Creation'],
    status: 'active',
  },

  // AI & Motion Graphics
  {
    id: 'vengage-ai-explainer',
    title: 'VEngage — AI & Technology Explainer',
    description: 'Widescreen cinematic explainer blending technical narrative with sleek motion graphics and product-led visualization.',
    youtubeId: '4jIdpc_zdew',
    youtubeUrl: 'https://youtu.be/4jIdpc_zdew',
    category: 'AI & Motion Graphics',
    orientation: 'landscape',
    clientOrBrand: 'VEngage',
    tags: ['Explainer', 'Landscape 16:9', 'Tech Motion'],
    status: 'active',
  },
  {
    id: 'kk-visual-transformation',
    title: 'KK — Creative Visual Transformation',
    description: 'Transformative visual edit exploring creative transitions, color grading shifts, and high-impact VFX styling.',
    youtubeId: '5DflI0sslnI',
    youtubeUrl: 'https://www.youtube.com/shorts/5DflI0sslnI',
    category: 'AI & Motion Graphics',
    orientation: 'portrait',
    clientOrBrand: 'KK',
    tags: ['VFX', 'Visual FX', 'Transitions'],
    status: 'active',
  },

  // Additional Creative Work
  {
    id: 'ai-creative-showcase-01',
    title: 'AI Video Creation — Creative Showcase 01',
    description: 'Exploration of generative AI tools, digital textures, and surreal visual rhythm designed to captivate social feeds.',
    youtubeId: 'ADHjIJzo3rg',
    youtubeUrl: 'https://www.youtube.com/shorts/ADHjIJzo3rg',
    category: 'Additional Creative Work',
    orientation: 'portrait',
    tags: ['Generative AI', 'Experimental', 'Visual Art'],
    status: 'active',
  },
  {
    id: 'ai-creative-showcase-02',
    title: 'AI Video Creation — Creative Showcase 02',
    description: 'Advanced AI visual study combining stylized rendering, rapid cadence, and immersive soundscapes.',
    youtubeId: 'WQWup9Vgcwg',
    youtubeUrl: 'https://www.youtube.com/shorts/WQWup9Vgcwg',
    category: 'Additional Creative Work',
    orientation: 'portrait',
    tags: ['AI Motion', 'Stylized Edit', 'Creative R&D'],
    status: 'active',
  },
  {
    id: 'voiceover-driven-storytelling',
    title: 'Voiceover-Driven Video — Creative Storytelling',
    description: 'Narrative-first pacing synchronized seamlessly with voiceover cadence, emotional musical arcs, and evocative imagery.',
    youtubeId: 'p5bM0OyV9TE',
    youtubeUrl: 'https://www.youtube.com/shorts/p5bM0OyV9TE',
    category: 'Additional Creative Work',
    orientation: 'portrait',
    tags: ['Voiceover', 'Storytelling', 'Cinematic Flow'],
    status: 'active',
  },

  // PENDING / COMING SOON VIDEOS (Slot 1: Y Academy, Slot 2: Personal Intro)
  {
    id: 'y-academy-promo',
    title: 'Y Academy — Promotional Video',
    description: 'Upcoming promotional campaign for Y Academy. YouTube link will be published soon.',
    youtubeId: '',
    youtubeUrl: '',
    category: 'Education & Institute Promotions',
    orientation: 'portrait',
    clientOrBrand: 'Y Academy',
    tags: ['Education', 'Promo', 'Coming Soon'],
    status: 'coming-soon',
  },
  {
    id: 'rushikesh-more-intro',
    title: 'Meet the Creator — Rushikesh More',
    description: "I'm Rushikesh More, founder of ASR Motion Studio. I create engaging videos, motion graphics, AI-powered content and creative digital experiences for brands and businesses.",
    youtubeId: 'k2B2e4RKJNw',
    youtubeUrl: 'https://youtube.com/shorts/k2B2e4RKJNw',
    category: 'Commercial & Brand Promotions',
    orientation: 'portrait',
    isFeatured: true,
    tags: ['Featured', 'Creator Intro', 'Director Reel'],
    status: 'active',
  },
];
