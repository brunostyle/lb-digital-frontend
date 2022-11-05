import { Avatar, Card, Grid, Text } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { BiPencil } from '../../assets/icons'
import { IProduct } from "../../utils/interfaces"
import { Between, Subtitle } from "../../styles";

interface IProductOrder {
   cart: IProduct[];
   children: JSX.Element;
   subTotal: number;
   editable?: boolean;
}

export const ProductOrder = ({ cart, subTotal, editable = false, children }: IProductOrder) => {
   const navigate = useNavigate();
   return (
      <Grid xs={12} sm={6} css={{ h: 'max-content' }}>
         <Card>
            <Card.Header>
               {editable ? <Text b>Orden</Text> : <Text b>Resumen ({cart.length} {cart.length === 1 ? 'producto' : 'productos'})</Text>}
            </Card.Header>
            <Card.Body css={{ pt: 0 }}>
               {!editable &&
                  <Between>
                     <Text b>Orden</Text>
                     <Avatar squared pointer size="xs" icon={<BiPencil />} onClick={() => navigate('/cart')} />
                  </Between>}
               <Between>
                  <Subtitle>No. Productos</Subtitle>
                  <Subtitle>{cart.length} {cart.length === 1 ? 'item' : 'items'}</Subtitle>
               </Between>
               <Between>
                  <Subtitle>SubTotal</Subtitle>
                  <Subtitle>${subTotal}</Subtitle>
               </Between>
               <Between>
                  <Subtitle>Impuestos</Subtitle>
                  <Subtitle>$5</Subtitle>
               </Between>
               <Between>
                  <Text b>Total:</Text>
                  <Text b>${subTotal + 5}</Text>
               </Between>
            </Card.Body>
            <Card.Footer>
               {children}
            </Card.Footer>
         </Card>
      </Grid>
   )
}