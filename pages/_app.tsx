import "../styles/globals.css";
import type { AppProps } from "next/app";
import "lib/base.css";
import { RecoilRoot } from "recoil";
import { SkeletonTheme } from "react-loading-skeleton";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SkeletonTheme baseColor="#6464642b" highlightColor="#8585852b">
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SkeletonTheme>
  );
}
