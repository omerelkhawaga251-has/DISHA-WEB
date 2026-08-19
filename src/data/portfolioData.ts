export interface ProjectItem {
  id: string;
  title: string;
  category: 'post-design' | 'thumbnail' | 'video' | 'short' | 'promo' | 'brand';
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

export interface SoftwareTool {
  name: string;
  category: string;
  description: string;
  icon: string;
  iconImg: string;
  color: string;
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
    { number: '+300', label: 'أكثر من 300 فيديو تم تحريره', labelEn: 'Videos Edited' },
    { number: '+15K', label: '15 ألف مشاهدة للمشاريع', labelEn: 'Total Views' },
    { number: '100%', label: 'التزام بالمواعيد والجودة', labelEn: 'Client Satisfaction' },
    { number: '+2', label: 'سنوات خبرة متخصصة', labelEn: 'Years Experience' },
  ],
};

export const SOFTWARE_TOOLS: SoftwareTool[] = [
  {
    name: 'DaVinci Resolve',
    category: 'Color Grading & Advanced Editing',
    description: 'تعديل الألوان السينمائي والماسترينج الاحترافي',
    icon: 'Film',
    iconImg: '/apps/DaVinci_Resolve_Studio.png',
    color: 'from-amber-500 to-rose-500',
  },
  {
    name: 'Adobe Premiere Pro',
    category: 'Main Video Editing',
    description: 'المونتاج الشامل، رتم القصة، والتقطيع السينمائي',
    icon: 'Video',
    iconImg: '/apps/Adobe_Premiere_Pro_CC_icon.svg.webp',
    color: 'from-purple-600 to-indigo-600',
  },
  {
    name: 'Adobe After Effects',
    category: 'VFX & Motion Graphics',
    description: 'المؤثرات البصرية والأنيميشن وتحريك النصوص والرسومات',
    icon: 'Sparkles',
    iconImg: '/apps/Adobe_After_Effects_CC_icon.svg.webp',
    color: 'from-blue-600 to-violet-600',
  },
  {
    name: 'Adobe Photoshop',
    category: 'Thumbnail & Poster Design',
    description: 'تصميم صور مصغرة (Thumbnails) وبوسترات إعلانية ذات معدل نقر مرتفع (CTR)',
    icon: 'Image',
    iconImg: '/apps/Photoshop_CC_icon.png',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'CapCut Pro',
    category: 'Short-Form Content',
    description: 'مونتاج سريع وسلس لفيديوهات تيك توك، ريلز، وشورتس',
    icon: 'Scissors',
    iconImg: '/apps/capsutt......png',
    color: 'from-slate-700 to-slate-900',
  },
  {
    name: 'AI Creative Tools',
    category: 'Workflow Acceleration',
    description: 'أدوات الذكاء الاصطناعي لتسريع الإنتاج وتوليد الأفكار ومعالجة الصوت',
    icon: 'Cpu',
    iconImg: '/apps/ai  creative......png',
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

// ──────────────────────────────────────────────────────────────
// 1. VIDEOS & REELS (10 مقاطع فيديو كاملة وشورتس وريلز حقيقية)
// ──────────────────────────────────────────────────────────────
export const VIDEOS_AND_REELS: ProjectItem[] = [
  {
    id: 'v1',
    title: 'فيديو يوتيوب كامل سينمائي عالي الجودة',
    category: 'video',
    categoryLabel: 'فيديو يوتيوب كامل',
    image: 'https://img.youtube.com/vi/wESXVrzeCmY/hqdefault.jpg',
    videoUrl: 'https://youtu.be/wESXVrzeCmY?si=_ghamX55Fl3_Egmh',
    description: 'إنتاج ومونتاج كامل لمقطع يوتيوب طويل يشمل السرد القصصي، تصحيح الألوان السينمائي، وهندسة الصوت لزيادة وقت المشاهدة والـ Retention Rate.',
    software: ['DaVinci Resolve', 'Premiere Pro', 'After Effects'],
    isCreativityShowcase: true,
  },
  {
    id: 'v2',
    title: 'مونتاج شورتس سينمائي سريع (YouTube Short)',
    category: 'short',
    categoryLabel: 'شورتس / ريلز',
    image: 'https://img.youtube.com/vi/uiNZu1qbNxE/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/shorts/uiNZu1qbNxE',
    description: 'مونتاج سريع ومتقن لمقطع شورتس يعتمد على سرعة التقطيع والتزامن مع المؤثرات الصوتية لجذب انتباه المشاهد من الثانية الأولى.',
    software: ['Premiere Pro', 'After Effects'],
    isCreativityShowcase: true,
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
    isCreativityShowcase: true,
  },
  {
    id: 'v4',
    title: 'يوتيوب شورتس بهندسة صوتية ومؤثرات SFX محيطية',
    category: 'short',
    categoryLabel: 'شورتس / ريلز',
    image: 'https://img.youtube.com/vi/5nlZDjLUjiE/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/shorts/5nlZDjLUjiE',
    description: 'مونتاج يركز على المؤثرات الصوتية المتقنة والانتقالات السلسة لضمان استمرار المشاهد حتى نهاية المقطع.',
    software: ['Premiere Pro', 'Audition'],
  },
  {
    id: 'v5',
    title: 'شورتس يوتيوب سريع مع تحريك نصوص وجرافيكس',
    category: 'short',
    categoryLabel: 'شورتس / ريلز',
    image: 'https://img.youtube.com/vi/g2dyQSGcsGE/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/shorts/g2dyQSGcsGE',
    description: 'مونتاج شورتس بمؤثرات جرافيكس حركية وإيقاع تصاعدي متناسق مع النبرة الصوتية.',
    software: ['CapCut Pro', 'Premiere Pro'],
  },
  {
    id: 'v6',
    title: 'ريلز إنستغرام إبداعي للمؤثرين والحسابات الكبرى',
    category: 'promo',
    categoryLabel: 'إنستغرام ريلز',
    image: '/insta/shirt.png',
    videoUrl: 'https://www.instagram.com/reel/Db6ITWuNquC/?hl=ar',
    description: 'ريل عصري جذاب بأسلوب تحرير ملائم لخوارزميات إنستغرام لزيادة التفاعل والانتشار والمشاركات.',
    software: ['Premiere Pro', 'After Effects'],
  },
  {
    id: 'v7',
    title: 'ريلز إنستغرام ترويجي عالي الاحترافية',
    category: 'promo',
    categoryLabel: 'إنستغرام ريلز',
    image: '/insta/pixel.png',
    videoUrl: 'https://www.instagram.com/reel/DFG9aZHoz9u/?hl=ar',
    description: 'مونتاج إعلاني يبرز الهوية البصرية ورسالة المحتوى بطريقة احترافية تشجع على اتخاذ إجراء مباشر.',
    software: ['After Effects', 'Premiere Pro'],
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
  },
  {
    id: 'v10',
    title: 'أرشيف مشاريع المونتاج والتصاميم السحابية (Google Drive)',
    category: 'brand',
    categoryLabel: 'مشاريع Drive',
    image: '/photos/photo_5776382129091580286_y.jpg',
    videoUrl: 'https://drive.google.com/drive/folders/1xexSP-NX2pkU_s1eVv50ZrDDVw59HWLy?usp=sharing',
    description: 'مجلد سحابي متكامل يضم نماذج متنوعة من الفيديوهات والمشاريع الكاملة بجودة أصلية Raw & Rendered.',
    software: ['Premiere Pro', 'After Effects', 'DaVinci'],
  },
];

// ──────────────────────────────────────────────────────────────
// 2. POST DESIGNS (10 تصاميم بوسترات وحملات إعلانية)
// ──────────────────────────────────────────────────────────────
export const POST_DESIGNS: ProjectItem[] = [
  {
    id: 'p1',
    title: 'بوستر إعلاني لحملة خصم 40% - منصة Rooyai',
    category: 'post-design',
    categoryLabel: 'Post Design // إعلاني',
    image: '/photos/photo_5776222588236403138_y.jpg',
    description: 'تصميم بوستر إعلاني تسويقي متكامل لحملة تخفيضات الباقة السنوية لمنصة رؤياي وأتمتة n8n مع تجسيد رقم 40% الزجاجي المتوهج ثلاثي الأبعاد وإبراز السعر والمزايا بوضوح.',
    software: ['Photoshop', 'Illustrator'],
    isCreativityShowcase: true,
  },
  {
    id: 'p2',
    title: 'بوستر إعلاني إبداعي - حملة أتمتة n8n (شخصية Tom)',
    category: 'post-design',
    categoryLabel: 'Post Design // إبداعي',
    image: '/photos/photo_5776222588236403139_y.jpg',
    description: 'تصميم إعلاني فكاهي ومبتكر يدمج شخصية الكرتون الشهيرة Tom وهو يفكر في الأتمتة والمهام الذكية مع تفاصيل العرض السنوي لخصم 40% لمنصة Rooyai.',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 'p3',
    title: 'بوستر إعلاني تسويقي - حملة أتمتة n8n (شخصية الباندا)',
    category: 'post-design',
    categoryLabel: 'Post Design // تسويقي',
    image: '/photos/photo_5776222588236403140_y.jpg',
    description: 'تصميم بوستر إعلاني تسويقي يدمج شخصية الباندا المحارب مع مؤثرات برق وطاقة زرقاء نيون لإبراز قوة أتمتة الأعمال وسهولة إدارة 2200+ Workflow.',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 'p4',
    title: 'بوستر إعلاني لحملة اشتغل أقل وانجز أكثر - شخصية Boo',
    category: 'post-design',
    categoryLabel: 'Post Design // إعلاني',
    image: '/photos/photo_5776222588236403145_y.jpg',
    description: 'تصميم إعلاني تسويقي مع شخصية الطفلة (Boo) بألوان وردية جذابة لعرض خصم 40% وتوفير الوقت عبر أتمتة الأعمال وسيرفرات سريعة ومستقرة.',
    software: ['Photoshop'],
  },
  {
    id: 'p5',
    title: 'بوستر إعلاني - حقيبة موديلات الذكاء الاصطناعي ROOYALLM',
    category: 'post-design',
    categoryLabel: 'Post Design // AI Promo',
    image: '/photos/photo_5776222588236403146_y.jpg',
    description: 'تصميم إعلاني ثلاثي الأبعاد لفكرة حقيبة تسوق تجمع كافة نماذج الـ AI العالمية في منصة واحدة سهلة وسريعة مع إبراز طرق الدفع المرنة والأمان.',
    software: ['Photoshop'],
  },
  {
    id: 'p6',
    title: 'بوستر إعلاني لحملة وفر فلوسك - اشتراك n8n الاقتصادي',
    category: 'post-design',
    categoryLabel: 'Post Design // تسويقي',
    image: '/photos/photo_5776382129091580288_y.jpg',
    description: 'تصميم بوستر إعلاني يركز على التوفير المالي لحزمة n8n بـ 200 جنيه مع إخراج احترافي لحزمة النقود المصرية وعناصر الجذب التسويقي للعملاء.',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 'p7',
    title: 'بوستر إعلاني - عرض سنوي n8n أوفر كتير سنة كلها شغل',
    category: 'post-design',
    categoryLabel: 'Post Design // إعلاني',
    image: '/photos/photo_5776222588236403122_y.jpg',
    description: 'بوستر ترويجي إعلاني متكامل لعرض n8n السنوي بخصم 40% مع إبراز باقة 1199 جنيه وميزات السيرفرات والذكاء الاصطناعي.',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 'p8',
    title: 'بوستر إعلاني مبتكر - احجزني عشان غيرك عايزني',
    category: 'post-design',
    categoryLabel: 'Post Design // إبداعي',
    image: '/photos/photo_5776222588236403126_y.jpg',
    description: 'تصميم سوشيال ميديا وبوستر إعلاني إبداعي يدمج الباندا في ميكروباص العمرانية مع خصم 40% لجذب الانتباه وزيادة التفاعل.',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 'p9',
    title: 'بوستر سوشيال ميديا - سرقت انتباهك بثانية واحدة',
    category: 'post-design',
    categoryLabel: 'Post Design // Social Media',
    image: '/photos/photo_5776222588236403134_y.jpg',
    description: 'تصميم بوستر خاطف للأنظار يعتمد على السيكولوجيا البصرية وإثارة الفضول للتعريف بخدمات الاستضافة والذكاء الاصطناعي.',
    software: ['Photoshop'],
  },
  {
    id: 'p10',
    title: 'تصميم بوستر موبايل - بديل هوستنجر الأقوى Rooyai',
    category: 'post-design',
    categoryLabel: 'Post Design // Mobile Story',
    image: '/photos/photo_5776222588236403123_y.jpg',
    description: 'تصميم ستوري وبوستر رقمي رأسي لعرض واجهة منصة Rooyai وإمكانيات تشغيل تطبيقات ونماذج الذكاء الاصطناعي بدون قيود.',
    software: ['Photoshop'],
  },
];

// ──────────────────────────────────────────────────────────────
// 3. YOUTUBE THUMBNAILS (7 صور مصغرة لليوتيوب)
// ──────────────────────────────────────────────────────────────
export const YOUTUBE_THUMBNAILS: ProjectItem[] = [
  {
    id: 't1',
    title: 'تصميم ثمبنيل يوتيوب ترفيهي - موتنا من كتر الضحك',
    category: 'thumbnail',
    categoryLabel: 'YouTube Thumbnail',
    image: '/photos/photo_5776222588236403137_y.jpg',
    description: 'تصميم صورة مصغرة لفيديو رياكشن ومحتوى ترفيهي مع إبراز تعبيرات الضحك والوجوه، وتأثيرات توهج نيون نارية، وإيموجي تفاعل لزيادة معدل النقر CTR.',
    software: ['Photoshop', 'Lightroom'],
    isCreativityShowcase: true,
  },
  {
    id: 't2',
    title: 'تصميم ثمبنيل يوتيوب درامي / ترفيهي - السيكو سيك!',
    category: 'thumbnail',
    categoryLabel: 'YouTube Thumbnail',
    image: '/photos/photo_5776222588236403136_y.jpg',
    description: 'تصميم ثمبنيل يوتيوب غامض ومشوق يدمج عناصر الصدمة والنيران والدولارات المتطايرة مع تيبوجرافي نيون سائل يجذب النقرات فوراً.',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 't3',
    title: 'تصميم ثمبنيل يوتيوب تقني - تحليل Crypto عبر n8n',
    category: 'thumbnail',
    categoryLabel: 'YouTube Thumbnail',
    image: '/photos/photo_5776222588236403141_y.jpg',
    description: 'تصميم مصغرة لفيديو شرح ربط n8n بالذكاء الاصطناعي لتحليل الكريبتو وشارت بينانس مع روبوت متوهج ومؤشرات صعود العملات الرقمية (BTC/USDT).',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 't4',
    title: 'تصميم ثمبنيل يوتيوب - إطلاق ROOYALLM API',
    category: 'thumbnail',
    categoryLabel: 'YouTube Thumbnail',
    image: '/photos/photo_5776222588236403142_y.jpg',
    description: 'تصميم صورة مصغرة لمقارنة بدائل الذكاء الاصطناعي مع شخصية روبوت بالزي التراثي والأهرامات وإبراز الدفع بالجنيه المصري بديلاً عن OpenAI و OpenRouter.',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 't5',
    title: 'تصميم ثمبنيل يوتيوب - جميع موديلات AI في مكان واحد',
    category: 'thumbnail',
    categoryLabel: 'YouTube Thumbnail',
    image: '/photos/photo_5776222588236403143_y.jpg',
    description: 'تصميم مصغرة يجمع أشهر نماذج الذكاء الاصطناعي (ChatGPT, Claude, Gemini, DeepSeek, Llama) مع لوحة تحكم وإضاءات ذهبية متوهجة ونقاط API موحدة.',
    software: ['Photoshop'],
    isCreativityShowcase: true,
  },
  {
    id: 't6',
    title: 'تصميم ثمبنيل يوتيوب - دمج Binance مع n8n',
    category: 'thumbnail',
    categoryLabel: 'YouTube Thumbnail',
    image: '/photos/photo_5776222588236403144_y.jpg',
    description: 'تصميم مصغرة يجمع بين عالم التداول والذكاء الاصطناعي مع شارت شموع يابانية وشبكة تدفق المهام التلقائية (Workflows) وتحليل الفرص الاستثمارية.',
    software: ['Photoshop'],
  },
  {
    id: 't7',
    title: 'تصميم ثمبنيل يوتيوب - أرخص VPS في العالم يبدأ من 12 جنيه',
    category: 'thumbnail',
    categoryLabel: 'YouTube Thumbnail',
    image: '/photos/photo_5776222588236403124_y.jpg',
    description: 'تصميم ثمبنيل يوتيوب تسويقي يبرز السعر الاقتصادي وصندوق السيرفر المتوهج مع الصواعق والنقود الطائرة لجذب المهتمين بالاستضافة.',
    software: ['Photoshop'],
  },
];

// ──────────────────────────────────────────────────────────────
// 4. DISHA CREATIVITY SHOWCASE (مختارات إبداعية مميزة تجمع الفيديوهات والتصاميم)
// ──────────────────────────────────────────────────────────────
export const DISHA_CREATIVITY_PROJECTS: ProjectItem[] = [
  // 1. Tom Poster (Normal)
  POST_DESIGNS[1],
  // 2. 40% Rooyai Poster (Normal)
  POST_DESIGNS[0],
  // 3. Featured Big YouTube Thumbnail (موتنا من كتر الضحك - 2 cols on right)
  YOUTUBE_THUMBNAILS[0],
  // 4. Featured Big AI API Thumbnail (وداعا OpenAI - 2 cols on left)
  YOUTUBE_THUMBNAILS[3],
  // 5. Crypto n8n Thumbnail (Normal)
  YOUTUBE_THUMBNAILS[2],
  // 6. Panda Poster (Normal)
  POST_DESIGNS[2],
];

// Compatibility exports
export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  ...VIDEOS_AND_REELS,
  ...POST_DESIGNS,
  ...YOUTUBE_THUMBNAILS,
];
export const VIDEO_PROJECTS = VIDEOS_AND_REELS;
export const DESIGN_PROJECTS = [...POST_DESIGNS, ...YOUTUBE_THUMBNAILS];
