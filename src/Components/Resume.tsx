import React from 'react'
import SCULogo from "../Images/SCULogo.png"
import BHSLogo from "../Images/BHSLogo.png"
import DremLogo from "../Images/DremLogo.png"
import GWCLogo from "../Images/GWCLogo.png"


const Resume = () => {
  return (
    <div id='resume' className='w-full pb-16 bg-[#FFFFF0]'>
        {/* title */}
        <div className='pt-8 md:pt-16 mx-auto flex-col text-center'>
            <h1 className='text-5xl text-center font-bold inline border-b-4 border-pink-600 2xl:text-7xl'>Resume</h1>
        </div>

        {/* Education & Work Experience Section */}
        {/* div below includes everything including education and down to bottom of resume */}
        <div className='lg:ml-10 mr-5'>
            {/* education section */}
            <h2 className='text-2xl mt-8 ml-4 text-orange-600 font-semibold md:my-8 2xl:text-3xl'>Education</h2>
            {/* SCU  */}
            <div>
                <div className='text-black md:text-2xl'>
                    {/* to display date of graduation side by side @ breakpoint md */}
                    <div className='md:flex mx-auto justify-between'>
                        <div className='ml-8 md:flex'>
                            {/* scu logo that shows up for large/computer */}
                            <img src={SCULogo} alt='SCU Logo' className='rounded-full w-20 h-20 hidden md:block ml-0'></img>
                            {/* to make the SCU logo move from right to left as screen enlarges */}
                            <div className='flex'>
                                <div>
                                    {/* hardcode to make it look pretty at bp md so education is closer to scu */}
                                    <h3 className='font-medium text-2xl md:ml-4 md:text-3xl xl:text-4xl'>Santa Clara University</h3>
                                    {/* to display major/minor side by side @ breakpoint md */}
                                    <div className='xl:flex'>
                                        <h3 className='text-[#374151] text-lg font-medium ml-4 md:ml-8 md:text-xl lg:text-xl 2xl:text-2xl'>Bachelor of Science in Computer Science</h3>
                                        <h3 className='text-[#374151] hidden xl:block text-lg font-medium 2xl:text-2xl'>;</h3>
                                        <h3 className='text-[#374151] text-lg font-medium ml-4 md:ml-8 md:text-xl lg:text-xl xl:ml-1 2xl:text-2xl'>Minor in Entrepreneurship & Mathematics</h3>
                                    </div>
                                </div>
                                {/* scu logo that shows up for small/mobile */}
                                <img src={SCULogo} alt='SCU Logo' className='ml-6 rounded-full w-20 h-20 block sm:ml-32 md:hidden'></img>
                            </div>
                        </div>
                        <h3 className='text-[#374151] ml-12 text-lg font-medium md:mr-4 lg:text-xl lg:mr-14 2xl:text-2xl'>September 2020 - June 2024</h3>
                    </div>
                </div>
                {/* hardcode to make bullet points closer to text above with (md:-mt-0) */}
                <ul className='text-black text-lg list-disc list-outside ml-20 md:ml-48 md:text-xl md:-mt-0 mr-5 xl:text-xl 2xl:text-2xl'>
                    <li>Overall GPA: 3.7/4.0</li>
                    <li>Achievements: SCU Bronco Scholarship & Heritage Fund Scholarship Recipient, Won 2nd place with a grand prize of $1200 
                        at H4H 2022
                    </li>
                    <li>CS Courses: Algorithms, Object-Oriented Programming, Data Structures, Computer Security, Embedded Systems</li>
                    <li>Extracurriculars: ACM (Outreach Coordinator, Underclassmen Representative), Theta Tau Professional Engineering 
                        Fraternity, Society of Women Engineers (SWE member)
                    </li>
                </ul>
            </div>
            {/* BHS */}
            <div>
                <div className='text-black md:text-2xl'>
                    {/* to display date of graduation side by side @ breakpoint md */}
                    <div className='md:flex mx-auto justify-between'>
                        <div className='ml-8 md:flex'>
                            {/* BHS logo that shows up for large/computer */}
                            {/* hardcode to make text further from experience/education above */}
                            <img src={BHSLogo} alt='BHS Logo' className='rounded-full object-scale-down w-20 h-20 hidden md:block md:mt-2 ml-0'></img>
                            {/* to make the BHS logo move from right to left as screen enlarges */}
                            <div className='flex'>
                                <div>
                                    {/* hardcode to make text further from experience/education above */}
                                    <h3 className='font-medium text-2xl md:ml-4 md:text-3xl md:mt-2 xl:text-4xl'>Burlingame High School</h3>
                                    {/* to display diploma side by side @ breakpoint md */}
                                    <h3 className='text-[#374151] text-lg font-medium ml-4 md:ml-8 md:text-xl lg:text-xl 2xl:text-2xl'>High School Diploma</h3>
                                    <h3 className='text-[#374151] text-lg font-medium ml-4 block md:ml-8 md:text-xl md:hidden lg:text-xl 2xl:text-2xl'>August 2016 - June 2020</h3>
                                </div>
                                {/* BHS logo that shows up for small/mobile */}
                                <img src={BHSLogo} alt='BHS Logo' className='ml-28 rounded-full w-20 h-20 block sm:ml-52 md:hidden'></img>
                            </div>
                        </div>
                        {/* hardcode to make text further from experience/education above */}
                        <h3 className='text-[#374151] ml-12 text-lg font-medium hidden md:mr-4 md:block md:md:mt-2 lg:text-xl lg:mr-14 2xl:text-2xl'>August 2016 - June 2020</h3>
                    </div>
                </div>
                {/* hardcode to make bullet points closer to text above with (md:-mt-2) */}
                <ul className='text-black text-lg list-disc list-outside ml-20 md:ml-48 md:text-xl md:-mt-2 mr-5 xl:text-xl 2xl:text-2xl'>
                    <li>Achievements: Recognized as the MVP on the girl's golf team, member of California Scholarship Federation (CSF)</li>
                    <li>Exracurriculars: Former president (2019-2020, 2018-2019) and vice president (2017-2018) of the Burlingame Girls Who Code 
                        Club, Captain (2019-2020, 2018-2019, 2017-2018) of the girl's golf team, Captain (2018-2019) of the co-ed 
                        Badminton team</li>
                </ul>
            </div>





        {/* Work Experience Section */}
            <h2 className='text-2xl mt-8 ml-4 text-orange-600 font-semibold md:my-8 2xl:text-3xl'>Work Experience</h2>
            {/* Drem */}
            <div>
                <div className='text-black md:text-2xl'>
                    {/* to display date of work*/}
                    <div className='md:flex mx-auto justify-between'>
                        <div className='ml-8 md:flex'>
                            {/* scu logo that shows up for large/computer */}
                            <img src={DremLogo} alt='Drem Logo' className='rounded-full w-20 h-20 hidden md:block ml-0'></img>
                            {/* to make the Drem logo move from right to left as screen enlarges */}
                            <div className='flex'>
                                <div>
                                    {/* hardcode to make it look pretty at bp md so education is closer to Drem */}
                                    <h3 className='font-medium text-2xl md:ml-4 md:text-3xl xl:text-4xl'>Drem</h3>
                                    <h3 className='text-[#374151] text-lg font-medium ml-4 md:ml-8 md:text-xl lg:text-xl 2xl:text-2xl'>Software Engineer Intern</h3>
                                    <h3 className='text-[#374151] text-lg font-medium ml-4 block md:ml-8 md:text-xl md:hidden lg:text-xl 2xl:text-2xl'>June 2022 - current</h3>

                                </div>
                                {/* Drem logo that shows up for small/mobile */}
                                <img src={DremLogo} alt='Drem Logo' className='ml-36 rounded-full w-20 h-20 block sm:ml-64 md:hidden'></img>
                            </div>
                            
                            
                        </div>
                        <h3 className='text-[#374151] ml-12 text-lg font-medium hidden md:mr-4 md:block lg:text-xl lg:mr-14 2xl:text-2xl'>June 2022 - current</h3>
                    </div>
                </div>
                {/* hardcode to make bullet points closer to text above with (md:-mt-2) */}
                <ul className='text-black text-lg list-disc list-outside ml-20 md:ml-48 md:text-xl md:-mt-2 mr-5 xl:text-xl 2xl:text-2xl'>
                    <li>Implemented landing page, interface, among others to launch the minimum viable product for Drem’s next funding round</li>
                    <li>Developed a subheading component with information and images about Drem while making it appealing to scroll 
                        through on the landing page using React, Typescript, and Tailwind CSS
                    </li>
                    <li>Collaborated on creating Reusable components and an Info Card (user profile) component, then made it reactive to website size</li>
                </ul>
            </div>
            {/* THD @ SCU */}
            <div>
                <div className='text-black md:text-2xl'>
                    {/* to display date of work*/}
                    <div className='md:flex mx-auto justify-between'>
                        <div className='ml-8 md:flex'>
                            {/* scu logo that shows up for large/computer */}
                            {/* hardcode to make text further from experience/education above */}
                            <img src={SCULogo} alt='SCU Logo' className='rounded-full w-20 h-20 hidden md:block md:mt-2 ml-0'></img>
                            {/* to make the SCU logo move from right to left as screen enlarges */}
                            <div className='flex'>
                                <div>
                                    {/* hardcode to make text further from experience/education above */}
                                    <h3 className='font-medium text-2xl md:ml-4 md:text-3xl md:mt-2 xl:text-4xl'>Santa Clara University</h3>
                                    {/* hardcode made font smaller to fit in one row */}
                                    <h3 className='text-[#374151] text-base font-medium ml-4 md:ml-8 md:text-xl lg:text-xl 2xl:text-2xl'>Technology Help Desk Analyst</h3>
                                    <h3 className='text-[#374151] text-lg font-medium ml-4 block md:ml-8 md:text-xl md:hidden lg:text-xl 2xl:text-2xl'>September 2021 - current</h3>
                                </div>
                                {/* SCU logo that shows up for small/mobile */}
                                <img src={SCULogo} alt='SCU Logo' className='ml-32 rounded-full w-20 h-20 block sm:ml-60 md:hidden'></img>
                            </div>
                        </div>
                        {/* hardcode to make text further from experience/education above */}
                        <h3 className='text-[#374151] ml-12 text-lg font-medium hidden md:mr-4 md:block md:mt-2 lg:text-xl lg:mr-14 2xl:text-2xl'>June 2022 - current</h3>
                    </div>
                </div>
                {/* hardcode to make bullet points closer to text above with (md:-mt-2) */}
                <ul className='text-black text-lg list-disc list-outside ml-20 md:ml-48 md:text-xl md:-mt-2 mr-5 xl:text-xl 2xl:text-2xl'>
                    <li>Provided technical support and troubleshot software and hardware issues relating to WiFi, printing, antivirus, 
                        authentication, and more to the University community of 9,000+ students, staff, and faculty</li>
                    <li>Identified, analyzed, and solved customer-related issues in person, over the phone, and in online chat</li>
                </ul>
            </div>
            {/* GWC @ Lightspeed */}
            <div>
                <div className='text-black md:text-2xl'>
                    {/* to display date of work*/}
                    <div className='md:flex mx-auto justify-between'>
                        <div className='ml-8 md:flex'>
                            {/* GWC logo that shows up for large/computer */}
                            {/* hardcode to make text further from experience/education above */}
                            <img src={GWCLogo} alt='GWC Logo' className='rounded-full w-20 h-20 hidden md:block md:mt-2 ml-0'></img>
                            {/* to make the GWC logo move from right to left as screen enlarges */}
                            <div className='flex'>
                                <div>
                                    {/* hardcode to make it look pretty at bp md so education is closer to GWC */}
                                    {/* hardcode to make text further from experience/education above */}
                                    <h3 className='font-medium text-2xl md:ml-4 md:text-3xl md:mt-2 xl:text-4xl'>Lightspeed Venture Partners</h3>
                                    <h3 className='text-[#374151] text-lg font-medium ml-4 md:ml-8 md:text-xl lg:text-xl 2xl:text-2xl'>Girls Who Code CS Intern</h3>
                                    <h3 className='text-[#374151] text-lg font-medium ml-4 block md:ml-8 md:text-xl md:hidden lg:text-xl 2xl:text-2xl'>June 2018 - July 2018</h3>

                                </div>
                                {/* GWC logo that shows up for small/mobile */}
                                <img src={GWCLogo} alt='GWC Logo' className='ml-20 rounded-full w-20 h-20 block sm:ml-48 md:hidden'></img>
                            </div>
                        </div>
                        {/* hardcode to make text further from experience/education above */}
                        <h3 className='text-[#374151] ml-12 text-lg font-medium hidden md:mr-4 md:block md:mt-2 lg:text-xl lg:mr-14 2xl:text-2xl'>June 2018 - July 2018</h3>
                    </div>
                </div>
                {/* hardcode to make bullet points closer to text above with (md:-mt-2) */}
                <ul className='text-black text-lg list-disc list-outside ml-20 md:ml-48 md:text-xl md:-mt-2 mr-5 xl:text-xl 2xl:text-2xl'>
                    <li>Worked in a highly collaborative startup company environment, gaining both technical and business-side experience</li>
                    <li>Managed the development timeline for our college information website project</li>
                    <li>Designed and implemented features using Google Maps API</li>
                    <li>Learned multiple coding languages: Python, HTML, CSS, Javascript, Java, and Arduino</li>
                </ul>
            </div>


        </div> {/* div on the left is for the whole resume section */}
        
        
        
            
        
    </div>
  )
}

export default Resume