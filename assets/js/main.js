import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".innovasfera",
  `Trabalhei na Ituran Road Track, onde tive a oportunidade de participar de diversos projetos. 
                Nessa trajetória, atuei em várias implantações voltadas para as áreas de infraestrutura, 
                redes e telecomunicações, prestando suporte ao time de Cyber Security e contribuindo com documentações 
                e auditorias desses setores. Foi nesse período que tive meu primeiro contato com automações, 
                utilizando ferramentas como Python, Power Automate e PowerShell.`,
  "Analista de TI",
  "IRT | Ituran Road Track",
  "Ago 2019 - Jan 2025"
);

hoverChangeExperience(
  ".codelab",
  `Na Ituran, atuo com automações, consultas, 
                extração de relatórios e visualização de dados com Power BI.
                transformo dados em decisões estratégicas.
                Crio soluções que economizam tempo, reduzem erros e geram valor
                real para as equipes e negócios.`,
  "Analista de MIS Pleno",
  "Ituran",
  "Jan 2025 - Atual"
);
hoverChangeDescription(
  ".html",
  "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
);
hoverChangeDescription(
  ".sass",
  "Sass é um pré-processador CSS que adiciona alguns recursos que não estão disponíveis de forma nativa."
);
hoverChangeDescription(
  ".react",
  "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada."
);
hoverChangeDescription(
  ".next",
  "Next.js é uma estrutura da web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React."
);
hoverChangeDescription(
  ".styled",
  "styled-components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS é um framework CSS que nos fornece classes utilitárias com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática."
);
hoverChangeDescription(
  ".radix",
  "Radix é uma biblioteca que fornece componentes acessíveis e sem estilos para a criação de aplicação em React."
);
hoverChangeDescription(
  ".cypress",
  "Cypress é um framework para automação de testes end-to-end, onde atualmente usa a linguagem JavaScript."
);
hoverChangeDescription(
  ".storybook",
  "Storybook é uma ferramenta que tem como objetivo documentar e testar os componentes da aplicação."
);
