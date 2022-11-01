import { Input as NextInput } from "@nextui-org/react";
import { ErrorMessage, Field } from "formik";

interface IInput {
   name: string;
   label: string;
   icon?: JSX.Element;
}

export const Input = ({ name, label, icon }:IInput) => (
   <Field  
      aria-label="input"
      name={name}
      label={label} 
      color="primary"
      autoComplete="off"
      size="sm"
      bordered
		borderWeight="light"
      clearable 
      fullWidth 
      labelLeft={icon}
      helperColor="error"
      helperText={<ErrorMessage name={name} />}
      as={NextInput}
   />
)

export const InputSearch = ({ name, label, icon }:IInput) => (
   <Field  
      aria-label="input"
      name={name}
      placeholder={label} 
      color="primary"
      autoComplete="off"
      size="sm"
      bordered
		borderWeight="light"
      clearable 
      fullWidth 
      labelLeft={icon}
      as={NextInput}
   />
)

export const InputPassword = ({ name, label, icon }:IInput) => (
   <Field  
      aria-label="input"
      name={name}
      label={label}
      color="primary"
      autoComplete="off"
      size="sm"
      bordered
		borderWeight="light"
      clearable 
      fullWidth 
      helperColor="error"
      helperText={<ErrorMessage name={name} />}
      labelLeft={icon}
      as={NextInput.Password}
   />
)
