import { Card, Grid, Avatar } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import { Form, Formik } from "formik";
import { getProductBySlug } from "../../../assets/products";
import { Input, LayoutAdmin, Radio, Textarea } from "../../../components";
import { Button, Container } from "../../../styles";
import { AiFillDelete, AiOutlineCloudUpload, AiOutlineSave } from "../../../assets/icons";

const ProductSlug = () => {
   const { slug } = useParams();
   const product = getProductBySlug(String(slug))!;
   const initial = { title: product.title, description: product.description, url: '', price: '0', tags: '' }

   return (
      <LayoutAdmin title="Agregar un producto" description="Llena todos los campos">
         <Container lg>
            <Card>
               <Card.Body>
                  <Formik initialValues={initial} onSubmit={console.log} enableReinitialize>
                     <Form>
                        <Grid.Container gap={2}>
                           <Grid xs={12} sm={7} direction="column" css={{ gap: '1.5em' }}>
                              <Input name="title" label="Titulo" />
                              <Textarea name="description" label="Descripción" />
                              <Input name="url" label="Url" />
                              <Input name="price" label="Precio" />
                              <Input name="tags" label="Etiquetas" />
                           </Grid>
                           <Grid xs={12} sm={5} direction="column" css={{ gap: '1.5em' }}>
                              <Radio label="Categoria" value={product.category} />
                              <Grid.Container gap={1} justify="center">
                                 {product.images.map(img => <Grid key={img}><Avatar zoomed pointer squared css={{ width: '150px', height: '150px' }} src={'/products/' + img} /></Grid>)}
                              </Grid.Container>
                              <Button bordered icon={<AiOutlineCloudUpload />}>Cargar imagen</Button>
                              <Button bordered icon={<AiOutlineSave />} color="success">Guardar</Button>
                              <Button bordered icon={<AiFillDelete />} color="error" onPress={() => { }}>Eliminar</Button>
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
