import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Camera, Users, Globe, BookOpen } from "lucide-react";
import PastProjectDetailsModal from "@/components/PastProjectDetailsModal";

// Import cover images
import bgCover from "@/assets/bridging-gaps/1.JPG";
import swCover from "@/assets/spring-workshop/1.jpg";
import antiXenophobicCover from "@/assets/anti-xenophobic/1.jpg";

type CurrentProject = {
  title: string;
  description: string;
  tag: string;
  status: string;
  icon: "book" | "globe" | "users";
};

type PastProject = {
  id: string;
  title: string;
  category: string;
  color: string;
  year: string;
  location: string;
  period?: string;
  collaborators?: string;
  mediaNote?: string;
  description: string;
  highlights: string[];
  coverImage?: string;
};

const Projects = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const currentProjects = t("projectsPage.currentItems", { returnObjects: true }) as CurrentProject[];
  
  const pastProjects: PastProject[] = isArabic
    ? [
        {
          id: "bridging-gaps",
          title: "سد الفجوات في الإعلام العربي",
          category: "مائدة مستديرة",
          color: "bg-primary",
          year: "2023",
          period: "أبريل 2023",
          location: "بيروت، لبنان",
          collaborators: "الجامعة الأمريكية في بيروت / الجامعة اللبنانية الأمريكية",
          description:
            "جمعت الجلسة 25 طالباً وطالبة من الجامعة الأمريكية في بيروت والجامعة اللبنانية الأمريكية بنخبة من الصحفيين في وسائل إعلام إقليمية ودولية بارزة، من بينها وكالة Associated Press، وقناة «الجزيرة»، وصحيفة L’Orient-Le Jour\n\nووفرت هذه المائدة المستديرة مساحة استثنائية لحوار مفتوح بين صنّاع الخبر وجمهوره. وشهد اللقاء نقاشاً مستفيضاً حول التحولات المتسارعة في المشهد الإعلامي بمنطقة جنوب غرب آسيا وشمال إفريقيا (SWANA)، مع التركيز على الفجوة الجيلية المتنامية في أنماط استهلاك الأخبار، وطرق تفسيرها، ومستويات الثقة بها.\n\nوشهدت الجلسة تفاعلاً مباشراً من الطلاب مع مفاهيم إعلامية محورية، مثل: تحديد الأولويات الإعلامية ، والتأطير الصحفي ، والتفكير النقدي للإعلام. وفي المقابل، أتاح اللقاء للصحفيين التعرّف عن قرب على العادات الرقمية لـ جيل الزيد (Gen Z)، القائمة على التفاعل الأولي مع منصات التواصل الاجتماعي الحديثة.\n\nكما تطرّق النقاش إلى التداعيات الأوسع لظاهرة الاضطراب المعلوماتي ، وأثرها المباشر على الحريات المدنية والسياسية في المنطقة. واختُتمت الجلسة برؤى مشتركة وتوصيات عملية تهدف إلى ردم الفجوة بين غرف الأخبار والجمهور مستقبلاً.",
          highlights: [
            "نقاش تفاعلي حول تحديد الأجندة والتأطير الإعلامي والثقافة الإعلامية النقدية",
            "حوار مباشر بين المشاركين من جيل Z والعاملين في غرف الأخبار",
            "توصيات عملية لسد الفجوة بين غرف الأخبار وجمهورها في منطقة غرب آسيا وشمال أفريقيا (SWANA)",
          ],
          mediaNote: "يتضمن المشروع صورا ومواد تفاعلية من جلسات النقاش.",
          coverImage: bgCover,
        },
        {
          id: "spring-workshop",
          title: "ورشة الربيع الإعلامية",
          category: "تدريب عملي",
          color: "bg-secondary",
          year: "2023",
          period: "7-9 يوليو 2023",
          location: "تونس، تونس",
          collaborators: "بالشراكة مع شبكة (Solutions Journalism Network)",
          description:
            "عُقدت ورشة الربيع الإعلامية في الفترة من 7 إلى 9 يوليو 2023، وجمعت 17 صحفيًا وصانع محتوى من الصحفيين الناشئين في تونس في تجربة تدريبية مكثفة وتطبيقية.\n\nافتُتحت الورشة بدراسة الأثر الميداني للمعلومات المضللة على المشاركة المدنية في تونس؛ حيث اتُّخذ إقبال سكان المناطق الريفية والمهمشة على تلقي لقاح «كوفيد-19» حالة دراسية، لبحث كيفية أثر ضعف الوصول إلى إعلام محلي موثوق على سلوك الجمهور ومستويات ثقته.\n\nتلقى المشاركون تدريباً على المهارات الأساسية لـ الصحافة الاستقصائية، شمل أدوات جمع البيانات وتقنيات التحقق من المصادر، إضافة إلى استخدام أدوات المصادر المفتوحة (OSINT)، مدعومة بمقدمة في صحافة الحلول بالتعاون مع «شبكة صحافة الحلول (Solutions Journalism Network).\n\nواختُتم البرنامج بـ جلسة عرض المشاريع حيث حدد كل مشارك قضية محلية ملحة، وطوّر مقترحاً لاستكمال تحقيق صحفي مكتوب أو متعدد الوسائط.",
          highlights: [
            "تعلّم قائم على دراسة حالة حول التضليل والمشاركة المدنية في تونس",
            "تدريب عملي على تقنيات جمع المعلومات والتحقق منها",
            "جلسة عرض تفاعلية لتحقيقات صحفية مطبوعة ومتعددة الوسائط",
          ],
          mediaNote: "يتضمن المشروع فيديوهات قصيرة وعروضا تقديمية لمقترحات المشاركين.",
          coverImage: swCover,
        },
        {
          id: "anti-xenophobic",
          title: "موجز عمل حول مكافحة خطاب الكراهية ضد الأجانب",
          category: "البحث والمناصرة",
          color: "bg-aqua",
          year: "2024",
          period: "2024",
          location: "تونس ولبنان",
          collaborators: "باعتماد من مبادرة الشراكة مع الشرق الأوسط (MEPI)",
          description:
            "استجابةً لتصاعد أعمال العنف ضد المهاجرين من دول إفريقيا جنوب الصحراء في تونس، أعددنا ورقة موقف لعام 2024 حول سبل مكافحة خطاب الكراهية ورهاب الأجانب\n\nودمج هذا المشروع بين البحث الميداني في آليات التضليل الإعلامي وخطاب الكراهية الرقمي، وإجراء مقابلات وتوثيق شهادات مع خبراء وأفراد من الفئات المتضررة. وهدف المشروع إلى تقصّي كيفية تحوّل السرديات الرقمية إلى أضرار مادية على أرض الواقع، من خلال دراستي حالة: الأولى تناولت تصاعد خطاب الكراهية ضد مهاجري جنوب الصحراء في تونس، والثانية رصدت أنماط الكراهية الموجهة عبر الإنترنت ضد العاملات المنزليات المهاجرات في لبنان.\n\nويرصد التقارير الاتجاهات الرئيسة لخطاب الكراهية الموجه ضد الأجانب عبر المنصات الرقمية، محاولاً تحليل تداعياته المجتمعية، وطرح استراتيجيات قائمة على المشاركة المجتمعية لمواجهة السرديات الضارة وبناء بيئة رقمية أكثر أماناً وشمولاً.\n\nوقد حظي هذا العمل بتكريم من «مبادرة الشراكة الأمريكية الشرق أوسطية» (MEPI)، التي منحت «إل ميديا لاب «جائزة MEPI للخدمة المجتمعية بالمركز الأول في حزيران/يونيو 2024.",
          highlights: [
            "رصد الأنماط الرئيسية لخطاب الكراهية ضد الأجانب على الإنترنت",
            "دمج شهادات وآراء خبراء من الفئات المتضررة",
            "الفوز بجائزة MEPI للخدمة المجتمعية بالمركز الأول (يونيو 2024)",
          ],
          mediaNote: "يتوفر للمشروع تقرير كامل، وملخصات مرئية، ومواد توعوية رقمية.",
        },
      ]
    : [
        {
          id: "bridging-gaps",
          title: "Bridging Gaps in Arab Media",
          category: "Roundtable",
          color: "bg-primary",
          year: "2023",
          period: "April 2023",
          location: "Beirut, Lebanon",
          collaborators: "AUB / LAU / AP / Al Jazeera",
          description:
            "We brought together 25 students from the American University of Beirut and the Lebanese American University with journalists from leading international and regional outlets, including the Associated Press, Al Jazeera, and L’Orient-Le Jour.\n\nThis roundtable created a rare space for open exchange between those producing the news and those consuming it. Together, participants explored how the MENA media landscape is shifting, particularly the growing generational divide in how news is accessed, interpreted, and trusted.\n\nStudents engaged directly with key concepts such as agenda-setting, framing, and critical media literacy. At the same time, journalists gained first-hand insight into Gen Z’s digital-first habits and their reliance on emerging social platforms.\n\nThe discussion also addressed the broader consequences of information disorder, highlighting its ripple effects on civic and political freedoms in the region. The session concluded with a set of shared reflections and practical recommendations for bridging these gaps moving forward.",
          highlights: [
            "Hands-on discussion on agenda-setting, framing, and critical media literacy",
            "Direct exchange between Gen Z participants and newsroom professionals",
            "Practical recommendations to bridge newsroom-audience gaps in SWANA",
          ],
          mediaNote: "This project includes event photos and interactive session materials.",
          coverImage: bgCover,
        },
        {
          id: "spring-workshop",
          title: "Media Spring Workshop",
          category: "Hands-on Training",
          color: "bg-secondary",
          year: "2023",
          period: "July 7-9, 2023",
          location: "Tunis, Tunisia",
          collaborators: "Solutions Journalism Network",
          description:
            "Held July 7–9, 2023, the Media Spring workshop brought together 17 early-career Tunisian journalists and storytellers for an intensive, hands-on training experience.\n\nThe workshop began by examining the real-world impact of misinformation on civic engagement in Tunisia. Using COVID-19 vaccine uptake in underserved rural areas as a case study, participants examined how limited access to reliable local media can shape public behavior and trust.\n\nParticipants received training in core investigative reporting skills, including information gathering, verification techniques, and the use of accessible OSINT (Open-Source Intelligence) tools, as well as an introduction to solutions journalism in partnership with the Solutions Journalism Network.\n\nThe program culminated in an interactive pitching session, where each participant identified a pressing local issue and developed a proposal for a print or multimedia investigation.",
          highlights: [
            "Case-study based learning on misinformation and civic engagement in Tunisia",
            "Practical training in information gathering and verification techniques",
            "Interactive pitching session for print and multimedia investigations",
          ],
          mediaNote: "This project includes workshop visuals and participant pitch snapshots.",
          coverImage: swCover,
        },
        {
          id: "anti-xenophobic",
          title: "Anti-Xenophobic Speech Action Brief",
          category: "Research & Advocacy",
          color: "bg-aqua",
          year: "2024",
          period: "2024",
          location: "Tunisia and Lebanon",
          collaborators: "Recognized by MEPI",
          description:
            "In response to the surge in violence against sub-Saharan migrants in Tunisia, we developed a 2024 Anti-Xenophobic Speech Action Brief.\n\nThis project combined research on misinformation and online hate speech with expert interviews and testimonies from affected communities. Our goal was to examine how digital narratives can contribute to real-world harm, using case studies including the rise in anti-sub-Saharan violence in Tunisia and patterns of online hate targeting migrant domestic workers in Lebanon.\n\nThe brief maps key trends in online xenophobic discourse, examines its societal consequences, and outlines community-driven strategies to counter harmful narratives and promote safer, more inclusive digital spaces.\n\nThis work was recognized for its impact by the Middle East Partnership Initiative (MEPI), which awarded El Media Lab the first-place Community Service Award in June 2024.",
          highlights: [
            "Mapped key patterns in online xenophobic discourse",
            "Integrated testimonies and expert insights from affected communities",
            "Awarded MEPI First-Place Community Service Award (June 2024)",
          ],
          mediaNote: "This project includes the full brief, visual summaries, and awareness assets.",
          coverImage: antiXenophobicCover,
        },
      ];

  const [selectedPastProject, setSelectedPastProject] = useState<PastProject | null>(null);
  const projectIcons = {
    book: BookOpen,
    globe: Globe,
    users: Users,
  };

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Current Projects Section - Commented Out
        <section className="py-20">
          <div className="container">
            <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
              {t("projectsPage.titlePrefix")} <span className="text-primary">{t("projectsPage.titleHighlight")}</span>
            </h1>
            <p className="text-muted-foreground font-body max-w-xl mb-12">
              {t("projectsPage.intro")}
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {currentProjects.map((p) => {
                const ProjectIcon = projectIcons[p.icon];
                return (
                  <div key={p.title} className="bg-cream rounded-2xl p-8 border border-border hover:shadow-lg transition-all hover:-translate-y-1">
                    <ProjectIcon className="text-primary mb-4" size={32} />
                    <span className="inline-block bg-wattle/20 text-jungle font-heading text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                      {p.status}
                    </span>
                    <h3 className="font-heading text-xl text-foreground mb-3">{p.title}</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">{p.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        */}

        {/* New Projects Section */}
        <section className="py-16 bg-cream border-t border-border/40">
          <div className="container text-center max-w-2xl">
            <h2 className="font-heading text-3xl text-foreground mb-4">
              {t("projectsPage.newTitlePrefix")} <span className="text-primary">{t("projectsPage.newTitleHighlight")}</span>
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              {t("projectsPage.newIntro")}
            </p>
          </div>
        </section>

        {/* Past Projects Gallery */}
        <section className="py-20 bg-primary/5 border-t border-border/40">
          <div className="container">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              {t("projectsPage.pastTitlePrefix")} <span className="text-secondary">{t("projectsPage.pastTitleHighlight")}</span>{" "}
              {t("projectsPage.pastTitleSuffix")}
            </h2>
            <p className="text-muted-foreground font-body max-w-lg mb-12">
              {t("projectsPage.pastIntro")}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {pastProjects.map((p) => (
                <button
                  key={p.title}
                  type="button"
                  onClick={() => setSelectedPastProject(p)}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3] flex flex-col justify-end text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                >
                  {p.coverImage ? (
                    <img src={p.coverImage} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  ) : (
                    <div className={`absolute inset-0 ${p.color}`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="relative p-6 md:p-8 text-white">
                    <Camera className="mb-2 opacity-80" size={20} />
                    <span className="text-xs uppercase tracking-wider opacity-80 font-heading">{p.category}</span>
                    <h3 className="font-heading text-lg md:text-xl mt-1">{p.title}</h3>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Workshop Testimonials Section */}
        <section id="testimonials" className="py-20 bg-primary/5 border-t border-border/40 scroll-mt-20">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
                {t("projectsPage.testimonialsTitlePrefix")} <span className="text-secondary">{t("projectsPage.testimonialsTitleHighlight")}</span>
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed">
                {t("projectsPage.testimonialsIntro")}
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Video Player Box */}
              <div className="lg:col-span-6 relative rounded-3xl overflow-hidden aspect-video shadow-lg bg-black border border-border/50 group">
                <iframe
                  src="https://drive.google.com/file/d/1hREkXNq4d03QB_ClhnpvQ2HV0lWnM9Y6/preview"
                  className="w-full h-full border-0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>

              {/* Written Testimonials Grid */}
              <div className="lg:col-span-6 space-y-6">
                {((t("projectsPage.testimonialsItems", { returnObjects: true }) as any[]) || []).map((testi, idx) => (
                  <div key={idx} className="bg-cream border border-border/80 rounded-2xl p-6 md:p-8 shadow-sm relative hover:shadow-md transition-shadow duration-300">
                    <span className="absolute top-4 right-6 text-6xl text-secondary/15 font-serif select-none">“</span>
                    <p className="font-body text-foreground/80 text-base md:text-lg leading-relaxed mb-4 relative z-10">
                      "{testi.quote}"
                    </p>
                    <div className="flex items-center gap-3 border-t border-border/40 pt-4">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center font-heading text-secondary font-bold text-sm">
                        {testi.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-heading text-sm font-semibold text-foreground">{testi.name}</h4>
                        <p className="font-body text-xs text-muted-foreground">{testi.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <PastProjectDetailsModal
        project={selectedPastProject}
        open={Boolean(selectedPastProject)}
        onOpenChange={(open) => {
          if (!open) setSelectedPastProject(null);
        }}
      />
      <Footer />
    </>
  );
};

export default Projects;
