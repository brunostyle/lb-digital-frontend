import { Avatar, Card, Row, Text } from "@nextui-org/react";
import { GridContainer } from "../../styles";
import { MdOutlineAttachMoney, MdOutlineCreditCardOff, MdOutlineCancelPresentation, FiUsers, BsCartCheck, BiTimeFive } from "../../assets/icons";
import { IDashboard } from "../../utils/interfaces";
import { LayoutAdmin } from "../../components";

const items: IDashboard[] = [
   {
      _id: '1',
      number: 2,
      text: 'Ordenes pagadas',
      icon: <MdOutlineAttachMoney />
   },
   {
      _id: '2',
      number: 1,
      text: 'Ordenes pendientes',
      icon: <MdOutlineCreditCardOff />
   },
   {
      _id: '3',
      number: 2,
      text: 'Clientes',
      icon: <FiUsers />
   },
   {
      _id: '4',
      number: 4,
      text: 'Sin stock',
      icon: <MdOutlineCancelPresentation />
   },
   {
      _id: '5',
      number: 28,
      text: 'Bajo inventario',
      icon: <BsCartCheck />
   },
   {
      _id: '6',
      number: 30,
      text: 'Actualizacion en:',
      icon: <BiTimeFive />
   },
]

const Dashboard = () => (
   <LayoutAdmin title="Dashboard" description="Gestión de la información">
      <GridContainer>
         {items.map(item => (
            <Card key={item._id} isHoverable isPressable>
               <Card.Header>
                  <Row justify="space-between" align="center">
                     <Text b small>{item.text}</Text>
                     <Avatar size="sm" icon={item.icon} />
                  </Row>
               </Card.Header>
               <Card.Body css={{ pt: '.5em' }}>
                  <Text b size="1.2em">{item.number}</Text>
               </Card.Body>
            </Card>
         ))}
      </GridContainer>
   </LayoutAdmin>
)

export default Dashboard;
