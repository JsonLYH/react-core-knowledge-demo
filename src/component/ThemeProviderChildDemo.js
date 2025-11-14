import styled from 'styled-components'
const ProfileWrapper = styled.div`
  color: ${props => props.theme.color};
`
export function ThemeProviderChildDemo(props) {
  return (
      <ProfileWrapper>
          <span>ThemeProvider测试</span>
      </ProfileWrapper>
  )
}