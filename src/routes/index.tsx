import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="flex min-h-svh flex-col px-6 py-8 sm:px-10">
      <header className="flex items-center justify-between">
        <span className="flex items-center gap-2.5 font-mono text-xs tracking-[0.25em] uppercase">
          <img
            src="/icon-xmigas.png"
            alt="xmigas"
            width={32}
            height={32}
            className="size-8"
          />
          xmigas prototype
        </span>
        <span className="font-mono text-xs tracking-[0.15em] text-muted-foreground">
          2026
        </span>
      </header>

      <main className="flex flex-1 flex-col justify-center">
        <div className="flex max-w-4xl flex-col gap-8">
          <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
            TanStack Start · React · shadcn/ui
          </p>

          <h1 className="font-heading text-4xl font-medium tracking-tight text-foreground sm:text-6xl">
            A quiet place to begin building.
          </h1>

          <p className="max-w-md text-sm leading-loose text-muted-foreground">
            This is the starting point for your prototype. The layout is plain
            by design, so what you add next is the only thing worth noticing.
          </p>

          <div className="flex items-center gap-4">
            <Button>
              Start building
              <ArrowRight weight="bold" />
            </Button>
            <span className="font-mono text-xs text-muted-foreground">
              60+ components installed
            </span>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-between border-t border-border pt-4">
        <span className="font-mono text-xs text-muted-foreground">
          @/components/ui
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          Lora · Inter · Mono
        </span>
      </footer>
    </div>
  );
}
