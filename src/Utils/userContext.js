import { createContext } from "react";
//context data using this we can avoid prop drilling like we are making this as global.and to use this context we will use UseContext
const userContext= createContext({
    loggedInUser: "Akshat"
});
export default userContext