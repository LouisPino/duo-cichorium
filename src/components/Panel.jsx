export default function Panel({ title, img }) {

    return (
        <div className='panel'>
            <div className='panel-slide'>
                <p className='panel-title here'>{title.toUpperCase()}</p>
            </div>
            <img className="panel-img" src={img} />
        </div >
    )
}