import { ShowCard } from './showCard'
import { projects } from '../docs/projects'
import './portfolio.css'

export const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className='content-container'>
            <h1 style={ {fontSize: "2rem" }}>Portfolio</h1>
            <ul className='portfolio-list'>
                {
                    projects.map((item,index)=> {
                        return <li className='portfolio-item' key={index}><ShowCard item={item}/></li>
                    })
                }
                {
                    projects.length % 2 == 1 ? <li className='blank-item'></li> : ""
                }
            </ul>
        </section>
    )
}