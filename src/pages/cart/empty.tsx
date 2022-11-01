import { useNavigate } from "react-router-dom";
import { LayoutApp, Nothing } from "../../components";
import { Button } from "../../styles";

const Empty = () => {
   const navigate = useNavigate();

   return (
      <LayoutApp title="Carrito vació" description="No hay artículos en el carrito de compras">
         <Nothing text="Tu carrito esta vacío." svg="/cart-empty.svg">
            <Button onPress={() => navigate('/')}>Ir a la tienda</Button>
         </Nothing>
      </LayoutApp>
   )
};

export default Empty;
