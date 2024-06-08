import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type CardProps = React.ComponentProps<typeof Card>;

export function NewsletterCard({ className, ...props }: CardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Newsletter</CardTitle>
        <CardDescription>
          Subscribe to newsletter to get new posts directly in your inbox.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex w-full flex-col gap-3">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Subscribe</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
