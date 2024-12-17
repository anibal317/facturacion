export interface NavLink {
  text: string;
  href: string;
  enabled?: boolean;
}

export interface NavigationData {
  logo: {
    icon: string;
    text: string;
    href: string;
  };
  mainLinks: NavLink[];
  dropdownLinks: NavLink[];
}

