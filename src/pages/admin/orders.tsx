import { Avatar, Checkbox, Table, Text, User } from "@nextui-org/react";
import { AiOutlineFolderOpen } from '../../assets/icons';
import { Link } from "react-router-dom";
import { FullScreenLoading, LayoutAdmin, Nothing } from "../../components";
import { cell, cellBig } from "../../styles";
import { useOrders } from "../../hooks";

const Orders = () => {
   const { data: orders = [], isLoading } = useOrders({ key: "orders", path: "/orders" })
   return (
      <LayoutAdmin showTitle={orders.length !== 0} title="Ordenes" description="Historial de ordenes">
         {isLoading
            ? <FullScreenLoading />
            : orders.length === 0 ?
               <Nothing text="Aún no hay ordenes" svg="/no-results.svg" />
               :
               <Table className="opacity" aria-label="Historial de ordenes" selectionMode="single" shadow={false}>
                  <Table.Header>
                     <Table.Column css={cellBig}>CLIENTE</Table.Column>
                     {/* <Table.Column css={cell}>FECHA</Table.Column> */}
                     <Table.Column css={cell}>ITEMS</Table.Column>
                     <Table.Column css={cell}>TOTAL</Table.Column>
                     <Table.Column css={cell}>PAGADA</Table.Column>
                     <Table.Column css={cell}>ORDEN</Table.Column>
                  </Table.Header>
                  <Table.Body>
                     {orders.map(order => (
                        <Table.Row key={order._id}>
                           <Table.Cell css={cellBig}><User src={order.avatar} squared size="sm" color="primary" name={order.name} description={order.email} text={order.name.charAt(0).toUpperCase()} css={{ p: 0, '.nextui-avatar-text': { color: 'white' } }} /></Table.Cell>
                           {/* <Table.Cell css={cell}><Text b small>{order.createdAt.toLocaleDateString()}</Text></Table.Cell> */}
                           <Table.Cell css={cell}><Text b small>{order.numberOfItems}</Text></Table.Cell>
                           <Table.Cell css={cell}><Text b small>${order.total}</Text></Table.Cell>
                           <Table.Cell css={cell}><Checkbox aria-label="Pagada" isSelected={order.paid} isReadOnly /></Table.Cell>
                           <Table.Cell css={cell}><Link to="/"><Avatar squared size="sm" pointer icon={<AiOutlineFolderOpen />} /></Link></Table.Cell>
                        </Table.Row>
                     ))}
                  </Table.Body>
                  <Table.Pagination shadow noMargin align="center" size="sm" rowsPerPage={8} />
               </Table>
         }
      </LayoutAdmin>
   )
}

export default Orders;