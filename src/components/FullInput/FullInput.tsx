import React, {ChangeEvent, useState} from "react";

type PropsType = {
	onClickAddMessage: (message: string) => void
}

const FullInput = (props: PropsType) => {
	const [title, setTitle] = useState('');

	const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value);
	}

	const onClickAddMessageHandler = () => {
		props.onClickAddMessage(title);
		setTitle('');
	}

	return (
		<div>
			<input type="text" onChange={onChangeTitleHandler} value={title}/>
			<button onClick={onClickAddMessageHandler}>+</button>
		</div>
	)
}

export default FullInput;
