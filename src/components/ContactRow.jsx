/* eslint-disable react/prop-types */


const ContactRow = ({contact, setSelectedContactId}) =>{
return(
    <tr onClick = {()=>{setSelectedContactId(contact.id)}}>
        <td>{`Name: ${contact.name}`}</td>
        <td>{`Email: ${contact.email}`}</td>
        <td>{`Phone: ${contact.phone}`}</td>
    </tr>
);
}

export default ContactRow