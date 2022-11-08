import { ErrorMessage, Field } from 'formik';
import { Textarea as TextField } from '@nextui-org/react';

interface ITextarea {
	name: string;
	label: string;
}

export const Textarea = ({ name, label }: ITextarea) => (
	<Field
		aria-label="Textarea"
		name={name}
      label={label} 
		fullWidth
		color="primary"
		helperText={<ErrorMessage name={name} />}
		as={TextField}
	/>
);
