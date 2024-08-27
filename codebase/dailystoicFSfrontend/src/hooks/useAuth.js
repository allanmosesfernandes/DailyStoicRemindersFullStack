/*  This is the hook where it all comes together.
    This react hook will be responsible for checking if the user is logged in or not, and if they are, it will return the user object.
    If the user is not logged in, it will return null.
    We’ll also expose a login and logout function that we can use to log in and log out the user.
*/

import { useEffect } from "react";
import { useUser, User } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";

const useAuth = () => {

    const { user, addUser,removeUser, setUser } = useUser();
    const { getItem } = useLocalStorage();

    useEffect(() => {
        const user = getItem('user');

        if(user) {
            addUser(JSON.parse(user))
        }
    }, [addUser, getItem])

    const login = () => {
        addUser(user);
    };

    const logout = () => {
        removeUser();
    };

    return { user, login, logout, setUser };
}

export default useAuth