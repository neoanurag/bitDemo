import React from 'react';
import { View, Image } from 'react-native';
import styled from '@emotion/native';
import { CardSize, CardsProps, ThemeType } from './cards.types';

const CardContainer = styled.View<{ type: CardSize, theme: ThemeType }>`
  background-color: ${({ theme }) =>
    theme === ThemeType.DARK ? '#181B1F' : '#fff'};
  border-radius: 10px;
  shadow-color: #000
  shadow-offset: {
    width: 0,
    height: 2,
  };
  shadow-opacity: 0.25;
  shadow-radius: 3;
  elevation: 5;
  padding: ${({ type }) =>
    type === CardSize.SMALL ? '18px' : '24px'};
  margin: 10px;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Divider = styled.View<{ theme: ThemeType }>`
  background-color: ${({ theme }) =>
    theme === ThemeType.DARK ? '#E8EAED' : '#64748B' };
  height: 1px;
  margin-top: 20px;
  margin-bottom: 20px
`;

const FooterContainer = styled.View`
  margin-top: 0px;
`;

const IconWrapperRound = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px; 
  background-color: #007BFF;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.View`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

const CardText = styled.Text`
  font-size: 16px;
`;

const Title = styled.Text<{ type: CardSize, theme: ThemeType  }>`
color: #616B7A;
margin-left: 20px
font-size: ${({ type }) =>
    type === CardSize.SMALL ? '10px' : '14px'};
`;

const Subtitle = styled.Text<{ type: CardSize, theme: ThemeType   }>`
  font-size: 16px;
  color: #000;
  margin-left: 20px
  font-size: ${({ type }) =>
    type === CardSize.SMALL ? '14px' : '18px'};
  color: ${({ theme }) =>
    theme === ThemeType.DARK ? '#F8FAFC' : '#000'};
`;

const Icons = styled.Image<{ type: CardSize }>`
  height: ${({ type }) =>
    type === CardSize.SMALL ? '18px' : '24px'};
  width: ${({ type }) =>
    type === CardSize.SMALL ? '18px' : '24px'};
`;

export interface CardProps {
  size: string;
  header: any;
  footer: any;
  children?: any;
  type?: any
}

  const Cards = ({
    children,
    header,
    footer,
    size = CardSize.SMALL,
    theme = ThemeType.LIGHT
  }: Readonly<CardsProps>) => {
  return (
    <>
    <CardContainer theme={theme} type={size}>
      {header && <HeaderContainer>{header}</HeaderContainer>}
      {children && <View>{children}</View>}
      {footer && <FooterContainer>{footer}</FooterContainer>}
    </CardContainer>
    
    <CardContainer theme={theme} type={size}>
      <HeaderContainer>
        <View style={{flexDirection: 'row'}}>
        <IconWrapperRound>
        <Icons type={size} resizeMode='contain' source={require('./assets/Card.png')} />
        </IconWrapperRound>
        <View style={{marginLeft: 10}}>
        <Title theme={theme} type={size}>{'Standard'}</Title>
        <Subtitle theme={theme}  type={size}>{'$870,000'}</Subtitle>
        </View>
        </View>
        <IconWrapper>
        <Icons type={size} resizeMode='contain' source={require('./assets/ArrowRight.png')} />
        </IconWrapper>
      </HeaderContainer>
      <Divider theme={theme} />
      {children && <View>{children}</View>}
      <FooterContainer>
        <Title theme={theme} type={size}>{'Wallet ID:1234'}</Title>
      </FooterContainer>
    </CardContainer>

    <CardContainer theme={theme} type={size}>
      <HeaderContainer>
        <View style={{flexDirection: 'row'}}>
        <Icons type={size} style={{height: 24, width: 24}} resizeMode='contain' source={require('./assets/Eth.png')} />
        <View style={{marginLeft: 10}}>
        <Subtitle theme={theme} type={size} style={{color: '#007BFF'}}>{'Etherum'}</Subtitle>
        <Title theme={theme} type={size}>{'ETH'}</Title>
        </View>
        </View>
        <Image resizeMode='contain' style={{height: 40, width: 200}} source={require('./assets/Area_1.png')} />

        <View>
        <Subtitle theme={theme}  type={size}>{'$2511.44'}</Subtitle>
        <Title theme={theme} type={size} style={{color: '#30B866'}}>{'+2.85%'}</Title>
        </View>
      </HeaderContainer>
      {children && <View>{children}</View>}
    </CardContainer>
    </>
    
  );
};

export {Cards};
