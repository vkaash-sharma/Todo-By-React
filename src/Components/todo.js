import React, { Component } from 'react'

export default class todo extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [
             { id: 1 , task : "Revise Js"},
             { id : 2 , task : "Revise DSA Level- 1"},
            ],
            curTask:"",
        };
    }
      handleDeleteTask = (id)=>{
        let arr = this.state.tasks.filter((taskObj)=>{
            return taskObj.id!=id;
        })
         this.setState({
            tasks:[...arr]
         })

      }
   
    handleChange =(e) => {
        console.log(e.target.value);
        this.setState({
            curTask:e.target.value,
        });
    }

    handleSubmit = () => {
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.curTask,id:this.state.tasks.length+1}],
         curTask:"",
        })
    }



  render() {
    console.log("render method is called");
    return ( // jsx start
    //   <div>todo</div>
       <div>
        <input 
              type = "text"
              value={this.state.curTask}
              onChange={this.handleChange}
              />
        <button onClick={this.handleSubmit}>Submit</button>
        {
            this.state.tasks.map((taskObj)=>{
                return(
                    <li key={taskObj.id}>
                        <p>{taskObj.task}</p>
                        <button onClick={() => this.handleDeleteTask(taskObj.id)}>Delete</button>
                    </li>
                );
            })
        }
       </div>
    );
  }
}
