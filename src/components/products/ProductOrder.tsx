import { Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { BiPencil } from '../../assets/icons'
import { Between, Subtitle, Title } from "../../styles";
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
      <Card className="h-max">
         <CardHeader>
            {editable ? <Title>Orden</Title> : <Title>Resumen ({numberOfItems} {numberOfItems === 1 ? 'producto' : 'productos'})</Title>}
         </CardHeader>
         <CardBody className="gap-4">
            {!editable &&
               <Between>
                  <Title>Orden</Title>
                  <Button isIconOnly variant="faded" size="sm" onPress={() => router('/cart')}><BiPencil /></Button>
               </Between>}
            <Between>
               <Subtitle>No. Productos</Subtitle>
               <Subtitle>{numberOfItems} {numberOfItems === 1 ? 'item' : 'items'}</Subtitle>
            </Between>
            <Between>
               <Title>Total</Title>
               <Title>${total}</Title>
            </Between>
         </CardBody>
         <CardFooter>
            {children}
         </CardFooter>
      </Card>
   )
}