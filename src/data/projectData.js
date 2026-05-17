export const projectData = [
  {
    id: 'reelroster',
    title: 'Reel Roster Project',
    category: 'Software',
    image: 'film-reel.png',
    description: 'A movie database using TMDb API with React.',
    details: 'ReelRoster is a web application designed to help users discover ' +
      'and organize movies effortlessly. By leveraging the TMDb API, ReelRoster ' +
      'provides a seamless experience for browsing movie details and managing ' +
      'personal watchlists.',
    accomplishments: [
      'Implemented watchlist/favorites toggle',
      'Integrated TMDb API',
      'Responsive UI with Vite + Tailwind',
    ],
    github: 'https://github.com/dgthomp3/ReelRoster',
  },
  {
    id: 'restaurant-proto',
    title: 'Restaurant Automation Prototype',
    category: 'Prototype',
    image: 'chef.jpeg',
    description: 'Storyboards and Wire Frames to depict an automated restuarant',
    details: 'This project explores the design of an automated restaurant ' +
      'experience through low-fidelity storyboarding and mid-fidelity wireframing. ' +
      'Diners use a digital system—primarily their smartphones—to perform essential ' +
      'actions like finding tables, ordering food, signaling staff, and requesting ' +
      'help, all while minimizing the need for traditional server interaction. The ' +
      'design prioritizes ease of use, familiarity, and reduced friction for both ' +
      'customers and staff, aiming to enhance dining efficiency and guest satisfaction.',
    accomplishments: [
      'Storyboarding',
      'Figma Wireframes',
    ],
    pdf: '/prototyping-portfolio-website/AutomatedRest.pdf',
  },
  {
    id: 'zappack',
    title: 'ZapPack Smart Backpack Prototype',
    category: 'Prototype',
    image: 'zappy.png',
    description: 'A smart backpack designed to enhance convenience and security for modern users.',
    details: 'The ZapPack is a wearable technology prototype that seamlessly integrates ' +
        'advanced tech features into a sleek backpack. It includes wireless charging, ' +
        'biometric anti-theft protection, real-time location tracking, and smart inventory ' +
        'management. Designed for tech-savvy travelers, students, and professionals, the ' +
        'ZapPack ensures your essentials are secure, organized, and always within reach.',
    accomplishments: [
        'Wireless charging integration',
        'Biometric anti-theft features',
        'Real-time GPS tracking',
        'Smart inventory management',
        'Companion app wireframes',
    ],
    pdf: '/prototyping-portfolio-website/ZapPack_Prototype_Group8.pdf',
    video: '/prototyping-portfolio-website/ZapPack_V2.mp4',
  },
  {
    id: 'aizoo',
    title: 'AI Zoo Interface Prototype',
    category: 'Prototype',
    image: 'aizoo-preview.png',
    description: 'A futuristic ticketing and exhibit exploration app for a zoo featuring AI-generated hybrid animals.',
    details: 'AI Zoo is a speculative user interface prototype for a futuristic zoo where all animals are created through artificial intelligence and advanced bioengineering. ' +
        'The prototype, built in Figma, features a modern layout, large immersive imagery, and intuitive navigation to help visitors explore exhibits, check wait times, and purchase admission tickets. ' +
        'The design centers on balancing visual wonder with usability, providing a sci-fi inspired experience that remains accessible and user-friendly across devices.',
    accomplishments: [
      'Designed high-fidelity prototype in Figma',
      'Created wireframes for ticket purchasing and RSVP flows',
      'Implemented sci-fi themed layout with modern UI patterns',
      'Integrated social media links and a wait time planning tool',
      'Conducted user testing and synthesized actionable feedback',
    ],
    pdf: '/prototyping-portfolio-website/AIZoo_Prototype3_Group8.pdf',
    prototype: 'https://www.figma.com/proto/yIC713IKgtVQjRAXEdQ32g/INFO-691?node-id=40-12&p=f&t=kVMAVO7aI1z8WJ7J-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2254',
  },
  {
    id: 'nomad',
    title: 'NOMAD - Voice-Based Cooking Interface',
    category: 'Prototype',
    image: 'nomad.png',
    description: 'A mobile, voice-activated cooking assistant designed for hands-free recipe navigation and appliance control.',
    details: 'NOMAD (Navigational Oral Module for All Dishes) is a prototype of a voice-activated remote that assists users in the kitchen. ' +
      'The user can carry the remote or place it on a surface in “Live Mode” for hands-free use. Through physical prototyping, storyboarding, and a scripted demo, this project explores embodied interaction, voice UX design, and task pacing in a cooking context.',
    accomplishments: [
      'Physical form prototype with labeled features',
      'Storyboard illustrating use flow and environment context',
      'Video demo script capturing core interactions and use cases',
      'Exploration of multimodal prototyping techniques for voice interfaces',
    ],
    pdf: '/prototyping-portfolio-website/NOMAD_Prototype.pdf',
    video: '/prototyping-portfolio-website/NOMAD_Demo.mp4',
  },
  {
    id: 'habittap',
    title: 'Habit Tap App',
    category: 'Software',
    image: 'habittap.png',
    description: 'A lightweight mobile habit-tracking app designed for simplicity, offline use, and motivational feedback.',
    details: 'HabitTap is a mobile app built with React Native and SQLite, designed to help users ' +
        'build and maintain positive habits through daily check-ins, visual progress tracking, and ' +
        'reminders. Developed for students, professionals, and anyone working on personal development, ' +
        'HabitTap offers a clean, intuitive experience backed by offline storage and motivational ' +
        'streak visuals.',
    accomplishments: [
      'One-tap daily habit tracking with visual feedback',
      'Local persistence using SQLite for offline use',
      'Calendar heatmaps and streak counters to drive consistency',
      'Cross-platform React Native UI design and optimization',
      'Push notifications for reminders',
    ],
    github: 'https://github.com/dgthomp3/habit-tap',
  },
  {
    id: 'sydi-assessment',
    title: 'SYDI Player Assessment Platform',
    category: 'Software',
    image: 'sydi.png',
    description: 'A digital player evaluation system for youth baseball, basketball, and volleyball programs.',
    details: 'SYDI is a full-stack web application built for Serenity Youth Development, Inc. to replace a paper-based player assessment process. ' +
      'Coaches can evaluate players across three sports using sport-specific forms with a standardized 5-point rating system, upload player photos, and generate professional PDF assessment cards. ' +
      'The platform includes a team analytics dashboard with division filtering, real-time player search, and a CI/CD pipeline with full E2E test coverage.' +
      '<br><br>The app is deployed and actively used by coaches. It integrates Firebase for authentication, Firestore for real-time data, and Storage for player photos. ' +
      'PDF reports are generated client-side using @react-pdf/renderer and mirror the layout of the original paper forms, making adoption seamless for coaches already familiar with the process.',
    accomplishments: [
      'Sport-specific assessment forms for baseball, basketball, and volleyball with a 5-point rating system',
      'PDF report generation with sport branding, progress bars, and detailed skill breakdowns',
      'Team analytics dashboard with division filtering and exportable team summary reports',
      'Firebase integration: Firestore, Authentication, Storage, and Hosting',
      'Player photo upload and management with Firebase Storage',
      'Playwright E2E test suite covering all three sport forms and player lookup flows',
      'GitHub Actions CI/CD pipeline that blocks deployment on failing E2E tests',
    ],
    video: '/prototyping-portfolio-website/sydi-demo.mp4',
  },
  {
    id: 'nomadplus',
    title: 'NOMAD+ Smart Kitchen Assistant',
    category: 'Software',
    image: 'nomad+.png',
    featured: true,
    capstone: true,
    description: 'A multi-modal cooking assistant with voice control and ingredient-based recipe search.',
    details: 'NOMAD+ is a smart kitchen assistant designed to support truly hands-free cooking. Built ' + 
      'with React Native and Go, it combines voice interaction, ingredient-based recipe search, ' +
      'and AI-powered clarification using GPT-4o Mini. The system integrates real recipe data from ' +
      'the Spoonacular API, offering access to more than 365,000 recipes, and includes smart timers, ' +
      'voice control, and a cross-platform UI. NOMAD+ is a full end-to-end prototype that includes ' +
      'step-by-step guidance, and a kitchen-optimized UI in an orange, gray, and green palette.' +
      '<br><br>The project began with user research including a 60+ response survey and targeted interviews ' +
      'to understand real cooking behaviors and pain points. Insights from this work shaped the design goals, ' +
      'interaction model, and the prioritization of features for the MVP. I created sketches, wireframes, ' +
      'and mid-fidelity prototypes to explore multimodal interaction, including future concepts for gesture ' +
      'control and AR overlays. NOMAD+ represents a full end-to-end process that blends research, design, and ' +
      'development into a cohesive and scalable cooking assistant.',
    accomplishments: [
      'Ingredient-based recipe search with natural language processing',
      'Voice control simulation for hands-free cooking navigation',
      'Smart timer functionality with start/pause/reset controls',
      'Go backend with OpenAI GPT-4o mini and Spoonacular API integration',
      'Cross-platform React Native app with Expo framework',
      'RESTful API architecture with proper error handling and fallbacks',
    ],
    pdf: '/prototyping-portfolio-website/NOMAD+_CaseStudy_DallasThompsonIII.pdf',
    github: 'https://github.com/dgthomp3/nomad-',
  },    
];