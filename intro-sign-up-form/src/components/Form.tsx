import type React from 'react';
import { InputText } from './InputText';
import { InputEmail } from './InputEmail';
import { InputPassword } from './InputPassword';
import { Button } from './Button';
import { TermsServices } from './TermsServices';

export const Form: React.FC = () => {
	return (
		<div className='w-[600px] p-12 rounded-2xl flex flex-col gap-y-8 bg-white shadow-new'>
			{/* form */}
			<form className='flex flex-col gap-y-4'>
				<InputText text={'First Name'} />
				<InputText text={'Last Name'} />
				<InputEmail />
				<InputPassword />
				{/* button */}
				<div className='flex flex-col gap-y-4'>
					<Button />
					<TermsServices />
				</div>
			</form>
		</div>
	);
};
