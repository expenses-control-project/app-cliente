import { FaBus, FaCarSide, FaHeartbeat, FaPencilRuler, FaRunning } from 'react-icons/fa'
import { FaHouseChimney } from 'react-icons/fa6'
import { GiClothes } from 'react-icons/gi'
import { IoIosLaptop } from 'react-icons/io'
import { MdOutlineAirplanemodeActive, MdRestaurant } from 'react-icons/md'

interface IconsRubrosProps {
    idRubro: number
    bg: string
}

function IconsRubrosComponent({bg, idRubro}: IconsRubrosProps) {
    switch (idRubro) {
        case 1:
            return <MdRestaurant className={`${bg} rounded-circle p-2`} size={40}/>
        case 2: 
            return <GiClothes className={`${bg} rounded-circle p-2`} size={40}/>
        case 3:
            return <IoIosLaptop className={`${bg} rounded-circle p-2`} size={40}/>
        case 4: 
            return <FaHeartbeat className={`${bg} rounded-circle p-2`} size={40}/>
        case 5: 
            return <FaHouseChimney className={`${bg} rounded-circle p-2`} size={40}/>
        case 6: 
            return <FaBus className={`${bg} rounded-circle p-2`} size={40}/>
        case 7: 
            return <FaPencilRuler className={`${bg} rounded-circle p-2`} size={40}/>
        case 8: 
            return <FaCarSide className={`${bg} rounded-circle p-2`} size={40}/>
        case 9: 
            return <FaRunning className={`${bg} rounded-circle p-2`} size={40}/>
        case 10: 
            return <MdOutlineAirplanemodeActive className={`${bg} rounded-circle p-2`} size={40}/>
    }
}

export default IconsRubrosComponent