import { Avatar, Checkbox, Table, Text, User } from "@nextui-org/react";
import { AiOutlineFolderOpen } from '../../assets/icons';
import { IOrder } from "../../utils/interfaces";
import { Link } from "react-router-dom";
import { LayoutAdmin, Nothing } from "../../components";
import { cell, cellBig } from "../../styles";

const orders: IOrder[] = [
   {
      _id: '1',
      name: "Bruno Brian Millalipe",
      email: "brunobrianmillalipe@gmail.com",
      paid: false,
      numberOfItems: 1,
      total: 10,
      createdAt: new Date(),
      updatedAt: new Date()
   },
   {
      _id: '2',
      name: "Boomer Millalipe",
      email: "boomermillalipe@gmail.com",
      paid: true,
      numberOfItems: 2,
      total: 20,
      createdAt: new Date(),
      updatedAt: new Date()
   },
   {
      _id: '3',
      name: "Lucas Saucedo",
      email: "lucassaucedo@gmail.com",
      paid: false,
      numberOfItems: 4,
      total: 100,
      createdAt: new Date(),
      updatedAt: new Date()
   },
   {
      _id: '4',
      name: "Inva Millalipe",
      email: "inva@gmail.com",
      paid: true,
      numberOfItems: 10,
      total: 3000,
      createdAt: new Date(),
      updatedAt: new Date()
   },
];

const Orders = () => (
   <LayoutAdmin showTitle={orders.length !== 0} title="Ordenes" description="Historial de ordenes">
      {orders.length === 0 ?
         <Nothing text="Aún no hay ordenes" svg="/no-results.svg" />
         :
         <Table aria-label="Historial de ordenes" selectionMode="single" shadow={false}>
            <Table.Header>
               <Table.Column css={cellBig}>CLIENTE</Table.Column>
               <Table.Column css={cell}>FECHA</Table.Column>
               <Table.Column css={cell}>ITEMS</Table.Column>
               <Table.Column css={cell}>TOTAL</Table.Column>
               <Table.Column css={cell}>PAGADA</Table.Column>
               <Table.Column css={cell}>ORDEN</Table.Column>
            </Table.Header>
            <Table.Body>
               {orders.map(order => (
                  <Table.Row key={order._id}>
                     <Table.Cell css={cellBig}><User squared size="sm" color="primary" name={order.name} description={order.email} text={order.name.charAt(0).toUpperCase()} css={{ p: 0 }} /></Table.Cell>
                     <Table.Cell css={cell}><Text b small>{order.createdAt.toLocaleDateString()}</Text></Table.Cell>
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

export default Orders;