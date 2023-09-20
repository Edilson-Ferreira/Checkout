import {Bitcoin, Block, BlockBottun, BlockCode, BlockDate, BlockHeader, BlockInput, BlockName, BlockNumber, BlockRodape, BlockTitleRodape, BlockvalueTitle, BlocokIcons, BookHeader, ButtonRodaoe, Container, Content, ContentHeader, ContentInput, ContentPayment, ContentTitle, CreditCart, HeaderTitle, IconBitcoin, IconCreditCart, IconPaypal, ImgRodape, InputCode, InputDate, InputName, InputNumber, Label, LabelName, LogoHeader, Number, Paypal, RodapeLabel, TitleBitcoin, TitleChechkout, TitleCreditCart, TitlePayment, TitlePaypal, TitleRodapeCinza, TitleRodapeorange, ValueTitle } from "./styles";
import Logo from "../assets//32c90c58b9248b11396155be8de569cd.png"
import LogoCredit from "../assets/cartao-de-credito.png"
import LogoPaypal from "../assets/logotipo.png"
import LogoBitcoin from "../assets/bitcoin.png"
import LogoSeta from "../assets/icons8-turn-32 (1).png"
import { ChangeEvent, FormEvent, useState } from "react";



export function Login(){
  
const [newNumber,setNumber] = useState('')

const [newName, setName] = useState('')

const [newCode, setCode] = useState('')

const [newDate,setDate] = useState('')

function HanldeDate(e: ChangeEvent<HTMLInputElement>){
  setDate(e.target.value)
}

function HandleCode(e: ChangeEvent<HTMLInputElement>){
  setCode(e.target.value)
}

function HandleChange(e: ChangeEvent<HTMLInputElement>){
  setName(e.target.value)
}


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

  try {
    e.preventDefault()
    console.log(newName)
  } catch (error) {
    console.log(error)
  }finally{
    setName('')
  }

  try {
    e.preventDefault()
    console.log(newCode)
  } catch (error) {
    console.log(error)
  }finally{
    setCode('')
  }

  try {
    e.preventDefault()
    console.log(newDate)
  } catch (error) {
    console.log(error)
  }finally{
  setDate('')
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
            <IconCreditCart 
              src={LogoCredit} 
              alt=""
            />
            <TitleCreditCart>
              Credit Cart
            </TitleCreditCart>
          </CreditCart>

          <Paypal>
            <IconPaypal 
              src={LogoPaypal} 
              alt="" 
            />
            <TitlePaypal>
              Paypal
            </TitlePaypal>
          </Paypal>

          <Bitcoin>
            <IconBitcoin 
              src={LogoBitcoin} 
              alt="" 
            />
            <TitleBitcoin>
              Bitcoin
            </TitleBitcoin>
          </Bitcoin>
        </BlocokIcons>

        <ContentInput onSubmit={HandleSubmit}>
          
          <Block>
            <BlockNumber>
              <Label 
                htmlFor="type">
                Card Number   
              </Label>
              <InputNumber
                type="numero" 
                value={newNumber}
                onChange={HandleNumber}
              />
            </BlockNumber>
              <BlockName>
                <LabelName 
                  htmlFor="text">
                  Name on Card
                </LabelName>
                <InputName 
                  type="text" 
                  value={newName}
                  onChange={HandleChange}
                />
            </BlockName>
          </Block>

          <BlockInput>
            <BlockCode>
              <RodapeLabel 
                htmlFor="text">
                CVV CODE
                </RodapeLabel>
              <InputCode 
                type="password" 
                value={newCode}
                onChange={HandleCode}
              />
            </BlockCode>
            <BlockDate>
              <RodapeLabel 
                htmlFor="">
                Expiration date
              </RodapeLabel>
              <InputDate 
                type="text" 
                placeholder="MM/YY"
                value={newDate}
                onChange={HanldeDate}
              />
            </BlockDate>
          </BlockInput>
          <BlockBottun>
            <ButtonRodaoe 
              type="submit">
              Submit Orden
            </ButtonRodaoe>
          </BlockBottun>
        </ContentInput>

          <BlockRodape>
            <BlockTitleRodape>
              <ImgRodape 
                src={LogoSeta} 
                alt=""
              />
              <TitleRodapeCinza>
                l have read & agree to
              </TitleRodapeCinza> 
              <TitleRodapeorange>
                Terms & Conditions
              </TitleRodapeorange>
            </BlockTitleRodape>
          </BlockRodape>
      </Container>
    </Content>
    
  )
}