'use client'
import React,{useState}from 'react'
import ProfileCard from '../components/profilecard'
import './profilesettings.css'

const page = () => {

    const[fullname, setName] = useState('Lucifer Barret');
    const[email ] = useState('lucifer12@gmail.com');
    const[about, setAbout] = useState('Student');
    const[location, setLocation] = useState('Galle');
    const[phonenumber, setPhoneNumber] = useState('0714516503');
    const [isEditMode, setIsEditMode] = useState(false);

    const handleEditClick = () => {
        setIsEditMode(!isEditMode);
    };
    
    const handleSaveChanges = () => {
        setIsEditMode(false);
    };


  return (
    <div className="profile-settings-section font-roboto w-full h-auto bg-cover flex justify-between items-start gap-6 px-8 mb-8">
        <div className="profile-settings-card w-[392px] h-[539px] mt-[146px] flex-shrink-0">
            <ProfileCard
            ProfileImage={'/images/Frame 54.png'}
            name={fullname}
            email={email}
            />
        </div>
        <div className="profile-personal-info-section  p-6 rounded-lg  bg-white w-full h-[539px] mt-[140px] ">
            <div className=' profile p-info flex items-center justify-between w-full h-[20px]'>
            <h1 className="profile-heading items-start text-[24px] font-semibold ml-[5px]">
               {isEditMode ? 'Edit Personal Information' : 'Personal Information'}
            </h1>
                <div className="cursor-pointer flex justify-end mt-[-60px] ">
                 <img
                 src={isEditMode ? '/icons/X.png' : '/icons/edit.png'}
                 alt="Edit"
                 className="p-edit-icon w-[30px] h-[30px] items-baseline"
                 onClick={handleEditClick}
                 />
                </div>
            </div>
            <div className="profile-personal-inputs mt-[40px]  gap-6">
            <div className="w-full ">
                <label className="text-[20px] leading-[23.44px] font-semibold  ">Full Name</label>
                <input
                type="text"
                className="w-full h-[44px] mt-2 p-2 border border-gray-300 "
                value={fullname}
                onChange={(e) => setName(e.target.value)}
                readOnly={!isEditMode}
                />
           </div>
           <div className="w-full mt-3 ">
                <label className="text-[20px] leading-[23.44px] font-semibold  ">About</label>
                <input
                type="text"
                className="w-full h-[44px] mt-2 p-2 border border-gray-300 "
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                readOnly={!isEditMode}
                />
           </div>
           <div className="w-full mt-3 ">
                <label className="text-[20px] leading-[23.44px] font-semibold  ">Location</label>
                <input
                type="text"
                className="w-full h-[44px] mt-2 p-2 border border-gray-300 "
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                readOnly={!isEditMode}
                />
           </div>
           <div className="w-full mt-3 ">
                <label className="text-[20px] leading-[23.44px] font-semibold  ">Phone Number</label>
                <input
            type="text"
            className="w-full h-[44px] mt-2 p-2 border border-gray-300 "
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                readOnly=  {!isEditMode}
                />
           </div>
           {isEditMode && (
            <div className="mt-6 flex justify-start">
                <button 
                className="bg-white text-black px-6 py-2 w-full text-[20px] font-semibold leading-[28.13 px] rounded-[50px] border border-secondary hover:bg-greenbutton hover:text-white "
                onClick={handleSaveChanges}> Save Details
               </button>
          </div>
        )}

        <div>
            <h1 className="text-[24px] font-semibold mt-6">Change Your Password</h1>
            <h2 className="text-[20px] mt-3">Update your password to keep your account safe. Enter your current password and choose a new one to proceed.</h2>
            <button className="bg-white text-black px-6 py-2 w-[243px] h-[52px] text-[20px] font-semibold leading-[28.13 px] rounded-[50px] border border-secondary hover:bg-greenbutton hover:text-white mt-6 justify-center"> Change Password</button>
        </div>

           </div>
       </div>
   </div>

  )
}

export default page
