import { Navbar, Text, Dropdown, Spacer, Badge } from '@nextui-org/react';
import { FaSearch, FiShoppingCart, BiFilter, BsFillCreditCard2FrontFill, BsFillGrid3X3GapFill, IoLogoPolymer } from '../../assets/icons'
import { Formik, Form, FormikHelpers } from 'formik'
import { InputSearch, Collapse, User } from '../index';
import { searchSchema } from '../../assets/validations';
import { useCart, useUser } from '../../state';
import { Logo } from './Logo';
import { useNavigate as useRouter, Link as NextLink } from 'react-router-dom'

interface ISearch { query: string }
const values: ISearch = { query: '' }

export const Menu = () => {
   const router = useRouter();
   const { numberOfItems } = useCart();
   const { isLogged, user } = useUser();
   const handleSubmit = ({ query }: ISearch, { resetForm }: FormikHelpers<ISearch>) => {
      router('/search/' + query);
      // resetForm();
   }

   return (
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
               <Dropdown.Menu aria-label="filtrado de productos" onAction={category => router('/category/' + category)}>
                  <Dropdown.Section title="Categorias">
                     <Dropdown.Item withDivider key="cards" icon={<BsFillCreditCard2FrontFill />} css={{ fs: 'small' }}>Tarjetas</Dropdown.Item>
                     <Dropdown.Item key="covers" icon={<BsFillGrid3X3GapFill />} css={{ fs: 'small' }}>Portadas</Dropdown.Item>
                     <Dropdown.Item key="logos" icon={<IoLogoPolymer />} css={{ fs: 'small' }}>Logos</Dropdown.Item>
                  </Dropdown.Section>
               </Dropdown.Menu>
            </Dropdown>

            <Badge isInvisible={numberOfItems === 0} content={numberOfItems < 10 ? numberOfItems : "+9"} disableAnimation disableOutline size="sm" color="primary" css={{ top: -5, right: -5 }}>
               <Navbar.Link onClick={() => router('/cart')}><FiShoppingCart /></Navbar.Link>
            </Badge>

            {isLogged && <User user={user!} />}

            <Navbar.Toggle />
         </Navbar.Content>

         <Collapse />
      </Navbar>
   )
};
