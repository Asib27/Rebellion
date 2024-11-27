"use client";

import NavBar from "./navbar";

export default function PageLayout({ children }) {
  return (
    <div className="w-full h-full flex flex-col">
      <NavBar />

      <div className="px-10 flex-1">{children}</div>
      <div className="px-10 mt-4 w-full bg-zinc-200 dark:bg-slate-900">
          <div className="p-4 flex items-center justify-center">
                Footer
          </div>
      </div>
    </div>
  );
}
