/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
const SkillCard = ({ title, icon, text }) => {
  return (
    <div>
      <span>{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </div>
  )
}

export default SkillCard
