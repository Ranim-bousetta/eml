export interface BlogPost {
  id: string;
  type: "article" | "video" | "slides";
  date: string;
  dateAr: string;
  readTime: number; // in minutes
  category: string;
  categoryAr: string;
  title: string;
  titleAr: string;
  excerpt: string;
  excerptAr: string;
  content: string;
  contentAr: string;
  coverImage: string;
  videoUrl?: string;
  pdfUrl?: string;
  author: string;
  authorAr: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "information-disorder-swana",
    type: "article",
    date: "June 20, 2026",
    dateAr: "20 يونيو 2026",
    readTime: 6,
    category: "Research",
    categoryAr: "أبحاث",
    title: "Mapping Information Disorder in North Africa",
    titleAr: "رسم خرائط اضطراب المعلومات في شمال إفريقيا",
    excerpt: "An academic exploration into the trends, algorithms, and local dialects driving disinformation networks in the region.",
    excerptAr: "دراسة أكاديمية حول الاتجاهات والخوارزميات واللهجات المحلية التي تقود شبكات التضليل الإعلامي في المنطقة.",
    author: "El Media Lab Research",
    authorAr: "قسم أبحاث إل ميديا لاب",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    content: `
### Abstract and Context

This paper reviews the structural characteristics of news distribution and consumption in North Africa, focusing on the Tunis and Cairo metropolitan areas. By auditing public pages and algorithmic recommendations on social platforms, our research team identified a high concentration of unchecked narratives delivered primarily in local Tunisian and Egyptian dialects.

### Core Findings

1. **Dialect as a Shield**: Disinformation networks increasingly deploy local dialects rather than Modern Standard Arabic (MSA). Standard fact-checking tools struggle to parse these dialects, leaving a verification gap.
2. **Echo Chamber Algorithms**: Algorithms on major social networks reinforce regional narratives by localizing recommendations. This creates highly fragmented digital neighborhoods where cross-verification is rarely practiced.
3. **Youth Engagement with Civic News**: Emerging media consumers (aged 16-24) indicate high skepticism towards state-run media, yet display vulnerability to hyper-partisan influencers.

### Recommendations for Media Literacy Bootcamps

To address these vulnerabilities, media educators should focus on localized context-aware verification strategies rather than generic LTR-centric checklists. Developing community fact-checking wikis in local dialects holds the potential to build systemic resilience.
    `,
    contentAr: `
### ملخص وسياق الدراسة

تستعرض هذه الورقة الخصائص الهيكلية لتوزيع الأخبار واستهلاكها في شمال إفريقيا، مع التركيز على تونس والقاهرة. من خلال تدقيق الصفحات العامة والتوصيات الخوارزمية على منصات التواصل الاجتماعي، حدد فريق البحث لدينا تركيزاً عالياً للروايات غير المؤكدة المقدمة بشكل أساسي باللهجتين التونسية والمصرية.

### النتائج الرئيسية

1. **اللهجة كدرع**: تستخدم شبكات التضليل اللهجات المحلية بشكل متزايد بدلاً من اللغة العربية الفصحى. تجد أدوات التحقق التقليدية صعوبة في تحليل هذه اللهجات، مما يخلق فجوة في التحقق.
2. **خوارزميات غرف الصدى**: تعزز الخوارزميات على الشبكات الاجتماعية الكبرى الروايات الإقليمية من خلال توطين التوصيات. هذا يخلق فضاءات رقمية مجزأة للغاية حيث نادراً ما يتم التحقق المتبادل.
3. **مشاركة الشباب مع الأخبار المدنية**: يشير مستهلكو وسائل الإعلام الناشئون (الذين تتراوح أعمارهم بين 16 و24 عاماً) إلى شكوك عالية تجاه وسائل الإعلام الحكومية، ومع ذلك يظهرون ضعفاً أمام المؤثرين الحزبيين.

### توصيات لمعسكرات التربية الإعلامية

لمعالجة هذه المشكلات، يجب على معلمي وسائل الإعلام التركيز على استراتيجيات التحقق المحلية القائمة على السياق بدلاً من القوائم العامة. إن تطوير موسوعات تحقق مجتمعية باللهجات المحلية يحمل القدرة على بناء مرونة مستدامة.
    `
  },
  {
    id: "digital-rights-masterclass-video",
    type: "video",
    date: "June 10, 2026",
    dateAr: "10 يونيو 2026",
    readTime: 4,
    category: "Masterclass",
    categoryAr: "درس تعليمي",
    title: "Video: Digital Safety & Privacy for SWANA Journalists",
    titleAr: "فيديو: السلامة الرقمية والخصوصية للصحفيين في منطقة سوانا",
    excerpt: "Watch the highlights and key tutorials from our digital safety workshop covering source protection and encrypted comms.",
    excerptAr: "شاهد أبرز اللقطات والدروس الأساسية من ورشة عمل السلامة الرقمية التي تغطي حماية المصادر والاتصالات المشفرة.",
    author: "Houssem Eddine",
    authorAr: "حسام الدين",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hand-typing-on-a-glowing-computer-keyboard-in-the-dark-42417-large.mp4",
    content: `
This video masterclass covers the practical applications of digital rights, device encryption, and source protection guidelines for journalists and researchers operating in the SWANA region.

### Core Modules Addressed:

- **Source Anonymity**: Best practices for secure digital dropboxes and establishing encrypted communication channels.
- **Device Security**: Hardening laptops and mobile devices against remote surveillance and physical inspections at border crossings.
- **Data Privacy**: Navigating localized data residency rules and understanding user privacy rights under local SWANA frameworks.

You can view the full video walkthrough in the embedded player above.
    `,
    contentAr: `
يغطي هذا الفيديو التطبيقات العملية للحقوق الرقمية، وتشفير الأجهزة، وإرشادات حماية المصادر للصحفيين والباحثين العاملين في منطقة سوانا.

### الوحدات الأساسية التي تم تناولها:

- **سرية المصادر**: أفضل الممارسات لصناديق الإيداع الرقمية الآمنة وإنشاء قنوات اتصال مشفرة.
- **أمن الأجهزة**: حماية الحواسيب المحمولة والأجهزة المحمولة ضد المراقبة عن بعد وعمليات التفتيش المادي عند المعابر الحدودية.
- **خصوصية البيانات**: فهم قوانين خصوصية البيانات المحلية وحقوق المستخدم في منطقة جنوب غرب آسيا وشمال إفريقيا.

يمكنك مشاهدة الفيديو التعليمي الكامل في المشغل المدمج أعلاه.
    `
  },
  {
    id: "youth-civic-participation-slides",
    type: "slides",
    date: "May 28, 2026",
    dateAr: "28 مايو 2026",
    readTime: 5,
    category: "Presentations",
    categoryAr: "عروض تقديمية",
    title: "Presentation: Fostering Digital Citizenship in Tunisia",
    titleAr: "عرض تقديمي: تعزيز المواطنة الرقمية في تونس",
    excerpt: "Download and view the slides presented at the SWANA Media Innovation Forum in Beirut detailing youth-led initiatives.",
    excerptAr: "قم بتحميل وعرض الشرائح المقدمة في منتدى ابتكار الإعلام في بيروت والتي تفصل المبادرات التي يقودها الشباب.",
    author: "El Media Lab Advocacy",
    authorAr: "قسم كسب التأييد بإل ميديا لاب",
    coverImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    content: `
These slides highlight El Media Lab's pitch and presentation at the Regional Media Innovation Conference. It details the strategic deployment of interactive tech tools (such as our digital rights guide) to encourage conscious digital citizenship among young voters and civic content creators.

### Key Focus Areas:

1. **Strategic Partnerships**: Collaborating with Amideast and the American Corner to leverage physical hubs for digital training.
2. **Technological Prototypes**: Designing Arabic fact-checking toolkits and regional content filter plugins.
3. **Advocacy Campaigns**: Aligning with regional digital rights networks to coordinate policies against online harassment and hate speech.

Click the download link below to view or save the complete slide deck PDF document.
    `,
    contentAr: `
تسلط هذه الشرائح الضوء على عرض وأطروحة إل ميديا لاب في المؤتمر الإقليمي للابتكار الإعلامي. وهي تفصل النشر الاستراتيجي للأدوات التفاعلية (مثل دليل الحقوق الرقمية) لتشجيع المواطنة الرقمية الواعية بين الناخبين الشباب وصناع المحتوى المدني.

### مجالات التركيز الرئيسية:

1. **الشراكات الاستراتيجية**: التعاون مع أمديست والركن الأمريكي للاستفادة من المراكز الفعلية للتدريب الرقمي.
2. **النماذج التكنولوجية**: تصميم أدوات التحقق باللغة العربية وإضافات تصفية المحتوى الإقليمية.
3. **حملات كسب التأييد**: التنسيق مع شبكات الحقوق الرقمية الإقليمية لتنسيق السياسات ضد التحرش عبر الإنترنت وخطاب الكراهية.

انقر على رابط التحميل أدناه لعرض أو حفظ ملف العرض التقديمي الكامل بصيغة PDF.
    `
  }
];
