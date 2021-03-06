import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { buscarUsuarioExito, retirarUsuario } from '../../actions';
import './Navegador.scss';
import Logo from '../Logo/Logo';
import MenuHamburguesa from '../MenuHamburguesa/MenuHamburguesa';
import { LoadbarDoc, User, LogOut  } from 'css.gg';

const mapStateToProps = state => {
  return {
    estado: state,
    usuario: state.usuario.nombre
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buscarUsuarioExito: usuario => dispatch(buscarUsuarioExito(usuario)),
    retirarUsuario: () => dispatch(retirarUsuario())
  }
}

class Navegador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuAbierto: false
    };
    this.listener = null;
    this.handleLogout = this.handleLogout.bind(this);
    this.handleNavMenuToggle = this.handleNavMenuToggle.bind(this);
    this.checkLoggedIn = this.checkLoggedIn.bind(this);
  }

  // Chequea y establece usuario si está logueado en el server
  checkLoggedIn() {
    fetch("/user")
    .then(respuesta => respuesta.json())
    .then(resultado => {
      if (resultado.user !== undefined) {
        this.props.buscarUsuarioExito(resultado.user);
      }
    })
    .catch(e => console.log(e))
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.retirarUsuario();
  }


  handleNavMenuToggle() {
    const estadoActual = this.state.menuAbierto;
    this.setState({ menuAbierto: !estadoActual });
  }

  componentDidMount() {
    this.setState({NavbarEnTop: true})
    
    this.listener = document.addEventListener('scroll', e => {
      let scroll = document.scrollingElement.scrollTop;
      // Chequea si el scroll se desplaza más allá de los 50px.
      // Los IF internos van a evitar que se actualice el estado constantemente.
      if (scroll > 50) {
        if(this.state.NavbarEnTop) 
          this.setState({ NavbarEnTop: false }); // Navegador fuera de top
      } 
      else {
        if(!this.state.NavbarEnTop) 
          this.setState({ NavbarEnTop: true }); // Navegador en top
      }
    })

    this.checkLoggedIn();
  }
  
  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  componentLogout = () => {
    if (this.props.usuario) {
      return (<li onClick={this.handleLogout} className="menu__item logout">
        <LogOut />
      </li>)
    }
  }
  
  render() {
    let classNav  = this.state.NavbarEnTop ? 'navbar' : 'navbar navbar--scroll';
    let classMenu = this.state.menuAbierto ? 'menu menu-abierto' : 'menu';

    return (
      <header className={classNav}>
        <MenuHamburguesa 
          onClick={this.handleNavMenuToggle} 
          menuAbierto={this.state.menuAbierto} 
        />
        <Logo estadoNavbar={this.state.NavbarEnTop} />  
        
        <ul className={classMenu}>
          <li className="menu__item">
              <Link 
                className="menu__enlace" 
                onClick={this.handleNavMenuToggle} 
                to="/recipes">
                <LoadbarDoc />
                Recipes
              </Link>
          </li>
          
          <li className="menu__item">
            <Link 
              className="menu__enlace" 
              onClick={this.handleNavMenuToggle} 
              to="/history">
              History
            </Link>
          </li>
          <li className="menu__item">
            <Link 
              className="menu__enlace" 
              onClick={this.handleNavMenuToggle} 
              to="/favorites">
              Favorites
            </Link>
          </li>
          <li className="menu__item">
          { // Modifica Elemento si se encuentra ingresado un usuario
            this.props.usuario ? 
              (<div className="menu__enlace usuario-activo">
                <User />
                {this.props.usuario}
              </div>) 
              : 
              (<Link 
                className="menu__enlace" 
                onClick={this.handleNavMenuToggle} 
                to="/user">
                <User />
                {"Sign In/Up"}
              </Link>)
          }
          </li>
          {this.componentLogout()}
        </ul>
      </header>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navegador);