import { ProgramFunctions } from './App';
import { Close } from '@material-ui/icons';
import styled from '@emotion/styled'

const Wrapper = styled.div`
    background: gray;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    width: auto;

`;

interface Props {
    privilige: ProgramFunctions
}

export const Privilige = (props: Props) => {
    return (<Wrapper>{props.privilige.name} <Close /></Wrapper>);
}