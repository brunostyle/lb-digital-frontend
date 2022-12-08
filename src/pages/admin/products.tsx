import { Avatar, Table, Text } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { BiPencil } from "../../assets/icons";
import { FullScreenLoading, LayoutAdmin, Nothing } from "../../components";
import { cell, StyledCategory } from "../../styles";
import { useProducts } from "../../hooks";

const Products = () => {
   const { data: products = [], isLoading } = useProducts({ key: "products", path: "/products" });
   return (
      <LayoutAdmin showTitle={products.length !== 0} funtional title="Productos" description="Mantenimiento de productos">
         {isLoading
            ? <FullScreenLoading />
            : products.length === 0
               ? <Nothing text="Aún no hay productos" svg="/no-results.svg" />
               :
               <Table className="opacity" aria-label="Products" shadow={false}>
                  <Table.Header>
                     <Table.Column css={cell}>IMAGEN</Table.Column>
                     <Table.Column css={cell}>TITULO</Table.Column>
                     <Table.Column css={cell}>DESCRIPCIÓN</Table.Column>
                     <Table.Column css={cell}>PRECIO</Table.Column>
                     <Table.Column css={cell}>CATEGORIA</Table.Column>
                     <Table.Column css={cell}>EDITAR</Table.Column>
                  </Table.Header>
                  <Table.Body>
                     {products.map(product => (
                        <Table.Row key={product._id}>
                           <Table.Cell css={cell}><Avatar squared size="sm" src={'/products/' + product.images[0]} /></Table.Cell>
                           <Table.Cell css={cell}><Text b small>{product.title}</Text></Table.Cell>
                           <Table.Cell css={cell}><Text small color="gray">{product.description}</Text></Table.Cell>
                           <Table.Cell css={cell}><Text b small>${product.price}</Text></Table.Cell>
                           <Table.Cell css={cell}><StyledCategory type={product.category}>{product.category}</StyledCategory></Table.Cell>
                           <Table.Cell css={cell}><Link to={product.slug}><Avatar squared pointer size="sm" icon={<BiPencil />} /></Link></Table.Cell>
                        </Table.Row>
                     ))}
                  </Table.Body>
                  <Table.Pagination shadow noMargin align="center" size="sm" rowsPerPage={8} />
               </Table>
         }
      </LayoutAdmin>
   )
}

export default Products;