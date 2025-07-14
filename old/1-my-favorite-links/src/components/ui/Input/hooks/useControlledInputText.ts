import { useController, type FieldValues } from 'react-hook-form';
import type { InputTextProps } from '../types';
import { useState, type ChangeEvent } from 'react';

export const useControlledInputText = <T extends FieldValues>({
	name,
	control,
}: InputTextProps<T>) => {
	const {
		field,
		fieldState: { error },
	} = useController({
		name,
		control,
		rules: {
			required: 'Title cannot be empty',
			minLength: {
				value: 5,
				message: 'Title must be more than 5 letters',
			},
			pattern: {
				value: /^[a-zA-Z]+$/,
				message: 'Title must contain only letters',
			},
		},
	});

	const [showError, setShowError] = useState<boolean>(false);

	const handleBlur = () => {
		field.onBlur();
		if (error) setShowError(true);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setShowError(false);
		field.onChange(e);
	};

	return { field, error, showError, handleBlur, handleChange };
};
