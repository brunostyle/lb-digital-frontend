import { Radio as RadioNext, Text } from "@nextui-org/react";

export const Radio = () => (
   <div>
      <Text color="primary" small>Genero</Text>
      <RadioNext.Group aria-label="genero" defaultValue="hombres" size="xs" orientation="horizontal" css={{'div': { flexWrap: 'wrap'}}}>
         <RadioNext value="hombres">Hombres</RadioNext>
         <RadioNext value="mujeres">Mujeres</RadioNext>
         <RadioNext value="niños">Niños</RadioNext>
         <RadioNext value="unisex">Unisex</RadioNext>
      </RadioNext.Group>
   </div>
);