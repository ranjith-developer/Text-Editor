import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const AppContainer = styled.div`
  background-color: #1b1c22;
  border-radius: 12px;
  display: flex;
  align-items: center;
  height: 80vh;
`
export const ImageContainer = styled.div`
  width: 50%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 600;
`

export const Image = styled.img`
  width: 100%;
`
export const EditorContainer = styled.div`
  width: 50%;
  background-color: #25262c;
  //   padding: 12px;
  margin: 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 75vh;
  border: 1px solid #334155;
`
export const ButtonList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  border-bottom: 1px solid #334155;
`

export const ButtonItem = styled.li`
  margin-right: 5px;
`

export const BoldButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.boldColor};
  cursor: pointer;
`

export const ItalicButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.italicColor};
  cursor: pointer;
`

export const UnderLineButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.underLineColor};
  cursor: pointer;
`
export const TextArea = styled.textarea`
font-weight: ${props => props.bold};
    font-style: ${props => props.italic};
        text-decoration: ${props => props.underLine};
background-color: transparent;
width: 100%;
color: #f1f5f9;
font-size: 14px;
font-family: 'Roboto'
height: 100%;
padding-left: 16px;
margin-top: 0px;
border: none;
`
