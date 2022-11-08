import { Link, Spacer, Button as ButtonNext } from "@nextui-org/react"
import { useNavigate, Link as NextLink } from "react-router-dom"
import { Form, Formik } from "formik"
import { Input, InputPassword, LayoutAuth } from "../../components"
import { AiOutlineMail, Si1Password } from "../../assets/icons";
import { registerSchema } from "../../assets/validations";

const Register = () => {
  const navigate = useNavigate();
  const initial = { name: '', email: '', password: '' };
  const handleSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <LayoutAuth title="Crea una cuenta" description="o inicia sesión">
      <Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={registerSchema}>
        <Form>
          <Input name="name" label="Nombre completo" icon={<AiOutlineMail />} />
          <Spacer />
          <Input name="email" label="Correo electronico" icon={<AiOutlineMail />} />
          <Spacer />
          <InputPassword name="password" label="Contraseña" icon={<Si1Password />} />
          <Spacer y={2} />
          <ButtonNext type="submit" size="sm" css={{w: '100%'}} icon={<AiOutlineMail />}>Crear cuenta</ButtonNext>
        </Form>
      </Formik>
      <Spacer />
      <NextLink to="/auth/login">
         ¿Ya tienes cuenta?
         {/* <Link underline>¿Ya tienes cuenta?</Link> */}
      </NextLink>
    </LayoutAuth>
  )
};

export default Register;