import React from "react";
import TextSection from "../textSection/TextSection";
import Icons from "../iconsComponent/Icons";
import emailjs from "emailjs-com";
import {
  FormBox,
  FormContainer,
  Input,
  InputBox,
  TextAreaBox,
  TextArea,
  FormElement,
  SubmitBtn,
  SubmitBtnBox,
  TextContainer,
  InfoBox,
} from "./Form.elements";

const Form = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_vu0d4ug",
        e.target,
        "user_Lvt2Ym89HemgyMsBIcKIH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <>
      <FormBox>
        <TextContainer>
          <TextSection
            lightText={false}
            topLine="What are you waitng for?"
            mainLine="Lets get in contact"
            description="Send me an email at alexander.lesser94@gmail.com or use the email form!"
          />
          <InfoBox>
            <Icons />
          </InfoBox>
        </TextContainer>
        <FormContainer>
          <FormElement onSubmit={sendEmail}>
            <InputBox>
              <Input type="text" placeholder="Name" name="form_name" />
            </InputBox>
            <InputBox>
              <Input
                type="email"
                placeholder="Email Address"
                name="form_email"
              />
            </InputBox>
            <InputBox>
              <Input type="text" placeholder="Subject" name="form_subject" />
            </InputBox>
            <TextAreaBox>
              <TextArea
                cols="30"
                rows="10"
                placeholder="Your message"
                name="form_message"
              />
            </TextAreaBox>
            <SubmitBtnBox>
              <SubmitBtn type="submit" value="Send Message" />
            </SubmitBtnBox>
          </FormElement>
        </FormContainer>
      </FormBox>
    </>
  );
};

export default Form;
