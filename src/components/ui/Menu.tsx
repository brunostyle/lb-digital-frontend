import { Navbar, Text, Dropdown, Spacer, Badge } from '@nextui-org/react';
import { FaSearch, BiSun, MdOutlineNightlight, FiShoppingCart, BiFilter, BsFillCreditCard2FrontFill, BsFillGrid3X3GapFill, IoLogoPolymer } from '../../assets/icons'
import { Formik, Form, FormikHelpers } from 'formik'
import { InputSearch, Collapse } from '../index';
import { useNavigate, Link as NextLink } from 'react-router-dom'
import { searchSchema } from '../../assets/validations';
import { useCart, useTheme } from '../../state';
import { Logo } from './Logo';

interface ISearch { query: string }
const values: ISearch = { query: '' }

export const Menu = () => {
   const navigate = useNavigate();
   const { cart } = useCart();
   const { isLight, changeTheme } = useTheme();
   const handleSubmit = ({ query }: ISearch, { resetForm }: FormikHelpers<ISearch>) => {
      navigate('/search/' + query);
      // resetForm();
   }

   return (
      // <Navbar isCompact css={{position: 'fixed', top: 0, zIndex: 1000}}>
      <Navbar isCompact isBordered>
         <Navbar.Brand>
            <NextLink to="/">
               <Logo />
            </NextLink>
            <Spacer x={.5} />
            <Text b hideIn="xs">LB Digital</Text>
         </Navbar.Brand>

         <Navbar.Content>
            <Navbar.Item hideIn="xs">
               <Formik initialValues={values} onSubmit={handleSubmit} validationSchema={searchSchema}>
                  <Form>
                     <InputSearch name="query" label="Buscar..." icon={<FaSearch />} />
                  </Form>
               </Formik>
            </Navbar.Item>

            <Dropdown isBordered>
               <Navbar.Item>
                  <Dropdown.Button auto light icon={<BiFilter />} ripple={false} css={{ p: '.5em' }}>Filtrar</Dropdown.Button>
               </Navbar.Item>
               <Dropdown.Menu aria-label="filtrado de productos" onAction={c => navigate('/category/' + c)}>
                  <Dropdown.Section title="Categorias">
                     <Dropdown.Item withDivider key="cards" icon={<BsFillCreditCard2FrontFill />} css={{ fs: 'small' }}>Tarjetas</Dropdown.Item>
                     <Dropdown.Item key="covers" icon={<BsFillGrid3X3GapFill />} css={{ fs: 'small' }}>Portadas</Dropdown.Item>
                     <Dropdown.Item key="logos" icon={<IoLogoPolymer />} css={{ fs: 'small' }}>Logos</Dropdown.Item>
                  </Dropdown.Section>
               </Dropdown.Menu>
            </Dropdown>

            <Navbar.Item onClick={changeTheme} css={{ cursor: 'pointer' }}>
               {isLight ? <BiSun /> : <MdOutlineNightlight />}
            </Navbar.Item>

            <Badge isInvisible={cart.length === 0} content={cart.length < 10 ? cart.length : "+9"} disableAnimation disableOutline size="sm" color="primary" css={{ top: -5, right: -5 }}>
               <Navbar.Link onClick={() => navigate('/cart')}><FiShoppingCart /></Navbar.Link>
            </Badge>

            <Navbar.Toggle />
         </Navbar.Content>

         <Collapse />
      </Navbar>
   )
};
