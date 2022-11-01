import { SectionSubTitle, SectionTitle, Between, Main } from '../../styles';
import { FaPlus } from "../../assets/icons";
import { Button } from '@nextui-org/react';
import { MenuAdmin } from '../ui/MenuAdmin';

interface ILayout {
   children: JSX.Element | JSX.Element[];
   title: string;
   description: string;
   showTitle?: boolean;
   funtional?: boolean;
}

export const LayoutAdmin = ({ children, title, description, showTitle = true, funtional = false }: ILayout) => (
   <>
      <MenuAdmin />
      <Main>
         {showTitle &&
            <div>
               {funtional ?
                  <Between css={{ px: '1em' }}>
                     <SectionTitle css={{ ta: 'start' }}>{title}</SectionTitle>
                     <Button auto size="xs" icon={<FaPlus />}>Agregar</Button>
                  </Between>
                  :
                  <>
                     <SectionTitle>{title}</SectionTitle>
                     <SectionSubTitle>{description}</SectionSubTitle>
                  </>
               }
            </div>
         }
         {children}
      </Main>
   </>
)