import { Radio as RadioNext, Text } from "@nextui-org/react";
import { TValidCategory } from "../../utils/interfaces";

interface IProps {
   label: string;
   value: TValidCategory;
}

export const Radio = ({ label, value }:IProps) => (
   <div>
      <Text color="primary" small>{label}</Text>
      <RadioNext.Group aria-label="categoria" defaultValue={value} size="xs" orientation="horizontal" css={{overflow: 'scroll'}}>
         <RadioNext value="tarjetas">Tarjetas</RadioNext>
         <RadioNext value="portadas">Portadas</RadioNext>
         <RadioNext value="logos">Logos</RadioNext>
      </RadioNext.Group>
   </div>
);