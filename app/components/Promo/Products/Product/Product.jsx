import React from 'react';
import styled from 'styled-components';

import { theme, cols10, mobile, lessThanCols6, fontSize } from 'lib/theme';
import { Link } from 'react-router-dom';


const ProductBlock = styled.div`
  &.activeBlock {
    box-shadow: 0px 0px 20px rgba(0,0,0,0.05), 0px 22px 42px rgba(0,0,0,0.15);
    padding: 40px 0px;
    width: 320px;
    border-radius: 2px;
  }
  border-radius: 2px;
  width: 300px;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.15);
  padding: 30px 0px;
  text-align: center;
  flex-grow: 0;
  .active-block {
    background: red;
  }
  img {
    width: 250px;
  }
  b {
    display: block;
    margin-bottom: 55px;
    font-weight: bold;
    ${fontSize(24, 26)}
    color: ${theme.colors.darkGrey};
    ${theme.fonts.futura}
  }
  p {
    width: 190px;
    margin: 27px auto 20px;
    ${fontSize(20, 26)}
    color: ${theme.colors.darkGrey};
    font-family: Arial;
  }
  .price s {
    color: ${theme.colors.darkGrey};
    ${theme.fonts.futura}
    opacity: 0.25;
    ${fontSize(22, 28)}
  }
  .price span {
    ${fontSize(22, 28)}
    color: ${theme.colors.darkGrey};
    ${theme.fonts.futura}
    font-weight: 500;
    margin-left: 10px;
  }
  ${cols10(`
    width: 465px;
    margin: 0px auto 10px;
    &.activeBlock {
      width: 480px;
    }
  `)}
  ${mobile(`
    width: 340px;
    margin: 0px auto 10px;
    &.activeBlock {
      width: 360px;
    }
    b {
      margin-bottom: 30px;
    }
    p {
      ${fontSize(16, 24)}
      width: 155px;
    }
  `)}
  ${lessThanCols6(`
    width: 250px;
    &.activeBlock {
      width: 270px;
    }
    img {
      width: 240px;
    }
  `)}
`;

const Preorder = styled.div`{
  text-align: center;
  background: ${theme.colors.red};
  ${theme.fontSize(14)}
  ${theme.fonts.futuraBold}
  text-transform: uppercase;
  color: #FFFFFF;
  letter-spacing: 1px;
  width: 210px;
  box-sizing: border-box;
  margin: 25px auto 0px;
  cursor: pointer;
  transition: opacity 0.2s linear;
  border-radius: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  a {
    color: #FFFFFF;
    text-decoration: none;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center
  }
  &:hover {
    background: ${theme.colors.redHover};
  }
  ${mobile(`
    padding: 11px 0px;
    width: 200px;
  `)}
}`;

const Product = (props) => (
  <ProductBlock className={props.isActiveBlock}>
    <b>{props.title}</b>
    <img alt={props.title} src={props.image} />
    <p>{props.description}</p>
    <div className='price'>
      <s>${props.price}</s>
      <span>${props.discountedPrice}</span>
    </div>
    <Preorder><Link to={props.link}>Pre-order {props.title}</Link></Preorder>
  </ProductBlock>
);


// Product.propTypes = {
//   isActiveBlock: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   price: PropTypes.string.isRequired,
//   discountedPrice: PropTypes.string.isRequired,
// };

export default Product;
