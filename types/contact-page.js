declare type ContactState = {
	success: boolean,
};

declare type ContactData = {
	email: string,
	message: string,
};

declare type ContactError = {
	type: string,
	message: string,
};

declare type ErrorMessages = {
	email?: string,
	message?: string,
};

declare type FormProps = {
	setSuccess(success: boolean): void,
};

declare type FormState = {
	errorTypes: string[],
	errorMessages: ErrorMessages,
	submitError: ?string,
	success?: boolean,
};

declare type ErrorProps = {
	message: ?string,
};

declare type ErrorState = {
	visible: boolean,
	hiding?: boolean,
};
