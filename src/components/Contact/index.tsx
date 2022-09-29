import React from 'react'
import { Button } from '../ButtonElements'
import { ContactButton, ContactContainer, ContactForm, ContactFormControl, ContactInput, ContactLabel, ContactTextArea, ContactTitle, ContactWrap } from './ContactElements'

const Contact = () => {
  return (
    <ContactContainer>
      <ContactWrap>
        <ContactTitle>Contato</ContactTitle>
        <ContactForm>
          <ContactFormControl>
            <ContactLabel>Nome:</ContactLabel>
            <ContactInput type="text" />
          </ContactFormControl>

          <ContactFormControl>
            <ContactLabel>Email:</ContactLabel>
            <ContactInput type="text" />
          </ContactFormControl>

          <ContactFormControl>
            <ContactLabel>Assunto:</ContactLabel>
            <ContactInput type="text" />
          </ContactFormControl>

          <ContactFormControl>
            <ContactLabel>Descrição:</ContactLabel>
            <ContactTextArea />
          </ContactFormControl>
          <ContactButton primary big >Enviar</ContactButton>
        </ContactForm>
      </ContactWrap>
    </ContactContainer>
  )
}

export { Contact }