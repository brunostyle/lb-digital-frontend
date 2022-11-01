import { Col, Spacer, Text } from "@nextui-org/react"
import { Formik, Form } from "formik"
import { Between, Button } from "../../styles"
import { Input } from "../index"
import { AiOutlineCreditCard, BsPaypal } from "../../assets/icons";

export const ProductPay = () => {
   return (
      <Col>
         <Button color="warning" icon={<BsPaypal />}><Text b weight="black" color="blue">Pay</Text><Text b weight="black" color="secondary">Pal</Text></Button>
         <Spacer />
         <Button color="gradient" icon={<AiOutlineCreditCard />}>Tarjeta de credito</Button>
         <Spacer />
         <Formik initialValues={{ number: '', expires: '', csc: '', name: '' }} onSubmit={console.log}>
            <Form>
               <Input name="number" label="Numero tarjeta" />
               <Spacer />
               <Between>
                  <Input name="expires" label="Expiración" />
                  <Input name="csc" label="Nro seguridad" />
               </Between>
               <Spacer />
               <Input name="name" label="Nombre" />
            </Form>
         </Formik>
      </Col>

   )
}