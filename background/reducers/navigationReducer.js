const initialState = {
	popupLoginRegVariance:'login'
};

export const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SWITCH_LOGIN_REG_TAB': {
			let newNav = action.view;
      const newState = Object.assign(state, {
        popupLoginRegVariance:newNav
      });

      return newState;
    }					
    default:
      return state;
  }
}