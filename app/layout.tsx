import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

/** Google Inter font, latin subset only for smaller bundle. */
const inter = Inter({ subsets: ["latin"] });

/** Production base URL for canonical links, Open Graph, and absolute asset URLs. */
const siteUrl = "https://anupam-portfolio-seven.vercel.app";

/** SEO and social sharing: title, description, Open Graph, Twitter cards, icons, robots. */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anupam Saha | Software Engineer & Mobile Developer",
    template: "%s | Anupam Saha",
  },
  description:
    "Portfolio of Anupam Saha — Software Engineer specializing in Mobile Application Development, App UI, and Full-Stack Engineering. Explore projects, skills, and contact details.",
  keywords: [
    "Anupam Saha",
    "Software Engineer",
    "Mobile Developer",
    "App UI Developer",
    "React Native",
    "Flutter",
    "iOS",
    "Android",
    "Next.js",
    "React",
    "TypeScript",
    "developer portfolio",
  ],
  authors: [
    {
      name: "Anupam Saha",
      url: "https://linktr.ee/helloanupam",
    },
  ],
  creator: "Anupam Saha",
  publisher: "Anupam Saha",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Anupam Saha's Portfolio",
    title: "Anupam Saha | Software Engineer & Mobile Developer",
    description:
      "Modern & Stylish Portfolio — Anupam Saha, Software Engineer specializing in Mobile Development, App UI, and Full-Stack Engineering.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anupam Saha | Software Engineer & Mobile Developer",
    description:
      "Modern & Stylish Portfolio — Anupam Saha, Software Engineer specializing in Mobile Development, App UI, and Full-Stack Engineering.",
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
