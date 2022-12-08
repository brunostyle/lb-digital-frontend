import { Grid, Avatar, Badge } from "@nextui-org/react";
import { MdClose } from "../../assets/icons";

interface IProps {
   images: string[];
}

export const Images = ({ images }: IProps) => (
   <Grid.Container gap={1} justify="center">
      {images.map(img => <Grid key={img}>
         <Badge content={<MdClose />} size="lg" color="primary" variant="bordered" disableOutline css={{ cursor: 'pointer', bw: 'thin', transition: '.2s', "&:hover": { background: '$primary', color: 'white'} }}>
            <Avatar squared css={{ width: '150px', height: '150px' }} src={'/products/' + img} />
         </Badge>
      </Grid>)}
   </Grid.Container>
)
