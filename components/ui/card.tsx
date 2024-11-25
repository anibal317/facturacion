import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border border-neutral-200 bg-white text-neutral-950 shadow dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
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
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight bg-gray-200 p-2 rounded-sm ml-[-20px]", className)}
    {...props}
    />
    
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
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
  <div ref={ref} className={cn("p-6 pt-0 bg-slate-200 rounded-sm", className)} {...props} />
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
      
      <ul className="pl-6 list-disc">
        {items.map((item, index) => (
          <li key={index}>
            {typeof item === "string" ? (
              item
            ) : (
              Object.entries(item).map(([key, value]) => (
                <React.Fragment key={key}>
                  <strong>{key}</strong>
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
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Object.entries(data).map(([key, value]: [string, any]) => (
        <Card key={key}>
          <CardHeader>
            <CardTitle> {key} </CardTitle>
            {value.description && (
              <CardDescription>{value.description}</CardDescription>
            )}
          </CardHeader>
          <CardContent>
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
