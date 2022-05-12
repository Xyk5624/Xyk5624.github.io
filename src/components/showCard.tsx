import './showCard.css'
import { GithubOutlined } from '@ant-design/icons';

interface project_item {
    image_url: string;
    title: string,
    course: string,
    github: string,
    details: Array<string>,
}

export const ShowCard: React.FC<{item: project_item}> = ({item}) => {
    return (
        <div className="showcard">
            <div className="card-background card-front">
                <img className="card-image" src={item.image_url} alt="" />
                <h2>{item.title}</h2>
            </div>
            <div className="card-background card-back">
                {
                    item.github !== "" ? 
                    <a href={item.github} className="card-icon" target={"_blank"}
                        ><GithubOutlined />
                    </a> : ""
                }
                <h3>{item.course}</h3>
                <ul className='information-list'>
                    { item.details.map ((value,index) => {
                        return <li key={index}> { value } </li>
                    })}
                </ul>
            </div>
        </div>
    )
}