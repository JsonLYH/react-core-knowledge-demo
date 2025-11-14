import styled from 'styled-components'

const StyledH1 = styled.div`
  color: red;
  font-size: ${(props) => props.fontSize || "20px"};
  .test{
    font-size: 30px;
    color: green;
    .custom{
      color: red;
    }
  }
`;
export function StyledDemo(props) {
  return (
    <>
      <StyledH1 fontSize="40px">
        <div>
          <h1>Styled 组件</h1>
          {props.children}
        </div>
        <div className='test'>
          <h1>Styled 组件</h1>
          <span className='custom'>嵌套样式</span>
          {props.children}
        </div>
      </StyledH1>
    </>
  );
}