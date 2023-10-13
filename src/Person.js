import jermeyProfile from './images/image-jeremy.png'
const Person = () => {
    return (
        <section className="header__person">
            <img src={jermeyProfile} alt='Profile' />
            <p>
                Report for <span>Jermey Robson</span>
            </p>
        </section>
    )
}

export default Person
