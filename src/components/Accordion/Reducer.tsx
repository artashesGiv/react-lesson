type actionType = {
   type: 'TOGGLE-COLLAPSED'
}
export const reducer = (state: boolean, action: actionType) => {
   switch (action.type) {
      case 'TOGGLE-COLLAPSED':
         return !state
      default:
         return state
   }
}