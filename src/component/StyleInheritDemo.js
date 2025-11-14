import styled from 'styled-components'
/**
 * 样式继承
 * @param {*} props 
 * @returns 
 */
const Style1 = styled.div`
    color: red;
`
const Style2 = styled(Style1)`
  font-size: 30px;
`;
export function StyleInheritDemo(props) {
    return (
      <Style2>
        <span className="custom">样式继承</span>
      </Style2>
    );
}