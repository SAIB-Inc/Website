import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import MainLayout from "../components/common/main-layout"
import Header from "../components/common/header"
import FirstSection from "../components/sections/first-section/first-section"
import SecondSection from "../components/sections/second-section/second-section"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <Header />
      <FirstSection />
      <SecondSection />
    </MainLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
      <title>SAIB · Softwarez, At It's Best - Where Software Meets Perfection</title>
      <meta name="description" content="" />
      <meta property="og:title" content="SAIB | Softwarez, At It's Best - Where Software Meets Perfection" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://saib.dev/" />
      <meta property="og:image" content="https://raw.githubusercontent.com/SAIB-Inc/Assets/main/saib-mission.png" />
      <meta property="og:image:alt" content="Softwarez, At It's Best" />
      <meta property="og:description" content="We are a software development company based in Cebu, Philippines that has been established through connecting the dots of its founders' shared and common passion for Cardano." />
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:url" content="https://twitter.com/saibdev" />
      <meta name="twitter:site" content="@saibdev" />
      <meta name="twitter:creator" content="@saibdev" />
    </>
  )
}
