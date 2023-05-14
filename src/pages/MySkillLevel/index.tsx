import { Stepper } from '@mantine/core';
import {useState} from "react";
import {ReactComponent as UserIcon } from './assets/user.svg';
import {ReactComponent as LocationIcon } from './assets/location.svg';
import {ReactComponent as HouseIcon } from './assets/house.svg';
import {ReactComponent as TelephoneIcon } from './assets/telephone.svg';
import {ReactComponent as ResidenceIcon } from './assets/residence.svg';


const MySkillLevel=()=>{
    const [step, setStep]= useState(1)
    return(
        <div className="py-6 px-24 bg-blue-10 h-[100vw]">
            <h4 className="text-lg text-white">My Skill Level</h4>
            <p className="text-sm text-white">Answer the following questions to begin your plan</p>
            <div className="mt-4 border-t-2 border-[#15175c] b">
                <div className="flex mt-8">       
                        <div className="mr-6">
                        <Stepper
                            active={step}
                            onStepClick={setStep}
                            color="#23c4ce"
                            size="sm"
                            orientation="vertical"
                            iconPosition="right"
                            classNames={{
                                step: "p-0", 
                                 verticalSeparator: "border-blue-50 -mt-1 -mb-1 min-h-[70px]",
                                stepIcon: "border-blue-30 bg-blue-30",
                                stepDescription: "text-white text-sm font-light w-32 ",
                                stepLabel: "text-white text-md flex float-right mr-2  w-20 text-right",
                            }}
                            //className=" border-dark-green-400 relative -top-10"
                        >
                                  <Stepper.Step icon={<UserIcon fill="currentColor" />} completedIcon={<UserIcon fill="currentColor" />} label="Your Name" description="First name & Last name " />
                                  <Stepper.Step icon={<LocationIcon fill="currentColor" />} completedIcon={<LocationIcon fill="currentColor" />} label="City Location" />
                                  <Stepper.Step icon={<TelephoneIcon fill="currentColor" />} completedIcon={<TelephoneIcon fill="currentColor" />} label="Telephone Number"  />
                                  <Stepper.Step icon={<HouseIcon fill="currentColor" />} completedIcon={<HouseIcon fill="currentColor" />} label="House Address"  />
                                  <Stepper.Step icon={<ResidenceIcon fill="currentColor" />} completedIcon={<ResidenceIcon fill="currentColor" />} label="Country of Residence"  />


                        </Stepper>
                        </div>
                        <div>
                            <div className="border-l-2 h-10 ml-1 -mt-8 border-[#15175c]">

                            </div>
                        <Stepper
                            active={step}
                            onStepClick={setStep}
                            size="sm"
                            orientation="vertical"
                            
                            icon={<div className="rounded-full"></div>}
                            completedIcon={<div className="rounded-full"></div>}
                            iconSize={10}
                            classNames={{
                                step: " h-[70px] -mb-1", 
                                separator:"bg-blue-50",
                                separatorActive:"bg-blue-50",
                                 verticalSeparator: "border-blue-50 -mt-1 -mb-1 ",
                                stepCompletedIcon:
                                    "bg-blue-20 rounded-full border-blue-20",
                                stepIcon: "border-blue-30 bg-blue-10",
                                stepDescription: "text-white text-sm ",
                                stepLabel: "text-white text-md  font-normal",
                            }}
                        >
                                  <Stepper.Step  />
                                  <Stepper.Step  />
                                  <Stepper.Step />
                                  <Stepper.Step />
                                  <Stepper.Step />


                        </Stepper>
                        <div className="border-l-2 h-10 ml-1 -mt-14 border-[#15175c]">

                            </div>
                        </div>
                        
                       
                        <div className="ml-10 text-white w-full mr-32">
                            <p className="text-sm font-light">Step 1</p>
                            <h2 className="text-lg font-bold">Let's start with your name</h2>
                            <p className="text-sm font-light">Please fill in the details below</p>
                            <hr className="my-4 text-blue-50"/>
                            <div>
                                <p className="text-sm font-light">Enter your name</p>
                                <div className={`px-2 md:px-4   flex items-center border border-blue-20 h-12 md:h-14 rounded`}>
                                    <input
                                            className="w-full outline-none input bg-blue-10 appearance-none"
                                            
                                        />
                                </div>
                            </div>
                            <button className="float-right bg-blue-20 text-[#000] font-semibold text-sm mt-4 rounded-full py-2 px-6">
                                Next Step
                            </button>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}
export default MySkillLevel;