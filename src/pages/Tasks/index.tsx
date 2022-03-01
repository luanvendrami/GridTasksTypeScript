import React, {useState, useEffect} from 'react';
import { Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api'

import moment from 'moment'

import { Container }  from './styled'


interface ITask{
  id: number;
  title: string;
  description: string;
  finished: boolean;
  created_at: Date;
  updated_at: Date;
}

const Tasks: React.FC = () => {

const [tasks, setTasks] = useState<ITask[]>([])

  const navigation = useNavigate()

  useEffect(() => {
    loadTasks()
  }, [])

  async function loadTasks() {
    
    const response = await api.get('/tasks')
    setTasks(response.data)
  }

  async function finishedTask(id: number) {
    await api.patch(`/tasks/${id}`)
    loadTasks()
  }

  async function deleteTask(id: number) {
    await api.delete(`/tasks/${id}`)
    loadTasks()
  }

  function formatDate(date: Date){
    return moment(date).format("DD/MM/YYYY")
  }

  function newTask() {
    navigation("/tarefas_cadastro")
  }

  function editTask(id:number) {
    navigation(`/tarefas_cadastro/${id}`)
  }

  function viewTask(id:number) {
    navigation(`/tarefas/${id}`)
  }

  return(
    <Container>
    <div className="container">
        <br/>
        <div className='task-header'>
          <h1>Table Tasks</h1>
          <button className='colorNewTask' onClick={newTask}>New</button>
        </div>
        <br/>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Data Update</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>   

              {
                tasks
                .sort((a, b) => a.id > b.id ? 1 : -1)
                .map((task, i) =>(
                  <tr key={i}>
                    <td>{ task.id }</td>
                    <td>{ task.title }</td>
                    <td>{ formatDate(task.updated_at) }</td>
                    <td>                    
                      <Badge bg={ task.finished ? "success" : "warning"}>
                        { task.finished ? "Finished" : "Pending"}
                      </Badge>
                      </td>
                    <td className='tdbig'>
                      <button data-type="button" disabled={task.finished} className='colorEdit' onClick={ () => editTask(task.id) }>Edit</button> 
                      <button data-type="button" disabled={task.finished} className='colorSuccess' onClick={ () => finishedTask(task.id)}>Finally</button>
                      <button data-type="button" className='colorVisualize' onClick={ () => viewTask(task.id)}>Visualize</button> 
                      <button data-type="button" className='colorRemove' onClick={ () => deleteTask(task.id)}>Remove</button>
                    </td>
                 </tr>  
                ))
              }       
          </tbody>
        </table>
       </div>
       </Container>
  )
}

export default Tasks