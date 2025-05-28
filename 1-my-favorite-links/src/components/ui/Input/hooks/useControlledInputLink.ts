import { useController, type FieldValues } from 'react-hook-form';
import type { InputLinkProps } from '../types';
import { useState, type ChangeEvent } from 'react';

export const useControlledInputLink = <T extends FieldValues>({
	name,
	control,
}: InputLinkProps<T>) => {
	const {
		field,
		fieldState: { error },
	} = useController({
		name,
		control,
		rules: {
			required: 'Link cannot be empty',
			pattern: {
				value: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/\S*)?$/i,
				message: 'Please enter valid Link',
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
