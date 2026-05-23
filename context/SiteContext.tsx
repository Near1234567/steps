import React, { createContext, useContext, useState, useEffect } from 'react';
import { ARTWORKS, BIO_TEXT } from '../constants';
import { Artwork, SiteData } from '../types';
import { dataService } from '../src/services/dataService';

interface SiteContextType {
  data: SiteData;
  updateData: (newData: Partial<SiteData>) => Promise<void>;
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
}

const defaultData: SiteData = {
  hero: {
    titleTop: "Asmae",
    titleBottom: "Laaroubi",
    subtitle: "Artiste Peintre",
    location: "Basée à Marrakech",
    quote: "Chaque toile est un souffle, chaque sculpture est une mémoire du corps.",
    imageUrl: "https://embarrassing-cyan-tfezcpihlt.edgeone.app/IMG_4841.jpeg",
    slideshowImages: [
      "https://embarrassing-cyan-tfezcpihlt.edgeone.app/IMG_4841.jpeg",
      "https://natural-emerald-x8gssmkq9g.edgeone.app/IMG_4842.jpeg",
      "https://popular-black-ydgdqerc8b.edgeone.app/IMG_4112.jpeg"
    ],
  },
  bio: {
    title: "Cheminement",
    subtitle: "L'Ame du Projet",
    text: BIO_TEXT,
    role: "Artiste Peintre",
    imageUrl: "https://natural-emerald-x8gssmkq9g.edgeone.app/IMG_4842.jpeg",
    secondaryImageUrl: "https://popular-black-ydgdqerc8b.edgeone.app/IMG_4112.jpeg",
    studioLocation: "Atelier basé à Marrakech",
  },
  gallery: {
    title: "Collection Privée",
    subtitle: "Exposition de prestige",
  },
  ui: {
    navHome: "Accueil",
    navGallery: "Galerie",
    navAbout: "À Propos",
    navContact: "Contact",
    adminAccess: "Accès Administration",
    priceInquiry: "Demande de prix",
    inquiryMessage: "Je souhaiterais avoir plus d'informations concernant l'œuvre : ",
    formSuccess: "Message envoyé",
    footerCopyright: "Conception de Prestige • Tous droits réservés.",
    contactTitle: "Entrer en résonance",
    contactSubtitle: "Contact & Collaboration",
    formName: "Nom",
    formEmail: "Email",
    formSubject: "Sujet",
    formMessage: "Message",
    formSubmit: "Envoyer le message",
    footerSocial: "Réseaux Sociaux",
    galleryPaintings: "Tableaux",
    gallerySculptures: "Sculptures",
    heroExplore: "Explorer",
    heroCollection: "La Collection",
  },
  contact: {
    email: "contact@asmaelaaroubi.com",
    inquiryEmail: "said.abdelhakim121@gmail.com",
    phone: "+212 6 36 58 91 24",
    address: "Marrakech, Maroc",
    quote: "Chaque rencontre est une occasion d'explorer un nouveau paysage émotionnel.",
  },
  socials: {
    instagram: "https://www.instagram.com/steps.03",
    facebook: "https://www.facebook.com/asmae.laaroubi/",
    linkedin: "https://www.linkedin.com/in/asmaelaroubi",
  },
  artworks: ARTWORKS,
  theme: {
    primary: "#2D2D2D",
    accent: "#C5A059",
    bg: "#FEFDFC",
  },
  adminPassword: "FRIDA KAHLO",
};

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<SiteData>(defaultData);
  const [isAdmin, setIsAdmin] = useState(false);

  // Initial load
  useEffect(() => {
    const loadData = async () => {
      try {
        const [settings, artworks] = await Promise.all([
          dataService.getSettings(),
          dataService.getArtworks()
        ]);

        if (settings || artworks.length > 0) {
          setData(prev => ({
            ...prev,
            ...settings,
            artworks: artworks.length > 0 ? artworks : prev.artworks,
            socials: {
              ...prev.socials,
              ...(settings?.socials || {})
            }
          }));
        }
      } catch (err) {
        console.error("Supabase load failed:", err);
        // Fallback to localStorage if needed can still be kept here if desired
      }
    };

    loadData();
  }, []);

  const updateData = async (newData: Partial<SiteData>) => {
    const updated = { ...data, ...newData };
    setData(updated);
    
    // Sync to Supabase
    try {
      if (newData.artworks) {
        console.log("Syncing artworks to Supabase...");
        await dataService.syncArtworks(newData.artworks);
        console.log("Artworks sync complete.");
      }
      
      // Update general settings (excluding artworks to avoid duplication/size limits if payload is too big)
      const { artworks, ...settings } = updated;
      console.log("Updating settings to Supabase...");
      await dataService.updateSettings(settings);
      console.log("Settings update complete.");
    } catch (err) {
      console.error("Supabase sync error:", err);
      throw err; // Re-throw to handle in UI
    }
  };

  return (
    <SiteContext.Provider value={{ data, updateData, isAdmin, setIsAdmin }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSiteData = () => {
  const context = useContext(SiteContext);
  if (!context) throw new Error('useSiteData must be used within SiteProvider');
  return context;
};
