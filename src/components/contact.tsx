import { contact } from '../docs/contact'
import { MailFilled, PhoneFilled } from '@ant-design/icons'
import './contact.css'

export const Contact: React.FC = () => {
    return (
        <section id="contact" className='content-container'>
            <div className='contact-container'> 
                <div className='contact-title'>
                    <strong>Contact</strong>
                </div>
                <div className='contact-information'>
                    <ul>
                        <li className='contact-list'>
                            <MailFilled/>&nbsp;
                            yx2622@columbia.edu
                        </li>
                        <li className='contact-list'>
                            <PhoneFilled/>&nbsp;
                            +86 18916838082
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}