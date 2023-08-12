import { Navbar, Link, Button, Spacer, Divider } from '@nextui-org/react';
import { Formik, Form, FormikHelpers } from 'formik'
import { FaSearch, AiOutlineHome, BsKey, FiUsers, BiGridAlt, AiOutlineTags, MdOutlineChangeHistory, BiSun, MdOutlineNightlight } from '../../assets/icons'
import { InputSearch } from './Input';
import { Between, Subtitle } from '../../styles';
import { searchSchema } from '../../assets/validations';
import { useTheme, useUser } from '../../state';
import { useNavigate as useRouter, useLocation } from 'react-router-dom'

interface ISearch { query: string }
const values: ISearch = { query: '' }

export const Collapse = () => {
   const router = useRouter();
   const { isLight, changeTheme } = useTheme();
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
         <Item text="Inicio" to="/" icon={<AiOutlineHome />} />
         {!isLogged && <Item text="Ingresar" to="/auth/login" icon={<BsKey />} />}
         {user?.role === "admin" &&
            <>
               <Divisor text="Administración" />
               <Item text="Dashboard" to="/admin" icon={<BiGridAlt />} />
               <Item text="Productos" to="/admin/products" icon={<AiOutlineTags />} />
               <Item text="Ordenes" to="/admin/orders" icon={<MdOutlineChangeHistory />} />
               <Item text="Usuarios" to="/admin/users" icon={<FiUsers />} />
            </>
         }

         <Divisor text="Tema" />
         <Between>
            <Navbar.CollapseItem>
               <Button auto size="xs" flat icon={<BiSun />} bordered={isLight} borderWeight="light" css={{ color: isLight ? '$text' : 'default' }} onPress={() => changeTheme(true)}>Claro</Button>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem>
               <Button auto size="xs" flat icon={<MdOutlineNightlight />} bordered={!isLight} borderWeight="light" css={{ color: isLight ? 'default' : '$text' }} onPress={() => changeTheme(false)}>Oscuro</Button>
            </Navbar.CollapseItem>
         </Between>
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
   return (
      <Navbar.CollapseItem>
         <Link color={location.pathname === to ? "primary" : "text"} block css={{ minWidth: '100%', fontSize: '.9rem', background: `${location.pathname === to ? '$secondaryLightHover' : 'none'}` }} onClick={() => router(to)}>
            <Spacer x={.5} />{icon}<Spacer />{text}<Spacer x={.5} />
         </Link>
      </Navbar.CollapseItem>
   )
}

export const Divisor = ({ text }: { text: string }) => (
   <Navbar.CollapseItem css={{ fd: 'column', ai: 'start' }}>
      <Subtitle>{text}</Subtitle>
      <Divider y={.5} />
   </Navbar.CollapseItem>
)