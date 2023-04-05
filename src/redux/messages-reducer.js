const initialState = {
  listOfMessages: [
    { id: 1, key: 1, message: 'LOL 😳' },
    { id: 2, key: 2, message: "You're such a dissapoinment" },
    { id: 3, key: 3, message: "You're adopted" },
    { id: 4, key: 4, message: 'I feel sorry for you' }
  ],
  newMessageText: '',

  listOfChats: [
    { id: 1, key: 1, contactName: 'Onyx' },
    { id: 2, key: 2, contactName: 'Me' },
    { id: 3, key: 3, contactName: 'Myself' },
    { id: 4, key: 4, contactName: 'I' }
  ]
};

const messagesReducer = (state = initialState, action) => {
  const newMessage = {
    id: state.listOfMessages.length + 1,
    key: state.listOfMessages.length + 1,
    message: state.newMessageText
  };
  switch (action.type) {
    case 'SEND-MESSAGE':
      return {
        ...state,
        listOfMessages: [...state.listOfMessages, newMessage],
        newMessageText: ''
      };

    case 'UPDATE-NEW-MESSAGE':
      return {
        ...state,
        newMessageText: action.newMessage
      };
    default:
      return state;
  }
};

export const addMessage = () => ({ type: 'SEND-MESSAGE' });

export const onChangeNewMessage = (message) => ({ type: 'UPDATE-NEW-MESSAGE', newMessage: message });

export default messagesReducer;
