export const updateObjectInArray = (items, itemId, objectPropName, newObjectProps) => {
	return items.map((user) => {
		if (user[objectPropName] === itemId) {
			return { ...user, ...newObjectProps };
		}
		return user;
	});
};

// users: state.users.map((user) => {
// 	if (user.id === action.userID) {
// 		return { ...user, followed: true };
// 	}
// 	return user;
// })
