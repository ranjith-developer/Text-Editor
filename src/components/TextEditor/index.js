import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  AppContainer,
  ImageContainer,
  Heading,
  Image,
  EditorContainer,
  ButtonList,
  ButtonItem,
  BoldButton,
  ItalicButton,
  UnderLineButton,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    boldActive: false,
    italicActive: false,
    underLineActive: false,
    textInput: '',
  }

  handleBoldButton = () => {
    this.setState(prevState => ({
      boldActive: !prevState.boldActive,
    }))
  }

  handleItalicButton = () => {
    this.setState(prevState => ({
      italicActive: !prevState.italicActive,
    }))
  }

  handleUnderLineButton = () => {
    this.setState(prevState => ({
      underLineActive: !prevState.underLineActive,
    }))
  }

  handleTextInput = event => {
    this.setState({
      textInput: event.target.value,
    })
  }

  render() {
    const {boldActive, italicActive, underLineActive, textInput} = this.state

    const boldColor = boldActive ? '#faff00' : '#f1f5f9'
    const italicColor = italicActive ? '#faff00' : '#f1f5f9'
    const underLineColor = underLineActive ? '#faff00' : '#f1f5f9'

    const bold = boldActive ? 'bold' : 'normal'
    const italic = italicActive ? 'italic' : 'normal'
    const underLine = underLineActive ? 'underline' : 'normal'

    return (
      <MainContainer>
        <AppContainer>
          <ImageContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <EditorContainer>
            <ButtonList>
              <ButtonItem>
                <BoldButton
                  type="button"
                  onClick={this.handleBoldButton}
                  boldColor={boldColor}
                  data-testid="bold"
                >
                  <VscBold size="25" />
                </BoldButton>
              </ButtonItem>
              <ButtonItem>
                <ItalicButton
                  type="button"
                  onClick={this.handleItalicButton}
                  italicColor={italicColor}
                  data-testid="italic"
                >
                  <GoItalic size="25" />
                </ItalicButton>
              </ButtonItem>
              <ButtonItem>
                <UnderLineButton
                  type="button"
                  onClick={this.handleUnderLineButton}
                  underLineColor={underLineColor}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size="25" />
                </UnderLineButton>
              </ButtonItem>
            </ButtonList>
            <TextArea
              type="description"
              rows="50"
              bold={bold}
              italic={italic}
              underLine={underLine}
              value={textInput}
              onChange={this.handleTextInput}
            />
          </EditorContainer>
        </AppContainer>
      </MainContainer>
    )
  }
}

export default TextEditor
