import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import MainLayout from "../components/mainLayout"
import Header from "../components/header"
import FirstSection from "../components/sections/first-section"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <Header />
      <FirstSection />
    </MainLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
