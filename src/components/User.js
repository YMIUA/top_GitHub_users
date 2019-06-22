import React from 'react'
import styled from 'styled-components'
import location from './../icons/map-marker-alt.svg'
import mail from './../icons/envelope.svg'

const WpapperDiv = styled.div`
  height: 80px;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: colunm;
  border-bottom: 2px solid #ddd;
`
const Img = styled.img`
  margin: 5px;
  height: 70px;
  width: 70px;
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const MainInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Link = styled.a`
  height: 20px;
  margin: 0px 10px;
  font-size: 1.2rem;
  text-decoration:none;
`

const MainInfo = styled.p`
  height: 20px;
  margin: 0px 10px;
  font-size: 1.2rem;
`

const Bio = styled.span`
  font-size: 0.9rem;
  margin: 0px 10px;
`

const Contact = styled.span`
  margin: 0px 10px;
`
const Icon = styled.img`
  height: 15px;
  margin-right: 5px;
`

const User = ({userInfo}) => {
  return (
    <WpapperDiv>
      <Img src={userInfo.avatar_url} alt={userInfo.login}/>
      <UserInfo>
        <MainInfoWrapper>
          <Link href={userInfo.html_url} target='_blank'>{userInfo.login}</Link>  
          <MainInfo>{userInfo.name}</MainInfo>
        </MainInfoWrapper>
        <Bio>{userInfo.bio}</Bio>
        {userInfo.location &&
          <Contact>
            <Icon src={location} alt="Location"/>
            {userInfo.location}
          </Contact>
        }
        {userInfo.mail &&
          <Contact>
            <Icon src={mail} alt="Mail"/>
            {userInfo.mail}
          </Contact>
        }
      </UserInfo>
    </WpapperDiv>
  )
}

export default User