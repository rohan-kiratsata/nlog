import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof Card>;

export function NewsletterCard({ className, ...props }: CardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscribe to newsletter</CardTitle>
      </CardHeader>
    </Card>
  );
}
