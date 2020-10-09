import React from 'react'

function Navbar() {
    return (
        <>
        <div className="header-menu">
            <nav className="top-menu">
                <Logo />
                <h1 className="site-title">Sistema de Livros</h1>
                <div className="search-form">
                <form
                    action="/#"
                    method="get"
              
            >
              <button className="search-btn" id="search-btn" type="submit">
                <img alt="Buscar" height="28" src={require('../assets/svg/loupe.svg')} width="28" />
              </button>
              <input
                className="form-control"
                name="search"
                id="search"
                placeholder="Buscar"
                type="search"
              />
            </form>
            </div>

            </nav>
        </div>
        <style jsx>
        {`
        .header-menu {
            border: 1px solid;
            margin: 0;
            padding: 0;
            overflow: hidden;

        }
        .top-menu {
            /* display: flex;
            justify-content: space-between;
            align-items: center; */
        }
        .site-title {
            font-weight: 400;
            text-transform: uppercase;
            position: absolute;
            left: 36%;
            top: 35px;
        }
        .search-form {
            position: absolute;
            right: 5px;
            top: 39px;
        }
        .search-btn {
            background-color: transparent;
            border: 0;
            cursor: pointer;
            margin-right: 10px;
            outline: 0;
            padding: 5px;
            vertical-align: middle;
            color: gray;
            position: absolute;
            margin-left: 5px;
          }

          input[type=search] {
            height: 40px;
            border-radius: 25px;
            border: 1px #000 solid;
            padding: 5px 5px 5px 45px;
            margin-right: 10px;
            width: 14vw;
            transition: ease-in-out 0.7s;

          }
          
          input[type=search]:focus {
            width: 20vw !important;
            transition: ease-in-out 0.7s;
            box-shadow: 0 0 0 0.1rem rgba(0, 0, 0, 0.26);
          }
          
        `}
        </style>
        </>
    );
}

const Logo = _ => {
    return (
    <>
        <div className="ifrs-logo">
            <a href="http://www.#.com" target="_blank" rel="noopener noreferrer">
            <img alt='IFRS' className="logo-image" src={require('../assets/images/logo_ifrs_horizontal.png')} />
            </a>
        </div>
        <style jsx>
            {`
            .ifrs-logo {
                width: 250px; /* width of container */
                height: 115px; /* height of container */
                overflow: hidden;
            }
            .logo-image{
                width: 300px;
                left: -5%;
                position: relative;
                transform: translateY(-22%);
            }
            .
            `}
      </style>
    </>
    );
}

export default Navbar;