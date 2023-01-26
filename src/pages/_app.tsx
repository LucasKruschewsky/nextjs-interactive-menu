import "../styles/global.css";

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import type { AppProps } from "next/app";
import { DefaultLayout } from "@/layouts/defaultLayout/defaultLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
