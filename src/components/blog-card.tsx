import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

interface BlogCard extends React.ComponentPropsWithoutRef<typeof Card> {}
export function BlogCard({ className, ...props }: BlogCard) {
  return (
    <Card>
      <CardContent>
        {/* If image is not present show placeholder skeleton */}
        <img
          src="/placeholder.svg"
          alt="Blog post image"
          width={400}
          height={225}
          className="aspect-video w-full rounded-lg object-cover"
        />
        <div className="mt-4 space-y-2">
          <div className="text-sm text-muted-foreground">
            <time dateTime="2023-05-15">May 15, 2023</time>
          </div>
          <h3 className="text-lg font-semibold">Title of the blog</h3>
          <div className="flex flex-wrap gap-2">
            <Badge>Test</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

{
  /* <Card>
<CardContent>
  <img
    src="/placeholder.svg"
    alt="Blog post image"
    width={400}
    height={225}
    className="aspect-video w-full rounded-lg object-cover"
  />
  <div className="mt-4 space-y-2">
    <div className="text-sm text-muted-foreground">
      <time dateTime="2023-05-15">May 15, 2023</time>
    </div>
    <h3 className="text-lg font-semibold">Designing for Accessibility: A Comprehensive Guide</h3>
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline">Design</Badge>
      <Badge variant="outline">Accessibility</Badge>
      <Badge variant="outline">UX</Badge>
    </div>
  </div>
</CardContent>
</Card> */
}
