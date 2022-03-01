import React, { useState, useEffect } from 'react'
import { Container, Textareabody, Textareatitle }  from './styled'
import { useNavigate, useParams } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

import moment from 'moment'
import api from '../../../services/api';

interface ITask{
  id: number;
  title: string;
  description: string;
  finished: boolean;
  created_at: Date;
  updated_at: Date;
}

const Detail: React.FC = () => {

  const navigation = useNavigate()
  const { id } = useParams()
  const [task, setTask] = useState<ITask>()

  useEffect(() => {
    findTask()
  }, [id])

  function back() {
    navigation(-1)
  }

  async function findTask() {
    const response = await api.get<ITask>(`/tasks/${id}`)
    console.log(response)
    setTask(response.data)
  }

  function formatDate(date: Date | undefined){
    return moment(date).format("DD/MM/YYYY")
  }

  return(
    <Container>
    <div className="container">
        <br/>
        <div className='task-header'>
          <h1>Task  Deatail</h1>
          <button className='colorNewTask' onClick={back}>Back</button>
        </div>
        <br/>
        <Textareatitle value={ task?.title } disabled={true} />
        <Textareabody value={ task?.description } disabled={true}/>
        <Badge
          bg={ task?.finished ? "success" : "warning"}>
          { task?.finished ? "Finished" : "Pending"}
        </Badge>
        <br/>
        <strong>Data de Cadastro: </strong>
        <Badge
          data-variant="info">
            { formatDate(task?.created_at) }
        </Badge>
        <br/>
        <strong>Data de atualização: </strong>
        <Badge
          data-variant="info">
            { formatDate(task?.updated_at) }
        </Badge>
       </div>
       </Container>
  );
}

export default Detail;