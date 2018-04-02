import React from 'react';
import styled from 'styled-components';
import { theme, cols10, lessThanCols6, mobile, fontSize } from 'lib/theme';

import ContentBlock from 'components/lib/ContentBlock';
import { Columns } from './../../lib/Columns';
import BlockTitle from './../BlockTitle';

import Product from './Product/Product.jsx';
import ModalSignup from '../ModalSignup/ModalSignup';

import basicImg from '../Order/basic.jpg';
import plusImg from '../Order/plus.jpg';
import ultImg from '../Order/ultimate.jpg';

const products = [
  {
    title: 'Basic',
    image: basicImg,
    description: 'Ideal to monitor one to two rooms.',
    price: '899',
    discountedPrice: '720',
    link: '/basic'
  },
  {
    isActiveBlock: 'activeBlock',
    title: 'Plus',
    image: plusImg,
    description: 'Ideal to monitor three to four rooms.',
    price: '1199',
    discountedPrice: '960',
    link: '/plus'
  },
  {
    title: 'Ultimate',
    image: ultImg,
    description: 'Ideal to monitor five to six rooms.',
    price: '1299',
    discountedPrice: '1040',
    link: '/ultimate'
  },
];

const Block1 = styled(ContentBlock)`
  padding: 150px 0 0 0;
`;

const Block2 = styled(ContentBlock)`
  padding: 90px 0 100px 0;
  ${mobile(`
    padding: 75px 0 65px 0;
  `)}
`;

const Block3 = styled(ContentBlock)`
  padding: 0 0 100px 0;
  ${mobile(`
    padding: 0px 0 75px 0;
  `)}
`;

const Container = styled.div`
  display: block;
  text-align: center;
`;

const Button = styled.div`
  border: 1px solid ${theme.colors.red};
  border-radius: 8px;
  color: ${theme.colors.red};
  ${fontSize(14, 25)}
  letter-spacing: 0.21px;
  display: inline-block;
  padding: 4px 16px 4px 15px;
  margin: 0px auto;
  ${mobile(`
    border: 1px solid ${theme.colors.grey};
    color: ${theme.colors.grey};
  `)}
`;

const MainTitle = styled(BlockTitle)`
  width: 100%;
  padding: 85px 0px 0px;
  b {
    color: ${theme.colors.red};
  }
  ${mobile(`
    max-width: 530px;
    padding: 30px 0px 0px;
    b {
      color: ${theme.colors.darkGrey};
    }
  `)}
  ${lessThanCols6(`
    margin:0px auto;
    padding: 30px 30px 0px;
    box-sizing: border-box;
  `)}
`;

const StyledColumns = styled(Columns)`
  align-items: center;
  ${cols10(`
    display: block;
    padding-right: 0;
  `)}
  ${mobile(`
    display: block;
    padding-right: 0;
  `)}
`;

const Subtitle = styled.div`
  text-align:center;
  font-weight: 500;
  color: ${theme.colors.darkGrey};
  ${theme.fonts.futura}
  ${fontSize(34, 40)}
  span {
    color: ${theme.colors.red};
  }
  ${cols10(`
    max-width:425px;
    margin: 0px auto;
  `)}
  ${mobile(`
    ${fontSize(22, 30)}
    span {
      color: ${theme.colors.darkGrey};
    }
  `)}
  ${lessThanCols6(`
    padding: 0px 30px 0px;
    box-sizing: border-box;
    ${fontSize(20, 30)}
  `)}
`;

const Text = styled.p`
  width: 100%;
  color: ${theme.colors.darkGrey};
  opacity: 0.5;
  text-align: center;
  line-height: 1.5;
  letter-spacing: 0.2px;
  font-family: Arial;
  ${fontSize(18, 26)}
  ${mobile(`
    ${fontSize(16, 24)}
  `)}
  ${lessThanCols6(`
    max-width: 190px;
    margin: 10px auto;
  `)}
`;

const BottomLink = styled.div`
  padding-top: 90px;
  text-align: center;
  font-family: Arial;
  color: ${theme.colors.darkGrey};
  ${fontSize(18, 26)}
  span {
    color: ${theme.colors.red};
    text-decoration: none;
    cursor: pointer;
  }
  ${mobile(`
    padding-top: 40px;
    ${fontSize(16, 24)}
  `)}
  ${lessThanCols6(`
    max-width: 190px;
    margin: 0px auto;
  `)}
`;

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    };
  }

  openModal() {
    this.setState({ openModal: true });
  }

  closeModal() {
    this.setState({ openModal: false });
  }

  render() {
    return (
      <div>
        <Block1>
          <Container>
            <Button>Available June 2018</Button>
          </Container>
          <MainTitle>Pre-order your Cherry Home bundle and get <b>20% off</b> the market price.</MainTitle>
        </Block1>
        <Block2>
          <StyledColumns>
            {
              products.map((product, index) => (
                  <Product
                    isActiveBlock={product.isActiveBlock}
                    title={product.title}
                    image={product.image}
                    description={product.description}
                    price={product.price}
                    discountedPrice={product.discountedPrice}
                    link={product.link}
                    key={index}
                  />
                ),
              )
            }
          </StyledColumns>
        </Block2>
        <Block3>
          <Subtitle>All pre-orders require only <span>$100</span> refundable deposit.</Subtitle>
          <Text>You can always purchase additional sensors later.</Text>
          <BottomLink>Not ready to pre-order? <span onClick={this.openModal.bind(this)}>Signup</span> for our newsletter.</BottomLink>
        </Block3>
        {
          this.state.openModal &&
            <ModalSignup
              close={this.closeModal.bind(this)}
            />
        }
      </div>
    )
  }
}

export default Products;
