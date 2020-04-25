
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
	dialogFieldData: [
		{
			name: 'Akashi',
			id: 1,
			avatar:
				'https://4.bp.blogspot.com/-SyaWak2-CzU/U82yEeW8Q9I/AAAAAAAAAXw/9zqw8bX7NQQ/s1600/no-game-no-life-sora-badass.jpg'
		},
		{
			name: 'Greg',
			id: 2,
			avatar:
				'https://4.bp.blogspot.com/-SyaWak2-CzU/U82yEeW8Q9I/AAAAAAAAAXw/9zqw8bX7NQQ/s1600/no-game-no-life-sora-badass.jpg'
		},
		{
			name: 'Boy',
			id: 3,
			avatar:
				'https://4.bp.blogspot.com/-SyaWak2-CzU/U82yEeW8Q9I/AAAAAAAAAXw/9zqw8bX7NQQ/s1600/no-game-no-life-sora-badass.jpg'
		},
		{
			name: 'Jack',
			id: 4,
			avatar:
				'https://4.bp.blogspot.com/-SyaWak2-CzU/U82yEeW8Q9I/AAAAAAAAAXw/9zqw8bX7NQQ/s1600/no-game-no-life-sora-badass.jpg'
		},
		{
			name: 'Trinity',
			id: 5,
			avatar:
				'https://4.bp.blogspot.com/-SyaWak2-CzU/U82yEeW8Q9I/AAAAAAAAAXw/9zqw8bX7NQQ/s1600/no-game-no-life-sora-badass.jpg'
		},
		{
			name: 'Taiga',
			id: 6,
			avatar:
				'https://4.bp.blogspot.com/-SyaWak2-CzU/U82yEeW8Q9I/AAAAAAAAAXw/9zqw8bX7NQQ/s1600/no-game-no-life-sora-badass.jpg'
		}
	],

	messageData: [
		{ id: 0, content: 'Go play?' },
		{ id: 1, content: 'Go play?' },
		{ id: 2, content: 'Go play?' },
		{ id: 3, content: 'Go play?' },
		{ id: 4, content: 'Go play?' },
		{ id: 5, content: 'Go play?' }
	],

	messageInputText: [
		{ input: 'Send...' },
		{ input: 'Send...' },
		{ input: 'Send...' },
		{ input: 'Send...' },
		{ input: 'Send...' },
		{ input: 'Send...' }
	]
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE: {
            let body = action.newMessageBody;
			return {
				...state,
                messageData: [ ...state.messageData, { id: 10, content: body } ],
			};
		}
		default:
			return state;
	}
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;
