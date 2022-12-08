import { useState } from "react";
import { Button, Grid, Row, Spacer } from "@nextui-org/react";
import { StyledTags } from "../../styles";
import { InputTags } from "./Input";
import { GrAdd, MdClose } from "../../assets/icons";

interface IProps {
   tags: string[];
   setTags: any;
}

export const Tags = ({ tags, setTags }:IProps) => {
   const [tagValue, setTagValue] = useState<string>('');
   
   const removeTag = (tag: string) => {
      setTags(tags.filter(t => t !== tag))
   }

   const addTag = () => {
      if(tagValue === "") return;
      const newTag = tagValue.trim().toLowerCase();
      if (tags.includes(newTag)) return;
      setTagValue('');
      setTags([...tags, newTag])
   }

   return (
      <div>
         <Row align="flex-end">
            <InputTags label="Etiquetas" value={tagValue} onChange={setTagValue} />
            <Spacer x={.2} />
            <Button flat auto size="sm" onPress={addTag}><GrAdd /></Button>
         </Row>
         <Grid.Container gap={1}>
            {tags.length > 0 && tags.map(tag => <Grid key={tag}><StyledTags>{tag} <MdClose size={15} cursor="pointer" onClick={() => removeTag(tag)} /></StyledTags></Grid>)}
         </Grid.Container>
      </div>

   )
};
