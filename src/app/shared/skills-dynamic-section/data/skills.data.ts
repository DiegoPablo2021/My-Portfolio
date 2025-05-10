import { Skill, SkillSection } from "../skills-section.interface";

const TECHNICAL_HARD_SKILLS: Array<Skill> = [
  {
    name: 'Python',
    icon: 'assets/icons/code.svg',
    percentage: 40
  },
  {
    name: 'SQL',
    icon: 'assets/icons/database.svg',
    percentage: 70
  },
  {
    name: 'Databricks',
    icon: 'assets/icons/terminal.svg',
    percentage: 40
  },
  {
    name: 'Power BI',
    icon: 'assets/icons/chart-no-axes-column-increasing.svg',
    percentage: 70
  },
  {
    name: 'Azure Data Factory',
    icon: 'assets/icons/server.svg',
    percentage: 40,
  },
  {
    name: 'Git',
    icon: 'assets/icons/git-branch.svg',
    percentage: 70
  }
];

const TECHNICAL_SOFT_SKILLS: Array<Skill> = [
  {
    name: 'Communication',
    icon: 'assets/icons/terminal.svg',
    percentage: 100
  },
  {
    name: 'Teamwork',
    icon: 'assets/icons/terminal.svg',
    percentage: 85
  },
  {
    name: 'Problem Solving',
    icon: 'assets/icons/terminal.svg',
    percentage: 70
  },
  {
    name: 'Adaptability',
    icon: 'assets/icons/terminal.svg',
    percentage: 75
  },
  {
    name: 'Empathy',
    icon: 'assets/icons/terminal.svg',
    percentage: 65
  },
  {
    name: 'Time Management',
    icon: 'assets/icons/terminal.svg',
    percentage: 70
  }
];


export const HARD_SKILLS_DATA: SkillSection = {
  id: 'hard-skills',
  title: 'Hard Skills',
  subtitle: 'Technologies and tools I work with',
  skills: TECHNICAL_HARD_SKILLS,
}

export const SOFT_SKILLS_DATA: SkillSection = {
  id: 'soft-skills',
  title: 'Soft Skills',
  subtitle: 'Personal and interpersonal skills',
  skills: TECHNICAL_SOFT_SKILLS,
}



