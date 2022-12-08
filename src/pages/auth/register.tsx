import { Link, Spacer, Button as ButtonNext, Loading } from "@nextui-org/react"
import { useNavigate as useRouter, Link as NextLink } from "react-router-dom"
import { Form, Formik } from "formik"
import { Input, InputPassword, LayoutAuth } from "../../components"
import { AiOutlineMail, Si1Password } from "../../assets/icons";
import { registerSchema } from "../../assets/validations";
import { IRegister } from "../../utils/interfaces";
import { useAuth } from "../../hooks";

const initial: IRegister = { name: 'bruno', email: 'bruno@gmail.com', password: '123456' };

const Register = () => {
  const router = useRouter();
  const { mutate, isLoading } = useAuth({path: '/register'});
  const handleSubmit = (data: IRegister) => {
    mutate(data, {
      onSuccess: () => router('/')
    })
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
          <ButtonNext type="submit" size="sm" css={{w: '100%'}} icon={isLoading ? <Loading size="xs" color="white" /> : <AiOutlineMail />}>Crear cuenta</ButtonNext>
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