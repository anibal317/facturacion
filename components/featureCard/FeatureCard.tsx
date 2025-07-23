import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as LucideIcons from 'lucide-react';
import { TypeIcon as type, LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description?: string;
  color?: string;
  isStrikethrough?: boolean;
  className?: string;
}

export function FeatureCard({ icon, title, description, color, isStrikethrough, className }: FeatureCardProps) {
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons] as LucideIcon | undefined;

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex  justify-center items-center">
          <img src={`../${icon}`} className={`h-24 w-24 ${color}`} alt="" />
        </div>
        <CardTitle className="text-center">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

