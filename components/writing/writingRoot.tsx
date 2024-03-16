import type { ReactNode } from "react";

interface WritingRootProps {
  children: ReactNode;
}

export function WritingRoot({ children }: WritingRootProps) {
  return (
    <div className="animate-fade-up flex  items-center gap-6 rounded-sm bg-white p-2">
      {children}
    </div>
  );
}