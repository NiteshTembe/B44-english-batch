import React , { useState } from "react";

const initialUserData = [{
    userId : 1,
    name : "user 1",
    uEmail : "hjh@gmail.com",
    gender : "Male"
}]

export const UsersDetailsContext = React.createContext();

function UserDetails({children}){
    const [userData, setUserData] = useState(initialUserData);
    const [ mainHeading, setMainHeading ] = useState("Dashboard")
    return (
        <UsersDetailsContext.Provider value={[userData, setUserData , mainHeading, setMainHeading ]}>{children}</UsersDetailsContext.Provider>
    );
}

export default UserDetails;