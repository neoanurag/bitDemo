import React from 'react';
import { View, Text, Image } from 'react-native';
import styled, { css } from '@emotion/native';

const CardContainer = styled.View`
  background-color: #fff;
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: {
    width: 0,
    height: 2,
  };
  shadow-opacity: 0.25;
  shadow-radius: 3;
  elevation: 5;
  padding: ${({ size }) =>
    size === 'md' ? '30px':'20px'};
  margin: 10px;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Divider = styled.View`
  background-color: #E8EAED;
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
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const CardText = styled.Text`
  font-size: 16px;
`;

const Title = styled(Text)`
  color: #616B7A;
  margin-left: 20px
  font-size: ${({ size }) =>
    size === 'sm' ? '10px' : '14px'};
`;

const Subtitle = styled.Text`
  font-size: 16px;
  color: #000;
  margin-left: 20px
  font-size: ${({ size }) =>
    size === 'md' ? '18px' : '14px'};
`;

const Icons = styled.Image`
  height: ${({ size }) =>
    size === 'md' ? '24px' : '18px'};
  width: ${({ size }) =>
    size === 'md' ? '24px' : '18px'};
`;

export interface CardProps {
  size: string;
  header: any;
  footer: any;
  children?: any;
}

const Cards: React.FC<CardProps> = ({ size = 'md', header, footer, children }) => {
  return (
    <>
    <CardContainer size={size}>
      {header && <HeaderContainer>{header}</HeaderContainer>}
      {children && <View>{children}</View>}
      {footer && <FooterContainer>{footer}</FooterContainer>}
    </CardContainer>
    
    <CardContainer size={'sm'}>
      <HeaderContainer>
        <View style={{flexDirection: 'row'}}>
        <IconWrapperRound>
        <Icons resizeMode='contain' source={require('./assets/Card.png')} />
        </IconWrapperRound>
        <View style={{marginLeft: 10}}>
        <Title>{'Standard'}</Title>
        <Subtitle>{'$870,000'}</Subtitle>
        </View>
        </View>
        <IconWrapper>
        <Icons resizeMode='contain' source={require('./assets/ArrowRight.png')} />
        </IconWrapper>
      </HeaderContainer>
      <Divider />
      {children && <View>{children}</View>}
      <FooterContainer>
        <Title>{'Wallet ID:1234'}</Title>
      </FooterContainer>
    </CardContainer>

    <CardContainer size={'md'}>
      <HeaderContainer>
        <View style={{flexDirection: 'row'}}>
        <Icons style={{height: 24, width: 24}} resizeMode='contain' source={require('./assets/Eth.png')} />
        <View style={{marginLeft: 10}}>
        <Subtitle style={{color: '#007BFF'}}>{'Etherum'}</Subtitle>
        <Title>{'ETH'}</Title>
        </View>
        </View>
        <Image resizeMode='contain' style={{height: 40, width: 200}} source={require('./assets/Area_1.png')} />

        <View>
        <Subtitle>{'$2511.44'}</Subtitle>
        <Title style={{color: '#30B866'}}>{'+2.85%'}</Title>
        </View>
      </HeaderContainer>
      {children && <View>{children}</View>}
    </CardContainer>
    </>
    
  );
};

export {Cards};
