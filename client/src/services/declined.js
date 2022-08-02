import {db} from "../firebase"
import { collection, getDocs,getDoc, addDoc,deleteDoc, doc} from "firebase/firestore"

const userCollection = collection(db,"declined")
class declinedDataServices {
    //adding a new user to the firebase
    addUser=(declinelist)=> {
        return addDoc(userCollection,declinelist);
    }
    //to delete a user
    deleteUser=(id)=>{
        const user = doc(db,"declined",id)
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

export default new declinedDataServices();