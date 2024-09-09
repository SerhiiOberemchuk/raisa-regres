import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Regress - Професійна регресія та прогресія",
  description:
    "Замовте професійну регресію і прогресію з гарантованим результатом. Дізнайтесь більше про умови роботи.",
  openGraph: {
    title: "Regress - Професійні послуги",
    description:
      "Регресія, прогресія та інші професійні послуги для вашого світлого майбутнього.",
    url: "https://yourwebsite.com",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        alt: "Regress Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regress - Професійна регресія",
    description: "Професійна регресія та прогресія для вашого майбутнього.",
    images: "https://yourwebsite.com/twitter-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Regress</title>

        <meta name="description" content="Професійна регресія та прогресія" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Regress",
              url: "https://yourwebsite.com",
              logo: "https://yourwebsite.com/logo.jpg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+380971768196",
                contactType: "Customer Service",
              },
              sameAs: [
                "https://www.facebook.com/yourpage",
                "https://www.instagram.com/yourprofile",
              ],
            }),
          }}
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
