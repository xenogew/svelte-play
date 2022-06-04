type PasswordLength = {
	id: string;
	len: number;
	checked?: boolean;
};

type ToggleOption = {
	id: string;
	name: string;
	checked: boolean;
	message?: string;
};

type GeneratePasswordRequest = {
	pwd_length: number;
	symbol: boolean;
	number: boolean;
	lower: boolean;
	upper: boolean;
	similar: boolean;
	ambiguous: boolean;
};

type GeneratePasswordResponse = {
	pw: string;
};
