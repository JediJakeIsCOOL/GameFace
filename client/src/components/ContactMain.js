import React, {Component} from 'react'
import Contacts from './Contacts'
import AddContact from './AddContact'

import uuid from 'uuid'



class ContactMain extends Component{
    constructor(){
        super()
        this.state = {
          contactList: []
        }
      }
      
      
      setContacts(){
        this.setState({contactList: [{
          id: uuid.v4(),
          name: 'Jake',
          email: 'Jake@jake.com',
          city: 'Houston',
          state: 'Texas',
          zip: '77063',
        },
        {
          id: uuid.v4(),
          name: 'John',
          email: 'John@jake.com',
          city: 'San Marcos',
          state: 'Texas',
          zip: '77666',
        },
        {
          id: uuid.v4(),
          name: 'Andrew',
          email: 'James@jake.com',
          city: 'Lafayette',
          state: 'Lousiana',
          zip: '56670'
          
        }
        ]
        })
      }
      componentWillMount(){
        this.setContacts()
      }
    
    
      handleAddContact(contact){
        console.log("what is being sent to us")
        console.log(contact)
    
        let contacts  = this.state.contactList;
        contacts.push(contact);
        this.setState({contacts:contacts})
      }
    
      handleDeleteContact(id){
        var remove = prompt('Type "remove" if you want to permanently remove this contact.')
    
        if (remove === 'remove'){
        
        let contacts = this.state.contactList;
    
        let index = contacts.findIndex(x => x.id === id);
    
        contacts.splice(index, 1);
    
        this.setState({contacts:contacts})
      }
      else {
          alert('You did not type "remove" in to the box. Remove friend cancelled.')
      }
    }
render(){
    return(
      <div>
          
      <Contacts onDelete={this.handleDeleteContact.bind(this)} contactList= {this.state.contactList}/>
      <AddContact addContact ={this.handleAddContact.bind(this)}/>
       
       </div>
      
    )
  }

}

export default ContactMain