import { cn } from "@/lib/utils";
import { Card, CardHeader } from "../ui/card";

interface BlogCardSkeleton
  extends React.ComponentPropsWithoutRef<typeof Card> {}
export function BlogCardSkeleton({ className, ...props }: BlogCardSkeleton) {
  return (
    <Card className={cn("h-full overflow-hidden rounded-lg", className)}>
      <CardHeader className="border-b"></CardHeader>
    </Card>
  );
}
