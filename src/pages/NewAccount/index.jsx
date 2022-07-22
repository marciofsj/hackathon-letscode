import { NewAccountContainer, InputContainer, RadioContainer } from "./styles"

export function NewAccount () {
    return (
        <NewAccountContainer>
            <h1>KAREN</h1>
            <h2>Boss School</h2>

            <InputContainer>
                <RadioContainer>
                    <legend>Você é:</legend>
                    <div>
                        <input type="radio" name="logar como" id="aluno"/>
                        <label for="aluno">Aluno</label>
                    </div>
                    <div>
                        <input type="radio" name="logar como" id="professor"/>
                        <label for="professor">Professor</label>
                    </div>
                </RadioContainer>
            </InputContainer>
        </NewAccountContainer>
    )
}