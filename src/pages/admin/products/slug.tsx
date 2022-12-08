import { Card, Grid, Button as NextButton } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import { Form, Formik } from "formik";
import { getProductBySlug } from "../../../assets/products";
import { File, Images, Input, LayoutAdmin, Radio, Tags, Textarea } from "../../../components";
import { Button, Container } from "../../../styles";
import { AiFillDelete, AiOutlineSave } from "../../../assets/icons";
import { ChangeEvent, useState } from "react";
import { TValidCategory } from "../../../utils/interfaces";
import { productSchema } from "../../../assets/validations";

const ProductSlug = () => {
   const { slug } = useParams();
   const product = getProductBySlug(String(slug));
   const [tags, setTags] = useState<string[]>(product ? product.tags : []);
   const [category, setCategory] = useState<TValidCategory>(product ? product.category : 'cards');
   const initial = { title: '', description: '', slug: '', price: '' }

   const validate = (values: any) => {
      values.slug = values.title.trim().replaceAll(' ', '_').replaceAll("'", '').toLowerCase()
   }

   const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
      const file = new FormData();
      const [files] = e.target.files!;
      file.append('file', files);
      console.log({ file })
   };

   const handleSubmit = (values: any) => {
      console.log({ ...values, tags, category })
   }

   return (
      <LayoutAdmin title={product ? 'Actualizar un producto' : 'Agregar un producto'} description="Llena todos los campos">
         <Container lg><Card><Card.Body>
            <Formik initialValues={product ? product : initial} onSubmit={handleSubmit} enableReinitialize validationSchema={productSchema} validate={validate}>
               {({handleSubmit}) => (
                  <Form>
                     <Grid.Container gap={2}>
                        <Grid xs={12} sm={7} direction="column" css={{ gap: '1.5em' }}>
                           <Input name="title" label="Titulo" />
                           <Input name="slug" label="URL" />
                           <Textarea name="description" label="Descripción" />
                           <Input name="price" label="Precio" />
                           <Tags tags={tags} setTags={setTags} />
                        </Grid>
                        <Grid xs={12} sm={5} direction="column" css={{ gap: '1.5em' }}>
                           <Radio label="Categoria" defaultValue={category} onChange={setCategory} />
                           {product && <Images images={product.images} />}
                           <File onChange={handleImage} />
                           <NextButton bordered icon={<AiOutlineSave />} color="success" size="sm" onPress={() => handleSubmit()}>Guardar</NextButton>
                           {product && <Button bordered icon={<AiFillDelete />} color="error">Eliminar</Button>}
                        </Grid>
                     </Grid.Container>
                  </Form>
               )}
            </Formik>
         </Card.Body></Card></Container>
      </LayoutAdmin>
   )
};

export default ProductSlug;