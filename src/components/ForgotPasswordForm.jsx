function ForgotPasswordForm(){
    return (
        <form>
            <div className="column_form">
                <label htmlFor="email">E-mail:</label>
                <input type="email" name="email" id="email" />
            </div>
            {/* <div className="column_form">
                <label htmlFor="password">Senha:</label>
                <input type="password" name="password" id="password" />
            </div>
            <div className="row_form">
                <span>
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Manter conectado</label>
                </span>
                <Link to="forgotPassword">Esqueceu sua senha?</Link>
            </div> */}
            <button className="login_btn">ENVIAR</button>
        </form>
    )
}

export default ForgotPasswordForm