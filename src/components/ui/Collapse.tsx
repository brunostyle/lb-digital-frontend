import { Navbar, Link, Spacer, Divider } from '@nextui-org/react';
import { Formik, Form, FormikHelpers } from 'formik'
import { useNavigate } from 'react-router-dom'
import { FaSearch, AiOutlineHome, BsKey, BiExit, BiUserCircle, FiUsers, BiGridAlt, AiOutlineTags, MdOutlineChangeHistory } from '../../assets/icons'
import { InputSearch } from './Input';
import { Subtitle } from '../../styles';
import { searchSchema } from '../../assets/validations';

interface IItems {
   id: number,
   to: string,
   text: string,
   icon: JSX.Element;
}

const collapseItemsUser: IItems[] = [
   {
      id: 1,
      to: '/',
      text: 'Inicio',
      icon: <AiOutlineHome />
   },
   {
      id: 2,
      to: '/',
      text: 'Perfil',
      icon: <BiUserCircle />
   },
   {
      id: 3,
      to: '/auth/login',
      text: 'Ingresar',
      icon: <BsKey />
   },
   {
      id: 4,
      to: '/auth/login',
      text: 'Salir',
      icon: <BiExit />
   },
];

const collapseItemsAdmin: IItems[] = [
   {
      id: 1,
      to: '/admin',
      text: 'Dashboard',
      icon: <BiGridAlt />
   },
   {
      id: 2,
      to: '/admin/products',
      text: 'Productos',
      icon: <AiOutlineTags />
   },
   {
      id: 3,
      to: '/admin/orders',
      text: 'Ordenes',
      icon: <MdOutlineChangeHistory />
   },
   {
      id: 4,
      to: '/admin/users',
      text: 'Usuarios',
      icon: <FiUsers />
   },
];

interface ISearch { query: string }
const values: ISearch = { query: '' }

export const Collapse = () => {
   const navigate = useNavigate();
   const handleSubmit = ({ query }: ISearch, { resetForm }: FormikHelpers<ISearch>) => {
      navigate('/search/' + query);
      // resetForm();
   }

   return (
      <Navbar.Collapse css={{ '@xs': { mw: 'max-content', left: 'auto' } }}>
         <Formik initialValues={values} onSubmit={handleSubmit} validationSchema={searchSchema}>
            <Form>
               <Navbar.CollapseItem css={{ '@xs': { display: 'none' } }}>
                  <InputSearch name="query" label="Buscar..." icon={<FaSearch />} />
               </Navbar.CollapseItem>
            </Form>
         </Formik>
         <CollapseContainer text="Menu" items={collapseItemsUser} />
         <CollapseContainer text="Administración" items={collapseItemsAdmin} />
      </Navbar.Collapse>
   )
};

interface IProps {
   text: string;
   items: IItems[];
}

export const CollapseContainer = ({ text, items }: IProps) => {
   const navigate = useNavigate();
   return <>
      <Navbar.CollapseItem css={{ fd: 'column', ai: 'start' }}>
         <Subtitle>{text}</Subtitle>
         <Divider y={1} />
      </Navbar.CollapseItem>
      {items.map(item => (
         <Navbar.CollapseItem key={item.id}>
            <Link color="text" block css={{ minWidth: '100%', fontSize: '.9rem' }} onClick={() => navigate(item.to)}>
               <Spacer x={.5} />{item.icon}<Spacer />{item.text}<Spacer x={.5} />
            </Link>
         </Navbar.CollapseItem>
      ))}
   </>
}
