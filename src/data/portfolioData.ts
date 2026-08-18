export interface ProjectItem {
  id: string;
  title: string;
  category: 'youtube' | 'thumbnail' | 'short' | 'promo' | 'brand';
  categoryLabel: string;
  image: string;
  videoUrl?: string;
  description: string;
  client?: string;
  software?: string[];
  views?: string;
  date?: string;
  isCreativityShowcase?: boolean;
}

export interface YouTubeChannel {
  name: string;
  handle: string;
  status: string;
  role: string;
  description: string;
  url: string;
  avatar: string;
  bannerImg?: string;
  isWorkingWith?: boolean;
}

export const DISHA_INFO = {
  name: 'Disha Elmasry',
  arabicName: 'مصطفى المصري (ديشا)',
  title: 'Video Editor & Creative Content Creator',
  arabicTitle: 'محرر فيديو ومصمم محتوى إبداعي',
  age: 21,
  university: 'Borg El Arab Technological University',
  arabicUniversity: 'جامعة برج العرب التكنولوجية',
  photo: '/my-photo.jpg',
  bio: 'محرر فيديو وصانع محتوى إبداعي متخصص في تحويل اللقطات العادية إلى قصص بصرية سينمائية جذابة لمنصات YouTube، ومواقع التواصل الاجتماعي، والحملات الإعلانية. أدير دورة الإنتاج بالكامل من التقطيع الأولي وتنسيق المشاهد إلى المؤثرات البصرية وتصميم الصوت الاحترافي وتصميم الصور المصغرة (Thumbnails) والبوسترات الإعلانية عالية الجاذبية.',
  aiPhilosophy: 'أستخدم تقنيات وأدوات الذكاء الاصطناعي كمساعد إبداعي لتسريع سير العمل، وتوليد أفكار بصرية غير تقليدية، ورفع جودة الإنتاج النهائي إلى أعلى المعايير.',
  socials: {
    whatsapp: {
      phone: '+20 101 634 5690',
      link: 'https://wa.me/201016345690?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%85%D8%B5%D8%B7%D9%81%D9%89%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D9%88%D9%86%20%D9%85%D8%B9%D9%83%20%D9%81%D9%8A%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D9%85%D9%88%D9%86%D8%AA%D8%A7%D8%AC%20%D9%81%D9%8A%D8%AF%D9%8A%D9%88',
    },
    instagram: {
      handle: '@mastafa_disha',
      link: 'https://www.instagram.com/mastafa_disha/',
    },
    linkedin: {
      name: 'Mostafa El Masry',
      link: 'https://www.linkedin.com/in/mostafa-el-masry-3066b2302/',
    },
    youtube: {
      handle: '@Disha_ELmasry',
      link: 'https://www.youtube.com/@Disha_ELmasry',
    },
  },
  stats: [
    { number: '+150', label: 'فيديو تم تحريره', labelEn: 'Videos Edited' },
    { number: '+15K', label: '15 ألف مشاهدة للمشاريع', labelEn: 'Total Views' },
    { number: '100%', label: 'التزام بالمواعيد والجودة', labelEn: 'Client Satisfaction' },
    { number: '+2', label: 'سنوات خبرة متخصصة', labelEn: 'Years Experience' },
  ],
};

export const SOFTWARE_TOOLS = [
  {
    name: 'DaVinci Resolve',
    category: 'Color Grading & Advanced Editing',
    description: 'تعديل الألوان السينمائي والماسترينج الاحترافي',
    icon: 'Film',
    color: 'from-amber-500 to-rose-500',
  },
  {
    name: 'Adobe Premiere Pro',
    category: 'Main Video Editing',
    description: 'المونتاج الشامل، رتم القصة، والتقطيع السينمائي',
    icon: 'Video',
    color: 'from-purple-600 to-indigo-600',
  },
  {
    name: 'Adobe After Effects',
    category: 'VFX & Motion Graphics',
    description: 'المؤثرات البصرية والأنيميشن وتحريك النصوص والرسومات',
    icon: 'Sparkles',
    color: 'from-blue-600 to-violet-600',
  },
  {
    name: 'Adobe Photoshop',
    category: 'Thumbnail & Poster Design',
    description: 'تصميم صور مصغرة (Thumbnails) وبوسترات إعلانية ذات معدل نقر مرتفع (CTR)',
    icon: 'Image',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'CapCut Pro',
    category: 'Short-Form Content',
    description: 'مونتاج سريع وسلس لفيديوهات تيك توك، ريلز، وشورتس',
    icon: 'Scissors',
    color: 'from-slate-700 to-slate-900',
  },
  {
    name: 'AI Creative Tools',
    category: 'Workflow Acceleration',
    description: 'أدوات الذكاء الاصطناعي لتسريع الإنتاج وتوليد الأفكار ومعالجة الصوت',
    icon: 'Cpu',
    color: 'from-emerald-500 to-teal-600',
  },
];

export const SERVICES = [
  {
    title: 'مونتاج فيديوهات اليوتيوب (YouTube Long-Form)',
    description: 'تحرير شامل للمقاطع الطويلة مع بناء رتم تصاعدي يحافظ على تفاعل المشاهد (Retention Rate)، وتلوين وتصميم صوتي متقن.',
    icon: 'Youtube',
  },
  {
    title: 'المحتوى القصير السريع (Reels & Shorts & TikTok)',
    description: 'مونتاج ديناميكي سريع مع مؤثرات بصرية وتسميات توضيحية متحركة (Captions) تجذب المشاهدين من أول ثانية.',
    icon: 'Smartphone',
  },
  {
    title: 'تصميم الصور المصغرة والبوسترات (High CTR Designs)',
    description: 'تصميم بوسترات إعلانية وثمبنيلات تخطف الأنظار تزيد من معدل النقر (Click-Through Rate) وتبرز في الحملات والصفحات.',
    icon: 'Image',
  },
  {
    title: 'التلوين السينمائي (Color Grading & Correction)',
    description: 'تصحيح ومعالجة ألوان احترافية تعطي الفيديو طابعاً سينمائياً مشبعاً وواقعياً بأعلى درجات الدقة.',
    icon: 'Palette',
  },
  {
    title: 'تصميم وهندسة الصوت (Sound Design & Foley)',
    description: 'إضافة مؤثرات صوتية تفاعلية، إزالة الضوضاء، وموازنة الموسيقى مع الصوت البشري لتجربة سمعية غامرة.',
    icon: 'Headphones',
  },
  {
    title: 'المؤثرات البصرية والموشن جرافيك (VFX & Motion)',
    description: 'تحريك الشعارات، النصوص، الرسوم التوضيحية، وإضافة لمسات بصرية متحركة ترفع من قيمة الإنتاج.',
    icon: 'Sparkles',
  },
];

export const YOUTUBE_CHANNELS: YouTubeChannel[] = [
  {
    name: 'Disha Elmasry',
    handle: '@Disha_ELmasry',
    status: 'Official Personal Channel',
    role: 'Video Editor & Content Creator',
    description: 'القناة الرسمية الشخصية لمصطفى المصري، حيث أتولى إدارة كامل عملية الإنتاج من مونتاج الفيديوهات وتصميم الصور المصغرة والمؤثرات البصرية وتجهيز المحتوى للنشر بأعلى جودة.',
    url: 'https://www.youtube.com/@Disha_ELmasry',
    avatar: '/my-photo.jpg',
  },
  {
    name: 'Rooyai — قناة رؤياي',
    handle: '@Rooyai',
    status: 'Currently Working With',
    role: 'Video Editor & Thumbnail Designer',
    description: 'أعمل حالياً مع فريق قناة رؤياي على يوتيوب، حيث أتولى مهمة المونتاج الكامل للفيديوهات، المؤثرات البصرية، وتصميم الصور المصغرة والبوسترات الإعلانية الاحترافية لدعم نمو القناة.',
    url: 'https://www.youtube.com/@Rooyai',
    avatar: '/rooyai-logo.jpg',
    isWorkingWith: true,
  },
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  // ─── 1. ALL VIDEO PROJECTS (YOUTUBE LONG-FORM, SHORTS & REELS) ───
  {
    id: 'v1',
    title: 'مونتاج شورتس سينمائي سريع (YouTube Short)',
    category: 'short',
    categoryLabel: 'شورتس / ريلز',
    image: 'https://img.youtube.com/vi/uiNZu1qbNxE/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/shorts/uiNZu1qbNxE',
    description: 'مونتاج سريع ومتقن لمقطع شورتس يعتمد على سرعة التقطيع والتزامن مع المؤثرات الصوتية لجذب انتباه المشاهد من الثانية الأولى.',
    software: ['Premiere Pro', 'After Effects'],
    views: '150K',
  },
  {
    id: 'v2',
    title: 'فيديو يوتيوب كامل سينمائي عالي الجودة',
    category: 'youtube',
    categoryLabel: 'فيديو يوتيوب كامل',
    image: 'https://img.youtube.com/vi/wESXVrzeCmY/hqdefault.jpg',
    videoUrl: 'https://youtu.be/wESXVrzeCmY?si=_ghamX55Fl3_Egmh',
    description: 'إنتاج ومونتاج كامل لمقطع يوتيوب طويل يشمل السرد القصصي، تصحيح الألوان السينمائي، وهندسة الصوت لزيادة وقت المشاهدة (Retention Rate).',
    software: ['DaVinci Resolve', 'Premiere Pro', 'After Effects'],
    views: '240K',
  },
  {
    id: 'v3',
    title: 'مونتاج شورتس ديناميكي بتأثيرات حركية وكابشنز',
    category: 'short',
    categoryLabel: 'شورتس / ريلز',
    image: 'https://img.youtube.com/vi/-3fRjoVIW44/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/shorts/-3fRjoVIW44',
    description: 'مونتاج شورتس تفاعلي مع نصوص متحركة ورموز بصرية تحافظ على تركيز المشاهد طوال مدة المقطع.',
    software: ['CapCut Pro', 'Premiere Pro'],
    views: '95K',
  },
  {
    id: 'v4',
    title: 'ريلز إنستغرام إبداعي للمؤثرين والحسابات الكبرى',
    category: 'short',
    categoryLabel: 'إنستغرام ريلز',
    image: '/photos/photo_5776222588236403125_y.jpg',
    videoUrl: 'https://www.instagram.com/reel/Db6ITWuNquC/?hl=ar',
    description: 'ريل عصري جذاب بأسلوب تحرير ملائم لخوارزميات إنستغرام لزيادة التفاعل والانتشار والمشاركات.',
    software: ['Premiere Pro', 'After Effects'],
    views: '180K',
  },
  {
    id: 'v5',
    title: 'يوتيوب شورتس بهندسة صوتية ومؤثرات SFX محيطية',
    category: 'short',
    categoryLabel: 'شورتس / ريلز',
    image: 'https://img.youtube.com/vi/5nlZDjLUjiE/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/shorts/5nlZDjLUjiE',
    description: 'مونتاج يركز على المؤثرات الصوتية المتقنة والانتقالات السلسة لضمان استمرار المشاهد حتى نهاية المقطع.',
    software: ['Premiere Pro', 'Audition'],
    views: '110K',
  },
  {
    id: 'v6',
    title: 'ريلز إنستغرام ترويجي عالي الاحترافية',
    category: 'promo',
    categoryLabel: 'إنستغرام ريلز',
    image: '/photos/photo_5776222588236403127_y.jpg',
    videoUrl: 'https://www.instagram.com/reel/DFG9aZHoz9u/?hl=ar',
    description: 'مونتاج إعلاني يبرز الهوية البصرية ورسالة المحتوى بطريقة احترافية تشجع على اتخاذ إجراء مباشر.',
    software: ['After Effects', 'Premiere Pro'],
    views: '85K',
  },
  {
    id: 'v7',
    title: 'شورتس يوتيوب سريع مع تحريك نصوص وجرافيكس',
    category: 'short',
    categoryLabel: 'شورتس / ريلز',
    image: 'https://img.youtube.com/vi/g2dyQSGcsGE/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/shorts/g2dyQSGcsGE',
    description: 'مونتاج شورتس بمؤثرات جرافيكس حركية وإيقاع تصاعدي متناسق مع النبرة الصوتية.',
    software: ['CapCut Pro', 'Premiere Pro'],
    views: '130K',
  },
  {
    id: 'v8',
    title: 'مونتاج شورتس قصصي درامي مشوق',
    category: 'short',
    categoryLabel: 'شورتس / ريلز',
    image: 'https://img.youtube.com/vi/6lLL79GN_6E/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/shorts/6lLL79GN_6E',
    description: 'مونتاج محكم يركز على حبكة القصة والإثارة البصرية مع انتقالات سينمائية مميزة.',
    software: ['Premiere Pro', 'After Effects'],
    views: '210K',
  },
  {
    id: 'v9',
    title: 'يوتيوب شورتس إبداعي مع زوايا تصوير وتلوين سينمائي',
    category: 'short',
    categoryLabel: 'شورتس / ريلز',
    image: 'https://img.youtube.com/vi/bTTUOYBLIQs/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/shorts/bTTUOYBLIQs',
    description: 'مونتاج شورتس مع تلوين سينمائي وتصحيح درجات الإضاءة لتوفير تجربة بصرية مريحة وجذابة.',
    software: ['DaVinci Resolve', 'Premiere Pro'],
    views: '175K',
  },
  {
    id: 'v10',
    title: 'مشروع إخراج ومونتاج بصري - قناة Rooyai',
    category: 'brand',
    categoryLabel: 'مشاريع القنوات',
    image: '/photos/photo_5776382129091580286_y.jpg',
    videoUrl: 'https://www.youtube.com/@Rooyai',
    description: 'أحد أعمال المونتاج المتميزة مع قناة رؤياي مع بناء إيقاع بصري متقدم ومؤثرات سينمائية.',
    software: ['DaVinci Resolve', 'Premiere Pro'],
    views: '75K',
  },

  // ─── 2. ALL IMAGE & POSTER DESIGN PROJECTS (ACCURATE DESCRIPTIONS MATCHING EXACT ARTWORK) ───
  {
    id: 'd1',
    title: 'تصميم ثمبنيل يوتيوب ترفيهي - موتنا من كتر الضحك',
    category: 'thumbnail',
    categoryLabel: 'تصميم ثمبنيل يوتيوب',
    image: '/photos/photo_5776222588236403137_y.jpg',
    description: 'تصميم صورة مصغرة لفيديو رياكشن ومحتوى ترفيهي مع إبراز تعبيرات الضحك والوجوه، وتأثيرات توهج نيون نارية، وإيموجي تفاعل لزيادة معدل النقر CTR.',
    software: ['Photoshop', 'Lightroom'],
    isCreativityShowcase: true,
  },
  {
    id: 'd2',
    title: 'بوستر إعلاني لحملة خصم 40% - منصة Rooyai',
    category: 'thumbnail',
    categoryLabel: 'بوستر إعلاني تسويقي',
    image: '/photos/photo_5776222588236403138_y.jpg',
    description: 'تصميم بوستر إعلاني تسويقي لحملة تخفيضات الباقة السنوية لمنصة رؤياي وأتمتة n8n مع تجسيد رقم 40% الزجاجي المتوهج ثلاثي الأبعاد وإبراز السعر والمزايا بوضوح.',
    software: ['Photoshop', 'Illustrator'],
    isCreativityShowcase: true,
  },
  {
    id: 'd3',
    title: 'بوستر إعلاني إبداعي - حملة أتمتة n8n (شخصية Tom)',
    category: 'thumbnail',
    categoryLabel: 'بوستر إعلاني إبداعي',
    image: '/photos/photo_5776222588236403139_y.jpg',
    description: 'تصميم إعلاني فكاهي ومبتكر يدمج شخصية الكرتون الشهيرة Tom وهو يفكر في الأتمتة والمهام الذكية مع تفاصيل العرض السنوي لخصم 40% لمنصة Rooyai.',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 'd4',
    title: 'بوستر إعلاني تسويقي - حملة أتمتة n8n (شخصية الباندا)',
    category: 'thumbnail',
    categoryLabel: 'بوستر إعلاني تسويقي',
    image: '/photos/photo_5776222588236403140_y.jpg',
    description: 'تصميم بوستر إعلاني تسويقي يدمج شخصية الباندا المحارب مع مؤثرات برق وطاقة زرقاء نيون لإبراز قوة أتمتة الأعمال وسهولة إدارة 2200+ Workflow.',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 'd5',
    title: 'تصميم ثمبنيل يوتيوب تقني - تحليل Crypto عبر n8n',
    category: 'thumbnail',
    categoryLabel: 'تصميم ثمبنيل يوتيوب',
    image: '/photos/photo_5776222588236403141_y.jpg',
    description: 'تصميم مصغرة لفيديو شرح ربط n8n بالذكاء الاصطناعي لتحليل الكريبتو وشارت بينانس مع روبوت متوهج ومؤشرات صعود العملات الرقمية (BTC/USDT).',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 'd6',
    title: 'تصميم ثمبنيل يوتيوب - إطلاق ROOYALLM API',
    category: 'thumbnail',
    categoryLabel: 'تصميم ثمبنيل يوتيوب',
    image: '/photos/photo_5776222588236403142_y.jpg',
    description: 'تصميم صورة مصغرة لمقارنة بدائل الذكاء الاصطناعي مع شخصية روبوت بالزي التراثي والأهرامات وإبراز الدفع بالجنيه المصري بديلاً عن OpenAI و OpenRouter.',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 'd7',
    title: 'تصميم ثمبنيل يوتيوب - جميع موديلات AI في مكان واحد',
    category: 'thumbnail',
    categoryLabel: 'تصميم ثمبنيل يوتيوب',
    image: '/photos/photo_5776222588236403143_y.jpg',
    description: 'تصميم مصغرة يجمع أشهر نماذج الذكاء الاصطناعي (ChatGPT, Claude, Gemini, DeepSeek, Llama) مع لوحة تحكم وإضاءات ذهبية متوهجة ونقاط API موحدة.',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 'd8',
    title: 'تصميم ثمبنيل يوتيوب - دمج Binance مع n8n',
    category: 'thumbnail',
    categoryLabel: 'تصميم ثمبنيل يوتيوب',
    image: '/photos/photo_5776222588236403144_y.jpg',
    description: 'تصميم مصغرة يجمع بين عالم التداول والذكاء الاصطناعي مع شارت شموع يابانية وشبكة تدفق المهام التلقائية (Workflows) وتحليل الفرص الاستثمارية.',
    software: ['Photoshop'],
  },
  {
    id: 'd9',
    title: 'بوستر إعلاني لحملة اشتغل أقل وانجز أكثر - Rooyai',
    category: 'thumbnail',
    categoryLabel: 'بوستر إعلاني تسويقي',
    image: '/photos/photo_5776222588236403145_y.jpg',
    description: 'تصميم إعلاني تسويقي مع شخصية الطفلة (Boo) بألوان وردية جذابة لعرض خصم 40% وتوفير الوقت عبر أتمتة الأعمال وسيرفرات سريعة ومستقرة.',
    software: ['Photoshop'],
  },
  {
    id: 'd10',
    title: 'بوستر إعلاني - حقيبة موديلات الذكاء الاصطناعي ROOYALLM',
    category: 'thumbnail',
    categoryLabel: 'بوستر إعلاني تسويقي',
    image: '/photos/photo_5776222588236403146_y.jpg',
    description: 'تصميم إعلاني ثلاثي الأبعاد لفكرة حقيبة تسوق تجمع كافة نماذج الـ AI العالمية في منصة واحدة سهلة وسريعة مع إبراز طرق الدفع المرنة والأمان.',
    software: ['Photoshop'],
  },
  {
    id: 'd11',
    title: 'بوستر إعلاني لحملة وفر فلوسك - اشتراك n8n الاقتصادي',
    category: 'thumbnail',
    categoryLabel: 'بوستر إعلاني تسويقي',
    image: '/photos/photo_5776382129091580288_y.jpg',
    description: 'تصميم بوستر إعلاني يركز على التوفير المالي لحزمة n8n بـ 200 جنيه مع إخراج احترافي لحزمة النقود المصرية وعناصر الجذب التسويقي للعملاء.',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
];

export const VIDEO_PROJECTS = PORTFOLIO_PROJECTS.filter((p) => !!p.videoUrl);
export const DESIGN_PROJECTS = PORTFOLIO_PROJECTS.filter((p) => !p.videoUrl || p.category === 'thumbnail');
export const DISHA_CREATIVITY_PROJECTS = PORTFOLIO_PROJECTS.filter((p) => p.isCreativityShowcase);
