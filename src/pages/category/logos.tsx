import { filter } from "../../assets/products";
import { LayoutApp, ProductList } from "../../components";
import { IoLogoPolymer } from "../../assets/icons";

const Logos = () => {
   const products = filter('logos');
   
   return (
      <LayoutApp title="LB Digital - Logos" description="Encuentra los mejores logos en LB Digital">
         <ProductList category="Logos" icon={<IoLogoPolymer />} products={products} />
      </LayoutApp>
   )
};

export default Logos;