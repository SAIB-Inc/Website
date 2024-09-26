import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const MainCards: React.FC = () => {
  const cardIcons = useStaticQuery(graphql`
        query {
            Frontend: file(relativePath: {eq: "icons/frontend.svg"}) {
                publicURL
            }
            Backend: file(relativePath: {eq: "icons/backend.svg"}) {
                publicURL
            }
            Software: file(relativePath: {eq: "icons/software.svg"}) {
                publicURL
            }
            Blockchain: file(relativePath: {eq: "icons/blockchain.svg"}) {
                publicURL
            }
            Contract: file(relativePath: {eq: "icons/contract.svg"}) {
                publicURL
            }
        }
    `);

  const data = [
    {
      title: 'Frontend Excellence',
      description:
        'Transforming ideas into stunning, intuitive web experiences that captivate and engage.',
      icon: cardIcons.Frontend.publicURL,
    },
    {
      title: 'Backend Reliability',
      description:
        'Powering your platforms with secure, efficient, and scalable server solutions.',
      icon: cardIcons.Backend.publicURL,
    },
    {
      title: 'Software Innovation',
      description:
        'Developing bespoke software solutions that drive growth and enhance productivity.',
      icon: cardIcons.Software.publicURL,
    },
    {
      title: 'Blockchain Mastery',
      description:
        'Leveraging blockchain technology to deliver decentralized, transparent, secure applications.',
      icon: cardIcons.Blockchain.publicURL,
    },
    {
      title: 'Smart Contracts',
      description:
        'Creating decentralized smart contracts for secure, trustless efficiency.',
      icon: cardIcons.Contract.publicURL,
    },
  ];

  const cardOrder = [0, 1, 2, 3, 4];
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cardOrder.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-6 gap-4">
      {data.map((card, index) => {
        const colSpan = (index === 0 || index === 1) ? 'md:col-span-3' : 'md:col-span-2';

        return (
          <div
            key={index}
            className={`col-span-6 ${colSpan} rounded-[24px] p-[32px] xl:p-[48px] border-[1px] border-gray-tint flex flex-col gap-y-[10px] transition-all duration-500 ${activeCard === cardOrder.indexOf(index)
                ? 'bg-[#4F37EA] text-white -translate-y-1 scale-105'
                : 'bg-white text-black'
              }`}
          >
            <img
              alt=""
              src={card.icon}
              className="w-[40px] h-[40px]"
              style={{
                filter: activeCard === cardOrder.indexOf(index)
                  ? 'brightness(0) invert(1)'
                  : 'none'
              }}
            />
            <p className="text-[30px] xl:text-[45px] tracking-tighter font-bold">
              {card.title}
            </p>
            <p className="text-[18px]">{card.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MainCards;
