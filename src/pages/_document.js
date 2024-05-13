import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>3Web</title>
        {/* ระบุ URL ของไฟล์รูปภาพในโลโก้ */}
        <link rel="icon" href="/image/LOGO-2 1.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
