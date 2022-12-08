import { Avatar, Table, Text } from "@nextui-org/react";
import { FullScreenLoading, LayoutAdmin, Nothing } from "../../components";
import { cell, StyledRole } from "../../styles";
import { useUsers } from "../../hooks";

const Users = () => {
   const { data: users = [], isLoading } = useUsers({ key: "users", path: "/users" });
   return (
      <LayoutAdmin showTitle={users.length !== 0} title="Usuarios" description="Mantenimiento de usuarios">
         {isLoading
            ? <FullScreenLoading />
            : users.length === 0
               ? <Nothing text="Aún no hay usuarios" svg="/no-results.svg" />
               :
               <Table className="opacity" aria-label="Usuarios" selectionMode="multiple" shadow={false}>
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
}
export default Users;
