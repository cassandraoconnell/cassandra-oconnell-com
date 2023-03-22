import type { AppProps } from "next/app";
import { Darker_Grotesque } from "next/font/google";

const font = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font",
  weight: ["400", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${font.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
