import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import MainLayout from "../components/common/main-layout"
import Header from "../components/common/header"
import Section1 from "../components/sections/Section1/Section1"
import Section2 from "../components/sections/Section2/Section2"
import Section3 from "../components/sections/Section3/Section3"
import Footer from "../components/common/footer"
import Section7 from "../components/sections/Section7/Section7"
import Section4 from "../components/sections/Section4/Section4"
import Section5 from "../components/sections/Section5/Section5"
import Section8 from "../components/sections/Section8/Section8"
import Section6 from "../components/sections/Section6/Section6"
import Section9 from "../components/sections/Section9/Section9"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Footer />
    </MainLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
      <title>SAIB · Softwarez, at its Best - Where Software Meets Perfection</title>
      <meta name="description" content="SAIB is a Philippines-based engineering firm delivering global blockchain solutions, digital platforms, and innovative software experiences." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://saib.dev/" />

      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />

      <meta name="theme-color" content="#646FFF" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#646FFF" media="(prefers-color-scheme: dark)" />

      <meta property="og:title" content="SAIB | Softwarez, at its Best - Where Software Meets Perfection" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://saib.dev/" />
      <meta property="og:image" content="https://saib.dev/saib-og.png" />
      <meta property="og:image:alt" content="Softwarez, at its Best" />
      <meta property="og:description" content="We are a software development company based in the Philippines, established by connecting the dots of its founders' shared passion for Cardano." />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://saib.dev/" />
      <meta name="twitter:title" content="SAIB | Global Blockchain & Software Innovation" />
      <meta name="twitter:description" content="SAIB delivers blockchain-powered platforms, cutting-edge digital products, and transformative software solutions to clients worldwide." />
      <meta name="twitter:image" content="https://saib.dev/saib-og.png" />
      <meta name="twitter:site" content="https://x.com/saibdev" />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      <meta name="format-detection" content="telephone=no" />
    </>
  )
}