import React from 'react';
import styled from 'styled-components';
import coverImg from '../assets/images/coverImg.jpg';

const Container = styled.div`
  margin-top: 40px;
  position: relative;
`;

const CoverImg = styled.img`
  width: 100%;
  display: block;
`;

const CoverImgMask = styled.div`
  background-color: rgba(0, 0, 0, 0.85);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CoverImgTitle = styled.h1`
  color: white;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3em;
`;

const CoverImgText = styled.div`
  color: white;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2em;
  border: 2px solid white;
  width: 40%;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Cover = () => (
  <Container>
    <CoverImg src={coverImg} alt="cover image" />
    <CoverImgMask>
      <CoverImgTitle># Keep Gaza Connected</CoverImgTitle>
      <CoverImgText>
        <p>
          People in the Gaza Strip faced numerous internet and cellphone blackouts throughout the
          long war, making it hard to connect with loved ones and secure resources. The initiative
          of donating eSims for Gaza becomes their last grasp at contact with the outside world.
          Gaza eSim Tracker is a website to the story of why Gaza needs eSims, how it works and how
          to contribute.
        </p>
      </CoverImgText>
    </CoverImgMask>
  </Container>
);

export default Cover;
