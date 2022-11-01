import axios from "axios";
import {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {InfinitySpin} from "react-loader-spinner";
import Repository from "./Repository";
import UserInfo from "./UserInfo";
import '../../layout/SearchBar.css';
const BASE_URL = "https://api.github.com"


export default function UserRepo() {
    const [user,setUser] = useState({});
    const [repos,setRepos] = useState<any[]>([]);
    const [isLoading,setIsLoading] = useState(true);
    const {username} = useParams();
    const [filtredRepos,setFilterRepos] = useState<any[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getUser();
        getRepos();
    }, []);
    
    /**
     * Fetching user info from github api
     * If username doesn't exist we redirect to 404 page
     */
    const getUser = () => {
        axios.get(`${BASE_URL}/users/${username}`)
            .then(response => {
                setUser(response.data);
                console.log("USER: ",user);
            })        
            .catch(err => {
                console.log(err);
                navigate('/404');
            })
    }

    /**
     * Fetching user repos by username
     * Set Loading to false to render UI
     * Set FiltredRepos to all fetched repos
     * */
    const getRepos = () => {
        axios.get(`${BASE_URL}/users/${username}/repos`)
            .then(response => {
                setRepos(response.data);
                setIsLoading(false);
                setFilterRepos(response.data);
            })        
            .catch(err => {
                console.log(err);
            })
    }

    //Filtering repos by name
    const filterRepos = (e) => {
        const label = e.target.value;
        console.log("LABEL: ",label);
        label === "" ? setFilterRepos(repos) : setFilterRepos(repos.filter(repo => repo.name.toLowerCase().includes(label.toLowerCase())));
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
                        <div className="search">
                            <input 
                                type="text"
                                className="search-bar"
                                placeholder="  Find a repository..."
                                onChange={(e) => filterRepos(e)}         
                            />
                        </div>
                        
                        {filtredRepos.length === 0 ? (
                            <div className="not-found">No repositories found...</div>
                        ) : (
                            filtredRepos.map((repo) => (
                            <Repository repo={repo} user={user} />
                            )))
                        }
                    </div> 
                 </div>
            )}
        </div>
      
    )
}


