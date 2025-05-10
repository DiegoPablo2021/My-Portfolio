export interface Experience {
    id: number;
    title: string;
    company: string;
    location: string;
    description: string;
    period: string;
}

export const EXPERIENCES: Experience[] = [
    {
        id: 1,
        title: 'Data Analyst',
        company: 'Capgemini',
        location: 'Remote',
        description: 'Working as a data analyst, I have been using languages ​​and tools such as: SQL, Python, Excel, Power BI, Tableau, Database, Azure and Databricks. I also studied low-code with PegaSystems.',
        period: 'Set 2024 - Present',
    },
    {
        id: 2,
        title: 'Data Analyst',
        company: 'Programmers Beyond IT Brazil',
        location: 'Remote',
        description: 'Acting as a Data Analyst, as my main activity I use the SuperAnnotate platform to label and describe images so that they can be trained by an AI natural language processing algorithm to generate assertive descriptions.',
        period: 'Ago 2023 - Ago 2024',
    },

    {
        id: 3,
        title: 'Developer Trainee',
        company: 'Wipro',
        location: 'Remote',
        description: 'I had experience as a systems programmer trainee, where I completed a Java FullStack course at Impacta College. I learned HTML, CSS, Bootstrap, TypeScript, JavaScript, Angular, Springboot, MongoDB and Java. I also took courses on Azure, AWS and GCP clouds.',
        period: 'Jul 2022 - Oct 2023',
    },
    {
        id: 4,
        title: 'Intern Software Enginneer',
        company: 'Banco PAN',
        location: 'Remote',
        description: 'I worked as a software engineer, developing banners and landing pages for promotions, ensuring a fluid and responsive user experience. In addition, I contributed to the optimization of this experience by developing a promotions page and working on the approval and production of software through the Lumis platform.',
        period: 'Feb 2023 - Jun 2023',
    },
];