import React, { Component } from 'react';

class EditTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editItem: this.props.editItem
        }
    }
    handleEditTask = () =>{
        this.props.doEdit(this.state.editItem.id, this.state.editItem.name)
        this.props.closeForm()
    }
    changedName = (e) =>{
        this.setState({
            editItem : { id: this.props.editItem.id, name : e.target.value}
        })
    }
    render(){
         <React.Fragment>
             <div className="container">
                <h2>Task</h2>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder ="moi ban nhap task"
                         defaultValue ={this.state.editItem.name} onChange={ this.changedName}/>
                    </div>
                    <button type="submit" style={{marginRight : 12+'px'}} className ="btn btn-default" onClick={this.handleEditTask}>Edit</button>
                    <button type="button" className="btn btn-default" onClick={this.props.closeForm}>Back</button>
             </div>
         </React.Fragment>
    }
}

export default EditTask;