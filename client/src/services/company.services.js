import {db} from "../firebase"
import { collection, getDocs,getDoc, addDoc,deleteDoc, doc} from "firebase/firestore"

const userCollection = collection(db,"company")
class companyDataServices {
    //adding a new user to the firebase
    addUser=(details)=> {
        return addDoc(userCollection,details);
    }
    //to delete a user
    deleteUser=(id)=>{
        const user = doc(db,"company",id)
        return deleteDoc(user);
    }
    //to get all users
    getAllUser =()=>{
        return getDocs(userCollection);
    }
    getAuser=(id)=>{
        const user = doc(db,"company",id)
        // console.log(user)
        return getDoc(user)
        
    }
    
}

export default new companyDataServices();