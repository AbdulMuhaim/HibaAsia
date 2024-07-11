import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

const resources = {
  en: {
    translation: {
      "welcome": "INSPIRING BETTER HEALTH",
      "welcomeDescription": "Discover a new standard of healthcare excellence at Hiba Asia. We combine advanced medical technology with compassionate care to ensure the best possible outcomes for our patients.",
      "bookAppointment": "Book an Appointment",
      "service1": "Examination",
      "service2": "Prescription",
      "service3": "Cardiogram",
      "service4": "Blood Pressure",
      "button_english": "English",
      "button_arabic": "العربية",
      "headerMenuOptions1": "Home",
      "headerMenuOptions2": "About",
      "headerMenuOptions3": "Doctors",
      "headerMenuOptions4": "Services",
      "headerMenuOptions5": "Gallery",
      "headerMenuOptions6": "Contact",
      "mail": "Email Us",
      "mobile": "Call Us Now",
      "hospitalImageTitle":"Your Trusted Healthcare Partner",
      "hospitalImageDescription": "At Hiba Asia Polyclinics, we are committed to working with our patients to continually improve care and thus play an integral role in empowering patients, their families and communities to take charge of their health and wellness by delivering seamless, person-centered and preventive healthcare. Hiba Asia Healthcare is a group of polyclinics that provide comprehensive healthcare services to the community. The mission of Hiba Asia Healthcare is to provide high-quality, affordable, and accessible healthcare to all.",
      "homeVisionText": "By following the standards of Vision 2030, we aspire to be one of the best",
      "homeMissionText": "We believe that a large part of our patients treatment lies in our personal",
      "homeValuesText": "Patient-Centricity, Collaboration, Innovation, Integrity, Quality",
      "homeVisionTitle": "Our Vision",
      "homeMissionTitle": "Our Mission",
      "homeValuesTitle": "Our Values",
      "readMoreButton": "Read More",
      "cardsTitle": "What We Do",
      "card1Title": "Online Appointments",
      "card1Description": "Visit Our Center For Consultation",
      "card2Title": "Hiba Home Care",
      "card2Description": "A Complete Medical Care At Your Home",
      "card3Title": "Tele Consultation",
      "card3Description": "Consultation Through Video Conference",
      "card4Title": "Service & Packages",
      "card4Description": "View And Purchase Services & Packages",
      "DEPARTMENTS": "DEPARTMENTS",
      "General Medicine": "General Medicine",
      "Internal Medicine": "Internal Medicine",
      "Cardiology": "Cardiology",
      "Urology": "Urology",
      "E N T": "E N T",
      "Orthopedic": "Orthopedic",
      "Obstetric & Gynecology": "Obstetric & Gynecology",
      "Pediatrics": "Pediatrics",
      "Dental": "Dental",
      "Ophthalmology": "Ophthalmology",
      "Dermatology": "Dermatology",
      "General Surgery": "General Surgery",
      "Laboratory": "Laboratory",
      "X Ray": "X Ray",
      "Ultrasound": "Ultrasound",
      "Pharmacy": "Pharmacy",
      "OUR DOCTORS": "OUR DOCTORS",
      "Aswaq Ahmed": "Aswaq Ahmed",
      "Azza Hussein Ahmed": "Azza Hussein Ahmed",
      "Mohamad Sherif Helmy": "Mohamad Sherif Helmy",
      "Muhammed Anwar": "Muhammed Anwar",
      "Majed Mouris": "Majed Mouris",
      "Samad Moideen": "Samad Moideen",
      "Rasha Mohamed": "Rasha Mohamed",
      "Dr" : "Dr.",
      "View All": "View All",
      "Connect": "Connect+",
      "testimonialTitle": "See what our patience say about Hiba Asia",
      "testimonial1": "Outstanding care at Hiba Asia Hospital. Compassionate staff ensured a swift recovery. Highly recommended!",
      "testimonial2": "Great surgery experience at Hiba Asia Hospital. Modern facility and top-notch medical team.",
      "testimonial3": "Quick, efficient care after an accident. Exceptional emergency and follow-up treatment.",
      "testimonial4": "Hiba Asia Hospital improved my life with holistic care for my chronic illness.",
      "testimonial5": "Best hospital for check-ups and treatments. Friendly, professional staff. Very satisfied!",
      "testimonial6": "Exceptional maternity care at Hiba Asia Hospital. Supportive doctors and nurses made it wonderful.",
      "Jawad Ali": "Jawad Ali",
      "Aysha Mariyam": "Aysha Mariyam",
      "Tanya Grant": "Tanya Grant",
      "Farha": "Farha",
      "Abdul Muhaim": "Abdul Muhaim",
      "Abid": "Abid",
      "newseventsTitle": "News, Events and Blogs",
      "cardAboveCarousel":"Hiba Asia Healthcare Group is a multinational conglomerate headquartered in Jeddah since 2005, Saudi Arabia. Our company playing a remarkable role in the healthcare sector of Jeddah, Saudi Arabia since its establishment. Under Healthcare Group we are operating multiple healthcare units in different part of Jeddah. Our aims to expand our healthcare networks all over the Kingdom to provide cost effective, high quality healthcare to all...",
      "serviceSpan":"OUR SERVICE SPAN ACROSS KSA",
      "AL WAZEERIYAH": "AL WAZEERIYAH",
      "AL ZAHRA": "AL ZAHRA",
      "AL SANABEL": "AL SANABEL",
      "best medical center": "The Best Medical Center for You",
      "best medical center description": "Hiba Asia Healthcare Group is a multinational conglomerate headquartered in Jeddah since 2005, Saudi Arabia. Our company has played a remarkable role in the healthcare sector of Jeddah, Saudi Arabia since its establishment. Under Healthcare Group, we operate multiple healthcare units in different parts of Jeddah. Our aim is to expand our healthcare networks all over the Kingdom to provide cost-effective, high-quality healthcare to all. HAHG provides a comprehensive range of health services for the family, functioning as a one-stop health center providing treatment for acute medical conditions...",
      "PRESIDENT'S": "PRESIDENT'S",
       "MESSAGE": "MESSAGE",
       "presientMessage":"Welcome to Hiba Asia, where excellence in healthcare meets compassionate care. It is with great pride and joy that I invite you to experience our commitment to your well-being. At Hiba Asia, we believe that the true measure of progress in the healthcare industry is not just the number of facilities, but the quality of...",
       "President of Hiba Asia Group": "President of Hiba Asia Group",
       "INSURANCE": "INSURANCE",
       "PARTNERS": "PARTNERS",
       "News & Events": "News & Events",
       "News & Events Text": "Get latest news and events, special offers and more!",
       "Click here to know more": "Click here to know more"


    }
  },
  ar: {
    translation: {
      "welcome": "إلهام صحة أفضل",
      "welcomeDescription": "اكتشف معيارًا جديدًا للتميز في الرعاية الصحية في هبة آسيا. نحن نجمع بين التكنولوجيا الطبية المتقدمة والرعاية الرحيمة لضمان أفضل النتائج الممكنة لمرضانا.",
      "bookAppointment":"حجز موعد",
      "service1": "فحص",
      "service2": "روشتة",
      "service": "العربية",
      "service3": "مخطط القلب",
      "service4": "ضغط الدم",
      "button_english": "English",
      "button_arabic": "العربية",
      "headerMenuOptions1": "بيت",
      "headerMenuOptions2": "عن",
      "headerMenuOptions3": "الأطباء",
      "headerMenuOptions4": "خدمات",
      "headerMenuOptions5": "صالة عرض",
      "headerMenuOptions6": "اتصال",
      "mail": "اكتب لنا",
      "mobile": "تكلم معنا",
      "hospitalImageTitle": "شريكك الموثوق في الرعاية الصحية",
      "hospitalImageDescription": "في عيادات هبة آسيا، نحن ملتزمون بالعمل مع مرضانا لتحسين الرعاية بشكل مستمر وبالتالي لعب دور أساسي في تمكين المرضى وأسرهم ومجتمعاتهم من تولي مسؤولية صحتهم وعافيتهم من خلال تقديم رعاية صحية وقائية سلسة تتمحور حول الشخص. هبة آسيا للرعاية الصحية هي مجموعة من العيادات الشاملة التي تقدم خدمات رعاية صحية شاملة للمجتمع. تتمثل مهمة هبة آسيا للرعاية الصحية في توفير رعاية صحية عالية الجودة وبأسعار معقولة ويمكن الوصول إليها للجميع.",
      "homeVisionText": "وباتباعنا لمعايير رؤية 2030، نطمح أن نكون من الأفضل",
      "homeMissionText": "نحن نؤمن بأن جزءًا كبيرًا من علاج مرضانا يكمن في علاجنا الشخصي",
      "homeValuesText": "التركيز على المريض والتعاون والابتكار والنزاهة والجودة",
      "homeVisionTitle": "رؤيتنا",
      "homeMissionTitle": " مهمتن",
      "homeValuesTitle": "قيمنا",
      "readMoreButton": "اقرأ أكثر",
      "cardsTitle": "الذي نفعله",
      "card1Title": "المواعيد عبر الإنترنت",
      "card1Description": "تفضل بزيارة مركزنا للاستشارة",
      "card2Title": "هبة للرعاية المنزلية",
      "card2Description": "رعاية طبية كاملة في منزلك",
      "card3Title": "استشارة عن بعد",
      "card3Description": "التشاور من خلال مؤتمر الفيديو",
      "card4Title": "الخدمة والحزم",
      "card4Description": "عرض وشراء الخدمات والحزم",
      "DEPARTMENTS": "الإدارات",
      "General Medicine": "الطب العام",
      "Internal Medicine": "الطب الباطني",
      "Cardiology": "أمراض القلب",
      "Urology": "جراحة المسالك البولية",
      "E N T": "إي إن تي",
      "Orthopedic": "تقويم العظام",
      "Obstetric & Gynecology": "أمراض النساء والتوليد",
      "Pediatrics": "طب الأطفال",
      "Dental": "طب الأسنان",
      "Ophthalmology": "طب العيون",
      "Dermatology": "الأمراض الجلدية",
      "General Surgery": "الجراحة العامة",
      "Laboratory": "معمل",
      "X Ray": "الأشعة السينية",
      "Ultrasound": "الموجات فوق الصوتية",
      "Pharmacy": "مقابل",
      "OUR DOCTORS": "أطباؤنا",
      "Aswaq Ahmed": "اسواق احمد",
      "Azza Hussein Ahmed": "عزة حسين أحمد",
      "Mohamad Sherif Helmy": "محمد شريف حلمي",
      "Muhammed Anwar": "محمد أنور",
      "Majed Mouris": "ماجد موريس",
      "Samad Moideen": "صمد محيي الدين",
      "Rasha Mohamed": "رشا محمد",
      "Dr": "در.",
      "View All": "عرض الكل",
      "Connect": "تواصل+",
      "testimonialTitle": "شاهد ماذا يقول صبرنا عن هبة آسيا",
      "testimonial1": "رعاية متميزة في مستشفى هبة آسيا. يضمن الموظفون الرحيمون الشفاء السريع. ينصح به بشده!",
      "testimonial2": "تجربة جراحية رائعة في مستشفى هبة آسيا. منشأة حديثة وفريق طبي من الدرجة الأولى.",
      "testimonial3": "رعاية سريعة وفعالة بعد وقوع حادث. علاج استثنائي للطوارئ والمتابعة.",
      "testimonial4": "لقد حسّن مستشفى هبة آسيا حياتي من خلال الرعاية الشاملة لمرضي المزمن.",
      "testimonial5": "أفضل مستشفى للفحوصات والعلاج. فريق عمل ودود ومحترف. راض جدا!",
      "testimonial6": "رعاية الأمومة الاستثنائية في مستشفى هبة آسيا. الأطباء والممرضات الداعمون جعلوا الأمر رائعًا.",
      "Jawad Ali": "جواد علي",
      "Aysha Mariyam": "عائشة مريم",
      "Tanya Grant":"تانيا جرانت",
      "Farha": "فرحة",
      "Abdul Muhaim": "عبد المهيم",
      "Abid": "عابد",
      "newseventsTitle": "الأخبار والأحداث والمدونات",
      "cardAboveCarousel":"قامت مجموعة هبة آسيا الطبية بتحويل مجال الرعاية الصحية في المملكة العربية السعودية وقطر والإمارات العربية المتحدة وعمان والكويت والهند. نحن نمتلك وندير 20 منشأة للرعاية الصحية، بما في ذلك أفضل مستشفى في المملكة العربية السعودية وغيرها من المراكز الطبية المتطورة، لنصبح أحد أنجح مقدمي الرعاية الصحية في دول مجلس التعاون الخليجي. مع فريق من أفضل الأطباء في المملكة العربية السعودية، والمهنيين الطبيين والممرضين وموظفي إدارة المستشفيات على مستوى عالمي، تمتد قيادتنا إلى جميع جوانب طيف الرعاية الصحية.",
      "serviceSpan": "تمتد خدماتنا في جميع أنحاء المملكة العربية السعودية",
      "AL WAZEERIYAH": "الوزيرية",
      "AL ZAHRA": "الزهراء",
      "AL SANABEL": "السنابل",
      "best medical center": "أفضل مركز طبي بالنسبة لك",
      "best medical center description": "مجموعة هبة آسيا للرعاية الصحية هي مجموعة متعددة الجنسيات يقع مقرها الرئيسي في جدة منذ عام 2005، المملكة العربية السعودية. لعبت شركتنا دورًا بارزًا في قطاع الرعاية الصحية في مدينة جدة بالمملكة العربية السعودية منذ تأسيسها. ضمن مجموعة الرعاية الصحية، نقوم بتشغيل وحدات رعاية صحية متعددة في أجزاء مختلفة من جدة. هدفنا هو توسيع شبكات الرعاية الصحية لدينا في جميع أنحاء المملكة لتوفير رعاية صحية فعالة من حيث التكلفة وعالية الجودة للجميع. توفر HAHG مجموعة شاملة من الخدمات الصحية للأسرة، وتعمل كمركز صحي شامل يقدم العلاج للحالات الطبية الحادة...",
      "PRESIDENT'S": "الرئيس",
      "MESSAGE": "رسالة",
      "presientMessage": "مرحبًا بكم في هبة آسيا، حيث يلتقي التميز في الرعاية الصحية بالرعاية الرحيمة. إنه لمن دواعي الفخر والسعادة أن أدعوك لتجربة التزامنا برفاهيتك. في هبة آسيا، نؤمن بأن المقياس الحقيقي للتقدم في صناعة الرعاية الصحية ليس فقط عدد المرافق، بل جودة...",
      "Dr. Fahad Ibnu Abdullah": "در. فهد بن عبد الله",
      "President of Hiba Asia Group": "رئيس مجموعة هبة آسيا",
      "INSURANCE": "تأمين",
      "PARTNERS": "الشركاء",
      "News & Events": "الأخبار و الأحداث",
      "News & Events Text": "احصل على آخر الأخبار والأحداث والعروض الخاصة والمزيد!",
      "Click here to know more": "انقر هنا لمعرفة المزيد"





    }
  }
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    },
    interpolation: {
      escapeValue: false
    }
  });

  i18n.on('languageChanged', (lng) => {
    if (lng === 'ar') {
      document.documentElement.lang = 'ar';
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
    }
  });

export default i18n;
