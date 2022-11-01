// import Head from 'next/head';
import { Card, Col, Grid, Image, Text } from "@nextui-org/react";
import { Gradient, grid, SectionTitle } from '../../styles';
import { Logo } from "../ui/Logo";

interface ILayout {
   children: JSX.Element | JSX.Element[];
   title: string;
   description: string;
}

export const LayoutAuth = ({ children, title, description }: ILayout) => (
   <>
      {/* <Head>
         <title>{title}</title>
      </Head> */}
      <Gradient>
         <Grid.Container justify="center" css={{ ...grid, minHeight: '100vh', '@xs': { ai: 'center' } }}>
            <Grid xs={0} sm={5} direction="column" css={{ mr: '2em' }}>
               <Image className="flot" src="/illustration.png" alt="Ilustracion" />
            </Grid>
            <Grid xs={12} sm={5}>
               <Card css={{ py: '1em', ta: 'center' }}>
                  <Card.Header>
                     <Col>
                        <Logo big />
                        <SectionTitle>{title}</SectionTitle>
                        <Text color="gray" size="1em">{description}</Text>
                     </Col>
                  </Card.Header>
                  <Card.Body>
                     {children}
                  </Card.Body>
               </Card>
            </Grid>
         </Grid.Container>
      </Gradient>
   </>
)