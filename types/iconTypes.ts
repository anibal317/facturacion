// types.ts (puedes crear un archivo separado para tus tipos)
export type Feature = {
    icon: 'CheckCircle' | 'BarChart' | 'Clock' | 'Headphones' | 'PieChart' ; // Asegúrate de que estos coincidan con los íconos que usas
    title: string;
    description: string;
    color: string; // Puedes ser más específico si lo deseas
};