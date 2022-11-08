import { Button } from '@nextui-org/react';
import { AiOutlineCloudUpload } from "../../assets/icons";

interface IProps {
	label?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const file = {
	width: '100%',
	position: 'relative',
	'input': {
		cursor: 'pointer',
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		opacity: 0,
	},
}

export const File = ({ label, onChange }: IProps) => (
	<Button size="sm" bordered icon={<AiOutlineCloudUpload />} css={file}>
		<span>
			{label ? label : 'Cargar imagen'}
		</span>
		<input onChange={onChange} type="file" name="file" id="file" />
	</Button>
);
