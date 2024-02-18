import React from 'react';
import './LeftPart.css'
import {MdOutlineSpeed} from 'react-icons/md'
import {BsFillBagCheckFill} from 'react-icons/bs'
import {HiOutlineClock} from 'react-icons/hi'
import {BiMessageDetail} from 'react-icons/bi'
import {AiFillCar} from 'react-icons/ai'
import {HiUser} from 'react-icons/hi'
import {BiBuildings} from 'react-icons/bi'

const LeftPart=()=>{
    return(
        <div>
        <div className='leftdiv'>
            <div >
          <MdOutlineSpeed className='speed'/> 
            <span className='over'>Overview</span>
            </div>
            <div>
            <BsFillBagCheckFill className='check'/>
            <span className='openjobs'>Open Jobs</span>
            </div>

            <div className='subleft'>
                <p>Waiting</p>
                <p>Applied</p>
                <p>Confirmed</p>
                <p>In Progress</p>
            </div>

            <div className='divjob'>
               <HiOutlineClock className='history'/>
                <span className='jobhistory'>Job History</span>
            </div>

            <div className='inbox'>
                <BiMessageDetail className='inboxicon'/>
                <span className='inboxtext'>Inbox</span>
            </div>

            <div>
            <AiFillCar className='caricon'/>
                <span className='vehicle'>My Vehicles</span>
            </div>

            <div>
                <HiUser className='usericon'/>
                <span className='usertext'>Manage Users</span>
            </div>

            <div>
                <BiBuildings className='buildingicon'/>
                <span className='textbuilding'>Company Profile</span>
            </div>

            <div className='companytext'>
                <p>Manage Profile</p>
                <p>Manage Services</p>
                <p>Reviews & Ratings</p>
                <p>Manage Offers</p>
            </div>
        </div>
        </div>
    )
}

export default LeftPart