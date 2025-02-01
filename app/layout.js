import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Providers } from "./providers";


export const metadata = {
  title: "NextJS 15 + MUI v6 + Tailwind v3 Example App",
  description: "This app demonstrates how to integrate Next.js 15 with Material UI (MUI) v6 and Tailwind CSS v3 for modern and efficient web development.",
};

export default function RootLayout({ children }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <html lang="en">
        <body id="__next">
          <Providers>{children}</Providers>
        </body>
      </html>
    </AppRouterCacheProvider>
  );
}
