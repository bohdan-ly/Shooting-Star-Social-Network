import profileReducer, { addPostActionCreator } from "./profile-reducer";
import React from 'react';

test('new post should be added', () => {
//1. test data
    let state = {
        profileData: [
            { id: 0, value: 'Go play?', like: 100 },
            { id: 1, value: 'Hello', like: 100 },
            { id: 2, value: 'Nice day', like: 100 },
            { id: 3, value: 'Nice day', like: 100 },
            { id: 4, value: 'Nice day', like: 100 },
            { id: 5, value: 'Nice day', like: 100 }
        ],
    };
 
    let action = addPostActionCreator('hello!')
    //2. action
    let newState = profileReducer(state, action);
//3. expectation

    expect(newState.profileData.length).toBe(5);
});


