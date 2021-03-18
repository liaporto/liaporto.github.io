const experienceLinksImgPath = "other_links/";
const siacImgPath = `${experienceLinksImgPath}siac.jpg`;
const naturgyImgPath = `${experienceLinksImgPath}naturgy.jpg`;

module.exports = {
  "en-us": [
    {
      title: "Customer Experience Intern",
      place: "Naturgy Brasil",
      description:
        "- Development of layout changes and new functionalities for the Zendesk-based help center 'Minha Naturgy' using results from customer satisfaction surveys and Google Analytics data as reference;\n- E-marketing layout development;\n- Development and analysis of customer satisfaction surveys.",
      period: "Jan 2020 - Present",
      media: [
        {
          link: "https://www.minhanaturgy.com.br",
          title: "Minha Naturgy",
          img: naturgyImgPath,
        }
      ]
    },
    {
      title: "Extensionist",
      place: "Federal University of Rio de Janeiro",
      description:
        "Extensionist at UFRJ's Pro-rectory of Academic Extension Programs.\nWas a part of the development team for the new UFRJ SIAc (Academic Integration Week) website, working beside the design and backend development teams.",
      period: "Jan 2020 - May 2020",
      media: [
        {
          link: "https://siac.ufrj.br/",
          title: "siac website",
          img: siacImgPath,
        },
      ],
    },
  ],
  "pt-br": [
    {
      title: "Estagiária de Experiência do cliente",
      place: "Naturgy Brasil",
      description:
        "- Atualizações de layout e criação de funcionalidades para a central de ajuda interna e para o portal de auto atendimento Minha Naturgy;\n- Análise de resultados de pesquisas de satisfação e métricas de uso disponibilizadas através do Google Analytics;\n- Planejamento e montagem de layouts de e-mail marketing;\n- Desenvolvimento e aplicação de pesquisas de satisfação.",
      period: "Jan 2020 - Atualmente",
      media: [
        {
          link: "https://www.minhanaturgy.com.br",
          title: "Minha Naturgy",
          img: naturgyImgPath,
        }
      ]
    },
    {
      title: "Bolsista de desenvolvimento web",
      place: "Pró-reitoria de extensão da UFRJ",
      description:
        "Responsável por desenvolver o novo site da Semana de Integração Acadêmica da UFRJ, a SIAc, em conjunto com as equipes de back-end e design da Pró-Reitoria. Site desenvolvido em WordPress.",
      media: [
        {
          link: "https://siac.ufrj.br/",
          title: "Site da SIAc",
          img: siacImgPath,
        },
      ],
      period: "Jan 2020 - Mai 2020",
    },
  ],
}