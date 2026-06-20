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

const GOOGLE_SHEETS_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const currentProjects = t("projectsPage.currentItems", { returnObjects: true }) as CurrentProject[];
  
  const pastProjects: PastProject[] = isArabic
    ? [
        {
          id: "bridging-gaps",
          title: "ردم الفجوة في الإعلام العربي",
          category: "مائدة مستديرة",
          color: "bg-primary",
          year: "2023",
          period: "أبريل 2023",
          location: "بيروت، لبنان",
          collaborators: "AUB / LAU / AP / الجزيرة",
          description:
            "جمعنا 25 طالباً من الجامعة الأمريكية في بيروت والجامعة اللبنانية الأمريكية مع صحفيين من مؤسسات إقليمية ودولية رائدة، بما في ذلك وكالة أسوشيتد برس، والجزيرة، ولوريان لو جور.\n\nخلقت هذه المائدة المستديرة مساحة نادرة للتبادل المفتوح بين منتجي الأخبار ومستهلكيها. واستكشف المشاركون معاً كيفية تغير المشهد الإعلامي في منطقة الشرق الأوسط وشمال إفريقيا، لا سيما الانقسام الجيلي المتزايد في كيفية الوصول إلى الأخبار وتفسيرها والثقة بها.\n\nتفاعل الطلاب مباشرة مع المفاهيم الأساسية مثل وضع الأجندة، والتأطير، والتربية الإعلامية النقدية. وفي الوقت نفسه، اكتسب الصحفيون رؤية مباشرة حول العادات الرقمية للجيل Z واعتمادهم على المنصات الاجتماعية الناشئة.\n\nكما تناول النقاش العواقب الأوسع لاضطراب المعلومات، مسلطاً الضوء على آثاره المتتالية على الحريات المدنية والسياسية في المنطقة. واختتمت الجلسة بمجموعة من الأفكار المشتركة والتوصيات العملية لردم هذه الفجوات للمضي قدماً.",
          highlights: [
            "نقاش معمق حول صناعة الأجندة والتأطير والقراءة النقدية للإعلام",
            "رصد عادات الجيل الرقمي والمنصات الصاعدة في تلقي الأخبار",
            "توصيات عملية لردم الفجوة بين غرف الأخبار والجمهور الشاب",
          ],
          mediaNote: "يتضمن المشروع صورا ومواد تفاعلية من جلسات النقاش.",
          coverImage: bgCover,
        },
        {
          id: "spring-workshop",
          title: "ورشة Media Spring",
          category: "تدريب عملي",
          color: "bg-secondary",
          year: "2023",
          period: "7-9 يوليو 2023",
          location: "تونس، أميديست",
          collaborators: "Solutions Journalism Network",
          description:
            "جمعت ورشة عمل 'ربيع الإعلام' (Media Spring)، التي أقيمت في الفترة من 7 إلى 9 يوليو 2023، 17 صحفياً وصانع محتوى تونسياً في بداية مسارهم المهني لخوض تجربة تدريبية عملية مكثفة.\n\nبدأت الورشة بدراسة الأثر الحقيقي للمعلومات المضللة على المشاركة المدنية في تونس. وباستخدام موضوع الإقبال على لقاح كوفيد-19 في المناطق الريفية المهمشة كدراسة حالة، بحث المشاركون في كيفية تأثير الوصول المحدود إلى وسائل الإعلام المحلية الموثوقة على سلوك الجمهور وثقته.\n\nتلقى المشاركون تدريباً على المهارات الأساسية للصحافة الاستقصائية، بما في ذلك جمع المعلومات، وتقنيات التحقق، واستخدام أدوات الاستخبارات مفتوحة المصدر (OSINT) سهلة الاستخدام، بالإضافة إلى مقدمة حول صحافة الحلول بالشراكة مع شبكة صحافة الحلول.\n\nوتوج البرنامج بجلسة عرض مشاريع تفاعلية، حيث حدد كل مشارك قضية محلية ملحة وطور مقترحاً لإجراء تحقيق صحفي مطبوع أو متعدد الوسائط.",
          highlights: [
            "دراسة حالة حول أثر التضليل في الثقة العامة خلال جائحة كوفيد-19",
            "تدريب عملي على جمع المعلومات والتحقق وإنتاج قصص ميدانية",
            "جلسة عرض مشاريع حول قضايا محلية بصيغ مطبوعة ومتعددة الوسائط",
          ],
          mediaNote: "يتضمن المشروع فيديوهات قصيرة وعروضا تقديمية لمقترحات المشاركين.",
          coverImage: swCover,
        },
        {
          id: "anti-xenophobic",
          title: "موجز مواجهة الخطاب المعادي للأجانب",
          category: "بحث وسياسات",
          color: "bg-aqua",
          year: "2024",
          period: "2024",
          location: "تونس ولبنان",
          collaborators: "تكريم من MEPI",
          description:
            "استجابةً لتصاعد العنف ضد مهاجري جنوب الصحراء الكبرى في تونس، قمنا بإعداد موجز عمل لمواجهة خطاب كراهية الأجانب لعام 2024.\n\nجمع هذا المشروع بين البحث في المعلومات المضللة وخطاب الكراهية عبر الإنترنت، وبين المقابلات مع الخبراء والشهادات الحية من المجتمعات المتضررة. كان هدفنا هو دراسة كيفية مساهمة السرديات الرقمية في إلحاق الضرر الفعلي على أرض الواقع، باستخدام دراسات حالة تشمل تصاعد العنف ضد مهاجري جنوب الصحراء في تونس وأنماط الكراهية عبر الإنترنت التي تستهدف عاملات المنازل المهاجرات في لبنان.\n\nيرسم الموجز خريطة للاتجاهات الرئيسية في الخطاب المعادي للأجانب عبر الإنترنت، ويبحث عواقبه المجتمعية، ويحدد الاستراتيجيات التي يقودها المجتمع لمواجهة السرديات الضارة وتعزيز مساحات رقمية أكثر أماناً وشمولاً.\n\nوقد حظي هذا العمل بتقدير مبادرة الشراكة الشرق أوسطية (MEPI) لتأثيره، حيث منحت 'إل ميديا لاب' جائزة الخدمة المجتمعية بالمركز الأول في يونيو 2024.",
          highlights: [
            "تحليل اتجاهات الخطاب الإقصائي وآثاره الاجتماعية والسياسية",
            "دمج شهادات وخبرات ميدانية من مجتمعات متأثرة",
            "الحصول على جائزة المركز الأول للخدمة المجتمعية من MEPI (يونيو 2024)",
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

  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [selectedPastProject, setSelectedPastProject] = useState<PastProject | null>(null);
  const projectIcons = {
    book: BookOpen,
    globe: Globe,
    users: Users,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("entry.1", form.name);
    formData.append("entry.2", form.email);
    formData.append("entry.3", form.project);
    formData.append("entry.4", form.message);

    fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    }).then(() => {
      setSubmitted(true);
      setForm({ name: "", email: "", project: "", message: "" });
    });
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
              )})}
            </div>
          </div>
        </section>
        */}

        {/* Past Projects Gallery */}
        <section className="py-20 bg-primary/5">
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
                  className={`group relative overflow-hidden rounded-2xl aspect-[4/3] flex flex-col justify-end text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}
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

        {/* Registration Form (Contact Form) */}
        <section id="contact-form" className="py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="bg-primary/5 rounded-2xl p-8 md:p-12 border border-border">
                <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-2">
                  {t("projectsPage.registerTitle")}
                </h2>
                <p className="text-muted-foreground font-body mb-8">
                  {t("projectsPage.registerIntro")}
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-wattle/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ArrowRight className="text-primary" size={24} />
                    </div>
                    <h3 className="font-heading text-xl text-foreground mb-2">{t("projectsPage.thanksTitle")}</h3>
                    <p className="text-muted-foreground font-body">{t("projectsPage.thanksBody")}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-heading text-sm text-foreground mb-1.5">{t("projectsPage.fullName")}</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-cream font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                          placeholder={t("projectsPage.fullNamePlaceholder")}
                        />
                      </div>
                      <div>
                        <label className="block font-heading text-sm text-foreground mb-1.5">{t("projectsPage.email")}</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-cream font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                          placeholder={t("projectsPage.emailPlaceholder")}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-heading text-sm text-foreground mb-1.5">{t("projectsPage.projectInterest")}</label>
                      <select
                        required
                        value={form.project}
                        onChange={(e) => setForm({ ...form, project: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-cream font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      >
                        <option value="">{t("projectsPage.selectProject")}</option>
                        {currentProjects.map((p) => (
                          <option key={p.title} value={p.title}>{p.title}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-heading text-sm text-foreground mb-1.5">{t("projectsPage.message")}</label>
                      <textarea
                        rows={3}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-cream font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                        placeholder={t("projectsPage.messagePlaceholder")}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground font-heading text-sm py-3 rounded-full hover:bg-primary/90 transition-colors"
                    >
                      {t("projectsPage.submit")}
                    </button>
                  </form>
                )}
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
