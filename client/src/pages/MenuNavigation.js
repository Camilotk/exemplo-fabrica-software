import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Menu = ({ menus }) => {
    return (
    <div>
        <Router>
        <div>
            <ul id="menu-navigation">
            {menus.map((menu, index) => 
                (<li>
                    <Link key={index} to={menu.slug}>{menu.name}</Link>
                </li>))
            }
            </ul>
        </div>
        
        </Router>
        <style jsx>
            {`
             #menu-navigation {
                width: 100%;
                display: inline-block;
                text-align: center;
                padding: 0;
                list-style: none;
                margin-top: 0px;  // looks like bootstrap is putting a left margin on your #nav you may want it off.
            
            }
            #menu-navigation li {
               display: inline-block;
               text-align:center; 
               text-transform: uppercase;
               margin: 20px 10px 0 10px;
               font-size: 1.5em;
            }
            a:link {
                color: black;
                text-decoration: none;
            }
              
              a:visited {
                  color: black;
                text-decoration: none;
              }
              
              a:hover {
                text-decoration: underline;
              }
              
              a:active {
                  color: lightgreen;
                text-decoration: underline;
              }
            `}
        </style>
    </div>);
}

export default Menu