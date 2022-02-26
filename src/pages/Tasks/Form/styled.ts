import styled from "styled-components";


export const Container = styled.form`

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

    h2 {
    color: #363F5F;
    font-size: 1rem;
    margin-bottom: 1rem;
}

input{
    width: 100%;
    padding: 0 1.5rem;
    margin-bottom: 1rem;
    height: 2rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder{
        color: var(--tex-body);
    }

    & + input{
        margin-top: 1rem;
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

.colorSubmit{
background: black;
width: 7%;
height: 3rem;
}
`
export const Description = styled.text`

border: none;
width: 100%;
margin-bottom: 1rem;
width: 100%;
background: #e7e9ee;
border: 1px solid #d7d7d7;
border-radius: 0.25rem;

`
