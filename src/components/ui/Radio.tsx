import { Radio as RadioNext, Text } from "@nextui-org/react";
import { TValidCategory } from "../../utils/interfaces";

interface IProps {
   label: string;
   defaultValue: TValidCategory;
   onChange: any;
}

export const Radio = ({ label, defaultValue, onChange }:IProps) => (
   <div>
      <Text color="primary" small>{label}</Text>
      <RadioNext.Group aria-label="categoria" defaultValue={defaultValue} size="xs" orientation="horizontal" css={{overflow: 'scroll'}} onChange={onChange}>
         <RadioNext value="cards">Tarjetas</RadioNext>
         <RadioNext value="covers">Portadas</RadioNext>
         <RadioNext value="logos">Logos</RadioNext>
      </RadioNext.Group>
   </div>
);