export interface SubSectionItem {
    [key: string]: string[] | undefined;
  }
  
  export interface Section {
    description: string;
    items: (string | SubSectionItem)[];
  }
  
  export interface Data {
    [key: string]: Section;
  }
  
  