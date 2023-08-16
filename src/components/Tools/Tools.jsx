import './Tools.scss'
import tools from '../../Database/Tools.json'

const Tools = ({ closeModal }) => {
    console.log(tools)

  return (
    <div className='tools'>
        <div className="box">
            <h2>Tools</h2>
            <button onClick={closeModal}>
                <i class="fa-solid fa-arrow-left fa-2x"></i>
            </button>

            {tools.map((tool, index) => (
                <div className="tool" key={index}>
                    <a href={tool.link} target='_blank'><img src={tool.image} alt={tool.title} /></a>
                    <span>{tool.title}</span>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Tools