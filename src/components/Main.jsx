import React, {Component} from 'react';
import TaskList from './TaskList.jsx';
import UpdateTask from './UpdateTask.jsx';
import AddTaskButton from './AddTaskButton.jsx';

const compareDesc = field => (a,b) => a[field] < b[field] ? 1: a[field] === b[field] ? 0: -1;

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {isAddMode: false};

        // This binding is necessary to make `this` work in the callback
        this.toggleMode = this.toggleMode.bind(this);
    }

    toggleMode() {
        this.setState(state => ({
            isAddMode: !state.isAddMode
        }));
    }

    render() {
        const {isAddMode} = this.state;
        const tasks =[{id: '001', title: 'aaa', text:'aaa', onClick:()=> console.log('aaa')},
            {id: '002', title:'bbb', text:'bbb', onClick:()=> console.log('bbb')},
            {id: '003', title:'zzz', text:'aaa', onClick:()=> console.log('zzz')}];
        tasks.sort(compareDesc('title'));

        return (
            <div>
                <TaskList tasks={tasks} edit='002'></TaskList>
                {isAddMode?<UpdateTask onClick={this.toggleMode}></UpdateTask>:<AddTaskButton onClick={this.toggleMode}></AddTaskButton>}
            </div>
        );
    }

}

export default Main;
