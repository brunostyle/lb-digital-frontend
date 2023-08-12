import { Navbar, Text, Spacer } from '@nextui-org/react';
import { Collapse, Logo, User } from '../index';
import { Link as NextLink } from 'react-router-dom'
import { useUser } from '../../state';

export const MenuAdmin = () => {
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
            {isLogged && <User user={user!} />}
            <Navbar.Toggle />
         </Navbar.Content>

         <Collapse />
      </Navbar>
   )
};
