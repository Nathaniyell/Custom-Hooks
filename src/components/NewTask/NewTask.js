import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const NewTask = (props) => {

  const{ error, isLoading, sendRequest:sendTaskRequest } = useHttp()
  const createTask=(taskData)=>{
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskData.taskText };

    props.onAddTask(createdTask);
  }
 

  const enterTaskHandler = async(taskText)=>{
    sendTaskRequest({url: 'https://fetchmovies-udemy-default-rtdb.firebaseio.com/tasks.json', 
    method: "POST",
    body: {text:taskText} ,
    headers: {
      'Content-Type': 'application/json',
    }
  }, createTask)
  }

     return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
