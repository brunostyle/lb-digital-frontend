import { Input as NextInput } from "@nextui-org/react";
import { ErrorMessage, Field } from "formik";

interface IInput {
   name: string;
   label: string;
   icon?: JSX.Element;
}

export const Input = ({ name, label, icon }: IInput) => (
   <Field
      aria-label="input"
      name={name}
      label={label}
      color="primary"
      autoComplete="off"
      size="sm"
      clearable
      fullWidth
      labelLeft={icon}
      helperText={<ErrorMessage name={name} />}
      as={NextInput}
   />
)

export const InputSearch = ({ name, label, icon }: IInput) => (
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

export const InputPassword = ({ name, label, icon }: IInput) => (
   <Field
      aria-label="input"
      name={name}
      label={label}
      color="primary"
      autoComplete="off"
      size="sm"
      clearable
      fullWidth
      helperText={<ErrorMessage name={name} />}
      labelLeft={icon}
      as={NextInput.Password}
   />
)

interface IInputTags {
   label: string;
   value: string;
   onChange: any;
}

export const InputTags = ({ label, value, onChange }: IInputTags) => (
   <NextInput
      aria-label="input"
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      color="primary"
      autoComplete="off"
      size="sm"
      fullWidth
      clearable
   />
)