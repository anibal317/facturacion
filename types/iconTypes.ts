export type Feature = {
    icon: string; // Changed from keyof typeof import('lucide-react') to string
    title: string;
    description?: string;
    color?: string;
    isStrikethrough?: boolean;
};

