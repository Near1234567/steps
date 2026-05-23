import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      "hero": {
        "subtitle": "Artiste Peintre",
        "location": "Basée à Marrakech",
        "quote": "Chaque toile est un souffle, chaque sculpture est une mémoire du corps.",
        "explore": "Explorer",
        "collection": "La Collection"
      },
      "bio": {
        "title": "Cheminement",
        "subtitle": "L'Ame du Projet",
        "role": "Artiste Peintre & Art-thérapeute",
        "studio": "Atelier basé à Marrakech",
        "content": "Je suis artiste peintre et art-thérapeute, avec plus de dix années de pratique artistique. Mon travail s’inscrit dans une recherche continue autour de l’expression émotionnelle, de la matière et du lien entre l’art et le mieux-être. Ma démarche artistique se caractérise par une exploration de supports variés, allant de la peinture grand format à la sculpture métallique. Le féminin occupe une place centrale dans mon univers artistique. Mon processus créatif est intuitif et guidé par une forte exigence intérieure. Parallèlement à ma pratique artistique, je développe une activité en art-thérapie. À travers mon travail, j’affirme une conviction essentielle : l’art est à la fois un acte esthétique et une expérience profondément humaine."
      },
      "gallery": {
        "title": "Collection Privée",
        "subtitle": "Exposition de prestige",
        "paintings": "Tableaux",
        "sculptures": "Sculptures",
        "priceInquiry": "Demande de prix",
        "vendu": "Vendu",
        "venduTitle": "Œuvre Vendue",
        "notAvailable": "Cette œuvre n'est plus disponible",
        "dimensions": "Dimensions",
        "availability": "Disponibilité",
        "immersion": "Immersion",
        "immersionJourney": "Voyage Immersif",
        "noSculptures": "Aucune sculpture pour le moment",
        "exploreFull": "Découvrir l'intégralité",
        "completeCollection": "Collection Complète",
        "details": "Détails de l'œuvre",
        "close": "Fermer",
        "full": {
          "title": "L'Espace Contemplatif",
          "desc": "Exploration complète de la collection Asmae Laaroubi"
        }
      },
      "category": {
        "tous": "Tous",
        "peinture": "Peinture",
        "sculpture": "Sculpture"
      },
      "contact": {
        "title": "Entrer en résonance",
        "subtitle": "Contact & Collaboration",
        "atelier": "L'Atelier",
        "form": {
          "name": "Nom",
          "email": "Email",
          "subject": "Sujet",
          "message": "Message",
          "submit": "Envoyer le message",
          "sending": "Envoi en cours...",
          "success": "Message envoyé avec succès",
          "responseTime": "Réponse sous 48h",
          "subjects": {
            "artwork": "Information Œuvre",
            "collaboration": "Collaboration",
            "other": "Autre"
          }
        }
      },
      "footer": {
        "copyright": "Conception de Prestige • Tous droits réservés.",
        "socials": "Réseaux Sociaux"
      },
      "admin": {
        "access": "Accès Administration",
        "dashboard": "Tableau de Bord",
        "save": "Enregistrer",
        "saving": "Enregistrement...",
        "password": "Mot de passe",
        "enter": "Entrer",
        "incorrectKey": "Clé incorrecte",
        "testConnection": "Tester Connexion",
        "sqlHelp": "Aide SQL",
        "supabase": {
          "connected": "Supabase Connecté",
          "notConfigured": "Supabase non configuré"
        },
        "tabs": {
          "titles": "Textes & Titres",
          "gallery": "Galerie",
          "bio": "Biographie",
          "contact": "Contact",
          "ui": "Interface",
          "theme": "Design"
        },
        "fields": {
          "firstName": "Prénom (Hero)",
          "lastName": "Nom (Hero)",
          "heroSubtitle": "Sous-titre Hero",
          "heroLocation": "Localisation Hero",
          "heroQuote": "Citation Hero"
        },
        "heroSlideshow": "Diaporama Hero",
        "heroSlideshowDesc": "Gérez les images qui défilent en page d'accueil",
        "addHeroImage": "Ajouter une image",
        "manageArtworks": "Gestion des Œuvres",
        "importImage": "Importer une image",
        "createManually": "Créer manuellement"
      },
      "ui": {
        "changeInterface": "Changer d'interface"
      },
      "nav": {
        "home": "Accueil",
        "gallery": "Galerie",
        "about": "À Propos",
        "contact": "Contact",
        "backToHome": "Retour à l'accueil",
        "toggleMenu": "Afficher le menu",
        "selectLanguage": "Langue",
        "close": "Fermer"
      }
    }
  },
  en: {
    translation: {
      "hero": {
        "subtitle": "Visual Artist",
        "location": "Based in Marrakech",
        "quote": "Each canvas is a breath, each sculpture is a memory of the body.",
        "explore": "Explore",
        "collection": "The Collection"
      },
      "bio": {
        "title": "Journey",
        "subtitle": "The Soul of the Project",
        "role": "Painter & Art-therapist",
        "studio": "Souffle d'Orient Studio, Marrakech",
        "content": "I am a painter and art therapist, with over ten years of artistic practice. My work is part of a continuous research around emotional expression, matter and the link between art and well-being. My artistic approach is characterized by an exploration of various media, ranging from large-format painting to metal sculpture. The feminine occupies a central place in my artistic universe. My creative process is intuitive and guided by a strong inner requirement. In parallel with my artistic practice, I develop an activity in art therapy. Through my work, I affirm an essential conviction: art is both an aesthetic act and a deeply human experience."
      },
      "gallery": {
        "title": "Private Collection",
        "subtitle": "Prestige Exhibition",
        "paintings": "Paintings",
        "sculptures": "Sculptures",
        "priceInquiry": "Price Inquiry",
        "vendu": "Sold",
        "venduTitle": "Artwork Sold",
        "notAvailable": "This work is no longer available",
        "dimensions": "Dimensions",
        "availability": "Availability",
        "immersion": "Immersion",
        "immersionJourney": "Immersive Journey",
        "noSculptures": "No sculptures at the moment",
        "exploreFull": "Explore Full Gallery",
        "completeCollection": "Complete Collection",
        "details": "Artwork Details",
        "close": "Close",
        "full": {
          "title": "The Contemplative Space",
          "desc": "Full exploration of the Asmae Laaroubi collection"
        }
      },
      "category": {
        "tous": "All",
        "peinture": "Painting",
        "sculpture": "Sculpture"
      },
      "contact": {
        "title": "Resonate",
        "subtitle": "Contact & Collaboration",
        "atelier": "The Studio",
        "form": {
          "name": "Name",
          "email": "Email",
          "subject": "Subject",
          "message": "Message",
          "submit": "Send Message",
          "sending": "Sending...",
          "success": "Message sent successfully",
          "responseTime": "Response within 48h",
          "subjects": {
            "artwork": "Artwork Information",
            "collaboration": "Collaboration",
            "other": "Other"
          }
        }
      },
      "footer": {
        "copyright": "Prestige Design • All rights reserved.",
        "socials": "Social Networks"
      },
      "admin": {
        "access": "Admin Access",
        "dashboard": "Dashboard",
        "save": "Save",
        "saving": "Saving...",
        "password": "Password",
        "enter": "Enter",
        "incorrectKey": "Incorrect key",
        "testConnection": "Test Connection",
        "sqlHelp": "SQL Help",
        "supabase": {
          "connected": "Supabase Connected",
          "notConfigured": "Supabase not configured"
        },
        "tabs": {
          "titles": "Titles & Texts",
          "gallery": "Gallery",
          "bio": "Biography",
          "contact": "Contact",
          "ui": "Interface",
          "theme": "Design"
        },
        "fields": {
          "firstName": "First Name (Hero)",
          "lastName": "Last Name (Hero)",
          "heroSubtitle": "Hero Subtitle",
          "heroLocation": "Hero Location",
          "heroQuote": "Hero Quote"
        },
        "heroSlideshow": "Hero Slideshow",
        "heroSlideshowDesc": "Manage home page sliding images",
        "addHeroImage": "Add an image",
        "manageArtworks": "Manage Artworks",
        "importImage": "Import an image",
        "createManually": "Create manually"
      },
      "ui": {
        "changeInterface": "Change interface"
      },
      "nav": {
        "home": "Home",
        "gallery": "Gallery",
        "about": "About",
        "contact": "Contact",
        "backToHome": "Back to Home",
        "toggleMenu": "Toggle Menu",
        "selectLanguage": "Language",
        "close": "Close"
      }
    }
  },
  ar: {
    translation: {
      "hero": {
        "subtitle": "فنانة تشكيلية",
        "location": "مقرها في مراكش",
        "quote": "كل لوحة هي نفس، وكل منحوتة هي ذاكرة للجسد.",
        "explore": "استكشف",
        "collection": "المجموعة"
      },
      "bio": {
        "title": "المسار",
        "subtitle": "روح المشروع",
        "role": "فنانة تشكيلية ومعالجة بالفن",
        "studio": "مرسم نفس الشرق، مراكش",
        "content": "أنا فنانة تشكيلية ومعالجة بالفن، بخبرة تزيد عن عشر سنوات من الممارسة الفنية. يندرج عملي في إطار بحث مستمر حول التعبير العاطفي، والمادة، والصلة بين الفن والرفاهية. تتميز مقاربتي الفنية باستكشاف وسائط متنوعة، تتراوح من اللوحات ذات الحجم الكبير إلى المنحوتات المعدنية. يحتل الجانب الأنثوي مكانة مركزية في عالمي الفني. عمليتي الإبداعية بديهية ومسترشدة بمطلب داخلي قوي. وبالتوازي مع ممارستي الفنية، أعمل في مجال العلاج بالفن. ومن خلال عملي، أؤكد على قناعة أساسية: الفن هو عمل جمالي وتجربة إنسانية عميقة في آن واحد."
      },
      "gallery": {
        "title": "مجموعة خاصة",
        "subtitle": "عرض متميز",
        "paintings": "لوحات",
        "sculptures": "منحوتات",
        "priceInquiry": "طلب السعر",
        "vendu": "تم البيع",
        "venduTitle": "العمل مباع",
        "notAvailable": "هذا العمل لم يعد متوفراً",
        "dimensions": "الأبعاد",
        "availability": "التوفر",
        "immersion": "انغماس",
        "immersionJourney": "رحلة غامرة",
        "noSculptures": "لا توجد منحوتات في الوقت الحالي",
        "exploreFull": "استكشاف المعرض بالكامل",
        "completeCollection": "المجموعة الكاملة",
        "details": "تفاصيل العمل",
        "close": "إغلاق",
        "full": {
          "title": "فضاء التأمل",
          "desc": "استكشاف كامل لمجموعة أسماء لعروبي"
        }
      },
      "category": {
        "tous": "الكل",
        "peinture": "لوحات",
        "sculpture": "منحوتات"
      },
      "contact": {
        "title": "تواصل",
        "subtitle": "اتصال وتعاون",
        "atelier": "المرسم",
        "form": {
          "name": "الاسم",
          "email": "البريد الإلكتروني",
          "subject": "الموضوع",
          "message": "الرسالة",
          "submit": "إرسال الرسالة",
          "sending": "جاري الإرسال...",
          "success": "تم إرسال الرسالة بنجاح",
          "responseTime": "الرد خلال 48 ساعة",
          "subjects": {
            "artwork": "معلومات عن العمل",
            "collaboration": "تعاون",
            "other": "آخر"
          }
        }
      },
      "footer": {
        "copyright": "تصميم راقٍ • جميع الحقوق محفوظة.",
        "socials": "شبكات التواصل الاجتماعي"
      },
      "admin": {
        "access": "دخول الإدارة",
        "dashboard": "لوحة التحكم",
        "save": "حفظ",
        "saving": "جاري الحفظ...",
        "password": "كلمة المرور",
        "enter": "دخول",
        "incorrectKey": "كلمة المرور خاطئة",
        "testConnection": "اختبار الاتصال",
        "sqlHelp": "مساعدة SQL",
        "supabase": {
          "connected": "Supabase متصل",
          "notConfigured": "Supabase غير مهيأ"
        },
        "tabs": {
          "titles": "العناوين والنصوص",
          "gallery": "المعرض",
          "bio": "السيرة الذاتية",
          "contact": "الاتصال",
          "ui": "الواجهة",
          "theme": "التصميم"
        },
        "fields": {
          "firstName": "الاسم الشخصي",
          "lastName": "الاسم العائلي",
          "heroSubtitle": "العنوان الفرعي",
          "heroLocation": "الموقع",
          "heroQuote": "المقولة"
        },
        "heroSlideshow": "عرض الصور",
        "heroSlideshowDesc": "إدارة الصور المتحركة في الصفحة الرئيسية",
        "addHeroImage": "إضافة صورة",
        "manageArtworks": "إدارة الأعمال الفنية",
        "importImage": "استيراد صورة",
        "createManually": "إنشاء يدوي"
      },
      "ui": {
        "changeInterface": "تغيير الواجهة"
      },
      "nav": {
        "home": "الرئيسية",
        "gallery": "المعرض",
        "about": "عني",
        "contact": "اتصل بي",
        "backToHome": "العودة إلى الرئيسية",
        "toggleMenu": "فتح القائمة",
        "selectLanguage": "اللغة",
        "close": "إغلاق"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;
