import { Button } from "@nextui-org/react";
import { FaPlus, FaMinus } from '../../assets/icons';

export const ProductCounter = () => (
   <Button.Group size="xs" css={{m: 0}}>
      <Button><FaMinus size={5} /></Button>
      <Button light>1</Button>
      <Button><FaPlus size={5} /></Button>
   </Button.Group>
)