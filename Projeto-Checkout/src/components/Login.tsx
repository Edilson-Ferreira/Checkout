import {Bitcoin, BlockCode, BlockDate, BlockHeader, BlockInput, BlockRodape, BlockTitleRodape, BlockvalueTitle, BlocokIcons, BookHeader, ButtonRodaoe, Container, Content, ContentHeader, ContentInput, ContentPayment, ContentTitle, CreditCart, HeaderTitle, IconBitcoin, IconCreditCart, IconPaypal, ImgRodape, InputCode, InputDate, InputName, InputNumber, Label, LabelName, LogoHeader, Number, Paypal, RodapeLabel, TitleBitcoin, TitleChechkout, TitleCreditCart, TitlePayment, TitlePaypal, TitleRodapeCinza, TitleRodapeorange, ValueTitle } from "./styles";
import Logo from "../assets//32c90c58b9248b11396155be8de569cd.png"
import LogoCredit from "../assets/cartao-de-credito.png"
import LogoPaypal from "../assets/logotipo.png"
import LogoBitcoin from "../assets/bitcoin.png"
import LogoSeta from "../assets/icons8-turn-32 (1).png"
import { ChangeEvent, FormEvent, useState } from "react";



export function Login(){
  
const [newNumber,setNumber] = useState('')

function HandleNumber(e: ChangeEvent<HTMLInputElement>){
  setNumber(e.target.value)
}

function HandleSubmit(e: FormEvent){
  try {
    e.preventDefault()
    console.log(newNumber)
  } catch (error) {
    console.log(error)
  }finally {
    setNumber('')
  }
}
  return(
    <Content>   

      <Container>
        <ContentHeader>
          <BlockHeader>
            <LogoHeader 
              src={Logo} 
              alt="Logo Formato em Letra S"
            />
            <ContentTitle>
              <Number>
                1.
              </Number>
              <HeaderTitle>
                Define layout
              </HeaderTitle>
            </ContentTitle>
            <ContentTitle>
              <Number>
                2.
              </Number>
              <HeaderTitle>
                Add Goodies
              </HeaderTitle>
            </ContentTitle>
            <ContentTitle>
              <Number>
                3.
              </Number>
              <HeaderTitle>
                Upload My Files
              </HeaderTitle>
            </ContentTitle>

          </BlockHeader>

          <BookHeader>
            <TitleChechkout>
              Checkout
            </TitleChechkout>
            <BlockvalueTitle>
              <ValueTitle>
                Total: $200,00
              </ValueTitle>
            </BlockvalueTitle>
      
          </BookHeader>
      </ContentHeader>

      <ContentPayment>
        <TitlePayment>
          My payment method
        </TitlePayment>
      </ContentPayment>

      <BlocokIcons>
        <CreditCart>
          <IconCreditCart src={LogoCredit} alt=""/>
          <TitleCreditCart>
            Credit Cart
          </TitleCreditCart>
        </CreditCart>

        <Paypal>
          <IconPaypal src={LogoPaypal} alt="" />
          <TitlePaypal>
            Paypal
          </TitlePaypal>
        </Paypal>

        <Bitcoin>
          <IconBitcoin src={LogoBitcoin} alt="" />
          <TitleBitcoin>
            Bitcoin
          </TitleBitcoin>
        </Bitcoin>
      </BlocokIcons>

        <ContentInput onSubmit={HandleSubmit}>
          <Label htmlFor="type">Card Number   
          </Label>
          <InputNumber
           type="numero" 
           value={newNumber}
           onChange={HandleNumber}
           />
          <LabelName htmlFor="text">Name on Card</LabelName>
          <InputName type="text" />
          <BlockInput>
            <BlockCode>
              <RodapeLabel htmlFor="text">CVV CODE</RodapeLabel>
              <InputCode type="password" />
            </BlockCode>
            <BlockDate>
              <RodapeLabel htmlFor="">Expiration date</RodapeLabel>
              <InputDate type="text" placeholder="MM/YY"/>
            </BlockDate>
          </BlockInput>
        </ContentInput>

          <BlockRodape>
            <BlockTitleRodape>
              <ImgRodape src={LogoSeta} alt=""/>
              <TitleRodapeCinza>
                l have read & agree to
              </TitleRodapeCinza> 
              <TitleRodapeorange>
                Terms & Conditions
              </TitleRodapeorange>
            </BlockTitleRodape>
            <ButtonRodaoe type="submit">
              Submit Orden
            </ButtonRodaoe>
          </BlockRodape>
      </Container>
    </Content>
    
  )
}