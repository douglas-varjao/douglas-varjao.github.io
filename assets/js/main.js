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
  "Analista de MIS",
  "Ituran",
  "Jan 2025 - Atual"
);
hoverChangeDescription(
  ".html",
  "Consultas, modelagem e otimização de bancos de dados relacionais (SQL Server, MySQL, etc.)."
);
hoverChangeDescription(
  ".css",
  "Automação de tarefas, análises avançadas e scripts para ETL."
);
hoverChangeDescription(
  ".js",
  "Desenvolvimento de queries, relatórios e formulários para pequenas bases de dados."
);
hoverChangeDescription(
  ".sass",
  "Criação de dashboards interativos e relatórios dinâmicos com dados empresariais."
);
hoverChangeDescription(
  ".react",
  "Tabelas dinâmicas, macros (VBA), fórmulas complexas e análise estatística."
);
hoverChangeDescription(
  ".next",
  "Fórmulas e transformações no Power BI (DAX) e modelagem de dados (Power Query)."
);
hoverChangeDescription(
  ".styled",
  "Criação de fluxos automatizados entre SharePoint, Teams, Forms, Excel etc."
);
hoverChangeDescription(
  ".tailwind",
  "Criação de aplicativos personalizados com integração a SharePoint, Dataverse e automações via Power Platform."
);
hoverChangeDescription(
  ".typescript",
  "Noções de Azure AD, instâncias SQL no Azure, banco relacional na nuvem e pipelines de dados."
);
hoverChangeDescription(
  ".radix",
  "Listas, bibliotecas e gerenciamento de informações colaborativas na nuvem."
);
hoverChangeDescription(
  ".cypress",
  "Estatística descritiva, visualização e storytelling para insights de negócio."
);
hoverChangeDescription(
  ".storybook",
  "Programação de microcontroladores com foco em projetos Arduino, automações físicas e controle de sensores e atuadores."
);
