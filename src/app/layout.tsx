import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.subset.woff2",
  display: "swap",
  weight: "75 920",
  style: "normal",
});

export const metadata: Metadata = {
  title: "이다용 블로그",
  description:
    "안녕하세요, 프론트엔드 개발자 이다용이에요. 이 블로그는 소프트웨어 엔지니어로서 혹은 세상에 도움이 되는 것들을 만드는 사람으로서 성장하는 과정을 기록하기 위해 만들어졌어요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="google-site-verification"
          content="mkp2fkrzmdVoExgK4_PybejhTOZs188pdNept2jMIiA"
        />
      </head>
      <body className={pretendard.className}>
        <div className="mx-auto max-w-screen-sm py-8 px-4">
          <nav className="mb-8">
            <Link href="/" className="font-bold text-2xl">
              이다용
            </Link>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
