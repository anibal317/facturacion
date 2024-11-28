import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-md transition-shadow hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-50",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight text-neutral-900 dark:text-neutral-100",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-neutral-500 dark:text-neutral-400", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// Helper function to recursively render nested items
const renderItems = (items: any) => {
  if (Array.isArray(items)) {
    return (
      <ul className="space-y-2 pl-6 list-disc marker:text-neutral-400">
        {items.map((item, index) => (
          <li key={index} className="text-neutral-700 dark:text-neutral-300">
            {typeof item === "string" ? (
              item
            ) : (
              Object.entries(item).map(([key, value]) => (
                <React.Fragment key={key}>
                  <strong className="font-medium text-neutral-900 dark:text-neutral-100">{key}</strong>
                  {renderItems(value)}
                </React.Fragment>
              ))
            )}
          </li>
        ))}
      </ul>
    );
  }
  return null;
};

// Main component to display cards from JSON
const CardFromJson = ({ data }: { data: any }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Object.entries(data).map(([key, value]: [string, any]) => (
        <Card key={key} className="flex flex-col">
          <CardHeader className="flex-grow">
            <CardTitle className="mb-2">{key}</CardTitle>
            {value.description && (
              <CardDescription>{value.description}</CardDescription>
            )}
          </CardHeader>
          <CardContent className="bg-neutral-50 dark:bg-neutral-800 rounded-b-lg">
            {value.items && renderItems(value.items)}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardFromJson,
};