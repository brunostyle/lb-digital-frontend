import { Card, Col, Row, Spacer, Text } from '@nextui-org/react';
import { Between, WrapContainer, HiddenTitle, Wrap } from '../../styles';
import { useNavigate } from 'react-router-dom';
import { IProduct } from "../../assets/interfaces"

interface IProps {
   category: string;
   icon?: React.ReactNode;
   products: IProduct[];
}

export const ProductList = ({ category, icon, products }: IProps) => {
   const navigate = useNavigate();
   return (
      <WrapContainer>
         <Row align="center" css={{gap: '.5em'}}>
            {icon && icon}
            <Text b>{category}</Text>
         </Row>
         <Spacer y={.5} />
         <Wrap className="opacity">
            {products.map(product => (
               <Card key={product.id} isHoverable isPressable onPress={() => navigate('/product/' + product.slug)}>
                  <Card.Image src={'/' + product.images[0].original} alt={product.title} width="100%" height="100%" objectFit="cover" />
                  <Card.Footer>
                     <Col>
                        <HiddenTitle>{product.title}</HiddenTitle>
                        <Between>
                           <Text b size="small" color="gray">{product.type}</Text>
                           <Text b>${product.price}</Text>
                        </Between>
                     </Col>
                  </Card.Footer>
               </Card>
            ))}
         </Wrap>
      </WrapContainer>
   )
}