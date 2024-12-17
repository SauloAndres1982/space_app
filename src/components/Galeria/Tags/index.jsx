import tags from "./tags.json"
import styled from "styled-components"


const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
`

const TitleStyled = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`

const ButtonStyled = styled.button`
    border-radius: 10px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    cursor: pointer;
    padding: 12px;
    transition: background-color 0.3s ease;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover{
        border-color: #C98CF1;
    }
`
const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`


const Tag = () => {
    return <>
    <TagsContainer>        
    <TitleStyled>
        Buscar por tags:
    </TitleStyled>
    <Div>
        {tags.map(tag=>{
            return <ButtonStyled key={tag.id}>{tag.titulo}</ButtonStyled>
        })}
    </Div>
    </TagsContainer>
    </>
}

export default Tag