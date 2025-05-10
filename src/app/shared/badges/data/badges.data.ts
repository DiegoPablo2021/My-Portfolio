export interface Badge {
    link: string;
    name: string;
    created_by_name: string;
    image: string;
    issued_at: string;
    desc: string;
    skills: string[];
}

export const BADGES_DATA: Badge[] = [
    {
        link: "https://credentials.databricks.com/38920b37-8e11-4257-aee4-dcc45491d561#acc.EXIzGVZJ",
        name: "Academy Accreditation - Generative AI Fundamentals",
        created_by_name: "Databricks",
        image: "https://templates.images.credential.net/17398951176963021610006048350100.png",
        issued_at: "2025-03-12",
        desc: "Generative AI Fundamentals",
        skills: [
            "databricks",
            "ai",
            "database",
            "etl",
            "data-engineering",
        ]
    },
    {
        link: "https://www.credly.com/badges/332c33be-0b2e-4be3-8999-085bdcb73e63/linked_in_profile",
        name: "AWS Partner: Generative AI Essentials",
        created_by_name: "AWS Partner",
        image: "https://images.credly.com/size/340x340/images/145a5de8-7390-4d57-b4cb-a10e2f9394e2/image.png",
        issued_at: "2024-12-14",
        desc: "Generative AI Essentials",
        skills: [
            "aws",
            "ai",
            "database",
            "data-engineering",
            "data-science",
        ]
    },
    {
        link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=971445",
        name: "Scrum Fundamentals Certified (SFC™)",
        created_by_name: "Scrum Fundamentals",
        image: "https://www.scrumstudy.com/Scrum-Images/brand-logo/badge-SFC.png",
        issued_at: "2023-03-27",
        desc: "Scrum Fundamentals",
        skills: [
            "scrum",
            "agile",
            "project-management",
            "teamwork",
        ]
    },
        {
        link: "https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC4541153&trackId=OCIF2023CA&key=527a195a682b72e9704289922bce406d75d757aa",
        name: "Oracle Certified Foundations Associate",
        created_by_name: "Oracle Certified",
        image: "https://images.credly.com/images/27db49f3-8bae-4314-8a84-884935b569db/50_Oracle_Cloud_Infrastructure.png",
        issued_at: "2023-07-31",
        desc: "Oracle Fundamentals",
        skills: [
            "oracle",
            "cloud",
            "database",
            "infrastructure",
        ]
    },
];