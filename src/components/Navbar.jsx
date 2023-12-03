import { links } from '../data'
const Navbar = () => {
  var aLinks = Array.of(links)
  return (
    <nav className="bg-emerald-100">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-72 sm:items-center sm:py-8">
        <div className="text-3xl font-bold">
          Web<span className="text-emerald-600">Dev</span>
        </div>
        <div className="flex gap-x-12 sm:gap-x-36">
          {aLinks[0].map((link) => {
            return (
              <a
                key={link.id}
                href={link.href}
                className="underline-decoration-none hover:text-emerald-600 capitalize text-lg tracking-wide duration-300"
              >
                {link.text}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
