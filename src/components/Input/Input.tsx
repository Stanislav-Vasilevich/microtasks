import React, {ChangeEvent} from 'react';

type PropsType = {
	getInputValue: (message: string) => void
	value: string
}

const Input = (props: PropsType) => {
	const getInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		props.getInputValue(e.currentTarget.value);
	}

	return (
		<input type="text" onChange={getInputValueHandler} value={props.value}/>
	);
};

export default Input;
