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
export const Textareatitle = styled.textarea`
  display: block;
  font-size: 1rem;
  height: 1rem;
  min-height: 2rem;
  overflow: hidden;
  padding: 0 0.5rem;
  margin: 0 0 2rem;
  resize: none;
  width: 100%; 
`

export const Textareabody = styled.textarea`
  display: block;
  font-size: 1rem;
  height: 3rem;
  min-height: 6rem;
  overflow: hidden;
  padding: 0 0.5rem;
  margin: 0 0 2rem;
  resize: none;
  width: 100%;
`