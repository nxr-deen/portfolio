"use client";

import { usePathname } from "next/navigation";

export default function MainContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isNotFoundPage =
    pathname === "/not-found" || pathname.includes("/not-found/");

  return (
    <main className="flex-1 relative">
      {children}
    </main>
  );
}
