function SignUpForm() {
  return (
    <form>
      <div className="column_form">
        <label htmlFor="email">Insira um e-mail válido:</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="column_form">
        <label htmlFor="password">Insira uma Senha:</label>
        <input type="password" name="password" id="password" />
      </div>
      <div className="column_form">
        <label htmlFor="password-confirm">Repita a senha:</label>
        <input type="password" name="password-confirm" id="password-confirm" />
      </div>
      {/* <div className="row_form">
        <span>
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember">Manter conectado</label>
        </span>
        <Link to="forgotPassword">Esqueceu sua senha?</Link>
      </div> */}
      <button className="btn_full">CRIAR CONTA</button>
      {/* <Link to="signUp">
        <button className="btn_clear">CRIA NOVA CONTA</button>
      </Link> */}
    </form>
  );
}

export default SignUpForm;
