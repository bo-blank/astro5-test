import { Button } from "@/components/ui/button"

export default function ButtonDemo() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <h2 className="text-2xl font-bold mb-4">shadcn/ui Button Examples</h2>

      <div className="flex flex-wrap gap-4">
        <Button variant="default">Default Button</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button disabled>Disabled</Button>
        <Button onClick={() => alert('Button clicked!')}>
          Click me
        </Button>
      </div>
    </div>
  )
}
