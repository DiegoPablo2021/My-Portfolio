export interface Testimonial {
  fullName: string;
  profileImg: string;
  jobTitle: string;
  relationship: Relationship;
  profileLink: string;
}

export interface Relationship {
  relationDate: Date;
  relationDescription: string;
}
