import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

export type TodoListsType = {
    id: string
    title: string
    filter: FilterValuesType
}
function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1=v1();
    let todolistID2=v1();



    let [todolists, setTodolists] = useState<Array<TodoListsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]:[
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]:[
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });



    function removeTask(todolistId: string,id: string) {
        // let filteredTasks = tasks[todolistId].filter(t => t.id !== id);
        setTasks({...tasks, [todolistId]: tasks[todolistId].filter(el=> el.id !== id)});
    }

    function addTask(todolistId: string,title: string) {
        let task = {id: v1(), title: title, isDone: false};
        // let newTasks = [task, ...tasks];
        setTasks({...tasks, [todolistId] : [task,...tasks[todolistId]]});
    }

    function changeStatus(todolistId: string,taskId: string, isDone: boolean) {
        // let task = tasks[taskId].find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }

        setTasks({...tasks, [todolistId]: tasks[todolistId].map(el=> el.id === taskId? {...el, isDone}: el )});

    }





    function changeFilter(todolistId: string,value: FilterValuesType) {
        // setFilter(value);
        setTodolists( todolists.map((el=> el.id === todolistId? {...el, filter: value}: el)))
    }


    let mappedTasks = todolists.map(el => {

            return (
                <Todolist
                    key={el.id}
                    todolistId={el.id}
                    title={el.title}
                    tasks={tasks[el.id]}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={el.filter}
                    // removeTodoList={removeTodoList}
                />
            )
        }
    )
    return (
        <div className="App">
            {mappedTasks}
        </div>
    );
}
export default App;
