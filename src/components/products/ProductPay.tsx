import { Col, Spacer, Text } from "@nextui-org/react"
import { Formik, Form } from "formik"
import { Between, Button } from "../../styles"
import { Input } from "../index"
import { AiOutlineCreditCard, BsPaypal, MdClose } from "../../assets/icons";
import { useState } from "react";

export const ProductPay = () => {
   const [showPay, setShowPay] = useState(false);
   return (
      <Col>
         <Button color="warning" icon={<BsPaypal />}><Text b weight="black" color="blue">Pay</Text><Text b weight="black" color="secondary">Pal</Text></Button>
         <Spacer />
         <Button color="gradient" icon={showPay ? <MdClose /> : <AiOutlineCreditCard />} onPress={() => setShowPay(!showPay)}>
            {showPay ? 'Cancelar' : 'Tarjeta de credito'}
         </Button>
         {showPay &&
            <Formik initialValues={{ number: '', expires: '', csc: '', name: '' }} onSubmit={console.log}>
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
                  <Button icon={<AiOutlineCreditCard />}>Pagar</Button>
               </Form>
            </Formik>
         }
      </Col>
   )
}