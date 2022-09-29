import styled from "styled-components";

interface ButtonProps {
  primary?: any;
  big?: boolean;
  fontBig?: boolean;
  dark?: any;
}

export const ContactContainer = styled.section`
  width: 100%;
  height: 800px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContactWrap = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`

export const ContactTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #01bf71;
  text-align: center;

`
export const ContactForm = styled.form`
  padding: 24px 48px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center
`

export const ContactFormControl = styled.div`
  margin-bottom: 15px;
`

export const ContactLabel = styled.label`
  display: block;
  font-size: 20px;
  color: #010606;
  margin-bottom: 8px;
  font-size: 16px;
`

export const ContactInput = styled.input`
  font-size: 20px;
  color: #101522;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  padding: 0 8px;
  border: 1px solid #101522;
  font-size: 14px;

  &:focus {
    outline-color: #01bf71;
  }
`

export const ContactTextArea = styled.textarea`
  width: 100%;
  color: #101522;
  height: 140px;
  border-radius: 4px;
  padding: 8px;
  border: 1px solid #101522;
  resize: vertical;
  font-size: 14px;
  
  &:focus {
    outline-color: #01bf71;
  }
`

export const ContactButton = styled.button`
  border-radius: 50px;
  background: ${({ primary = false }: ButtonProps) => primary ? "#01bf71" : "#010606"};
  white-space: nowrap;
  padding: ${({ big = false }: ButtonProps) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark = false }: ButtonProps) =>  dark ? "#010606" : "#fff"};
  font-size: ${({ fontBig = false }: ButtonProps) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary = false }: ButtonProps) => primary ? "#010606" : "#01bf71"};
    
  }
`