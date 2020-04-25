import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
	_state: {
		dialogsServerData: {
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

			newMessageText: '',

			messageInputText: [
				{ input: 'Send...' },
				{ input: 'Send...' },
				{ input: 'Send...' },
				{ input: 'Send...' },
				{ input: 'Send...' },
				{ input: 'Send...' }
			]
		},
		profileServerData: {
			profileData: [
				{ id: 0, value: 'Go play?', like: 100 },
				{ id: 1, value: 'Hello', like: 100 },
				{ id: 2, value: 'Nice day', like: 100 },
				{ id: 3, value: 'Nice day', like: 100 },
				{ id: 4, value: 'Nice day', like: 100 },
				{ id: 5, value: 'Nice day', like: 100 }
			],
			postInputText: ''
		},

		sideBarServerData: {
			sideBarTopFriends: [
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
				}
			]
		}
	},
	_callSubscriber() {
		console.log();
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		this._state.profileServerData = profileReducer(this._state.profileServerData, action);
		this._state.dialogsServerData = dialogsReducer(this._state.dialogsServerData, action);
		this._state.sideBarServerData = sidebarReducer(this._state.sideBarServerData, action);
		this._callSubscriber(this._state);
	}
};
