//This is an action creator.
export const selectUser = function (user) {
    console.log("You clicked on user:", user.firstName)
    //The actual action that is returned.
    return {
        type:'USER_SELECTED',
        payload:user
    }
}