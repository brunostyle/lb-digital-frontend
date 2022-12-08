import { Navbar, Text, Spacer } from '@nextui-org/react';
import { BiSun, MdOutlineNightlight } from '../../assets/icons'
import { Collapse, Logo, User } from '../index';
import { Link as NextLink } from 'react-router-dom'
import { useTheme, useUser } from '../../state';

export const MenuAdmin = () => {
   const { isLight, changeTheme } = useTheme();
   const { isLogged, user } = useUser();

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

            {/* {isLogged && <User user={user!} />} */}

            <Navbar.Toggle />
         </Navbar.Content>

         <Collapse />
      </Navbar>
   )
};
