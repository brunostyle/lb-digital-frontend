import { Navbar, Link, Spacer, Divider } from '@nextui-org/react';
import { Formik, Form, FormikHelpers } from 'formik'
import { FaSearch, AiOutlineHome, BsKey, BiExit, FiUsers, BiGridAlt, AiOutlineTags, MdOutlineChangeHistory } from '../../assets/icons'
import { InputSearch } from './Input';
import { Subtitle } from '../../styles';
import { searchSchema } from '../../assets/validations';
import { useUser } from '../../state';
import { useNavigate as useRouter, useLocation } from 'react-router-dom'

interface ISearch { query: string }
const values: ISearch = { query: '' }

export const Collapse = () => {
   const router = useRouter();
   const { isLogged, user } = useUser();
   const handleSubmit = ({ query }: ISearch, { resetForm }: FormikHelpers<ISearch>) => {
      router('/search/' + query);
   }

   return (
      <Navbar.Collapse css={{ '@xs': { mw: 'max-content', minWidth: '200px', left: 'auto' } }}>
         <Formik initialValues={values} onSubmit={handleSubmit} validationSchema={searchSchema}>
            <Form>
               <Navbar.CollapseItem css={{ '@xs': { display: 'none' } }}>
                  <InputSearch name="query" label="Buscar..." icon={<FaSearch />} />
               </Navbar.CollapseItem>
            </Form>
         </Formik>

         <Divisor text="Menu" />
         <Item text="Inicio"        to="/" icon={<AiOutlineHome />} />
         {isLogged 
            ? <Item text="Salir"    to="/auth/login" icon={<BiExit />} />
            : <Item text="Ingresar" to="/auth/login" icon={<BsKey />} />
         }
         {user?.role === "admin" &&
            <>
               <Divisor text="Administración" />
               <Item text="Dashboard" to="/admin" icon={<BiGridAlt />} />
               <Item text="Productos" to="/admin/products" icon={<AiOutlineTags />} />
               <Item text="Ordenes"   to="/admin/orders" icon={<MdOutlineChangeHistory />} />
               <Item text="Usuarios"  to="/admin/users" icon={<FiUsers />} />
            </>
         }
      </Navbar.Collapse>
   )
};

interface IItem {
   to: string,
   text: string,
   icon: JSX.Element;
}

export const Item = ({ to, text, icon }: IItem) => {
   const router = useRouter();
   const location = useLocation();
   const { logout } = useUser();
   return (
      <Navbar.CollapseItem>
         <Link color={location.pathname === to ? "primary" : "text"} block css={{ minWidth: '100%', fontSize: '.9rem', background: `${location.pathname === to ? '$primaryLightHover' : 'none'}` }} onClick={() => text === "Salir" ? logout() : router(to)}>
            <Spacer x={.5} />{icon}<Spacer />{text}<Spacer x={.5} />
         </Link>
      </Navbar.CollapseItem>
   )
}

export const Divisor = ({ text }: { text: string }) => (
   <Navbar.CollapseItem css={{ fd: 'column', ai: 'start' }}>
      <Subtitle>{text}</Subtitle>
      <Divider y={1} />
   </Navbar.CollapseItem>
)
//124