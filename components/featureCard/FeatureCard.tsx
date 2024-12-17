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
        <div className="flex justify-center">
          {IconComponent ? (
            <div className={isStrikethrough ? 'relative' : ''}>
              <IconComponent className={`h-12 w-12 ${color}`} />
              {isStrikethrough && (
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="bg-current w-full h-0.5 font-semibold text-lg text-red-500 transform rotate-45"></div>
                </div>
              )}
            </div>
          ) : (
            <div className={`h-12 w-12 ${color} ${isStrikethrough ? 'line-through' : ''}`}>{icon}</div>
          )}
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

