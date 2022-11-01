import { Card, Grid, Spacer, Text } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import { FiShoppingCart } from "../../assets/icons";
import { getProductBySlug } from "../../assets/products";
import { Button, grid, Title } from "../../styles";
import { useCart } from "../../state";
import { LayoutApp, ProductCounter } from "../../components";
import ImageGallery from 'react-image-gallery';

const Product = () => {
   const { slug } = useParams();
   const { addProductToCart } = useCart();
   const product = getProductBySlug(String(slug))!;
   const images = product.images.map(img => ({ original: '/' + img.original }))

   const handleAddToCart = () => addProductToCart(product!);

   return (
      <LayoutApp title={product.title} description={product.description}>
         <Grid.Container gap={2} css={grid}>
            <Grid>
               <Card>
                  <Grid.Container>
                     <Grid xs={12} sm={5} alignItems="center" justify="center">
                        <ImageGallery showPlayButton={false} showFullscreenButton={false} showThumbnails={false} items={images} />
                     </Grid>
                     <Grid xs={12} sm={7}>
                        <Card.Body>
                           <Title h1>{product.title}</Title>
                           <Card.Divider />
                           <Text b h4>${product.price}</Text>
                           <Text b h6>Cantidad</Text>
                           <ProductCounter />
                           <Spacer x={.5} />
                           <Text b h6>Descripción</Text>
                           <Text color="gray" size="small">{product.description}</Text>
                           <Spacer x={.5} />
                           <Button icon={<FiShoppingCart />} onPress={handleAddToCart}>Agregar al carrito</Button>
                        </Card.Body>
                     </Grid>
                  </Grid.Container>
               </Card>
            </Grid>
         </Grid.Container>
      </LayoutApp>
   )
}

export default Product;