import React from "react";

import  {InputContainer} from './styles';

function Input () {
    return (
        <InputContainer> 
            <input type="text" placeholder="Digite o nome do usuário"/>
        </InputContainer>
    );
}

export default Input;