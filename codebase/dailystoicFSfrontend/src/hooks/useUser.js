// /* This hook stores users in our context & localStorage */
// import { AuthContext } from "";
// import { useContext } from "react";
// import useLocalStorage from "./useLocalStorage";
// 
// const useUser = () => {
//     const { user, setUser } = useContext(AuthContext);
//     const { setItem } = useLocalStorage;
// 
// 
//     const addUser = (user) => {
//         setUser(user);
//         setItem("user", JSON.stringify(user))
//     }
// 
//     const removeUser = () => {
//         setUser(null);
//         setItem("user", "")
//     }
// 
//     return { user, addUser, removeUser, setUser };
// }
// 
// export default useUser