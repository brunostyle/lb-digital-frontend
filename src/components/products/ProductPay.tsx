import { Col, Spacer, Text, Button as ButtonNext } from "@nextui-org/react"
import { Formik, Form } from "formik"
import { Between, Button } from "../../styles"
import { Input } from "../index"
import { AiOutlineCreditCard, BsPaypal, MdClose } from "../../assets/icons";
import { useState } from "react";
import { paySchema } from "../../assets/validations";

export const ProductPay = () => {
   const [showPay, setShowPay] = useState(false);
   const initial = { name: '', number: '', expires: '', csc: '' };
   const handleSubmit = (values: any) => {
      console.log(values)
   }
   return (
      <Col>
         <Button color="warning" icon={<BsPaypal />}><Text b weight="black" color="blue">Pay</Text><Text b weight="black" color="secondary">Pal</Text></Button>
         <Spacer />
         <Button color="gradient" icon={showPay ? <MdClose /> : <AiOutlineCreditCard />} onPress={() => setShowPay(!showPay)}>
            {showPay ? 'Cancelar' : 'Tarjeta de credito'}
         </Button>
         {showPay &&
            <Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={paySchema}>
               <Form className="opacity">
                  <Spacer />
                  <Input name="name" label="Nombre" />
                  <Spacer />
                  <Input name="number" label="Numero tarjeta" />
                  <Spacer />
                  <Between>
                     <Input name="expires" label="Expiración" />
                     <Input name="csc" label="Nro seguridad" />
                  </Between>
                  <Spacer y={1.5} />
                  <ButtonNext type="submit" size="sm" css={{ w: '100%' }} icon={<AiOutlineCreditCard />}>Pagar</ButtonNext>
               </Form>
            </Formik>
         }
      </Col>
   )
}