import { Link, Spacer } from "@nextui-org/react"
import { useNavigate, Link as NextLink } from "react-router-dom"
import { Form, Formik } from "formik"
import { Input, InputPassword, LayoutAuth } from "../../components"
import { Button } from "../../styles"
import { AiOutlineMail, Si1Password } from "../../assets/icons";

const Register = () => {
  const navigate = useNavigate();
  const initial = { name: '', email: '', password: '' };
  const handleSubmit = () => navigate("/");

  return (
    <LayoutAuth title="Crea una cuenta" description="o inicia sesión">
      <Formik initialValues={initial} onSubmit={handleSubmit}>
        <Form>
          <Input name="name" label="Nombre completo" icon={<AiOutlineMail />} />
          <Spacer />
          <Input name="email" label="Correo electronico" icon={<AiOutlineMail />} />
          <Spacer />
          <InputPassword name="password" label="Contraseña" icon={<Si1Password />} />
          <Spacer y={2} />
          <Button icon={<AiOutlineMail />}>Crear cuenta</Button>
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