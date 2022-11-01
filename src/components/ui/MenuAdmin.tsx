import { Navbar, Text, Spacer } from '@nextui-org/react';
import { BiSun, MdOutlineNightlight } from '../../assets/icons'
import { Collapse, Logo } from '../index';
import { Link as NextLink } from 'react-router-dom'
import { useTheme } from '../../state';

export const MenuAdmin = () => {
   const { isLight, changeTheme } = useTheme();

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
            <Navbar.Item onClick={changeTheme} css={{ cursor: 'pointer' }}>
               {isLight ? <BiSun /> : <MdOutlineNightlight />}
            </Navbar.Item>
            <Navbar.Toggle />
         </Navbar.Content>

         <Collapse />
      </Navbar>
   )
};
