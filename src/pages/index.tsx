import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "@mui/material"
import MainLayout from '../components/main-layout'
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GitHub } from "@mui/icons-material"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <div className="px-6">
        <div className="max-w-[1200px] m-auto mt-[24px]">
          <header className="flex justify-between text-white p-[24px] bg-[#1010108F] border-[1px] border-solid border-transparent rounded-[24px] backdrop-blur-md shadow-[0_4px_21px_0_#00000040]">
            <div className="w-[100px] md:w-fit">
              <StaticImage src="../images/saib-logo.svg" alt="SAIB logo" placeholder="none" quality={100} />
            </div>
            <ul className="flex gap-2 md:gap-6 items-center">
              <li>
                <a href="https://www.facebook.com/saibllc" target="_blank">
                  <FacebookIcon className="md:!hidden" />
                  <FacebookIcon className="!hidden md:!block" fontSize="large" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/saibdev" target="_blank">
                  <XIcon className="md:!hidden" />
                  <XIcon className="!hidden md:!block" fontSize="large" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/saibllc" target="_blank">
                  <LinkedInIcon className="md:!hidden" />
                  <LinkedInIcon className="!hidden md:!block" fontSize="large" />
                </a>
              </li>
            </ul>
            <Button href="https://calendly.com/saibdev" target="_blank" variant="contained" className="!rounded-[50px] !hidden xl:!block !py-[12px] !px-[24px] h-fit !text-[18px] !normal-case !font-poppins !font-normal">Let's Talk!</Button>
          </header>

          <main className="mt-16 md:mt-[180px] xl:mt-[169px]">
            <div className="max-w-[630px] m-auto text-center text-white">
              <h1 className="font-bold text-[55px] md:text-[105px] xl:text-[120px] leading-[55px] md:leading-[105px] xl:leading-[120px]">Softwarez, <span className="font-normal font-['Poppins']">at its</span> <span className="text-[#4F37EA]">best</span><span className="font-sans">.</span></h1>
              <p className="mt-6 leading-[27px] text-[18px] px-4 text-justify">SAIB Inc. leads in innovation from the Philippines, fueled by our founders' passion for technology and blockchain. Expert in a wide array of tech advancements, Our capabilities shine brightly in blockchain solutions, among a diverse portfolio of tech expertise. <br />  <br />  <b>Our goal</b>: To leverage technology in crafting transformative solutions that drive business success.</p>
              <Button href="https://calendly.com/saibdev" target="_blank" variant="contained" className="!rounded-[50px] !py-[12px] !px-[24px] !text-[18px] !normal-case !font-poppins !font-normal !m-auto !mt-6">Let's Talk!</Button>
            </div>

            <section className="mt-[130px] xl:mt-[226px] text-white py-8 px-2 xl:p-[60px] rounded-[24px] bg-[#1010108F] border-[1px] border-solid border-transparent backdrop-blur-md shadow-[0_4px_21px_0_#00000040]">
              <h2 className="text-[36px] leading-[45px] md:text-[52px] font-bold xl:leading-[62px] text-center">Empowering Your Digital Presence</h2>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-[45px] md:mt-[75px] xl:mt-16">
                <div className="flex items-center gap-3 px-4">
                  <div className="w-[64px]">
                    <StaticImage height={64} width={64} placeholder="none" src="../images/frontend.svg" alt="" />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold">Frontend Excellence</h3>
                    <p className="text-[14px] mt-2">Transforming ideas into stunning, intuitive web experiences that captivate and engage.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-4">
                  <div className="w-[64px]">
                    <StaticImage height={64} width={64} placeholder="none" src="../images/backend.svg" alt="" />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold">Backend Reliability</h3>
                    <p className="text-[14px] mt-2">Powering your platforms with secure, efficient, and scalable server solutions.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-4">
                  <div className="w-[64px]">
                    <StaticImage height={64} width={64} placeholder="none" src="../images/software-development.svg" alt="" />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold">Software Innovation</h3>
                    <p className="text-[14px] mt-2">Developing bespoke software solutions that drive growth and enhance productivity.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-4">
                  <div className="w-[64px]">
                    <StaticImage height={64} width={64} placeholder="none" src="../images/blockchain.svg" alt="" />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold">Blockchain Mastery</h3>
                    <p className="text-[14px] mt-1">Leveraging blockchain technology to deliver decentralized, transparent, and secure applications.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-4">
                  <div className="w-[64px] h-[64px]">
                    <StaticImage height={64} width={64} placeholder="none" src="../images/smart-contract.svg" alt="" />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold">Smart Contracts</h3>
                    <p className="text-[14px] mt-2">Creating decentralized smart contracts for secure, trustless efficiency.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-[130px] xl:mt-[226px] text-white py-8 px-2 xl:p-[60px] rounded-[24px] bg-[#1010108F] border-[1px] border-solid border-transparent backdrop-blur-md shadow-[0_4px_21px_0_#00000040]">
              <h2 className="text-[36px] leading-[45px] md:text-[52px] font-bold xl:leading-[62px] text-center">Technologies</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-2 gap-y-4 justify-items-start w-full justify-between align-center mt-[45px] md:mt-[75px] xl:mt-16">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-[50px]">
                    <StaticImage alt="" placeholder="none" src="../images/technologies/dotnet-logo.svg" />
                  </div>
                  <p>Dotnet</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-[50px]">
                    <StaticImage alt="" placeholder="none" src="../images/technologies/c-sharp-logo.svg" />
                  </div>
                  <p>C-Sharp</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-[50px]">
                    <StaticImage alt="" placeholder="none" src="../images/technologies/f-sharp-logo.svg" />
                  </div>
                  <p>F-Sharp</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-[65]">
                    <StaticImage width={50} alt="" placeholder="none" src="../images/technologies/haskell.svg" />
                  </div>
                  <p>Haskell</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="">
                    <StaticImage height={50} alt="" placeholder="none" src="../images/technologies/scala-spiral-white.svg" />
                  </div>
                  <p>Scala</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-[50px]">
                    <StaticImage alt="" placeholder="none" src="../images/technologies/python.svg" />
                  </div>
                  <p>Python</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-[50px]">
                    <StaticImage alt="" placeholder="none" src="../images/technologies/nodejs.svg" />
                  </div>
                  <p>NodeJS</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-[50px]">
                    <StaticImage alt="" placeholder="none" src="../images/technologies/javascript-logo.png" />
                  </div>
                  <p>JavaScript</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-[50px]">
                    <StaticImage alt="" placeholder="none" src="../images/technologies/ts-logo.png" />
                  </div>
                  <p>TypeScript</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-[50px]">
                    <StaticImage alt="" placeholder="none" src="../images/technologies/cardano.svg" />
                  </div>
                  <p>Cardano</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-[50px]">
                    <StaticImage height={50} alt="" placeholder="none" src="../images/technologies/aiken.svg" />
                  </div>
                  <p>Aiken</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-[50px]">
                    <StaticImage height={50} alt="" placeholder="none" src="../images/technologies/demeter.svg" />
                  </div>
                  <p>Demeter</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-[50px]">
                    <StaticImage height={50} alt="" placeholder="none" src="../images/technologies/kubernetes.svg" />
                  </div>
                  <p>Kubernetes</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-[50px]">
                    <StaticImage height={50} alt="" placeholder="none" src="../images/technologies/docker.svg" />
                  </div>
                  <p>Docker</p>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <div className="w-[50px]">
                    <StaticImage height={50} alt="" placeholder="none" src="../images/technologies/aws-white.svg" />
                  </div>
                  <p>AWS</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-[50px]">
                    <StaticImage height={50} alt="" placeholder="none" src="../images/technologies/azure-logo.svg" />
                  </div>
                  <p>Azure</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-[50px]">
                    <StaticImage height={50} alt="" placeholder="none" src="../images/technologies/google-cloud.svg" />
                  </div>
                  <p>Google Cloud</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-[50px]">
                    <StaticImage height={50} alt="" placeholder="none" src="../images/technologies/postgresql-logo.png" />
                  </div>
                  <p>PostgresSQL</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-[50px]">
                    <StaticImage height={50} alt="" placeholder="none" src="../images/technologies/mysql-logo.svg" />
                  </div>
                  <p>MySQL</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-[50px]">
                    <StaticImage height={50} alt="" placeholder="none" src="../images/technologies/ms-sql.svg" />
                  </div>
                  <p>MS SQL</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div>
                    <StaticImage height={50} alt="" placeholder="none" src="../images/technologies/mongo-db.svg" />
                  </div>
                  <p>MongoDb</p>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <div className="w-[50px]">
                    <StaticImage height={50} alt="" placeholder="none" src="../images/technologies/linux-logo.svg" />
                  </div>
                  <p>Linux</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-[50px]">
                    <StaticImage height={50} alt="" placeholder="none" src="../images/technologies/windows.svg" />
                  </div>
                  <p>Windows</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-[50px]">
                    <StaticImage height={50} alt="" placeholder="none" src="../images/technologies/apple-white.svg" />
                  </div>
                  <p>Mac</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div>
                    <StaticImage height={50} alt="" placeholder="none" src="../images/technologies/android.svg" />
                  </div>
                  <p>Android</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div>
                    <StaticImage height={50} alt="" placeholder="none" src="../images/technologies/ios.svg" />
                  </div>
                  <p>iOS</p>
                </div>
              </div>
            </section>

            <section className="mt-[130px] xl:mt-[226px] text-white py-16 px-2 xl:p-[80px] rounded-[24px] bg-[#1010108F] border-[1px] border-solid border-transparent backdrop-blur-md shadow-[0_4px_21px_0_#00000040]">
              <h2 className="text-[36px] leading-[45px] md:text-[52px] font-bold xl:leading-[62px] text-center">Building with</h2>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-[45px] md:mt-[75px] xl:mt-16">

                <div className="flex flex-col items-center gap-3 px-4">
                  <div className="w-[106px]">
                    <StaticImage placeholder="none" src="../images/partners/txpipe.svg" alt="" quality={100} />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold text-center">
                      <a href="https://txpipe.io" target="_blank">TxPipe</a>
                    </h3>
                    <p className="text-[14px] mt-2 text-center">Open-source software for a decentralized world.</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 px-4">
                  <div className="w-[106px] md:mt-[47px]">
                    <StaticImage placeholder="none" src="../images/partners/utxo-rpc-logo.svg" alt="" quality={100} />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold text-center">
                      <a href="https://utxorpc.org" target="_blank">UTxoRPC</a>
                    </h3>
                    <p className="text-[14px] mt-2 text-center">Interact with UTxO-based blockchains using a shared specification with focus on developer experience and performance.</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 px-4">
                  <div className="w-[106px] md:mt-[44px] xl:mt-[43px]">
                    <StaticImage placeholder="none" src="../images/partners/demeter.svg" alt="" quality={100} />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold text-center">
                      <a href="https://demeter.run" target="_blank">Demeter</a>
                    </h3>
                    <p className="text-[14px] mt-2 text-center">Build and deploy dApps on a single platform with Demeter – effortlessly scale to support millions of users.</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 px-4">
                  <div className="w-[72px]">
                    <StaticImage placeholder="none" src="../images/partners/coinecta.jpg" alt="" quality={100} />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold text-center">
                      <a href="https://coinecta.fi" target="_blank">Coinecta</a>
                    </h3>
                    <p className="text-[14px] mt-2 text-center">Coinecta is a next-generation Cardano-based token launch platform, striving to be the platform of choice for innovative blockchain projects.</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 px-4">
                  <div className="w-[150px] md:mt-[36px]">
                    <StaticImage placeholder="none" src="../images/partners/crashr.svg" alt="" quality={100} />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold text-center">
                      <a href="https://beta.crashr.io/about" target="_blank">CRASHR</a>
                    </h3>
                    <p className="text-[14px] mt-2 text-center">Crashr bridges traders and users on one unified platform. We call it web3 commerce.</p>
                  </div>
                </div>

              </div>
            </section>

            <section className="mt-[130px] xl:mt-[226px] text-white py-16 px-2 xl:p-[80px] rounded-[24px] bg-[#1010108F] border-[1px] border-solid border-transparent backdrop-blur-md shadow-[0_4px_21px_0_#00000040]">
              <h2 className="text-[36px] leading-[45px] md:text-[52px] font-bold xl:leading-[62px] text-center">History</h2>
              <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-10 mt-[45px] md:mt-[75px] xl:mt-16">

                <div className="flex flex-col items-center gap-3 px-4">
                  <div className="w-[248px]">
                    <a href="https://cardanofoundation.org" target="_blank">
                      <StaticImage quality={100} placeholder="none" src="../images/partners/cf.svg" alt="" />
                    </a>
                  </div>
                  <div>
                    <p className="text-[14px] mt-2 text-center">Swiss foundation supporting evolution of the Cardano cryptocurrency.</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 px-4">
                  <div className="w-[140px] mt-[40px]">
                    <a href="https://www.dcspark.io/" target="_blank">
                      <StaticImage quality={100} placeholder="none" src="../images/partners/dc-spark.svg" alt="" />
                    </a>
                  </div>
                  <div>
                    <p className="text-[14px] mt-2 text-center">Building high-quality crypto products that unify the user experience within blockchain ecosystems..</p>
                  </div>
                </div>

              </div>
            </section>

            <section className="mt-[130px] xl:mt-[226px] text-white py-16 px-2 xl:p-[80px] rounded-[24px] bg-[#1010108F] border-[1px] border-solid border-transparent backdrop-blur-md shadow-[0_4px_21px_0_#00000040]">
              <h2 className="text-[36px] leading-[45px] md:text-[52px] font-bold xl:leading-[62px] text-center">Our Team</h2>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-[45px] md:mt-[75px] xl:mt-16">

                <div className="flex flex-col items-center gap-3 px-4">
                  <div className="w-[123px] rounded-full overflow-hidden">
                    <StaticImage quality={100} placeholder="none" src="../images/team/Clark.png" alt="" />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold text-center">Clark Alesna</h3>
                    <p className="text-[14px] mt-2 text-center">CEO & Software Engineer</p>
                  </div>
                  <div className="flex gap-2">
                    <a href="https://twitter.com/clarkalesna" target="_blank">
                      <XIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/clarkalesna" target="_blank">
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 px-4">
                  <div className="w-[123px] rounded-full overflow-hidden">
                    <StaticImage quality={100} placeholder="none" src="../images/team/Ben.png" alt="" />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold text-center">Ben Jules Dico</h3>
                    <p className="text-[14px] mt-2 text-center">Chief Marketing Officer</p>
                  </div>
                  <div className="flex gap-2">
                    <a href="https://twitter.com/Benjdico" target="_blank">
                      <XIcon />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 px-4">
                  <div className="w-[123px] rounded-full overflow-hidden">
                    <StaticImage quality={100} placeholder="none" src="../images/team/Jon.png" alt="" />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold text-center">Perkins Jon Ong, Ph.D.</h3>
                    <p className="text-[14px] mt-2 text-center">Chief Scientist</p>
                  </div>
                  <div className="flex gap-2">
                    <a href="https://twitter.com/clarkalesna" target="_blank">
                      <XIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/clarkalesna" target="_blank">
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 px-4">
                  <div className="w-[123px] rounded-full overflow-hidden">
                    <StaticImage quality={100} placeholder="none" src="../images/team/Misia.png" alt="" />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold text-center">Misai Legara</h3>
                    <p className="text-[14px] mt-2 text-center">Head of Administration</p>
                  </div>
                  <div className="flex gap-2">
                    <a href="https://twitter.com/iammisai" target="_blank">
                      <XIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/misai-legara/" target="_blank">
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 px-4">
                  <div className="w-[123px] rounded-full overflow-hidden">
                    <StaticImage quality={100} placeholder="none" src="../images/team/RJ.png" alt="" />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold text-center">Reza Jhay Lacanlale</h3>
                    <p className="text-[14px] mt-2 text-center">Senior Software Engineer</p>
                  </div>
                  <div className="flex gap-2">
                    <a href="https://twitter.com/rjlacanlale" target="_blank">
                      <XIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/reza-jhay-lacanlale-6b8b62107/" target="_blank">
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 px-4">
                  <div className="w-[123px] rounded-full overflow-hidden">
                    <StaticImage placeholder="none" src="../images/team/Fonz.png" alt="" quality={100} />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold text-center">Alphonzo M. Escolar</h3>
                    <p className="text-[14px] mt-2 text-center">Software Engineer</p>
                  </div>
                  <div className="flex gap-2">
                    <a href="https://twitter.com/fonz_dev" target="_blank">
                      <XIcon />
                    </a>
                    <a href="https://github.com/phonz-dev" target="_blank">
                      <GitHub />
                    </a>
                  </div>
                </div>

              </div>
            </section>
          </main>

          <footer className="flex flex-col xl:flex-row xl: justify-between p-4 gap-4 justify-center items-center mt-[130px] xl:mt-[226px] text-white rounded-[24px] bg-[#1010108F] border-[1px] border-solid border-transparent backdrop-blur-md shadow-[0_4px_21px_0_#00000040]">
            <div className="md:w-fit">
              <StaticImage src="../images/saib-logo.svg" alt="SAIB logo" placeholder="none" />
            </div>
            <div>&copy; 2024 SAIB Inc. All Rights Reserved.</div>
            <ul className="flex gap-6 items-center">
              <li>
                <a href="https://www.facebook.com/saibllc" target="_blank">
                  <FacebookIcon fontSize="large" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/saibdev" target="_blank">
                  <XIcon fontSize="large" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/saibllc" target="_blank">
                  <LinkedInIcon fontSize="large" />
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </MainLayout>
  );
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
      <meta property="og:description" content="SAIB Website" />
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:url" content="https://twitter.com/saibdev" />
      <meta name="twitter:site" content="@saibdev" />
      <meta name="twitter:creator" content="@saibdev" />
    </>
  )
}
