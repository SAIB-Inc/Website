import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Card } from '@mui/material';
import { Star, Language, X, FormatQuote } from '@mui/icons-material';
import Levvy from '../../images/partners/Levvy';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const logos = useStaticQuery(graphql`
    query {
      Demeter: file(relativePath: {eq: "partners/demeter.svg"}) {
        publicURL
      }
      TxPipe: file(relativePath: {eq: "partners/txpipe.svg"}) {
        publicURL
      }
      UtxORPC: file(relativePath: {eq: "partners/utxo-rpc.svg"}) {
        publicURL
      }
      Coinecta: file(relativePath: {eq: "partners/coinecta.svg"}) {
        publicURL   
      }
      Crashr: file(relativePath: {eq: "partners/crashr.svg"}) {
        publicURL
      }
    }
  `);

  const testimonials = [
    {
      name: "Crashr",
      logo: logos.Crashr.publicURL,
      comment: "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      webLinks: [
        {
          link: "https://www.crashr.io",
          linkLogo: Language,

        },
        {
          link: "https://x.com/crashr_io",
          linkLogo: X
        }
      ],
      backgroundGradient: 'bg-gradient-to-tr from-[#0A0E2E] from-1% to-[#2E3A82]'
    },
    {
      name: "UtxORPC",
      logo: logos.UtxORPC.publicURL,
      comment: "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      webLinks: [
        {
          link: "https://utxorpc.org",
          linkLogo: Language,

        }
      ],
      backgroundGradient: 'bg-gradient-to-r from-[#0d4d65] to-[#146b54]'
    },
    {
      name: "Demeter",
      logo: logos.Demeter.publicURL,
      comment: "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      webLinks: [
        {
          link: "https://demeter.run",
          linkLogo: Language,

        },
        {
          link: "https://x.com/DemeterRun",
          linkLogo: X
        }
      ],
      backgroundGradient: 'bg-gradient-to-tl from-gray-800 to-[#c23461]'
    },
    {
      name: "Levvy",
      comment: "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      webLinks: [
        {
          link: "https://levvy.fi",
          linkLogo: Language,

        },
        {
          link: "https://x.com/levvyfinance",
          linkLogo: X
        }
      ],
      backgroundGradient: 'bg-gradient-to-b from-orange-100 via-lime-200 to-emerald-300'
    },
    {
      name: "Coinecta",
      logo: logos.Coinecta.publicURL,
      comment: "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      webLinks: [
        {
          link: "https://coinecta.fi",
          linkLogo: Language,

        },
        {
          link: "https://x.com/CoinectaFinance",
          linkLogo: X
        }
      ],
      backgroundGradient: 'bg-gradient-to-t from-[#F2994A] to-[#FDE7C6] to-70%'
    },
    {
      name: "TxPipe",
      logo: logos.TxPipe.publicURL,
      comment: "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      webLinks: [
        {
          link: "https://txpipe.io",
          linkLogo: Language,

        },
        {
          link: "https://x.com/txpipe_tools",
          linkLogo: X
        }
      ],
      backgroundGradient: 'bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500'
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isPaused) {
      interval = setInterval(() => {
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          return nextIndex > (isMobile ? testimonials.length - 1 : maxIndex) ? 0 : nextIndex;
        });
        setTimeout(() => setIsAnimating(false), 300);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPaused, isMobile]);

  const handleDotClick = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const maxIndex = testimonials.length - 2;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[1300px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out h-full"
            style={{
              transform: `translateX(-${currentIndex * (isMobile ? 100 : 50)}%)`,
            }}
          >
            {testimonials.map((datum, index) => (
              <div key={index} className={`${isMobile ? 'min-w-full' : 'min-w-[50%]'} p-6`}>
                <div className={`p-[2px] rounded-lg ${datum.backgroundGradient}`}>
                  <Card
                    sx={{
                      bgcolor: 'white',
                      borderRadius: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'between',
                      height: '100%',
                      backdropFilter: 'blur(8px)'
                    }}
                  >
                    <div className="px-8 pt-[40px] flex flex-col gap-[20px]">
                      <p className="relative text-justify text-gray-700 text-[14px] sm:text-[18px]">
                        <FormatQuote sx={{ 
                          transform: 'scaleX(-1)',
                          fontSize: 24,
                          marginTop: -1,
                          marginRight: 1
                        }} />
                        {datum.comment}
                        <FormatQuote sx={{ 
                          fontSize: 24,
                          marginLeft: 1
                        }} />
                      </p>
                    </div>
                    <div>
                      <div className='flex justify-between items-center mt-[20px] px-8 pt-8 pb-6'>
                        <div className='flex gap-3'>
                          {datum.webLinks.map((links, index) => (
                            <a
                              key={index}
                              target="_blank"
                              rel="noopener noreferrer"
                              href={links.link}
                            >
                              {React.createElement(links.linkLogo, {
                                className: '!text-[24px] hover:text-gray-500 transition-colors duration-500 ease-in-out'
                              })}
                            </a>
                          ))}
                        </div>
                        <div className="flex items-center justify-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="text-[24px] text-yellow-400 fill-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                      <div className={`flex justify-center items-center py-2 ${datum.backgroundGradient} rounded-b-lg`}>
                        {datum.name === 'Levvy' ?
                          <Levvy width={100} height={46} />
                          : <img src={datum.logo} alt="Company logo" className="w-[100px] h-[46px]" />
                        }
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center lg:mt-8 gap-4">
          <div className="flex gap-2">
            {Array.from({ length: isMobile ? testimonials.length : maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;