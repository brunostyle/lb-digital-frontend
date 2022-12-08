import { Card, Text } from "@nextui-org/react";

interface IProps {
   title: number;
   description: string;
}

export const CardItem = ({ title, description }: IProps) => (
   <Card isHoverable>
      <Card.Header>
         <Text b small>{description}</Text>
      </Card.Header>
      <Card.Body css={{ pt: '.5em' }}>
         <Text b size="1.2em">{title}</Text>
      </Card.Body>
   </Card>
)