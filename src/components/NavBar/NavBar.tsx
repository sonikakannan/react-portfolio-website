import React, { useState } from "react";
import {FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { AiOutlineIdcard } from "react-icons/ai";
import { AiOutlineBranches } from "react-icons/ai";
import { Animate } from "react-simple-animate";
import LogoS from '../../assets/logo-s.png'

interface NavItemMenuBar {
  label: JSX.Element;
  to: string;
}
interface NavItem {
  label: string;
  to: string;
}

const data: NavItem[] = [
  {
    label: 'HOME',
    to: '/'
  },
  {
    label:'ABOUT',
    to: '/about'
  },
  {
    label: 'SKILLS',
    to: '/skills'
  },
  {
    label: 'PROJECTS',
    to: '/projects'
  },
  {
    label: 'CONTACT',
    to: '/contact'
  },
];

const menuData:NavItemMenuBar[] =[
  {
    label: <IoHomeOutline/>,
    to: '/'
  },
  {
    label:<RiContactsLine/>,
    to: '/about'
  },
  {
    label: <AiOutlineBranches/>,
    to: '/skills'
  },
  {
    label: <AiOutlineFolderOpen/>,
    to: '/projects'
  },
  {
    label: <AiOutlineIdcard/>,
    to: '/contact'
  },
]

const NavBar: React.FC = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  }

  return (
    <div>
      <nav className=" bg-navBgColor w-full flex-wrap h-32 flex justify-between items-center px-5 text-xl text-white sticky">
        <div className="flex items-center">
          <Link to={'/'} className="text-themeMainColor cursor-pointer flex text-center">
            <img src={LogoS} alt="Logo" className=" w-9 ml-3" />
            <p className=" mt-7">onika</p>
          </Link>
        </div>
        <ul className=" hidden md:flex md:items-center md:space-x-9">
          {
            data.map((item, index) => (
              <li key={index} className="relative">
                <Link to={item.to} className=" leading-10 text-2xl text-themeMainColor after:block after:h-0.5 after:bg-themeMainColor after:scale-x-0  after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
                  {item.label}
                </Link>
              </li>
            ))
          }
        </ul>
        <div className="md:hidden flex items-center" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} className=" text-themeMainColor cursor-pointer" /> : <FaBars size={30} className=" text-themeMainColor cursor-pointer"/>}
        </div>
      </nav>
      {
        toggleIcon && (
          <Animate
          play
          duration={0.5}
          delay={0}
          start={{
            transform: 'translateX(200px)'
          }}
          end={{
            transform:'translateX(0)'
          }}
          >
            <ul className="md:hidden flex flex-row justify-evenly items-center bg-navBgColor text-white ">
            {
              menuData.map((item, index) => (
                <li key={index} className="py-2">
                  <Link to={item.to} className="text-3xl hover:text-themeMainColor ">
                    {item.label}
                  </Link>
                </li>
              ))
            }
          </ul>
          </Animate>
        )
      }
    </div>
  );
}

export default NavBar;
