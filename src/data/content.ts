
import img from "../assets/Gemini_Generated_Image_htmvj1htmvj1htmv.jpg"
export interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "electricite-batiment",
    title: "Électricité de Bâtiment",
    shortDesc: "Installation & Rénovation, Tableaux de distribution, Éclairage, Dépannage.",
    fullDesc: "Nos experts qualifiés interviennent pour tous vos travaux d'installation, de mise aux normes et de rénovation électrique dans les bâtiments résidentiels et tertiaires à Dakar et environs.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    features: [
      "Installation complète et câblage de bâtiments",
      "Conception et pose de tableaux de distribution (TGBT)",
      "Solutions d'éclairage intérieur et extérieur basse consommation",
      "Dépannage d'urgence et maintenance préventive"
    ]
  },
  {
    id: "cablage-industriel",
    title: "Câblage Industriel",
    shortDesc: "Armoires & TGBT, Automatisation, Câblage de puissance, Maintenance.",
    fullDesc: "Spécialisés dans les environnements industriels exigeants, nous assurons la réalisation d'armoires électriques complexes et le câblage de lignes de production.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
    features: [
      "Fabrication d'armoires de commande et de puissance",
      "Automatisation industrielle et régulation de process",
      "Raccordement de moteurs et lignes de production",
      "Audits de conformité et maintenance industrielle"
    ]
  },
  {
    id: "panneaux-solaires",
    title: "Panneaux Solaires",
    shortDesc: "Étude de faisabilité, Installation PV, Supervision, Stockage d'énergie.",
    fullDesc: "Passez à l'énergie propre grâce à nos solutions photovoltaïques clés en main pour optimiser votre autonomie énergétique et réduire vos factures.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop",
    features: [
      "Études dimensionnelles et de faisabilité solaire",
      "Installation de panneaux photovoltaïques",
      "Systèmes de stockage par batteries lithium",
      "Supervision et suivi de production en temps réel"
    ]
  },
  {
    id: "videosurveillance",
    title: "Vidéosurveillance",
    shortDesc: "Systèmes IP/Analogiques, Caméras intelligentes, Vision nocturne, Accès à distance.",
    fullDesc: "Protégez vos biens et vos équipes avec nos systèmes de sécurité électronique de pointe avec accès direct depuis votre smartphone.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop",
    features: [
      "Déploiement de caméras IP haute résolution",
      "Systèmes de détection intelligente et d'intrusion",
      "Vision nocturne infrarouge avancée",
      "Configuration des applications mobiles pour un accès à distance"
    ]
  }
];

export const PORTFOLIO_DATA = [
  { id: 1, title: "Installation TGBT - Usine", type: "Projet industriel", image: img },
  { id: 2, title: "Éclairage LED - Bâtiment", type: "Projet tertiaire", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Automatisation - Ligne de production", type: "Projet industriel", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Installation électrique - Villa", type: "Projet résidentiel", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Comment optimiser la consommation énergétique de votre villa à Dakar",
    date: "14 Octobre 2026",
    category: "Conseils",
    excerpt: "Découvrez les écogestes et les installations solaires indispensables pour réduire vos factures d'électricité.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "L'importance de la maintenance préventive des TGBT en milieu industriel",
    date: "28 Septembre 2026",
    category: "Industrie",
    excerpt: "Évitez les pannes majeures et les arrêts de production grâce à une routine rigoureuse de contrôle.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop"
  }
];