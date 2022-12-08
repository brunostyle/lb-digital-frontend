import { Avatar, Popover, User as NextUser} from "@nextui-org/react";
import { IAuth } from "../../utils/interfaces";

interface IProps {
   user: IAuth;
}

export const User = ({ user }: IProps) => (
   <Popover isBordered>
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
      </Popover.Content>
   </Popover>
)
