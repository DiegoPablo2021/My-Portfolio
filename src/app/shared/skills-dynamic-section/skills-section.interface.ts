export interface SkillSection {
  id: string;
  title: string;
  subtitle: string;
  skills: Array<Skill>;
}

export interface Skill {
  name: string;
  icon: string;
  percentage: number;
}
