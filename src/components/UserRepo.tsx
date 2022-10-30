import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {InfinitySpin} from "react-loader-spinner";
import Repository from "./Repository";
import UserInfo from "./UserInfo";
const BASE_URL = "https://api.github.com"


export default function UserRepo() {
    const [user,setUser] = useState({});
    const [repos,setRepos] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const {username} = useParams();

    useEffect(() => {
        getUser();
        getRepos();
    }, []);
    
    const getUser = () => {
        axios.get(`${BASE_URL}/users/${username}`)
            .then(response => {
                setUser(response.data);
                console.log("USER: ",user);
            })        
            .catch(err => {
                console.log(err);
            })
    }
    const getRepos = () => {
        axios.get(`${BASE_URL}/users/${username}/repos`)
            .then(response => {
                setRepos(response.data);
                setIsLoading(false);

            })        
            .catch(err => {
                console.log(err);
            })
    }

    return(

        <div>
             {isLoading ? (
                <InfinitySpin
                    width="80"
                    color="#4fa94d"
                />
            ) : (
                <div className="userRepo">
                    <UserInfo user={user}/>  
                    <div className="repositories-container">
                        {repos.map((repo) => (
                        <Repository repo={repo} user={user} />
                        ))}
                     </div> 
                 </div>
            )}
        </div>
      
    )
}
