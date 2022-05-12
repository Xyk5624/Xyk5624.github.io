import { useState } from 'react'
import './header.css'
import { HomeOutlined,BookOutlined,PhoneOutlined,MenuOutlined } from '@ant-design/icons'

export const Header: React.FC = () => {
    const [menuShow,setMenuShow] = useState(false)

    const showMenu = () => {
        setMenuShow(!menuShow)
    };

    const scrollToAnchor = (anchorName: string) => {
        return () => {
            setMenuShow(false)
            let anchorElement = document.getElementById(anchorName)
            if (anchorElement) {
                let scroll = anchorElement.offsetTop - 85
                window.scroll({top:scroll,behavior:"smooth"})
            }
        }
    }

    return (
        <nav className='nav-container'>
            <a className='nav-button' onClick={showMenu}><MenuOutlined /></a>
            <ul className={"nav-bar " + (menuShow ? "show":"")}>
                <li className='nav-item'>
                    <a className='nav-link' onClick={scrollToAnchor('about')}>
                        <span className='nav-icon'>
                            <HomeOutlined />&nbsp;
                        </span><strong>Home</strong>
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' onClick={scrollToAnchor('portfolio')}>
                        <span className='nav-icon'>
                            <BookOutlined />&nbsp;
                        </span><strong>Portfolio</strong>
                    </a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' onClick={scrollToAnchor('contact')}>
                        <span className='nav-icon'>
                            <PhoneOutlined />&nbsp;
                        </span><strong>Contact</strong>
                    </a>
                </li>
            </ul>
        </nav>
    )
}