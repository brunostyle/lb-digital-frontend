import { Avatar, Card, Grid, Spacer, Text } from "@nextui-org/react";
import { IProduct } from "../../assets/interfaces"
import { AiFillDelete } from '../../assets/icons'
import { HiddenTitle, Subtitle } from "../../styles";
import { useCart } from "../../state";
import { ProductCounter } from "./ProductCounter";
import { Link } from "react-router-dom";

interface IProductCard {
   cart: IProduct[];
   editable?: boolean;
}

export const ProductCard = ({ cart, editable = false }: IProductCard) => {
   const { removeProductToCart } = useCart();
   return (
      <Grid xs={12} sm={6} direction="column">
         {cart.map(product => (
            <Card key={product.id} css={{ mb: '1em' }}>
               <Grid.Container>
                  <Grid xs={2}>
                     <Link to={"/product/" + product.slug}>
                        <Card.Image src={'/' + product.images[0].original} alt={product.title} width="100%" height="100%" objectFit="cover" />
                     </Link>
                  </Grid>
                  <Grid xs={8}>
                     <Card.Body css={{ py: '.5rem' }}>
                        <HiddenTitle b>{product.title}</HiddenTitle>
                        <Subtitle>{product.description}</Subtitle>
                        <Spacer y={.5} />
                        {editable ? <ProductCounter /> : <Text b>3 items</Text>}
                     </Card.Body>
                  </Grid>
                  <Grid xs={2} direction="column" justify="center" alignItems="center">
                     <Text b>${product.price}</Text>
                     {editable && <><Spacer y={.5} /><Avatar squared pointer size="xs" icon={<AiFillDelete />} onClick={() => removeProductToCart(product)} /></>}
                  </Grid>
               </Grid.Container>
            </Card>
         ))}
      </Grid>
   )
}