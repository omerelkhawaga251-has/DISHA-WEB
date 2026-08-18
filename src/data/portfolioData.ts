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
  bio: 'محرر فيديو وصانع محتوى إبداعي متخصص في تحويل اللقطات العادية إلى قصص بصرية سينمائية جذابة لمنصات YouTube، ومواقع التواصل الاجتماعي، والحملات الإعلانية. أدير دورة الإنتاج بالكامل من التقطيع الأولي وتنسيق المشاهد إلى المؤثرات البصرية وتصميم الصوت الاحترافي وتصميم الصور المصغرة (Thumbnails) عالية الجاذبية.',
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
    category: 'Thumbnail Design',
    description: 'تصميم صور مصغرة (Thumbnails) ذات معدل نقر مرتفع (CTR)',
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
    title: 'تصميم الصور المصغرة (High CTR Thumbnails)',
    description: 'تصميم بوسترات وصور مصغرة تخطف الأنظار تزيد من معدل النقر (Click-Through Rate) وتبرز في الصفحة الرئيسية.',
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
    description: 'أعمل حالياً مع فريق قناة رؤياي على يوتيوب، حيث أتولى مهمة المونتاج الكامل للفيديوهات، المؤثرات البصرية، وتصميم الصور المصغرة الاحترافية لدعم نمو القناة.',
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

  // ─── 2. ALL IMAGE & THUMBNAIL DESIGN PROJECTS (PURE GRAPHIC DESIGN DESCRIPTIONS) ───
  {
    id: 'd1',
    title: 'تصميم ثمبنيل يوتيوب عالي الجاذبية (High CTR Thumbnail)',
    category: 'thumbnail',
    categoryLabel: 'تصميم صورة مصغرة',
    image: '/photos/photo_5776222588236403137_y.jpg',
    description: 'تصميم جرافيكي يعتمد على إضاءة ثلاثية النقاط، عزل الشخصية بدقة، وتوزيع لوني مدروس يجذب العين فوراً بين مقترحات يوتيوب لرفع معدل النقر CTR.',
    software: ['Photoshop', 'Lightroom'],
    isCreativityShowcase: true,
  },
  {
    id: 'd2',
    title: 'تصميم مصغرة وثائقية تشويقية (Documentary Style)',
    category: 'thumbnail',
    categoryLabel: 'تصميم صورة مصغرة',
    image: '/photos/photo_5776222588236403138_y.jpg',
    description: 'دمج بصري متعدد الطبقات (Photoshop Manipulation) مع موازنة الظلال والأنوار الخلفية لخلق حالة من الغموض والفضول البصري.',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 'd3',
    title: 'تصميم صورة مصغرة حماسية (High-Energy Gaming & Action)',
    category: 'thumbnail',
    categoryLabel: 'تصميم صورة مصغرة',
    image: '/photos/photo_5776222588236403139_y.jpg',
    description: 'تكوين ديناميكي يبرز تعبيرات الوجه بوضوح مع مؤثرات توهج نارية وخطوط عريضة ذات مقروئية عالية على شاشات الهواتف الذكية.',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 'd4',
    title: 'تصميم مصغرة للقصص الواقعية والتاريخية',
    category: 'thumbnail',
    categoryLabel: 'تصميم صورة مصغرة',
    image: '/photos/photo_5776222588236403140_y.jpg',
    description: 'معالجة فوتوغرافية وتدرج لوني سينمائي كلاسيكي يضفي طابع الأصالة والواقعية على تفاصيل الصورة وعناصرها التاريخية.',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 'd5',
    title: 'تصميم بوستر ومصغرة مراجعات تقنية (Tech Review)',
    category: 'thumbnail',
    categoryLabel: 'تصميم صورة مصغرة',
    image: '/photos/photo_5776222588236403141_y.jpg',
    description: 'إبراز تفاصيل المنتج وخاماته بدقة عالية مع انعكاسات ضوئية نيون ومظهر مستقبلي نظيف يعكس الاحترافية وثقة المشاهد.',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 'd6',
    title: 'تصميم مصغرة حصرية بأسلوب ديشا (Disha Creative Signature)',
    category: 'thumbnail',
    categoryLabel: 'تصميم صورة مصغرة',
    image: '/photos/photo_5776222588236403142_y.jpg',
    description: 'توليف ألوان خاصة ودمج متقن للشخصية مع خلفيات فضائية ومضيئة تخلق هوية بصرية فريدة وبارزة بين فيديوهات القناة.',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 'd7',
    title: 'تصميم مصغرة سينمائية بتدرج (Teal & Orange)',
    category: 'thumbnail',
    categoryLabel: 'تصميم صورة مصغرة',
    image: '/photos/photo_5776222588236403143_y.jpg',
    description: 'تطبيق التباين اللوني السينمائي الشهير (أزرق نيلي وبرتقالي متوهج) لتعزيز العمق البصري وجعل العناصر بارزة ومريحة للنظر.',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 'd8',
    title: 'تصميم مصغرة تسويقية لرواد الأعمال ونمو القنوات',
    category: 'thumbnail',
    categoryLabel: 'تصميم صورة مصغرة',
    image: '/photos/photo_5776222588236403144_y.jpg',
    description: 'تصميم جرافيكي منظم يبرز الأرقام والإحصائيات والنتائج بطريقة مباشرة ومقنعة تشجع على الضغط الفوري.',
    software: ['Photoshop'],
  },
  {
    id: 'd9',
    title: 'تصميم ثمبنيل درامي للقصص الغامضة والألغاز',
    category: 'thumbnail',
    categoryLabel: 'تصميم صورة مصغرة',
    image: '/photos/photo_5776222588236403145_y.jpg',
    description: 'توزيع فني لعناصر الغموض مع تباين قوي بين الضوء والعتمة لإثارة الفضول النفسي لدى المشاهد.',
    software: ['Photoshop'],
  },
  {
    id: 'd10',
    title: 'تصميم مصغرة لمحتوى التنمية وتطوير الذات',
    category: 'thumbnail',
    categoryLabel: 'تصميم صورة مصغرة',
    image: '/photos/photo_5776222588236403146_y.jpg',
    description: 'تنسيق بصري نظيف ومريح للعين مع تيبوجرافي عربي عريض وواضح يوصل فكرة المحتوى خلال جزء من الثانية.',
    software: ['Photoshop'],
  },
  {
    id: 'd11',
    title: 'تصميم بوستر رقمي شامل ومصغرة فنية',
    category: 'thumbnail',
    categoryLabel: 'تصميم صورة مصغرة',
    image: '/photos/photo_5776382129091580288_y.jpg',
    description: 'إخراج فوتوغرافي متكامل يجمع بين الرسم الرقمي، التعديل اللوني، والدمج الفني لإنتاج عمل عالي الدقة لجميع الشاشات.',
    software: ['Photoshop', 'After Effects'],
    isCreativityShowcase: true,
  },
];

export const VIDEO_PROJECTS = PORTFOLIO_PROJECTS.filter((p) => !!p.videoUrl);
export const DESIGN_PROJECTS = PORTFOLIO_PROJECTS.filter((p) => !p.videoUrl || p.category === 'thumbnail');
export const DISHA_CREATIVITY_PROJECTS = PORTFOLIO_PROJECTS.filter((p) => p.isCreativityShowcase);
