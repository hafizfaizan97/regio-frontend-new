import * as yup from 'yup';

export const signInSchema = yup.object().shape({
	email: yup.string().required('Email field is required').email('Please enter a valid email address'),
	password: yup.string().required('Password field is required').min(8, 'Invalid Password'),
});

export const registerSchema = yup.object().shape({
	email: yup.string().required('Email field is required').email('Please enter a valid email address'),
	password: yup
		.string()
		.required('Password field is required')
		.min(8, 'Password should be minimum 8 characters long')
		.max(32, 'Password should be less than 32 characters long'),
	firstname: yup.string().required('Please give your first name'),
	lastname: yup.string().required('Please give your first name'),
	zip: yup.number().nullable(),
	village: yup.string().nullable(),
	phone: yup.string().nullable()
});