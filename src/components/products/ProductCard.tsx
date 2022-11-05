import { Avatar, Card, Grid, Spacer, Text } from "@nextui-org/react";
import { IProduct } from "../../utils/interfaces"
import { AiFillDelete } from '../../assets/icons'
import { HiddenTitle, StyledCategory, Subtitle } from "../../styles";
import { useCart } from "../../state";
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
            <Card key={product._id} css={{ mb: '1em' }}>
               <Grid.Container>
                  <Grid xs={2}>
                     <Link to={"/product/" + product.slug}>
                        <Card.Image src={'/products/' + product.images[0]} alt={product.title} width="100%" height="100%" objectFit="cover" />
                     </Link>
                  </Grid>
                  <Grid xs={8}>
                     <Card.Body css={{ py: '.5rem' }}>
                        <HiddenTitle b>{product.title}</HiddenTitle>
                        <Subtitle>{product.description}</Subtitle>
                        <Spacer y={.5} />
                        <div><StyledCategory type={product.category}>{product.category}</StyledCategory></div>
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