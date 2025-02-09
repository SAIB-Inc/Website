import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import MainLayout from "../components/common/main-layout"
import Header from "../components/common/header"
import FirstSection from "../components/sections/first-section/first-section"
import SecondSection from "../components/sections/second-section/second-section"
import ThirdSection from "../components/sections/third-section/third-section"
import FourthSection from "../components/sections/fourth-section/fourth-section"
import FifthSection from "../components/sections/fifth-section/fifth-section"
import Footer from "../components/common/footer"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </MainLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
      <title>SAIB · Softwarez, At It&apos;s Best - Where Software Meets Perfection</title>
      <meta name="description" content="SAIB is a Philippines-based engineering firm delivering global blockchain solutions, digital platforms, and innovative software experiences." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://saib.dev/" />

      <meta name="theme-color" content="#6F03E0" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#6F03E0" media="(prefers-color-scheme: dark)" />

      <meta property="og:title" content="SAIB | Softwarez, At It's Best - Where Software Meets Perfection" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://saib.dev/" />
      <meta property="og:image" content="https://saib.dev/saib-og.png" />
      <meta property="og:image:alt" content="Softwarez, At It's Best" />
      <meta property="og:description" content="We are a software development company based in Philippines that has been established through connecting the dots of its founders' shared and common passion for Cardano." />

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