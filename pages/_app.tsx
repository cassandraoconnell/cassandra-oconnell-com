import type { AppProps } from "next/app";
import { Roboto_Mono, Rubik } from "next/font/google";

const mono = Roboto_Mono({ subsets: ["latin"], variable: "--family-mono" });
const sans = Rubik({ subsets: ["latin"], variable: "--family-sans" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${mono.variable} ${sans.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
