import { useState } from "react";
import { Grid } from "@nextui-org/react";
import { StyledTags } from "../../styles";
import { InputTags } from "./Input";
import { MdClose } from "../../assets/icons";

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
      const newTag = tagValue.trim().toLowerCase();
      if (tags.includes(newTag)) return;
      setTagValue('');
      setTags([...tags, newTag])
   }

   return (
      <div>
         <InputTags label="Etiquetas" value={tagValue} onChange={setTagValue} addTag={addTag} />
         <Grid.Container gap={1}>
            {tags.length > 0 && tags.map(tag => <Grid key={tag}><StyledTags>{tag} <MdClose size={15} cursor="pointer" onClick={() => removeTag(tag)} /></StyledTags></Grid>)}
         </Grid.Container>
      </div>

   )
};
