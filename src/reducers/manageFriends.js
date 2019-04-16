export function manageFriends(state, action){
  switch (action.type) {
    case expression: "ADD_FRIEND"
      return { ...friends: state.friends + action.friend }
    default: return state;

  }
}
