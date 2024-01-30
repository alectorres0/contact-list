import {useState, useEffect} from "react"

const SelectedContact = ({selectedContactId}) =>{
    const [contact, setContact] = useState(null);
    useEffect(()=>{
    const getContact = async () =>{
        try{
            const result = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
            const data = await result.json();
            console.log(data);
            setContact(data);
            console.log(contact);
        }
        catch(err){
            console.error(err);
        }
    }
    getContact();
    console.log(contact);
},[])
    
    if (!contact){
        return <p>loading</p>
    }
    return (
       <>
        <div>
           <p>{`${contact.id}${contact.name}${contact.username}${contact.email}${contact.website}`}</p>
        </div>
        </>
    )

}

export default SelectedContact;