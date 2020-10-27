import styled from "styled-components";

export const FormBox = styled.div`
  width: 100%;
  height: 100%;
  /* background: ${({ lightBg }) => (lightBg ? "#a6acb3" : "#202121")}; */
  background-color: #202121;
  color: #fff;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const TextContainer = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 30px 30px;
  }
`;

export const InfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
`;

export const NameInfo = styled.div`
  border: 2px solid purple;
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 50%;
  height: 100%;
  margin: 20px 50px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 10px 30px;
  }
`;

export const FormElement = styled.form`
  width: 100%;
  height: 100%;
`;

export const InputBox = styled.div`
  width: 100%;
  height: 8vh;
`;

export const Input = styled.input`
  position: relative;
  width: 100%; /* sets size to the same as form */
  height: 100%; /* sets size to the same as form */
  color: #fff;
  padding-top: 20px; /* moves text further down the input */
  border: none;
  outline: none; /* removes the input line around */
  background: none;
  padding-left: 10px;
  border-bottom: 1px solid #fff;
  backface-visibility: hidden;
  font-size: 1rem;

  &::placeholder {
    color: #fff;
    opacity: 0.7;
    text-shadow: 2px 2px #000;
  }

  &:focus::placeholder {
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:focus {
    border-bottom: 3px solid rgba(93, 18, 255, 0.8);
    transition: all 0.3s ease;
  }
`;

export const TextAreaBox = styled.div`
  width: 100%;
`;

export const TextArea = styled.textarea`
  position: relative;
  resize: none;
  width: 100%; /* sets size to the same as form */
  height: 100%; /* sets size to the same as form */
  color: #fff;
  padding-top: 20px; /* moves text further down the input */
  border: none;
  outline: none; /* removes the input line around */
  background: none;
  font-size: 1rem;
  border: 1px solid #fff;
  padding: 10px;
  margin-top: 35px;

  &::placeholder {
    color: #fff;
    opacity: 0.7;
    text-shadow: 2px 2px #000;
  }

  &:focus::placeholder {
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:focus {
    border: 3px solid rgba(93, 18, 255, 0.8);
    border-radius: 5px;
    transition: all 0.3s ease;
  }
`;

export const SubmitBtnBox = styled.div`
  width: 100%;
  height: 10vh;
  margin-top: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
`;

export const SubmitBtn = styled.input`
  padding: 10px 20px;
  background: none;
  outline: none;
  color: #fff;
  border: 1px solid #fff;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #242129;
  }
`;
