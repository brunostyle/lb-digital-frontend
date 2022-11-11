import { Button, Grid, Image, Row, Spacer, Text } from "@nextui-org/react";
import { BsInstagram, FaFacebookF } from "../../assets/icons";

export const Banner = () => (
   <Grid.Container alignItems="center" css={{ minHeight: '100vh', px: '1em' }}>
      <Grid xs={12} sm={6} direction="column">
         <Text h1 size="3em">
            Encontra productos de calidad en
            <Text span css={{ textGradient: '45deg, $blue100 -20%, $pink600 50%' }}> LB Digital </Text>
            porque diseñar es hacerlo visual
         </Text>
         <Text color="gray">Tarjetas, Portadas, Logos, Diseños personalizados, etc</Text>
         <Spacer />
         <Row>
            <Button auto size="sm">
               <FaFacebookF />
               <Text hideIn="xs"><Spacer x={.5} /></Text>
               <Text hideIn="xs" color="white">Facebook</Text>
            </Button>
            <Spacer />
            <Button as="a" auto size="sm" bordered href="https://www.instagram.com/lb_digitaloficial/" target="_blank">
               <BsInstagram />
               <Text hideIn="xs"><Spacer x={.5} /></Text>
               <Text hideIn="xs" color="inherit">Instagram</Text>
            </Button>
         </Row>
      </Grid>
      <Grid xs={0} sm={6}>
         <Image className="flot" src="illustration.png" alt="Ilustracion" />
      </Grid>
   </Grid.Container>
)
