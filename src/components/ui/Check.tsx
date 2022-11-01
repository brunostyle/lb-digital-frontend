import { Checkbox, Text } from "@nextui-org/react";

export const Check = () => (
   <div>
      <Text color="primary" small>Talla</Text>
      <Checkbox.Group aria-label="talla" defaultValue={["xs"]} size="xs" orientation="horizontal" css={{'div': { flexWrap: 'wrap'}}}>
         <Checkbox value="xs">XS</Checkbox>
         <Checkbox value="s">S</Checkbox>
         <Checkbox value="m">M</Checkbox>
         <Checkbox value="l">L</Checkbox>
         <Checkbox value="xl">XL</Checkbox>
         <Checkbox value="xxl">XXL</Checkbox>
         <Checkbox value="xxxl">XXXL</Checkbox>
      </Checkbox.Group>
   </div>
);