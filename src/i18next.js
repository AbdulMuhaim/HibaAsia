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
      "mail": "Write to Us",
      "mobile": "Talk to Us",
      "hospitalImageTitle":"Your Trusted Healthcare Partner",
      "hospitalImageDescription": "At Hiba Asia Polyclinics, we are committed to working with our patients to continually improve care and thus play an integral role in empowering patients, their families and communities to take charge of their health and wellness by delivering seamless, person-centered and preventive healthcare. Hiba Asia Healthcare is a group of polyclinics that provide comprehensive healthcare services to the community. The mission of Hiba Asia Healthcare is to provide high-quality, affordable, and accessible healthcare to all."

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
      "hospitalImageDescription": "في عيادات هبة آسيا، نحن ملتزمون بالعمل مع مرضانا لتحسين الرعاية بشكل مستمر وبالتالي لعب دور أساسي في تمكين المرضى وأسرهم ومجتمعاتهم من تولي مسؤولية صحتهم وعافيتهم من خلال تقديم رعاية صحية وقائية سلسة تتمحور حول الشخص. هبة آسيا للرعاية الصحية هي مجموعة من العيادات الشاملة التي تقدم خدمات رعاية صحية شاملة للمجتمع. تتمثل مهمة Hiba Asia Healthcare في توفير رعاية صحية عالية الجودة وبأسعار معقولة ويمكن الوصول إليها للجميع."

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
