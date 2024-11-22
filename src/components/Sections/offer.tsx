import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { ChevronLeft, ChevronRight, Wallet, Paid, Collections, Article, AccountBalance, Web, CheckCircle, RocketLaunch, Flare, AutoAwesome } from '@mui/icons-material';
import { StaticImage } from 'gatsby-plugin-image';

const Offer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToDisplay, setCardsToDisplay] = useState(3);

  const offerCards = [
    {
      Title: 'dApp Development',
      Icon: Web,
      DescriptionList: [
        "Innovative dApp development",
        "Offchain Development",
        "Frontend Integration"
      ],
      ButtonTitle: 'Develop Now'
    },
    {
      Title: 'Smart Contracts',
      Icon: Article,
      DescriptionList: [
        "Aiken Development",
        "PlutusTx Development",
        "Plutarch Development",
      ],
      ButtonTitle: 'Build Now'
    },
    {
      Title: 'NFT Minting',
      Icon: Collections,
      DescriptionList: [
        "Mint and Manage NFTs",
        "Build customized marketplaces",
        "Designed for scalability and flexibility"
      ],
      ButtonTitle: 'Mint Now'
    },
    {
      Title: 'Token Creation',
      Icon: Paid,
      DescriptionList: [
        "Custom Cardano Native Tokens creation",
        "Deployment and management solutions",
        "Ideal for diverse applications"
      ],
      ButtonTitle: 'Create Now'
    },
    {
      Title: 'Staking Solutions',
      Icon: AccountBalance,
      DescriptionList: [
        "Staking pools and platforms to engage users",
        "Maximize rewards for community involvement",
        "Designed for ease of use and reliability"
      ],
      ButtonTitle: 'Build Staking'
    },
    {
      Title: 'Wallet Integration',
      Icon: Wallet,
      DescriptionList: [
        "Integrate popular wallets like Yoroi and Daedalus",
        "Develop custom wallets for your ecosystem",
        "Ensure smooth and secure user experience"
      ],
      ButtonTitle: 'Integrate Wallets'
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToDisplay(3);
      } else if (window.innerWidth >= 768) {
        setCardsToDisplay(2);
      } else {
        setCardsToDisplay(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, offerCards.length - cardsToDisplay)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const isNextDisabled = currentIndex >= offerCards.length - cardsToDisplay;
  const isPrevDisabled = currentIndex <= 0;

  return (
    <div className="relative px-4 md:px-6">
      <div className="flex flex-col items-center justify-center gap-[10px] mb-10">
        <div className="flex items-center justify-center gap-[10px]">
          <StaticImage alt="" src="../../images/technologies/Cardano.svg" className="w-[60px]" />
          <p className="text-[40px] md:text-[50px]">Cardano</p>
        </div>
        <p className="max-sm:text-[14px] text-[18px] text-center max-w-[400px] sm:max-w-[500px] md:max-w-[700px] px-4">
          We offer development services on the Cardano blockchain, delivering secure, scalable, and innovative solutions tailored to your needs.
        </p>
      </div>
      <div className="overflow-hidden h-[580px]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToDisplay)}%)`,
          }}
        >
          {offerCards.map((datum, index) => (
            <div
              key={index}
              className={`w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2`}
            >
              <Paper elevation={4} className="p-[2px] rounded-[24px] bg-gradient-to-r from-blue1 via-blue2 to-purple">
                <Card
                  className={`h-[530px] sm:h-[510px] lg:h-[560px] rounded-[24px] p-[24px] flex flex-col gap-y-[10px] shadow-md text-black transition-all duration-500 justify-between backdrop-blur-md bg-white`}
                >
                  <CardContent
                    sx={{
                      padding:0
                    }}
                  >
                    <div className="flex items-center justify-center h-[100px] sm:h-[120px]">
                      {React.createElement(datum.Icon, { className: '!text-[50px] text-[#4F37EA]' })}
                    </div>
                    <div className="flex flex-col gap-[15px] h-[180px] text-[18px]">
                      <div className="flex flex-col items-center justify-center gap-[10px] h-[100px]">
                        <p className="text-[22px] sm:text-[24px] text-left font-semibold">{datum.Title}</p>
                      </div>
                      <div className="max-[520px]:block flex flex-col justify-center items-center md:block">
                      <List
                      >
                        {datum.DescriptionList.map((item, idx) => (
                          <ListItem key={idx} className="max-[380px]:text-[14px] max-md:text-[18px] text-[18px]">
                            <ListItemIcon sx={{ minWidth: "35px" }}>
                              <RocketLaunch style={{ color: "#4F37EA", fontSize: "18px" }} />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>
                        ))}
                      </List>
                      </div>
                    </div>
                  </CardContent>
                  <div className="flex justify-center items-center">
                    <Button
                      href="https://calendly.com/saibdev"
                      target="_blank"
                      variant="contained"
                      className="w-[220px] md:w-[250px] lg:w-[280px] !rounded-[18px] !py-[10px] !px-[10px] text-[18px] !normal-case !font-poppins !font-normal !text-white tracking-tight hover:!text-purple hover:!bg-white"
                    >
                      {datum.ButtonTitle}
                    </Button>
                  </div>
                </Card>
              </Paper>
            </div>
          ))};
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={handlePrev}
          disabled={isPrevDisabled}
          className={`p-4 rounded-full shadow-lg transition-all flex items-center justify-center
            ${isPrevDisabled
              ? 'bg-gray-200 text-gray-400'
              : 'bg-white hover:bg-gray-100 text-gray-800'
            }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          disabled={isNextDisabled}
          className={`p-4 !rounded-full shadow-lg transition-all flex items-center justify-center
            ${isNextDisabled
              ? 'bg-gray-200 text-gray-400'
              : 'bg-white hover:bg-gray-100 text-gray-800'
            }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Offer;