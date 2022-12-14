import { Grid } from "@nextui-org/react";
import { grid, SectionSubTitle, SectionTitle } from "../../styles";
import { useCart } from "../../state";
import { LayoutApp, ProductCard, ProductOrder, ProductPay } from "../../components";

const Summary = () => {
   const { cart, total, numberOfItems } = useCart();

   return (
      <LayoutApp title="Resumen de orden" description="Resumen de la orden">
         <SectionTitle>Orden: ABC123</SectionTitle>
         <SectionSubTitle>Resumen de la orden</SectionSubTitle>
         <Grid.Container gap={2} css={grid}>
            <ProductCard cart={cart} />
            <ProductOrder total={total} numberOfItems={numberOfItems}>
               <ProductPay />
            </ProductOrder>
         </Grid.Container>
      </LayoutApp>
   )
};

export default Summary;
