import styled from '@emotion/styled';

export const Input = styled.input`
  outline: none;
  padding: 5px;
`;

export const Form = styled.form`
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  width: 300px;
  border: 1px solid gray;
  align-items: center;
  background: -moz-linear-gradient(
    top,
    #f0f9ff 0%,
    #cbebff 47%,
    #a1dbff 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #f0f9ff 0%,
    #cbebff 47%,
    #a1dbff 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #f0f9ff 0%,
    #cbebff 47%,
    #a1dbff 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f0f9ff', endColorstr='#a1dbff',GradientType=0 ); /* IE6-9 */
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  font-size: 16px;
  text-align: center;
  color: #fff;
  background-color: #2196f3;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border-radius: 5px;
  border: none;
  margin-top: 15px;
`;
