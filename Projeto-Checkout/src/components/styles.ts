import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  background: #40EBF5;

`
export const Container = styled.div`
  background: white;
  width: 60%;
  height: 100%;
  margin-left: 19%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

export const ContentHeader = styled.div`
  display: flex;
  width: 100%;
  height: 4%;
  background:#4C4C6D;

`
export const BlockHeader = styled.div`
  display: flex;
  margin-left: 2%;
  width: 5%;
  gap: 5px;
`
export const LogoHeader = styled.img`
  width: 93px;
`
export const ContentTitle = styled.div`
  display: flex;
  margin-top: 20%;
  margin-left: 2%;
  width: 300%;
`
export const Number = styled.h1`
  font-size: 11px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
`
export const HeaderTitle = styled.p`
  font-size: 11px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  font-weight: 100;
  width: 108px;
`
export const BookHeader = styled.div`
  display: flex;
  margin-top: 1.2%;
  margin-left: 65%;
  gap: 20px;
`
export const TitleChechkout = styled.p`
  font-size: 11px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
`
export const BlockvalueTitle = styled.div`
  border: 1px solid white;
  border-radius: 25px;
  height: 53%;
  width: 88px;
`
export const ValueTitle = styled.p`
  font-size: 10px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  font-weight: 100;
  margin-left: 12%;
`
export const ContentPayment = styled.div`
  display: block;
  text-align: center;
`
export const TitlePayment = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 34px;
  letter-spacing: 2px;
  font-weight: 300;
  color: #4C4C6D;
  margin-top: 7%;
`
export const BlocokIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:30px;
  margin-top: 3%;
  width: 100%;
`
export const CreditCart = styled.button`
  width: 26%;
  height: 170px;
  border: solid 2px #e8ebeb;
  background: white;
  &:hover {
  border: 1px solid #40EBF5;
  padding: 1.5px;
  box-shadow: 5px 10px 18px #888888;
  }
  &:focus{
    bottom: 0;
    right: 0;
    background-color: #40EBF5;
 }
`
export const IconCreditCart = styled.img`
  margin-left: 1%;
  padding-bottom: 23%;
  width: 60px;
`
export const TitleCreditCart = styled.p`
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #4C4C6D;
  letter-spacing: 0.5px;
`
export const Paypal = styled.button`
  width: 26%;
  height: 170px;
  border: solid 2px #e8ebeb;
  background: white;
  &:hover {
  border: 1px solid #40EBF5;
  padding: 1.5px;
  box-shadow: 5px 10px 18px #888888;
  }
  &:focus{
    bottom: 0;
    right: 0;
    background-color: #40EBF5;
 }
`
export const IconPaypal = styled.img`
  margin-left: 1%;
  padding-bottom: 4%;
  width: 60px;
`
export const TitlePaypal = styled.p`
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #4C4C6D;
  letter-spacing: 0.5px;
  margin-top: 15%;
`
export const Bitcoin = styled.button`
  width: 26%;
  height: 170px;
  border: solid 2px #e8ebeb;
  background: white;
  &:hover {
  border: 1px solid #40EBF5;
  padding: 1.5px;
  box-shadow: 5px 10px 18px #888888;
  }
  &:focus{
    bottom: 0;
    right: 0;
    background-color: #40EBF5;
 }
`
export const IconBitcoin = styled.img`
  width: 60px;
`
export const TitleBitcoin = styled.p`
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #4C4C6D;
  letter-spacing: 0.5px;
  margin-top: 22%;
`
export const ContentInput = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 17.2%;
  width: 65%;
  height: 38%;
  margin-top: 3%;
`
export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4.8%;
  width: 89.6%;
  height: 100%;
  border: solid 2px #e8ebeb;
  margin-top: 4%;
`
export const Block = styled.div`
  margin-top: 5.5%;
`
export const BlockNumber = styled.div`
`
export const BlockName = styled.div`
  padding-top: 5%;
`
export const BlockInput = styled.div`
  display: flex;
  margin-top: 5%;
  margin-left: 11%;
`
export const BlockCode = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 45%;
  gap: 9px;
`
export const BlockDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  width: 29.2%;
`
export const InputNumber = styled.input`
  margin-left: 11%;
  width: 75%;
  height: 33px;
  border-radius:4px;
  border:1px solid gray;
  padding-left: 2.5%;
  margin-top: 1%;
`
export const InputName = styled.input`
  margin-left: 11%;
  width: 75%;
  height: 33px;
  border-radius:4px;
  border:1px solid gray;
  padding-left: 2.5%;
  margin-top: 1%;
`
export const InputCode = styled.input`
  width: 89%;
  height: 109px;
  border-radius:4px;
  border:1px solid gray;
  padding-left: 5%;
`
export const InputDate = styled.input`
  width: 138%;
  height: 25%;
  border-radius:4px;
  border:1px solid gray;
  padding-left: 5%;
`
export const Label = styled.label`
  margin-left: 11%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  color: gray;
`
export const LabelName = styled.label`
  margin-left: 11%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  color: gray;
`
export const RodapeLabel = styled.label`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  color: gray;
`
export const BlockRodape = styled.div`
  display: flex;
  margin-left: 26%;
  margin-top: 29.3%;
  gap: 10px;
`
export const BlockTitleRodape = styled.div`
  display: flex;
  gap: 5px;
`
export const ImgRodape = styled.img`
  width: 13px;
`
export const TitleRodapeCinza = styled.p`
  font-size: 11px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: gray;
`
export const TitleRodapeorange = styled.p`
  font-size: 11px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #fa6b05;
`
export const BlockBottun = styled.div`

`
export const ButtonRodaoe = styled.button`
  font-size: 12px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  background: #fa6b05;
  border:none;
  border-radius: 30px;
  width: 22%;
  height: 30px;
  margin-left: 63%;
  margin-top: 5%;
`