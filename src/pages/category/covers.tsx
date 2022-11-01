import { filter } from "../../assets/products";
import { LayoutApp, ProductList } from "../../components";
import { BsFillGrid3X3GapFill } from "../../assets/icons";

const Covers = () => {
   const products = filter('women');
   
   return (
      <LayoutApp title="LB Digital - Portadas" description="Encuentra las mejores portadas de LB Digital">
         <ProductList category="Portadas" icon={<BsFillGrid3X3GapFill />} products={products} />
      </LayoutApp>
   )
};

export default Covers;
