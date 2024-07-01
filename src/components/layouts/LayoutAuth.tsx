import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { Gradient, SectionSubTitle, SectionTitle } from '../../styles';
import { Logo } from "../ui/Logo";

interface ILayout {
   children: JSX.Element | JSX.Element[];
   title: string;
   description: string;
}

export const LayoutAuth = ({ children, title, description }: ILayout) => (
   <Gradient>
      <div className="container mx-auto p-4 grid grid-cols-2 gap-4 min-h-screen place-content-center">
         <Image className="flot hidden md:block" src="/illustration.png" alt="Ilustracion" />
         <Card isBlurred className="col-span-2 md:col-span-1">
            <CardHeader className="grid justify-center text-center gap-2">
               <Logo big />
               <SectionTitle>{title}</SectionTitle>
               <SectionSubTitle>{description}</SectionSubTitle>
            </CardHeader>
            <CardBody>
               {children}
            </CardBody>
         </Card>
      </div>
   </Gradient>
)