import { Image, Spacer, Text } from "@nextui-org/react";
import { Center } from "../../styles";

interface INothing {
   text: string;
   svg: string;
   children?: JSX.Element | JSX.Element[];
}

export const Nothing = ({ text, svg, children }: INothing) => (
   <Center>
      <Image className="opacity" showSkeleton src={svg} width="300px" height="300px" objectFit='contain' alt="No se encontraron resultados" />
      <Text size="1em">{text}</Text>
      <Spacer />
      {children}
   </Center>
)
