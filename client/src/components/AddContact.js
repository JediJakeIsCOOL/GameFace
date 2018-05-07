import React, {Component} from 'react'
import uuid from 'uuid'

class AddContact extends Component {
    constructor(){
        super()
        this.state ={ 
            newContact:{}
        }
    }
    static defaultProps = {
        contacts: ['Jake', 'Andrew', 'John']
    }
    handleSubmit(e) {
        console.log('submitted');
        console.log(this.refs.name.value);
        e.preventDefault();
        //this.setState({}, callback)
        if(this.refs.name.value === ''){
            alert('name is required')
        }else{
            this.setState({newContact:{
                id: uuid.v4,
                name: this.refs.name.value,
                city: this.refs.city.value,
                state: this.refs.state.value

            }}, function(){
                this.props.addContact(this.state.newContact)
            }
        )
        }
    }
    render() {
        let nameInfo = this.props.contacts.map(contact => {
            return <option key= {contact} value = {contact}>{contact}</option>
        })
    return(
        <div>
            <h1> Add Friends </h1>

            <form onSubmit= {this.handleSubmit.bind(this)}>
                <div>
                    <label> Name </label> <br />
                    <input type='text' ref='name'/>
                </div>

                <div>
                    <label> City </label> <br />
                    <input type='text' ref='city'/>
                </div>

                <div>
                    <label> State </label> <br />
                    <input type='text' ref='state'/>
                </div>
                <input type='submit' value='submit'/>
             </form>
        </div>
        

    )
    }
}



export default AddContact