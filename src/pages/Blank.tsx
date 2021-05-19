import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
//styles
import styled from 'styled-components';
//components
import PageFade from '../components/ui/PageFade';
import Header from '../components/ui/Header';
import Heading from '../components/ui/Heading';
import Card from '../components/ui/Card';

//styled
const BlankWrap = styled.div`
  position: relative;
`;

const Blank: React.FC<RouteComponentProps> = (): JSX.Element => {
  return (
    <PageFade>
      <BlankWrap>
        <Header>
          <Heading as="h1" heading4 marginBottom="0px" fontWeight="500">Blank</Heading>
        </Header>
        <Card>
          <Heading as="h2" heading1 marginBottom="8px">Blank</Heading>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In veniam sit laboriosam atque ipsum itaque officia praesentium ut! Vero veritatis sapiente adipisci earum enim ut, facere esse! Deleniti possimus aliquam porro nam vel delectus! Quaerat quos dolorum placeat eaque dignissimos culpa quod? Aliquid eos ea quos consectetur delectus vitae optio rerum nostrum necessitatibus voluptatum harum sit vero perferendis culpa fugit dignissimos voluptatem, vel inventore corrupti voluptas magni odio ipsam et odit! Qui asperiores iure repudiandae, soluta nostrum fugit suscipit voluptates laborum voluptas commodi dignissimos voluptatum nesciunt quam laboriosam vitae odio sed hic, blanditiis ducimus quos nihil. Vel obcaecati, fuga veniam minus modi aliquam? Mollitia dolorum excepturi dicta cum, ab recusandae consequuntur. Rem eveniet aliquam quo illo consectetur adipisci sit. Doloribus nam provident velit, quisquam eum eos ea suscipit quaerat architecto repellat odit totam dolorum perspiciatis aperiam at fuga eaque porro unde natus facere? Fuga repellendus, eius nemo officia dolores, ea ipsa ad doloribus ex a excepturi aliquid dolor fugit, iste vel amet voluptas? Ipsam asperiores odio, quasi temporibus qui architecto necessitatibus neque consectetur eveniet officiis sequi quisquam molestiae, ipsa praesentium laboriosam debitis porro! Aliquid dolorum omnis temporibus modi a hic, culpa consequatur expedita, quas sit ad! Necessitatibus esse pariatur sapiente.</p>
        </Card>
      </BlankWrap>
    </PageFade>
  );
};

export default Blank;