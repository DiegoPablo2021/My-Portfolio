import { Project } from "../project-card/project.interface";

export const PROJECTS_DATA: Array<Project> =  [
  {
    title: 'Data Dashboard',
    description: 'Interactive commercial dashboard developed in Power BI, featuring detailed business metrics and KPIs',
    viewLink: 'https://github.com/DiegoPablo2021/dashboard-comercial/raw/1689a5ab3aaa710f106952eea3305dbd85e0d622/dashboard-comercia.pbix',
    sourceCode: 'https://github.com/DiegoPablo2021/dashboard-comercial',
    imageUrl: 'assets/projects/01-dashboard.jpg'
  },
  {
    title: 'ETL Pipeline',
    description: 'Automated data processing pipeline built with Python and SQL',
    viewLink: 'https://preview--portfolio-diego-pablo.lovable.app/portfolio-diego-pablo#',
    sourceCode: 'https://preview--portfolio-diego-pablo.lovable.app/portfolio-diego-pablo#',
    imageUrl: 'assets/projects/02-etl.jpg',
  }
];
