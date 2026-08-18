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
    { number: '+2M', label: 'مشاهدات المشاريع', labelEn: 'Total Views' },
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
    title: 'فيديوهات إعلانية وترويجية (Promo & Ads)',
    description: 'إنتاج إعلانات تجارية جذابة للشركات والمؤثرين بجودة سينمائية تسهم في زيادة المبيعات والانتشار.',
    icon: 'Megaphone',
  },
  {
    title: 'تصميم الصور المصغرة (High CTR Thumbnails)',
    description: 'تصميم صور مصغرة ملفتة للانتباه بألوان وإضاءات احترافية ترفع نسبة النقر إلى الظهور بشكل ملحوظ.',
    icon: 'Palette',
  },
  {
    title: 'تصميم وهندسة الصوت (Sound Design & SFX)',
    description: 'إضافة المؤثرات الصوتية والموسيقى التصويرية المتناغمة مع حركة الفيديو لإعطاء تجربة سمعية غامرة.',
    icon: 'Headphones',
  },
  {
    title: 'تدرج وتصحيح الألوان (Cinematic Color Grading)',
    description: 'معالجة الألوان وإعطاء الفيديو طابعاً سينمائياً مميزاً يعكس هوية القناة والمحتوى.',
    icon: 'Wand2',
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
  // ─── 1. REAL YOUTUBE & REELS VIDEO PROJECTS (مع الثمبنيلات الأصلية من يوتيوب) ───
  {
    id: 'p1',
    title: 'مونتاج شورتس سينمائي احترافي (YouTube Short)',
    category: 'short',
    categoryLabel: 'شورتس / ريلز',
    image: 'https://img.youtube.com/vi/uiNZu1qbNxE/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/shorts/uiNZu1qbNxE',
    description: 'مونتاج سريع وسلس لمقطع يوتيوب شورتس مع انتقالات بصرية مذهلة وضبط دقيق لإيقاع الصوت.',
    software: ['Premiere Pro', 'After Effects'],
    views: '150K',
  },
  {
    id: 'p2',
    title: 'فيديو يوتيوب كامل سينمائي عالي الجودة',
    category: 'youtube',
    categoryLabel: 'فيديو يوتيوب',
    image: 'https://img.youtube.com/vi/wESXVrzeCmY/hqdefault.jpg',
    videoUrl: 'https://youtu.be/wESXVrzeCmY?si=_ghamX55Fl3_Egmh',
    description: 'مونتاج كامل عالي الجودة لفيديو يوتيوب مع تلوين سينمائي وتصميم صوتي متقن يرفع وقت المشاهدة.',
    software: ['DaVinci Resolve', 'Premiere Pro', 'After Effects'],
    views: '240K',
  },
  {
    id: 'p3',
    title: 'مونتاج شورتس ديناميكي مع تأثيرات بصرية جذابة',
    category: 'short',
    categoryLabel: 'شورتس / ريلز',
    image: 'https://img.youtube.com/vi/-3fRjoVIW44/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/shorts/-3fRjoVIW44',
    description: 'مونتاج شورتس سريع وتفاعلي مع كابشنز ورسومات حركية تخطف انتباه المشاهد من اللحظة الأولى.',
    software: ['CapCut Pro', 'Premiere Pro'],
    views: '95K',
  },
  {
    id: 'p4',
    title: 'ريلز إنستغرام إبداعي للمؤثرين والعلامات التجارية',
    category: 'short',
    categoryLabel: 'إنستغرام ريلز',
    image: '/photos/photo_5776222588236403125_y.jpg',
    videoUrl: 'https://www.instagram.com/reel/Db6ITWuNquC/?hl=ar',
    description: 'ريل إنستغرام بأسلوب مونتاج عصري يعزز من وصول الحساب والـ Engagement والتفاعل.',
    software: ['Premiere Pro', 'Photoshop'],
    views: '180K',
  },
  {
    id: 'p5',
    title: 'يوتيوب شورتس بمؤثرات صوتية و Sound FX محيطية',
    category: 'short',
    categoryLabel: 'شورتس / ريلز',
    image: 'https://img.youtube.com/vi/5nlZDjLUjiE/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/shorts/5nlZDjLUjiE',
    description: 'مونتاج يركز على هندسة الصوت التفاعلية والانتقالات السلسة لزيادة معدل المشاهدة حتى النهاية.',
    software: ['Premiere Pro', 'Audition'],
    views: '110K',
  },
  {
    id: 'p6',
    title: 'ريلز إنستغرام ترويجي عالي الاحترافية',
    category: 'promo',
    categoryLabel: 'إنستغرام ريلز',
    image: '/photos/photo_5776222588236403127_y.jpg',
    videoUrl: 'https://www.instagram.com/reel/DFG9aZHoz9u/?hl=ar',
    description: 'مونتاج ريل تجاري احترافي يبرز الهوية البصرية ويجذب العملاء المستهدفين.',
    software: ['After Effects', 'Premiere Pro'],
    views: '85K',
  },
  {
    id: 'p7',
    title: 'شورتس يوتيوب سريع مع تحريك نصوص وجرافيكس',
    category: 'short',
    categoryLabel: 'شورتس / ريلز',
    image: 'https://img.youtube.com/vi/g2dyQSGcsGE/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/shorts/g2dyQSGcsGE',
    description: 'مونتاج شورتس بمؤثرات بصرية سريعة وتنسيق ألوان مريح للعين يلائم خوارزميات يوتيوب.',
    software: ['CapCut Pro', 'Premiere Pro'],
    views: '130K',
  },
  {
    id: 'p8',
    title: 'مونتاج شورتس قصصي مشوق يرفع الـ Retention',
    category: 'short',
    categoryLabel: 'شورتس / ريلز',
    image: 'https://img.youtube.com/vi/6lLL79GN_6E/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/shorts/6lLL79GN_6E',
    description: 'مونتاج محكم يركز على القصة والتسلسل الدرامي مع انتقالات سينمائية مميزة.',
    software: ['Premiere Pro', 'After Effects'],
    views: '210K',
  },
  {
    id: 'p9',
    title: 'يوتيوب شورتس إبداعي مع زوايا تصوير وتلوين سينمائي',
    category: 'short',
    categoryLabel: 'شورتس / ريلز',
    image: 'https://img.youtube.com/vi/bTTUOYBLIQs/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/shorts/bTTUOYBLIQs',
    description: 'مونتاج شورتس إبداعي مع تلوين وتصحيح للألوان وزيادة التباين الجمالي للمشاهد.',
    software: ['DaVinci Resolve', 'Premiere Pro'],
    views: '175K',
  },

  // ─── 2. THUMBNAILS & GRAPHIC DESIGN MASTERPIECES (DISHA CREATIVITY) ───
  {
    id: 'p10',
    title: 'تصميم ثمبنيل سينمائي لقناة يوتيوب',
    category: 'thumbnail',
    categoryLabel: 'تصميم صور مصغرة',
    image: '/photos/photo_5776222588236403137_y.jpg',
    description: 'تصميم صورة مصغرة احترافية تعتمد على إضاءة ثلاثية النقاط وتوزيع لوني يجذب العين ويزيد من الـ CTR.',
    software: ['Photoshop', 'Lightroom'],
    isCreativityShowcase: true,
  },
  {
    id: 'p11',
    title: 'تصميم ثمبنيل وثائقي غامض وتشويقي',
    category: 'thumbnail',
    categoryLabel: 'تصميم صور مصغرة',
    image: '/photos/photo_5776222588236403138_y.jpg',
    description: 'دمج عناصر متعددة مع تعديل الظلال والإضاءات الخلفية لصنع مشهد وثائقي تشويقي.',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 'p12',
    title: 'تصميم صورة مصغرة لألعاب ومحتوى جيمنج حماسي',
    category: 'thumbnail',
    categoryLabel: 'تصميم صور مصغرة',
    image: '/photos/photo_5776222588236403139_y.jpg',
    description: 'تصميم مخصص لأقوى اللحظات في الفيديو مع تباين قوي وسهل القراءة من شاشات الهواتف.',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 'p13',
    title: 'تصميم مصغرة لقصص واقعية وتاريخية',
    category: 'thumbnail',
    categoryLabel: 'تصميم صور مصغرة',
    image: '/photos/photo_5776222588236403140_y.jpg',
    description: 'دمج تاريخي مع تلوين كلاسيكي يعطي شعوراً بالأصالة والتشويق.',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 'p14',
    title: 'تصميم صورة مصغرة لمراجعات وتجارب تقنية',
    category: 'thumbnail',
    categoryLabel: 'تصميم صور مصغرة',
    image: '/photos/photo_5776222588236403141_y.jpg',
    description: 'إبراز تفاصيل المنتج بدقة مع مؤثرات الإضاءة النيون واللمعان.',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 'p15',
    title: 'تصميم صورة مصغرة حصرية - Disha Style',
    category: 'thumbnail',
    categoryLabel: 'تصميم صور مصغرة',
    image: '/photos/photo_5776222588236403142_y.jpg',
    description: 'تصميم بأسلوب مميز يدمج الشخصية مع الخلفية المظلمة والمشعة.',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 'p16',
    title: 'تصميم صورة مصغرة سينمائية لأفلام وتجارب',
    category: 'thumbnail',
    categoryLabel: 'تصميم صور مصغرة',
    image: '/photos/photo_5776222588236403143_y.jpg',
    description: 'تأطير سينمائي مع تدرج لوني أزرق وبرتقالي (Teal & Orange) شهير وجذاب.',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 'p17',
    title: 'تصميم صورة مصغرة تسويقية ونمو الأعمال',
    category: 'thumbnail',
    categoryLabel: 'تصميم صور مصغرة',
    image: '/photos/photo_5776222588236403144_y.jpg',
    description: 'تصميم منظم ومقنع يركز على النتائج والأرقام والأرباح لجذب رواد الأعمال.',
    software: ['Photoshop'],
  },
  {
    id: 'p18',
    title: 'تصميم ثمبنيل درامي تشويقي للقصص الغامضة',
    category: 'thumbnail',
    categoryLabel: 'تصميم صور مصغرة',
    image: '/photos/photo_5776222588236403145_y.jpg',
    description: 'توزيع عناصر غامضة تشعل فضول المشاهد للدخول والنقر على الفيديو فوراً.',
    software: ['Photoshop'],
  },
  {
    id: 'p19',
    title: 'تصميم صورة مصغرة لمحتوى التنمية وتطوير الذات',
    category: 'thumbnail',
    categoryLabel: 'تصميم صور مصغرة',
    image: '/photos/photo_5776222588236403146_y.jpg',
    description: 'ألوان متناسقة ومريحة للعين مع خطوط واضحة ورسائل مباشرة.',
    software: ['Photoshop'],
  },
  {
    id: 'p20',
    title: 'مشروع إخراج ومونتاج بصري - قناة Rooyai',
    category: 'brand',
    categoryLabel: 'مشاريع القنوات',
    image: '/photos/photo_5776382129091580286_y.jpg',
    videoUrl: 'https://www.youtube.com/@Rooyai',
    description: 'أحد أعمال المونتاج المتميزة مع قناة رؤياي مع مؤثرات بصرية وتعديل صوتي سينمائي.',
    software: ['DaVinci Resolve', 'Premiere Pro'],
    views: '75K',
  },
  {
    id: 'p21',
    title: 'تصميم بوستر ومصغرة لمشروع إبداعي شامل',
    category: 'thumbnail',
    categoryLabel: 'تصميم صور مصغرة',
    image: '/photos/photo_5776382129091580288_y.jpg',
    description: 'إخراج بصري متكامل من إضاءة ونصوص وتأثيرات تناسب جميع المقاسات الرقمية.',
    software: ['Photoshop', 'After Effects'],
    isCreativityShowcase: true,
  },
];

export const VIDEO_PROJECTS = PORTFOLIO_PROJECTS.filter((p) => !!p.videoUrl);
export const DESIGN_PROJECTS = PORTFOLIO_PROJECTS.filter((p) => !p.videoUrl || p.category === 'thumbnail');
export const DISHA_CREATIVITY_PROJECTS = PORTFOLIO_PROJECTS.filter((p) => p.isCreativityShowcase);
