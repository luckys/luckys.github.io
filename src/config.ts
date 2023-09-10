import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "http://luckys.github.io/",
  author: "Luis Ramírez Calle",
  desc: "Blog sobre desarrollo web",
  title: "Luckys Dev",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false,
  postPerPage: 5,
};

export const LOCALE = ["es-ES"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/luckys/personal-blog",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/luis-ramirez-calle",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:luis.ramirezcalle@outlook.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
