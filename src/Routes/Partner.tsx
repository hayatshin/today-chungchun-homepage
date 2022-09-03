import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import colors from "../colors";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ReactHelmet from "../components/ReactHelmet";

const PartnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const FormBox = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

const EachFormBox = styled.div`
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: ${colors.boldGray};
  margin-bottom: 20px;
`;

const FormInput = styled.input`
  width: 40%;
  font-size: 17px;
  font-weight: 400;
  color: ${colors.boldGray};
  padding: 10px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${colors.lightGray};
  &:focus {
    border-bottom: 1px solid ${colors.mainColor};
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;

const PhoneInputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PhoneInput = styled.input`
  display: flex;
  text-align: center;
  width: 10%;
  font-size: 17px;
  font-weight: 400;
  color: ${colors.boldGray};
  padding: 10px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${colors.lightGray};
  &:focus {
    border-bottom: 1px solid ${colors.mainColor};
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;

const ContentInput = styled.textarea`
  width: 80%;
  height: 300px;
  border: 1px solid ${colors.lightGray};
  padding: 30px;
  outline: none;
  border-radius: 20px;
  resize: none;
  font-size: 20px;
  &:focus {
    border: 1px solid ${colors.mainColor};
  }
`;

const AgreeContent = styled.div`
  overflow: auto;
  height: 50px;
  padding: 20px;
  margin-bottom: 50px;
`;

const AgreeText = styled.p`
  font-size: 14px;
  color: black;
  font-weight: 300;
  line-height: 30px;
`;

const AgreeLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  color: ${colors.boldGray};
  margin-bottom: 15px;
`;

const AgreeCheck = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 20px;
`;

const SubmitBtn = styled.input`
  width: 100px;
  height: 40px;
  font-size: 18px;
  font-weight: 600;
  background-color: white;
  border: 1px solid ${colors.mainColor};
  border-radius: 5px;
  align-self: center;
  margin-top: 50px;
  margin-bottom: 50px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.mainColor};
    color: white;
  }
`;

const ErrorBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const ErrorMessage = styled.span`
  margin-left: 50px;
  font-size: 15px;
  color: ${colors.mainColor};
  font-weight: 400;
`;

interface FormValue {
  name: string;
  email: string;
  phone_one: number;
  phone_two: number;
  phone_three: number;
  message: string;
  agree: boolean;
}

function Partner() {
  const navigate = useNavigate();
  const [mailError, setMailError] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    if (form && form.current) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            if (result.text === "OK") {
              navigate("/mail");
            }
          },
          (error) => {
            setMailError(error.text);
          }
        );
    }
  };

  const onValid = (data: any) => {
    sendEmail(data);
  };

  return (
    <>
      <ReactHelmet title="제휴 문의" />
      <PartnerWrapper>
        <FormBox ref={form} onSubmit={handleSubmit(onValid)}>
          <EachFormBox>
            <ErrorMessage>{mailError !== null ? mailError : null}</ErrorMessage>
            <ErrorBox>
              <FormLabel>이름</FormLabel>
              {errors?.name?.message ? (
                <ErrorMessage>* {errors?.name?.message}</ErrorMessage>
              ) : null}
            </ErrorBox>
            <FormInput
              {...register("name", { required: "이름을 입력해주세요." })}
              type="text"
              name="name"
            />
          </EachFormBox>
          <EachFormBox>
            <ErrorBox>
              <FormLabel>이메일</FormLabel>
              {errors?.email?.message ? (
                <ErrorMessage>* {errors?.email?.message}</ErrorMessage>
              ) : null}
            </ErrorBox>
            <FormInput
              {...register("email", {
                required: "이메일을 입력해주세요.",
                pattern:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              })}
              type="email"
              name="email"
            />
          </EachFormBox>
          <EachFormBox>
            <ErrorBox>
              <FormLabel>연락 받으실 연착처(선택사항)</FormLabel>
              {errors?.phone_one?.message ||
              errors?.phone_two?.message ||
              errors?.phone_three?.message ? (
                <ErrorMessage>
                  *
                  {errors?.phone_one?.message ||
                    errors?.phone_two?.message ||
                    errors?.phone_three?.message}
                </ErrorMessage>
              ) : null}
            </ErrorBox>
            <PhoneInputBox>
              <PhoneInput
                {...register("phone_one", {
                  required: "핸드폰 번호를 입력해주세요.",
                  minLength: {
                    value: 3,
                    message: "3글자 이상이어야 합니다.",
                  },
                })}
                type="text"
                name="phone_one"
              />
              <div style={{ width: 10 }}></div>
              <FormLabel>-</FormLabel>
              <div style={{ width: 10 }}></div>
              <PhoneInput
                {...register("phone_two", {
                  required: "핸드폰 번호를 입력해주세요.",
                  minLength: {
                    value: 3,
                    message: "3글자 이상이어야 합니다.",
                  },
                })}
                type="text"
                name="phone_two"
              />
              <div style={{ width: 10 }}></div>
              <FormLabel>-</FormLabel>
              <div style={{ width: 10 }}></div>
              <PhoneInput
                {...register("phone_three", {
                  required: "핸드폰 번호를 입력해주세요.",
                  minLength: {
                    value: 4,
                    message: "3글자 이상이어야 합니다.",
                  },
                })}
                type="text"
                name="phone_three"
              />
            </PhoneInputBox>
          </EachFormBox>
          <EachFormBox>
            <ErrorBox>
              <FormLabel>내용</FormLabel>
              {errors?.message?.message ? (
                <ErrorMessage>* {errors?.message?.message}</ErrorMessage>
              ) : null}
            </ErrorBox>
            <ContentInput
              {...register("message", {
                required: "문의 내용을 입력해주세요.",
              })}
              name="message"
            />
          </EachFormBox>
          <EachFormBox>
            <ErrorBox>
              <FormLabel>개인정보 수집 및 이용 동의</FormLabel>
              {errors?.agree?.message ? (
                <ErrorMessage>* {errors?.agree?.message}</ErrorMessage>
              ) : null}
            </ErrorBox>
            <AgreeContent>
              <AgreeText>(필수)개인정보 수집, 이용에 대한 안내</AgreeText>
              <AgreeText>
                청춘온(주)는 이용자 문의를 처리하기 위해 다음과 같이 개인정보를
                수집 및 이용하며, 이용자의 개인 정보를 안전하게 취급하는데
                최선을 다하고 있습니다.
              </AgreeText>
              <AgreeText>수집항목: 이름, 이메일 주소</AgreeText>
            </AgreeContent>
            <AgreeLabel>
              <AgreeCheck
                {...register("agree", {
                  required: "개인 정보 수집 및 이용 동의를 해주세요.",
                })}
                type="checkbox"
                id="agree"
                name="agree"
              />
              개인정보 수집 및 이용에 동의합니다.
            </AgreeLabel>
          </EachFormBox>
          <SubmitBtn type="submit" value="보내기" />
        </FormBox>
      </PartnerWrapper>
    </>
  );
}

export default Partner;
