import styled from 'styled-components';

export default function Header() {
    return (
        <HeaderContainer>
            <h1>OZ코딩스쿨</h1>
            <MenuContainer>
                <li>로그인</li>
                <li>회원가입</li>
                <li>내클래스</li>
            </MenuContainer>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background-color: black;
`;

const MenuContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    li {
        font-size: 16px;
        font-weight: 400;
        list-style: none;
        color: white;
    }
`;