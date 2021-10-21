import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <title>EMurrell.com</title>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Eric Murrell- Web Developer Portfolio"
      />
      <meta property="og:image" content="/metaimage1.jpg" />
      <meta property="og:title" content="EMurrell.com" />
      <meta
        property="og:description"
        content="Eric Murrell Web Developer Portfolio"
      />
      <meta name="twitter:image" content="/metaimage1.jpg" />
      <meta name="twitter:title" content="EMurrell.com" />
      <meta
        name="twitter:description"
        content="Eric Murrell Web Developer Portfolio"
      />
      <link rel="icon" href="/emfavi-png.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
