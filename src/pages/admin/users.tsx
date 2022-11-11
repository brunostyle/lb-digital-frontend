import { Avatar, Table, Text } from "@nextui-org/react";
import { IUser } from "../../utils/interfaces";
import { LayoutAdmin, Nothing } from "../../components";
import { cell, StyledRole } from "../../styles";

const users: IUser[] = [
   {
      _id: '1',
      name: "Bruno Brian Millalipe",
      email: 'brunobrianmillalipe123456@gmail.com',
      role: 'admin',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
   },
   {
      _id: '2',
      name: "Boomer Millalipe",
      email: "boomer@gmail.com",
      role: 'client',
      avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
   },
   {
      _id: '3',
      name: "Lucas Saucedo",
      email: "lucas@gmail.com",
      role: 'admin',
      avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
   },
   {
      _id: '4',
      name: "Inva Millalipe",
      email: "inva@gmail.com",
      role: 'client',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
   },
   {
      _id: '5',
      name: "Santi",
      email: "santi@gmail.com",
      role: 'client',
      avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
   },
   {
      _id: '6',
      name: "test1",
      email: "test1@gmail.com",
      role: 'client',
   }
];

const Users = () => (
   <LayoutAdmin showTitle={users.length !== 0} title="Usuarios" description="Mantenimiento de usuarios">
      {users.length === 0 ?
         <Nothing text="Aún no hay usuarios" svg="/no-results.svg" />
         :
         <Table aria-label="Usuarios" selectionMode="multiple" shadow={false}>
            <Table.Header>
               <Table.Column css={cell}>AVATAR</Table.Column>
               <Table.Column css={cell}>NOMBRE</Table.Column>
               <Table.Column css={cell}>CORREO</Table.Column>
               <Table.Column css={cell}>ROLE</Table.Column>
            </Table.Header>
            <Table.Body>
               {users.map(user => (
                  <Table.Row key={user._id}>
                     <Table.Cell css={cell}><Avatar squared size="sm" color="primary" textColor="white" text={user.name.charAt(0).toUpperCase()} src={user.avatar} /></Table.Cell>
                     <Table.Cell css={cell}><Text b small>{user.name}</Text></Table.Cell>
                     <Table.Cell css={cell}><Text small color="gray">{user.email}</Text></Table.Cell>
                     <Table.Cell css={cell}><StyledRole type={user.role}>{user.role === "admin" ? "ADMIN" : "CLIENTE"}</StyledRole></Table.Cell>
                  </Table.Row>
               ))}
            </Table.Body>
            <Table.Pagination shadow noMargin align="center" size="sm" rowsPerPage={8} />
         </Table>
      }
   </LayoutAdmin>
)

export default Users;
