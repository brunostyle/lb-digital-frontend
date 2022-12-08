import { Link, Spacer, Button as ButtonNext, Loading } from "@nextui-org/react"
import { useNavigate as useRouter, Link as NextLink } from "react-router-dom"
import { Form, Formik } from "formik"
import { Input, InputPassword, LayoutAuth } from "../../components"
import { Button } from "../../styles"
import { FcGoogle, AiOutlineMail, Si1Password } from "../../assets/icons";
import { loginSchema } from "../../assets/validations"
import { ILogin } from "../../utils/interfaces"
import { useAuth } from "../../hooks"

const initial: ILogin = { email: 'bruno@gmail.com', password: '123456' };

const Login = () => {
  const router = useRouter();
  const { mutate, isLoading } = useAuth({path: '/login'});
  const handleSubmit = (data: ILogin) => {
    mutate(data, { 
      onSuccess: () => router('/') 
    })
  }

  return (
    <LayoutAuth title="Inicia Sesión" description="o crea una cuenta">
      <Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={loginSchema}>
        <Form>
          <Input name="email" label="Correo electronico" icon={<AiOutlineMail />} />
          <Spacer />
          <InputPassword name="password" label="Contraseña" icon={<Si1Password />} />
          <Spacer y={2} />
          <ButtonNext type="submit" size="sm" css={{w: '100%'}} icon={isLoading ? <Loading size="xs" color="white" /> : <AiOutlineMail />}>Continuar con correo</ButtonNext>
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