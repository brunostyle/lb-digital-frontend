import { Link, Spacer, Button as ButtonNext } from "@nextui-org/react"
import { useNavigate, Link as NextLink } from "react-router-dom"
import { Form, Formik } from "formik"
import { Input, InputPassword, LayoutAuth } from "../../components"
import { Button } from "../../styles"
import { FcGoogle, AiOutlineMail, Si1Password } from "../../assets/icons";
import { loginSchema } from "../../assets/validations"

const Login = () => {
  const navigate = useNavigate();
  const initial = { email: '', password: '' };
  const handleSubmit = () => navigate("/");

  return (
    <LayoutAuth title="Inicia Sesión" description="o crea una cuenta">
      <Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={loginSchema}>
        <Form>
          <Input name="email" label="Correo electronico" icon={<AiOutlineMail />} />
          <Spacer />
          <InputPassword name="password" label="Contraseña" icon={<Si1Password />} />
          <Spacer y={2} />
          <ButtonNext type="submit" size="sm" css={{w: '100%'}} icon={<AiOutlineMail />}>Continuar con correo</ButtonNext>
          <Spacer />
          <Button type="white" icon={<FcGoogle />}>Continuar con Google</Button>
        </Form>
      </Formik>
      <Spacer />
      <NextLink to="/auth/register">
        ¿No tienes cuenta?
        {/* <Link underline>¿No tienes cuenta?</Link> */}
      </NextLink>
    </LayoutAuth>
  )
};

export default Login;