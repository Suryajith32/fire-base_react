import {db} from "../firebase"
import { collection, getDocs,getDoc, addDoc,deleteDoc, doc} from "firebase/firestore"

const userCollection = collection(db,"approved")
class approvedDataServices {
    //adding a new user to the firebase
    addUser=(owner)=> {
        return addDoc(userCollection,owner);
    }
    //to delete a user
    deleteUser=(id)=>{
        const user = doc(db,"approved",id)
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

export default new approvedDataServices();