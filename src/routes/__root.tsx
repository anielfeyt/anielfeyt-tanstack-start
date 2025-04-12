import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import * as React from "react";
import { DefaultCatchBoundary } from "~/components/DefaultCatchBoundary";
import { NotFound } from "~/components/NotFound";
import ScrollTop from "~/components/ScrollTop";
import appCss from "~/styles/app.css?url";
import { seo } from "~/utils/seo";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      ...seo({
        title: "Aniel Feyt - Web Developer",
        description: `Aniel Feyt, Web developer based in Cape Town, South Africa.`,
      }),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
      { rel: "icon", href: "/favicon.ico" },
    ],
    scripts: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-7DSL4DHNN5",
        async: true,
      },
      {
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "G-7DSL4DHNN5");
        `,
      },
    ],
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    );
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html className="scroll-smooth">
      <head>
        <HeadContent />
      </head>

      <body className="font-outfit">
        <header className="flex flex-col sm:flex-row justify-between text-slate-500 border-b border-slate-200 bg-[image:repeating-linear-gradient(315deg,_#e2e8f0_0,_#e2e8f0_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed">
          <a
            className="flex gap-4 justify-center items-center p-4 border-b sm:border-b-0 border-r border-slate-200 hover:bg-slate-500 hover:text-white transition-colors bg-white"
            href="/"
          >
            Aniel Feyt{" "}
            <svg
              aria-hidden="true"
              viewBox="0 0 6 6"
              className="h-1.5 w-1.5 overflow-visible fill-current stroke-current"
            >
              <path
                d="M3 0L6 3L3 6L0 3Z"
                strokeWidth="2"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
          <nav className="flex">
            <a
              className="grow text-center inline-block p-2 md:p-4 border-x border-slate-200 hover:bg-slate-500 hover:text-white transition-colors bg-white"
              href="#intro"
            >
              Intro
            </a>
            <a
              className="grow text-center inline-block p-2 md:p-4 border-r border-slate-200 hover:bg-slate-500 hover:text-white transition-colors bg-white"
              href="#experience"
            >
              Experience
            </a>
            <a
              className="grow text-center inline-block p-2 md:p-4  hover:bg-slate-500 hover:text-white transition-colors bg-white"
              href="#technologies"
            >
              Technologies
            </a>
          </nav>
        </header>
        {children}
        <ScrollTop />
        <TanStackRouterDevtools position="bottom-left" />
        <Scripts />
      </body>
    </html>
  );
}
