import {db} from "../firebase"
import { collection, getDocs,getDoc, addDoc,deleteDoc, doc} from "firebase/firestore"

const userCollection = collection(db,"users")
class userDataServices {
    //adding a new user to the firebase
    addUser=(newUser)=> {
        return addDoc(userCollection,newUser);
    }
    //to delete a user
    deleteUser=(id)=>{
        const user = doc(db,"users",id)
        return deleteDoc(user);
    }
    //to get all users
    getAllUser =()=>{
        return getDocs(userCollection);
    }
    getAuser=()=>{
        return getDoc()
    }
    
}

export default new userDataServices();