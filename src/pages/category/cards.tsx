import { filter } from "../../assets/products";
import { LayoutApp, ProductList } from "../../components";
import { BsFillCreditCard2FrontFill } from "../../assets/icons";

const Cards = () => {
   const products = filter('tarjetas');
   
   return (
      <LayoutApp title="LB Digital - Tarjetas digitales" description="Encuentra las mejores tarjetas digitales de LB Digital">
         <ProductList category="Tarjetas digitales" icon={<BsFillCreditCard2FrontFill />} products={products} />
      </LayoutApp>
   )
};

export default Cards;
