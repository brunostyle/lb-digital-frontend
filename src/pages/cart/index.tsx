import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@nextui-org/react";
import { AiOutlineCreditCard } from '../../assets/icons'
import { Button, SectionTitle, SectionSubTitle, grid } from "../../styles";
import { useCart } from "../../state";
import { LayoutApp, ProductCard, ProductOrder } from "../../components";

const Cart = () => {
   const navigate = useNavigate();
   const { cart, subTotal } = useCart();

   useEffect(() => {
      cart.length === 0 && navigate('/cart/empty')
   }, [cart]);

   return (
      <LayoutApp title="Carrito" description="Carrito de compras de la tienda">
         <SectionTitle>Carrito de compras</SectionTitle>
         <SectionSubTitle>Mis productos</SectionSubTitle>
         <Grid.Container gap={2} css={grid}>
            <ProductCard editable cart={cart} />
            <ProductOrder editable cart={cart} subTotal={subTotal}>
               <Button icon={<AiOutlineCreditCard />} onPress={() => navigate('/checkout/summary')}>Comprar</Button>
            </ProductOrder>
         </Grid.Container>
      </LayoutApp>
   )
};

export default Cart;
