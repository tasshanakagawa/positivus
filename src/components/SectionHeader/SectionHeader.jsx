import './SectionHeader.css'

const SectionHeader = ({ title, description }) => {
  return (
    <div className="section-header">
      <div className="container items-center gap-40">
        <h2 className="header__title">{title}</h2>
        <p className="header__description">{description}</p>
      </div>
    </div>
  )
}

export default SectionHeader