import { Card, Grid, Input as InputNext, Avatar } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import { Form, Formik } from "formik";
import { getProductBySlug } from "../../../assets/products";
import { Check, Input, LayoutAdmin, Radio, Textarea } from "../../../components";
import { Button, Container } from "../../../styles";
import { AiOutlineCloudUpload, AiOutlineSave } from "../../../assets/icons";

const ProductSlug = () => {
   const { slug } = useParams();
   const product = getProductBySlug(String(slug))!;
   const initial = { title: product.title, description: product.description, url: '', tags: '' }

   return (
      <LayoutAdmin title="Agregar un producto" description="Llena todos los campos">
         <Container lg>
            <Card>
               <Card.Body>
                  <Formik initialValues={initial} onSubmit={console.log} enableReinitialize>
                     <Form>
                        <Grid.Container gap={2}>
                           <Grid xs={12} sm={6} direction="column" css={{ gap: '2em' }}>
                              <Input name="title" label="Titulo" />
                              <Textarea name="description" label="Descripción" />
                              <Input name="url" label="Url" />
                              <InputNext aria-label="input" bordered color="primary" borderWeight="light" label="Precio" type="number" />
                              <Input name="tags" label="Etiquetas" />
                           </Grid>
                           <Grid xs={12} sm={6} direction="column" css={{ gap: '2em' }}>
                              <Radio />
                              <Check />
                              <Button bordered icon={<AiOutlineCloudUpload />}>Cargar imagen</Button>
                              <Grid.Container gap={1} justify="center">
                                 {product.images.map(img => <Grid key={img.original}><Avatar zoomed pointer squared css={{ width: '150px', height: '150px' }} src={'/' + img.original} /></Grid>)}
                              </Grid.Container>
                              <Button icon={<AiOutlineSave />}>Guardar</Button>
                           </Grid>
                        </Grid.Container>
                     </Form>
                  </Formik>
               </Card.Body>
            </Card>
         </Container>
      </LayoutAdmin>
   )
};

export default ProductSlug;
