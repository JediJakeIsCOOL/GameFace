import React, {Component} from 'react'




class ContactItem extends Component{
    deleteContact(id){
        console.log(id);
    
        this.props.onDelete(id);
    }
   render(){
       return(
           <div>
           <b>{this.props.contact.name}</b> - {this.props.contact.city} - {this.props.contact.state}
           <a href="" onClick={this.deleteContact.bind(this, this.props.contact.id)}>X</a>
           </div>
       )
    }
   }





export default ContactItem