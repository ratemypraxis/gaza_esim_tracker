import React from 'react';
import { Chrono } from 'react-chrono';
import styled from 'styled-components';

const Container = styled.div`
  padding: 5%;
`;

const Timeline = () => {
  const items = [
    {
      title: '7 October 2023',
      cardTitle: "Hamas' October 7 attack",
      cardSubtitle: 'How Hamas built a force to attack Israel on 7 October',
      cardDetailedText: `The groups carried out joint drills in Gaza which closely resembled the tactics used during the deadly assault - including at a site less than 1km (0.6 miles) from the barrier with Israel - and posted them on social media.`,
      url: 'https://www.bbc.com/news/world-middle-east-67480680',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://ichef.bbci.co.uk/news/1536/cpsprodpb/6D81/production/_131833082_hamas-camp-2-nc.png.webp',
        },
      },
    },
    {
      title: '16 October 2023',
      cardTitle: 'Internet Blackouts',
      cardSubtitle: `How eSims are helping thousands in Gaza stay connected to the world during communications blackouts`,
      cardDetailedText: `People in Gaza were disconnected from the world yet again last week when internet and phone services collapsed Thursday afternoon after telecommunication providers warned they had no more fuel to continue operating. It took more than 24 hours for services to be temporarily restored after a limited amount of fuel was delivered to help networks power their generators.`,
      url: 'https://www.wusf.org/2023-11-21/how-esims-are-helping-thousands-in-gaza-stay-connected-to-the-world-during-communications-blackouts',
    },
    {
      title: '11 January 2024',
      cardTitle: 'Internet Blackouts',
      cardSubtitle: `Palestinians are using donated eSIM cards to stay in touch with the outside world`,
      cardDetailedText: `The eSIMs are far from a perfect solution: Older phones can’t use them and an existing connection is needed to download new ones. Some of the eSIMs don’t work properly. And it can be hard to catch a signal from a cell tower across a border, Nassar said, which often requires climbing somewhere high, like the exposed roof of a building.`,
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2024-01/240118-gaza-destruction-ew-200p-d41bf0.jpg',
        },
      },
    },
  ];

  return (
    <Container>
      <Chrono
        items={items}
        mode="HORIZONTAL"
        showAllCardsHorizontal
        cardWidth={450}
        cardHeight={300}
        contentDetailsHeight={100}
        fontSizes={{
          title: '1rem',
        }}
        slideShow
        disableToolbar
        scrollable
        theme={{
          primary: '#343a40',
          secondary: '#3a5a40',
          cardTitleColor: '#588157',
          titleColor: '#343a40',
          titleColorActive: 'white',
        }}
      />
    </Container>
  );
};

export default Timeline;
