import {db} from "../firebase"
import { collection, getDocs,getDoc, addDoc,deleteDoc, doc} from "firebase/firestore"

const adminCollection = collection(db,"admin")
class adminDataServices {
    //adding a new user to the firebase
    addUser=(newUser)=> {
        return addDoc(adminCollection,newUser);
    }
    //to delete a user
    deleteUser=(id)=>{
        const user = doc(db,"admin",id)
        return deleteDoc(user);
    }
    //to get all users
    getAllUser =()=>{
        return getDocs(adminCollection);
    }
    getAuser=()=>{
        return getDocs(adminCollection)
    }
    
}

export default new adminDataServices();