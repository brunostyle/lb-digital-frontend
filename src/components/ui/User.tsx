import { Avatar, Popover, Spacer, User as NextUser } from "@nextui-org/react";
import { BiExit } from "../../assets/icons";
import { useUser } from "../../state";
import { Button } from "../../styles";
import { IAuth } from "../../utils/interfaces";

interface IProps {
   user: IAuth;
}

export const User = ({ user }: IProps) => {
   const { logout } = useUser();
   return (
      <Popover isBordered offset={20}>
         <Popover.Trigger>
            <Avatar pointer size="sm" color="primary" textColor="white" text={user.name.charAt(0).toUpperCase()} src={user.avatar} />
         </Popover.Trigger>
         <Popover.Content css={{ px: '$4', py: '$4' }}>
            <NextUser
               src={user.avatar}
               color="primary"
               css={{ '.nextui-avatar-text': { color: 'white' } }}
               text={user.name.charAt(0).toUpperCase()}
               name={user.name}
               description={user.email}
               size="sm"
            />
            <Spacer />
            <Button flat icon={<BiExit />} onPress={logout}>Cerrar sesion</Button>
         </Popover.Content>
      </Popover>
   )
}