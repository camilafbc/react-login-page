import { useNavigate } from "react-router-dom";
import Button from "./Button";

function SignUpForm() {

  const navigate = useNavigate()

  const handleHome = () => {
    navigate('/')
  }

  return (
    <form>
      <div className="column_form">
        <label htmlFor="email">E-mail:</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="column_form">
        <label htmlFor="password">Criar Senha:</label>
        <input type="password" name="password" id="password" />
      </div>
      <div className="column_form">
        <label htmlFor="password-confirm">Confirmar Senha:</label>
        <input type="password" name="password-confirm" id="password-confirm" />
      </div>
      <Button 
        btnText="CRIAR CONTA"
        className="btn_full"
        onClick={(ev) => ev.preventDefault()}
      />
      <Button 
        btnText="VOLTAR"
        className="btn_clear"
        onClick={handleHome}
      />
    </form>
  );
}

export default SignUpForm;
