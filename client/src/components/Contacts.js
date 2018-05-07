import React, {Component} from 'react'
import ContactItem from './ContactItem'


class Contacts extends Component{
    deleteContact(id){
        this.props.onDelete(id);
      }
      
    render(){
        
        let contacts;

        if(this.props.contactList){
        contacts = this.props.contactList.sort((a,b) => a.name > b.name).map(contact =>{
            return (
                <ContactItem onDelete={this.deleteContact.bind(this)} contact = {contact}/>
            )
        })
        
    }


            return (
                <div>
                    Friends list: 
            {contacts} <br />
            
            
            </div>

        )
    }
}


export default Contacts