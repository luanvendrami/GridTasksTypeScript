import React, {useState, useEffect, ChangeEvent, FormEvent} from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { Container, Description } from './styled'
import api from '../../../services/api'

interface ITask{
  title: string;
  description: string;
}

const Tasks: React.FC = () => {

  const navigation = useNavigate()
  const { id  } = useParams()

  const [save, setSave] = useState<ITask>({
    title: '',
    description: ''
  })

  useEffect(() => {
    if(id !== undefined){
      findTask(id as string)
    }
  }, [id])

  async function saveTasks(e: ChangeEvent<HTMLInputElement>) {  
    setSave({
      ...save,
      [e.target.name]: e.target.value
    })
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()

    if(id !== undefined){
      const response  = await api.put(`/tasks/${id}`, save)
    }else if(save.title !== "" && save.description !== ""){
      const response = await api.post('/tasks', save)
    }
  }

  async function findTask(id: string) {
  const response = await api.get(`tasks/${id}`)
  setSave({
    title: response.data.title,
    description: response.data.description
  })
  }

  function returnTaskGrid() {
    navigation(-1)
  }

  return(
    <Container onSubmit={onSubmit}>
      <div className="container">
        <br/>
        <div className='task-header'>
          <h1>New Task</h1>
          <button className='colorNewTask' onClick={returnTaskGrid}>Return</button>
        </div>
        <br/>
        <div>
         <h2>Title</h2>
         <input 
         name="title" 
         value={save.title}
         onChange={(e: ChangeEvent<HTMLInputElement>) => saveTasks(e)}>  
         </input>
         <br/>
         <h2>Description</h2>
         <Description>
         <input
         name="description"
         value={save.description} 
         onChange={(e: ChangeEvent<HTMLInputElement>) => saveTasks(e)}>
         </input>
         </Description>
         <button className='colorSubmit' type='submit' onClick={returnTaskGrid}>Submit</button>
        </div>
       </div>
       </Container>
  )
}

export default Tasks