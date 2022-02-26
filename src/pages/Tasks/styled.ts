import styled from "styled-components";

export const Container = styled.div`
        
 button{
        width: 20%;
        height: 2rem;
        margin: 0 0.19rem;
        position: relative;
        color: white;
        border: 0;
        border-radius: 0.3rem;
        font-size: 1rem;
        font-weight: 600;
        display: inline;
        text-align: center;

        transition: filter 0.2s;
        
        &:hover{
            filter: brightness(0.9);
            cursor: pointer;
        }
        
 } 

 .colorEdit{
    background: #D98719
 }
 
.colorSuccess{
     background : #008000;
 }

 .colorVisualize{
     background: #0000FF;
 }
 .colorRemove{
     background: #FF0000;
 }

 tr{
     background: #f0f2f5;
     border-width: 0.3rem;
     border: black;
 }

 th{
    background: white;
 }

 table, th, td {
    border: 0.2rem solid #f5f5f5;
    padding: 1rem;
    border-collapse: collapse;
    text-align: center;
}

.colorNewTask{
  background: black;
width: 7%;
height: 3rem;
}

.task-header{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
`