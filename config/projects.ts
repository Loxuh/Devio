// Base interface
export interface Creation {
  title: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
  image: string;
  tag: {
    text: {
      en: string;
      fr: string;
    };
    color: string;
  };
  backgroundColor: string;
  url?: string;
  slug?: string;
}

// Extended interface for projects
export interface Project extends Creation {
  slug: string;
  content?: {
    en: string;
    fr: string;
  };
}

export const projects: Project[] = [
    {
      title: {
        en: "CurseFight",
        fr: "CurseFight"
      },
      description: {
        en: "Immerse yourself in CurseFight, a PvP/Faction 1.8.8 server designed from the ground up by Devio for an uncompromising competitive experience.",
        fr: "Plongez dans CurseFight, un serveur PvP/Faction 1.8.8 conçu de A à Z par Devio pour une expérience compétitive sans compromis."
      },
      image: "/images/Curse_fight_logo.webp",
      tag: {
        text: {
          en: "Server Minecraft",
          fr: "Serveur Minecraft"
        },
        color: "green",
      },
      backgroundColor: "green",
      url: "https://discord.gg/cursefight",
      slug: "curse",
    },
  
];