import profilebg from '../../assets/profilebg.png'
// import calendar from '../../assets/calendar.svg'
import sms from '../../assets/sms.svg'
import location from '../../assets/location.svg'

const UserData = {
  firstName: "Rachelle",
  lastName: "Ndour",
  email: "ndourrachelle@css.sn",
  birthday: "1999-05-03",
  phone: "06 00 00 00 00",
  address: "Zac Mbao, Dakar",
  post: "Responsable IT",
  service: "Caisse de sécurité sociale",
  superior: "Abdoulaye Dabo",
}

function Profil() {
  return (
    <div>
      <section className='shadow-md rounded-[12px] mb-12'>
        <img src={profilebg} alt="profile-bg image" className="w-full" />
        <div className='relative w-full h-full px-[42px] py-6'>
          <div className='absolute rounded-full overflow-hidden p-[2px] bg-white -top-10 left-[40px]'>
            <img src={'https://placehold.co/300x300'} height={85} width={85} alt="profile image" className='h-[85px] w-[85px] rounded-full bg-slate-300' />
          </div>
          <div className='pt-8'>
            <div className='flex items-center mb-4'>
              <h1 className='text-xl font-bold mr-[24px] text-[#404040]'>Rachelle Ndour</h1>
              <p className='inline-block font-bold text-[#00AF41] bg-[#DAF9D8] rounded-md px-4 py-1 text-[12px]'>
                <span className='mr-[15px]'>En service</span>
                <span className='inline-block h-2 w-2 rounded-full bg-[#00AF41]'></span>
              </p>
            </div>
            <p className='text-[#7B7C7E] mb-4 font-semibold'>Responsable IT Caisse de Sécurité Sociale</p>
            <div className='flex flex-col items-start'>
              <div className='flex items-center mb-2'>
                <img src={location} alt="location" className='w-[20px] h-[20px] mr-2' />
                <span className='font-semibold'>Zac Mbao, Dakar</span>
              </div>
              <div className='flex items-center'>
                <img src={sms} alt="sms" className='w-[20px] h-[20px] mr-2' />
                <span className='font-semibold'>ndourrachelle@css.sn</span>
              </div>
            </div>
          </div>
          <button className='absolute top-[40px] right-[30px] rounded-full hover:bg-gray-100 p-[10px] text-gray-800 transition-all duration-300 ease-in-out'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </button>
        </div>
      </section>

      {/* User profile */}
      <section className='flex flex-col xl:flex-row'>

        <div className='flex-1 mb-8 xl:mb-0 xl:mr-10'>
          <div className='flex flex-col xl:flex-row gap-[36px]'>
            <div className='flex-1 mb-8 xl:mb-0'>
              <h3 className='text-xl font-semibold mb-8'>Informations personnelles</h3>
              <form className='grid lg:grid-cols-2 grid-cols-1 gap-x-[36px] gap-y-3'>
                <div className='min-w-[239px]'>
                  <label htmlFor="firstName" className='inline-block mb-1 text-sm font-semibold text-[#6F6F71]'>Prénom et nom</label>
                  <input type="text" id="firstName" value={UserData.firstName + "  " + UserData.lastName} className='w-full border-[1px] rounded-xl border-[#7B7C7E] py-2 px-4 outline-none text-sm' />
                </div>
                <div className='min-w-[239px]'>
                  <label htmlFor="email" className='inline-block mb-1 text-sm font-semibold text-[#6F6F71]'>Email personnel</label>
                  <input type="email" id="email" value={UserData.email} className='w-full border-[1px] rounded-xl border-[#7B7C7E] py-2 px-4 outline-none text-sm' />
                </div>
                <div className='min-w-[239px]'>
                  <label htmlFor="birthday" className='inline-block mb-1 text-sm font-semibold text-[#6F6F71]'>Date de naissance</label>
                  <input type="date" id="birthday" value={UserData.birthday} className='w-full border-[1px] rounded-xl border-[#7B7C7E] py-2 px-4 outline-none text-sm' />
                </div>
                <div className='min-w-[239px]'>
                  <label htmlFor="phone" className='inline-block mb-1 text-sm font-semibold text-[#6F6F71]'>Téléphone</label>
                  <input type="tel" id="phone" value={UserData.phone} className='w-full border-[1px] rounded-xl border-[#7B7C7E] py-2 px-4 outline-none text-sm' />
                </div>
                <div className='min-w-[239px]'>
                  <label htmlFor="address" className='inline-block mb-1 text-sm font-semibold text-[#6F6F71]'>Adresse</label>
                  <input type="text" id="address" value={UserData.address} className='w-full border-[1px] rounded-xl border-[#7B7C7E] py-2 px-4 outline-none text-sm' />
                </div>
              </form>
            </div>
            <div>
              <h3 className='text-xl font-semibold mb-8'>Informations professionnelles</h3>
              <form className='grid grid-cols-1 gap-y-3'>
                <div className='min-w-[239px]'>
                  <label htmlFor="post" className='inline-block mb-1 text-sm font-semibold text-[#6F6F71]'>Poste actuel</label>
                  <input type="text" id="post" value={UserData.post} className='w-full border-[1px] rounded-xl border-[#7B7C7E] py-2 px-4 outline-none text-sm' />
                </div>
                <div className='min-w-[239px]'>
                  <label htmlFor="service" className='inline-block mb-1 text-sm font-semibold text-[#6F6F71]'>Service</label>
                  <input type="text" id="service" value={UserData.service} className='w-full border-[1px] rounded-xl border-[#7B7C7E] py-2 px-4 outline-none text-sm' />
                </div>
                <div className='min-w-[239px]'>
                  <label htmlFor="superior" className='inline-block mb-1 text-sm font-semibold text-[#6F6F71]'>Superieur hierarchique</label>
                  <input type="text" id="superior" value={UserData.superior} className='w-full border-[1px] rounded-xl border-[#7B7C7E] py-2 px-4 outline-none text-sm' />
                </div>
              </form>
            </div>
          </div>
          {/* Button */}
          <button className='bg-[#D9D9D9] text-white font-bold rounded-3xl py-3 px-6 mt-8'>Enregistrer</button>
        </div>

        {/* Timeline */}
        <div className='shadow-md rounded-[12px] p-5 xl:w-[250px] flex flex-col'>
          <h3 className='font-medium mb-4'>Historique de connexion</h3>
            <ul className="relative border-s-2 ms-2 border-dotted border-[#ACACAC] flex-1 ">
              <TimelineItem day="Aujourd'hui" time="17 H 30" />
              <TimelineItem day="Hier" time="17 H 30" />
              <TimelineItem day="Hier" time="17 H 30" />
              <TimelineItem day="Hier" time="17 H 30" />
            </ul>
          <a href="" className=' text-[#00AF41] underline mt-2'>Voir tout</a>
        </div>
      </section>
    </div>
  )
}

const TimelineItem = ({day, time} : {day: string, time: string}) => {
  return (
    <li className="mb-10 ms-6">
      <div className='rounded-full border-[5px] border-[#00AF41] bg-[#EAFFF2] absolute w-5 h-5  -start-[11px] ring-0 ring-white '></div>
      <h3 className="flex items-center justify-between mb-1 text-sm font-semibold text-gray-900 ">{day} <span className="text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">{time}</span></h3>
    </li>
  );
}


export default Profil;
