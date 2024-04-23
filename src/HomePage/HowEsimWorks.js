import React from 'react';
import styled from 'styled-components';

import {
  Grid,
  Header,
  Image,
  Segment,
  Step,
  StepContent,
  StepDescription,
  Icon,
  StepTitle,
} from 'semantic-ui-react';

import eSimImg from '../assets/images/eSimImg.jpeg';

const Container = styled.div`
  background-color: #eeeeee;
`;

const StyledSegment = styled(Segment)`
  padding: 8em 0em !important;
`;

const HowEsimWorks = () => (
  <Container>
    <StyledSegment vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              What is an eSIM?
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              eSIM stands for "embedded SIM card." Like a traditional SIM, it's a tiny chip that
              identifies you as a mobile subscriber and connects you to a network. Unlike a
              traditional SIM, an eSIM is a digital SIM that allows you to activate a cellular plan
              from your carrier without having to use a physical SIM card. For smartphone or tablet,
              the eSIM is often referred to as just a software profile that is downloaded via a QR
              code. eSIMs are widely used in international roaming and are supported by most major
              carriers worldwide.
            </p>
            <Header as="h3" style={{ fontSize: '2em' }}>
              How does it work?
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              You can think of an eSIM as a digital SIM card. It's a reprogrammable chip that allows
              you to download data on the go. You don't need to find a SIM vendor or fiddle with a
              physical card to change your carrier or data plan. Instead, you can purchase and
              download an eSIM data plan and instantly connect to a mobile network.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image bordered rounded size="large" src={eSimImg} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="left">
            <Step.Group widths={3}>
              <Step>
                <Icon name="cart" />
                <StepContent>
                  <StepTitle>Purchase</StepTitle>
                  <StepDescription>
                    Select and purchase an eSim plan from online providers.
                  </StepDescription>
                </StepContent>
              </Step>

              <Step active>
                <Icon name="qrcode" />
                <StepContent>
                  <StepTitle>Receive QRCode</StepTitle>
                  <StepDescription>
                    You will receive a QRCode through email or the eSim provider's app.
                  </StepDescription>
                </StepContent>
              </Step>

              <Step>
                <Icon name="mobile" />
                <StepContent>
                  <StepTitle>Activate</StepTitle>
                  <StepDescription>
                    Activate your eSim on your smartphone in cellular settings.
                  </StepDescription>
                </StepContent>
              </Step>
            </Step.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </StyledSegment>
  </Container>
);

export default HowEsimWorks;
