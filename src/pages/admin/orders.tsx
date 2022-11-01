import { Avatar, Checkbox, Table, Text } from "@nextui-org/react";
import { AiOutlineFolderOpen } from '../../assets/icons';
import { IOrderHistory } from "../../assets/interfaces";
import { Link } from "react-router-dom";
import { LayoutAdmin, Nothing } from "../../components";
import { cell } from "../../styles";

const orders: IOrderHistory[] = [
   {
      id: '1',
      name: "Bruno Brian Millalipe",
      paid: false,
      createdAt: new Date(),
   },
   {
      id: '2',
      name: "Boomer Millalipe",
      paid: true,
      createdAt: new Date(),
   },
   {
      id: '3',
      name: "Lucas Saucedo",
      paid: false,
      createdAt: new Date(),
   },
   {
      id: '4',
      name: "Inva Millalipe",
      paid: true,
      createdAt: new Date(),
   },
];

const Orders = () => (
   <LayoutAdmin showTitle={orders.length !== 0} title="Ordenes" description="Historial de ordenes">
      {orders.length === 0 ?
         <Nothing text="Aún no hay ordenes" svg="/no-results.svg" />
         :
         <Table aria-label="Historial de ordenes" selectionMode="single" shadow={false}>
            <Table.Header>
               <Table.Column css={cell}>ID</Table.Column>
               <Table.Column css={cell}>NOMBRE</Table.Column>
               <Table.Column css={cell}>CREADA EN</Table.Column>
               <Table.Column css={cell}>PAGADA</Table.Column>
               <Table.Column css={cell}>ORDEN</Table.Column>
            </Table.Header>
            <Table.Body>
               {orders.map(order => (
                  <Table.Row key={order.id}>
                     <Table.Cell css={cell}>{order.id}</Table.Cell>
                     <Table.Cell css={cell}><Text b small>{order.name}</Text></Table.Cell>
                     <Table.Cell css={cell}><Text b small>{order.createdAt.toLocaleString()}</Text></Table.Cell>
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