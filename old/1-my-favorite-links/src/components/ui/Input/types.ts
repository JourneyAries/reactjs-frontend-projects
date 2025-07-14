import type { Control, FieldValues, UseControllerProps } from 'react-hook-form';

export type InputTextProps<T extends FieldValues> = {
	name: UseControllerProps<T>['name'];
	control: Control<T>;
};

export type InputLinkProps<T extends FieldValues> = {
	name: UseControllerProps<T>['name'];
	control: Control<T>;
};
