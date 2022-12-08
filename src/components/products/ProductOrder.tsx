import { Avatar, Card, Grid, Text } from "@nextui-org/react";
import { BiPencil } from '../../assets/icons'
import { Between, Subtitle } from "../../styles";
import { useNavigate as useRouter } from "react-router-dom";

interface IProductOrder {
   children: JSX.Element;
   total: number;
   numberOfItems: number;
   editable?: boolean;
}

export const ProductOrder = ({ total, numberOfItems, editable = false, children }: IProductOrder) => {
   const router = useRouter();
   return (
      <Grid xs={12} sm={6} css={{ h: 'max-content' }}>
         <Card>
            <Card.Header>
               {editable ? <Text b>Orden</Text> : <Text b>Resumen ({numberOfItems} {numberOfItems === 1 ? 'producto' : 'productos'})</Text>}
            </Card.Header>
            <Card.Body css={{ pt: 0 }}>
               {!editable &&
                  <Between>
                     <Text b>Orden</Text>
                     <Avatar squared pointer size="xs" icon={<BiPencil />} onClick={() => router('/cart')} />
                  </Between>}
               <Between>
                  <Subtitle>No. Productos</Subtitle>
                  <Subtitle>{numberOfItems} {numberOfItems === 1 ? 'item' : 'items'}</Subtitle>
               </Between>
               <Between>
                  <Text b>Total:</Text>
                  <Text b>${total}</Text>
               </Between>
            </Card.Body>
            <Card.Footer>
               {children}
            </Card.Footer>
         </Card>
      </Grid>
   )
}