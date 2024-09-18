import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import WebGLFluidSimulation from "../components/Canvas/Simulation";

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
    "Regress - Професійна регресія та прогресія для особистого розвитку, Ласкаво просимо на сайт 'Regress' – вашого надійного партнера у сфері професійних послуг регресії та прогресії. Ми спеціалізуємося на наданні високоякісних консультацій та сеансів, що допомагають вам краще зрозуміти свій минулий досвід і використовувати його для побудови успішного майбутнього. Наші експерти надають індивідуальні послуги, спрямовані на глибоке самопізнання та усвідомлене управління майбутнім. Основні послуги 'Regress' включають: Регресія в минуле життя – допомагаємо знайти відповіді на глибокі питання про ваші минулі втілення. Прогресія у майбутнє – дізнайтесь більше про ймовірні шляхи розвитку вашого життя та кар'єри. Консультації для особистого розвитку – наші спеціалісти працюють з вами, щоб виявити приховані можливості та розкрити ваш потенціал. Ми гарантуємо професійний підхід, конфіденційність та точність у кожному сеансі. Замовляючи наші послуги, ви робите перший крок до кращого розуміння себе та покращення свого життя. Звертайтеся до нас через зручні канали зв'язку та дізнайтеся більше про наші послуги. Відвідайте наш сайт і зробіть перший крок до трансформації свого життя з 'Regress' – вашим провідником у світ професійної регресії та прогресії.",
  openGraph: {
    title: "Regress - Професійні послуги",
    description:
      "Регресія, прогресія та інші професійні послуги для вашого світлого майбутнього.",
    url: "https://raisa-regres.vercel.app/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <WebGLFluidSimulation />
        {children}
      </body>
    </html>
  );
}
