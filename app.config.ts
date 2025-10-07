//import { defineAppConfig } from "nuxt/app";

export default defineAppConfig({
  seo: {
    //titleTemplate: "%s - ${site.name}",
    title: "SecSpace@IT-KMTIL",
    description: "Cybersecurity Learning Platform Utilizing Virtualization Technology built for School of Information Technology (IT)",
    
  },
  header: {
    title: "SecSpace",
    logo: {
      alt: "logo",
      light: "logo/long-light.svg",
      dark: "logo/long-dark.svg",
    },
  },
  github: true,
  socials: {
    github: "https://github.com/IT-CyberCTF-Platform",
    discord: "",
    gmail: "",
  },
});
