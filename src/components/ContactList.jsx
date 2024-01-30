import {useState, useEffect} from "react"
import ContactRow from "./ContactRow";



const ContactList = ({setSelectedContactId}) =>{
    const [contacts,setContacts] = useState([]);
    useEffect (() => {
        const fetchContacts = async() =>{
            try {
                const result = await fetch ('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
                const data = await result.json()
                setContacts(data);
                
            }
            catch(err){
                console.error(err);
            }
        }
        fetchContacts();
    },[])
    return (
        <table>
            <thead>
            <tr>
                <th>Contact List</th>
            </tr>
            </thead>
            <tbody>
            
            {
                contacts.map((c)=>{
                    return (<ContactRow key = {c.id} contact = {c} setSelectedContactId = {setSelectedContactId}/>)
                })
            }
            </tbody>
            
        </table>
    )
}

export default ContactList;