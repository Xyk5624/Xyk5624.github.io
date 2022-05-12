import avatar from '../images/avatar.png'
import { about } from '../docs/about'
import { BankOutlined, BugOutlined, TrophyOutlined, 
    GithubFilled, MailFilled, WeiboCircleOutlined } from '@ant-design/icons'
import './about.css'

export const About: React.FC = () => {
    const scrollToAnchor = (anchorName: string) => {
        return () => {
            let anchorElement = document.getElementById(anchorName)
            if (anchorElement) {
                let scroll = anchorElement.offsetTop - 85
                window.scroll({top:scroll,behavior:"smooth"})
            }
        }
    }

    return (
        <section id="about" className='content-container'>
            <h1 className='about-welcome'>Hello</h1>
            <div className='about-container'> 
                <div className='avatar-container'>
                    <img src={avatar} className='avatar' alt="avatar" />
                    <div className="name">Yuankai Xu</div>
                    <div className='about-icon-container'>
                        <a href="https://github.com/Xyk5624" className='about-icon' target="_blank"><GithubFilled /></a>
                        <a onClick={scrollToAnchor('contact')} className='about-icon'><MailFilled /></a>
                        <a href="https://www.bilibili.com/video/BV1uT4y1P7CX" className='about-icon' target="_blank"><WeiboCircleOutlined /></a>
                    </div>
                </div>
                <div className='introduction-container'>
                    <p>{about.Introduction}</p>
                    <div className='esh-container'>
                        <div className='skill'>
                            <BugOutlined />&nbsp;
                            <span><strong>Skills</strong></span>
                            <ul className='about-list'>
                                {
                                    about.Skills.map((item,index)=>{
                                        return (
                                            <li key={index}>{item}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className='ed'>
                            <BankOutlined />&nbsp;
                            <span><strong>Education</strong></span>
                            <ul className='about-list'>
                                {
                                    about.Education.map((item,index)=>{
                                        return (
                                            <li key={index}>
                                                <div>{item.Degree}</div>
                                                <div>{item.University}</div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className='honors'>
                            <TrophyOutlined />&nbsp;
                            <span><strong>Honors</strong></span>
                            <ul className='about-list'>
                                <li>2021 CU Fall MS EE Honors Students (
                                    <a href='https://www.ee.columbia.edu/ms-ee-honors-program' target="_blank">
                                        CU MS EE honors program
                                    </a>)
                                </li>
                                <li>2019 Mathematical Contest in Modeling, Honorable Mention (top 16% of 14108 team)
                                </li>
                                <li>2019 ECNU Scholarship, the Second-Class Scholarship
                                </li>
                                <li>2017 ECNU Scholarship, the Second-Class Scholarship
                                </li>
                                <li>2009 LOGO language contest for primary school students, 1st Place in Shanghai 🐶
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}