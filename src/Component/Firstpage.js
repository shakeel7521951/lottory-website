import React, { useState } from 'react';
import internet_security_image from '../Component/images/internet_security_or_cyber_security.png';
import contentManagement from '../Component/images/Content_management_system_on_tablet.png';
import speaker from '../Component/images/3dicons_speaker.png';
import dicons from '../Component/images/3dicons.png';
import setting from '../Component/images/3dicons_settings.png';
import fitnessTracker from '../Component/images/Fitness_tracker_with_heart_rate_and_steps.png';
import cuate from '../Component/images/cuate.png';
import withdraw_watch_application from '../Component/images/undraw_watch_application_uhc9.png';
import bitly from '../Component/images/cib_bitly.png';
import figma from '../Component/images/logos_figma.png';
import framer from '../Component/images/logos_framer.png';
import freePic from '../Component/images/simple-icons_freepik.png';
import webflow from '../Component/images/skill-icons_webflow.png';
import group_31 from '../Component/images/Group-31.png';
import humbleicons from '../Component/images/humbleicons_download.png';
import memory_trash from '../Component/images/memory_trash.png';
import settings_rafiki from '../Component/images/Settings-rafiki.png';
import ph_hand from '../Component/images/ph_hand.png';
import carbon_help from '../Component/images/carbon_help.png';
import search from '../Component/images/iconamoon_search-light.png';
import feedback from '../Component/images/material-symbols_feedback-outline.png';

export default function Firstpage() {
    const [isTextVisible, setIsTextVisible] = useState({ first: false, second: false, third: false, fourth: false });
    const [isOn, setIsOn] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isyoutubeHistoryOn,setYoutubeHistoryOn] = useState(false);
    const [isAddsCenterOn,setAdsCenterOn] =useState(false);
    const [isPersonalResultSearchOn , setPersonalResultSearch] = useState(false);

    const toggleText = (key) => {
        setIsTextVisible((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    }

    return (
        <div className='bg-black text-white'>
            <div className="container-fluid">
                <h1 className='opacity '>Data & Privacy</h1>
                <div className="row justify-content-center w-100 align-items-center ">
                    <div className="col-12 col-sm-10 col-md-10  align-items-center text-center mt-3">
                        <h1>Data & Privacy</h1>
                        <p>Essential privacy features allowing you to select the information stored in your account, control the advertisements you encounter, manage the information shared with others, and much more</p>
                    </div>
                    <div className="col-12 col-md-10 mx-auto my-4">
                        <div className="border rounded-1 p-3">
                            <div className="row">
                                <div className="col-12 col-md-10 text-left p-2">
                                    <h2 className=" ">Privacy suggestions available</h2>
                                    <p>Take the Privacy Checkup and choose the settings that are right for you.</p>
                                </div>
                                <div className="col-12 text-center col-md-2">
                                    <img className="security_image" src={internet_security_image} alt="Logo" />
                                </div>
                            </div>
                            <hr className='border-2' />
                            <h3 className="review text-primary fs-6">Review suggestions(3)</h3>
                        </div>
                    </div>
                </div>


                {/* 2nd page */}


                <div className='row'>
                    <div className='col-12 col-md-10 mx-auto'>
                        <h1 className='my-5'>Your Data & Privacy options</h1>
                        <div className='row'>
                            <div className='col-10 col-md-10 mx-auto d-flex'>
                                {
                                    isTextVisible.first ?
                                        (<i class="bi bi-arrow-up text-primary fs-4 me-3 cursor-pointer" onClick={() => { toggleText('first') }} />)
                                        :
                                        (<i class="bi bi-arrow-down text-primary fs-4 me-3 cursor-pointer" onClick={() => { toggleText('first') }} />)
                                }
                                <div className='col mx-auto'>
                                    <h4>Things you've done and places you've been</h4>
                                    {
                                        isTextVisible.first && (
                                            <div>
                                                <p className='mt-3'>This is the text which is shown after click </p>
                                            </div>
                                        )}
                                </div>
                            </div>

                            <hr className=' border-2 col-10 mt-2 mx-auto' />
                        </div>
                        <div className='row'>
                            <div className='col-10 col-md-10 mx-auto d-flex'>
                                {
                                    isTextVisible.second ?
                                        (<i class="bi bi-arrow-up text-primary me-3 fs-4 cursor-pointer" onClick={() => { toggleText('second') }} />)
                                        :
                                        (<i class="bi bi-arrow-down text-primary me-3 fs-4 cursor-pointer" onClick={() => { toggleText('second') }} />)
                                }
                                <div className='col'>
                                    <h4>Info you can share with others</h4>
                                    {
                                        isTextVisible.second && (
                                            <div>
                                                <p className='mt-3'>This is the text which is shown after click </p>
                                            </div>)
                                    }
                                </div>
                            </div>
                            <hr className='mt-2 border-2 col-10 mx-auto' />
                        </div>


                        <div className='row'>
                            <div className='col-10 col-md-10 mx-auto d-flex'>
                                {
                                    isTextVisible.third ?
                                        (<i class="bi bi-arrow-up text-primary me-3 fs-4 cursor-pointer" onClick={() => { toggleText('third') }} />)
                                        :
                                        (<i class="bi bi-arrow-down text-primary me-3 fs-4 cursor-pointer" onClick={() => { toggleText('third') }} />)
                                }
                                <div className='col'>
                                    <h4>Data from apps and services that you use</h4>
                                    {
                                        isTextVisible.third && (
                                            <div>
                                                <p className='mt-3'>This is the text which is shown after click </p>
                                            </div>)
                                    }
                                </div>
                            </div>
                            <hr className='mt-2 border-2 col-10 mx-auto' />
                        </div>

                        <div className='col-10 col-md-10 mx-auto d-flex'>
                            {
                                isTextVisible.fourth ?
                                    (<i className='bi bi-arrow-up text-primary cursor-pointer fs-4 me-3' onClick={() => { toggleText('fourth') }} />)
                                    :
                                    (<i className='bi bi-arrow-down text-primary cursor-pointer fs-4 me-3' onClick={() => { toggleText('fourth') }} />)
                            }
                            <div className='col'>
                                <h4 className='mb-2'>More options</h4>
                                {
                                    isTextVisible.fourth && (
                                        <div>
                                            <p>This is the text which is showing after click</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* page 3 */}

                <div className='row'>
                    <div className='col-12 col-md-10 mx-auto'>
                        <div className='row'>
                            <div className='col-12 col-md-8'>
                                <h2 className='my-5'>Things you've done and places you've been</h2>
                                <p className='mt-5'>Explore your choices for browsing history, advertisements, and personalized content. Revisit past searches, articles you've read, and videos you've watched, and review the locations you've explored.</p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <img className='w-100' src={contentManagement} alt='Content_Management' />
                            </div>
                        </div>
                        <div className='border mb-3 p-3 rounded-1'>
                            <h2>History Settings</h2>
                            <p className='mb-5'>Decide whether to store your activities and visited loactions for enhanced outcomes, customized maps, suggestions, and additional personalizaton.</p>
                            <div className='row justify-content-between my-4 cursor-pointer'>
                                <div className='col-5 d-flex'>
                                    <i class="bi bi-clock-history me-3"></i>
                                    <h4>Web & App Activity</h4>
                                </div>
                                <div onClick={()=>{setIsOn(!isOn)}} className='col-5 d-flex'>
                                    {
                                        isOn ? <i class="bi bi-check-circle text-danger me-2" />
                                            :
                                            <i class="bi bi-check-circle text-primary me-2" />
                                    }
                                    <h5 >{isOn ? "Of" : "On"}</h5>

                                </div>
                                <div className='col-2 d-flex cursor-pointer '>
                                    <i class="bi bi-chevron-right"></i>
                                </div>
                            </div>
                            <hr />

                            <div className='row my-5 cursor-pointer'>
                                <div className='col-5 d-flex '>
                                    <i class="bi bi-geo-alt me-3"></i>
                                    <h4>Timeline</h4>
                                </div>
                                <div onClick={() => { setIsPaused(!isPaused)}} className='col-5 d-flex '>
                                    {
                                        isPaused ? <i class="bi bi-play-circle me-2"></i> : <i class="bi bi-pause-circle me-2"></i>
                                    }

                                    <h5>{isPaused ? "Resume" : "Pause"}</h5>
                                </div>
                                <div className='col-2 d-flex '>
                                    <i class="bi bi-chevron-right"></i>
                                </div>
                            </div>
                            <hr />

                            <div className='row justify-content-between my-4 cursor-pointer'>
                                <div className='col-5 d-flex'>
                                    <i class="bi bi-youtube me-3"></i>
                                    <h4>YouTube History</h4>
                                </div>
                                <div onClick={()=>{setYoutubeHistoryOn(!isyoutubeHistoryOn)}} className='col-5 d-flex'>
                                    {
                                        isyoutubeHistoryOn? <i class="bi bi-check-circle text-danger me-2" /> : <i class="bi bi-check-circle text-primary me-2" />
                                    }
                                    <h5>{isyoutubeHistoryOn? "On":"Off"}</h5>
                                </div>
                                <div className='col-2 d-flex  '>
                                    <i class="bi bi-chevron-right"></i>
                                </div>
                            </div>

                            <p className='opacity'>See and delete your history anytime</p>
                            <div className='row justify-content-between'>
                                <div className='col-8 col-md-3 mt-2 border rounded-3 me-2 d-flex justify-content-baseline align-items-center p-1 cursor-pointer'>
                                    <i class="bi bi-clock-history me-3 "></i>
                                    <h5 className='mb-0'>My Activity</h5>
                                </div>
                                <div className='col-8 col-md-3 mt-2 border rounded-3 me-2 d-flex justify-content-baseline align-items-center p-1 cursor-pointer'>
                                    <i class="bi bi-geo-alt me-3"></i>
                                    <h5 className='mb-0'>Maps Timeline</h5>
                                </div>
                                <div className='col-8 col-md-3 mt-2 border rounded-3 me-2 d-flex justify-content-baseline align-items-center p-1 cursor-pointer'>
                                    <i class="bi bi-youtube me-3"></i>
                                    <h5 className='mb-0'>YouTube History</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Page 4 */}

                <div className='row'>
                    <div className='col-12 col-md-5 mx-auto m-5 border rounded-1'>
                        <h2 className='mt-5'>Personal Result in Search</h2>
                        <p>You can decide whether Clickke Search shows you personal results based on info in your Clikke Account</p>
                        <div className='row mt-5 justify-content-between'>
                            <div onClick={()=>{setPersonalResultSearch(!isPersonalResultSearchOn)}} className='col d-flex cursor-pointer'>
                                {
                                    isPersonalResultSearchOn? <i class="bi bi-check-circle text-danger me-2" /> : <i class="bi bi-check-circle text-primary me-2" />
                                }
                                
                                <h5>{isPersonalResultSearchOn? "Off":"On"}</h5>
                            </div>
                            <div className='col d-flex'>
                                <i class="bi bi-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-5 mx-auto border rounded-1 m-5'>
                        <h3 className='mt-5'>Personal Ads</h3>
                        <p>You can choose whether the ads you see on Clikkle services and partner sites are personalized</p>

                        <div className='row justify-content-between'>
                            <div className='col-11'>
                                <div className='row'>
                                    <div className='col-2'>
                                        <img src={speaker} className='dicons_image mt-2' alt='Ads' />
                                    </div>
                                    <div className='col-10'>
                                        <h3>My Ads centre</h3>
                                        <p>personalized Ads on Clikkle</p>
                                        <div onClick={()=>{setAdsCenterOn(!isAddsCenterOn)}} className='col d-flex cursor-pointer'>
                                            {
                                                isAddsCenterOn? <i class="bi bi-check-circle text-danger me-2"></i> : <i class="bi bi-check-circle text-primary me-2"></i>
                                            }
                                            
                                            <h5>{isAddsCenterOn? "Off":"On"}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-1'>
                                <i class="bi bi-chevron-right"></i>
                            </div>
                        </div>
                        <hr className='border-2' />


                        <div className='row justify-content-between'>
                            <div className='col-11'>
                                <div className='row'>
                                    <div className='col-2'>
                                        <img src={setting} className='dicons_image mt-2' alt='Ads' />
                                    </div>
                                    <div className='col-10'>
                                        <h3>Partner ads settings</h3>
                                        <p>Options for ads on sites that partner with Clikkle</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-1'>
                                <i class="bi bi-chevron-right"></i>
                            </div>
                        </div>
                        <hr className='border-2' />

                        <div className='row justify-content-between'>
                            <div className='col-11'>
                                <div className='row'>
                                    <div className='col-2'>
                                        <img src={dicons} className='dicons_image mt-2' alt='Ads' />
                                    </div>
                                    <div className='col-10'>
                                        <p>Your privacy is safeguarded. Content from Files, e-mail and Compaigns is never utilized for advertising puposes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-1'>
                                <i class="bi bi-chevron-right"></i>
                            </div>
                        </div>

                    </div>
                </div>


                {/* page 5 */}

                <div className='row'>
                    <div className='col-12 col-md-10 mx-auto my-4'>
                        <div className='row border justify-content-between my-4'>
                            <div className='col-12 col-md-7 p-4'>
                                <h2>Clikkle Fit Privacy</h2>
                                <p>Manage fit data saved in your Clikkle Account and see privacy settings for connected devices and services</p>
                            </div>
                            <div className='col-12 col-md-2 p-2 align-items-center text-center'>
                                <img src={fitnessTracker} style={{ width: '130px' }} alt='Fitness Tracker' />
                            </div>
                            <hr className='border-2' />
                            <p className='text-primary'>Manage Clikkle Fit Privacy</p>
                        </div>
                        <p className='opacity'>Other relevant options</p>
                        <div className='row'>
                            <div className='col-5 col-md-2 mt-2 border rounded-3 me-2 d-flex justify-content-center align-items-center p-1 cursor-pointer'>
                                <i class="bi bi-bag text-primary me-2"></i>
                                <h5 className='mb-0'>purchases</h5>
                            </div>
                            <div className='col-5 col-md-2 mt-2 border rounded-3 me-2 d-flex justify-content-center align-items-center p-1 cursor-pointer'>
                                <i class="bi bi-archive text-primary me-2"></i>
                                <h5 className='mb-0'>Reservations</h5>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Page 6 */}
                <div className='row'>
                    <div className='col-10 col-md-10 mx-auto p-2'>
                        <div className='row d-flex mt-2'>
                            <div className='col-12 col-md-8'>
                                <h2>Info you can share with others</h2>
                                <p className='mt-3'>The personal information stored in your account, such as your birthdate or email address, and the tools available to manage it. While this information remains private to you, you have the option to share some of it with others on Clikkle services</p>
                            </div>
                            <div className='col-4 align-items-end text-end '>
                                <img src={cuate} alt='Cuate' style={{ width: "180px" }} />
                            </div>
                        </div>
                        <div className='border mt-3'>
                            <div className='row d-flex justify-content-between p-2 px-4'>
                                <div className='col-4 d-flex'>
                                    <i class="bi bi-person-circle me-3 fs-5"></i>
                                    <h4>Profile</h4>
                                </div>
                                <div className='col-6 d-flex'>
                                    <h4>Your info and who can see it</h4>
                                </div>
                                <div className='col-1'>
                                    <i class="bi bi-chevron-right"></i>
                                </div>
                            </div>
                            <hr className='border-2' />
                            <div className='row d-flex justify-content-between p-2 px-4'>
                                <div className='col-4 d-flex'>
                                    <i class="bi bi-geo-alt me-3"></i>
                                    <h4>Location sharing</h4>
                                </div>
                                <div className='col-6 d-flex'>
                                    <h4>Not sharing with anyone</h4>
                                </div>
                                <div className='col-1'>
                                    <i class="bi bi-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                        <p className='opacity my-2'>Other relevant options</p>
                        <div className='row mx-auto text-center align-items-center justify-content-between col-12 mb-4'>
                            <div className='col-7 col-md-3 mt-2 border rounded-3 me-2 d-flex justify-content-center align-items-center p-1 cursor-pointer'>
                                <i class="bi bi-credit-card-fill me-1 text-primary"></i>
                                <p className='fs-6 mb-0'>Payment methods</p>
                            </div>
                            <div className='col-5 col-md-2 mt-2 border rounded-3 me-2 d-flex justify-content-center align-items-center p-1 cursor-pointer'>
                                <i class="bi bi-credit-card-fill me-1 text-primary"></i>
                                <p className='fs-6 mb-0'>Subscriptions</p>
                            </div>
                            <div className='col-5 col-md-2 mt-2 border rounded-3 me-2 d-flex justify-content-center align-items-center p-1 cursor-pointer'>
                                <i class="bi bi-device-ssd me-1 text-primary"></i>
                                <p className='fs-6 mb-0'>Your devices</p>
                            </div>
                            <div className='col-5 col-md-2 mt-2 border rounded-3 me-2 d-flex justify-content-center align-items-center p-1 cursor-pointer'>
                                <i class="bi bi-person-lines-fill me-1 text-primary"></i>
                                <p className='fs-6 mb-0'>Contacts</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* page 7 */}
                <div className='row'>
                    <div className='col-12 col-md-10 mx-auto'>
                        <div className='border p-3 mb-5'>
                            <h2>Interested in learning more?</h2>
                            <div className='row mt-5'>

                                <div className='d-flex justify-content-between p-1 px-4 mt-2'>
                                    <div className='d-flex'>
                                        <i class="bi bi-eye me-2"></i>
                                        <p>Who can see your data?</p>
                                    </div>
                                    <i class="bi bi-chevron-right"></i>
                                </div>
                                <hr className='border-3' />

                                <div className='d-flex justify-content-between p-1 px-4 mt-2'>
                                    <div className='d-flex'>
                                        <i class="bi bi-lightbulb me-2"></i>
                                        <p>How your data improves your experience</p>
                                    </div>
                                    <i class="bi bi-chevron-right"></i>
                                </div>

                            </div>
                        </div>

                        <div className='row my-5'>
                            <div className='col-12 col-md-7 mt-4 mx-auto'>
                                <h2>Data from apps and services you use</h2>
                                <p>The content you generate and your preferences concerning the Clikkle services you utilize, as well as third-party applications and services.</p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <img src={withdraw_watch_application} alt='withdraw_watch_application' style={{ width: "260px" }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Page 8 */}
                <div className='row'>
                    <div className='col-12 col-md-10 mx-auto'>
                        <div className='border mb-4 p-3'>
                            <div className='mt-4'>
                                <h2>Apps and services</h2>
                                <div className='d-flex justify-content-between mt-5'>
                                    <h5>Contents saved from Clikkle services</h5>
                                    <p>A summary of your services and data</p>
                                    <i class="bi bi-chevron-right"></i>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-5 col-md-2 mt-2 border rounded-3 me-2 d-flex justify-content-center align-items-center p-1 cursor-pointer'>
                                    <i className="bi bi-file-earmark-richtext text-primary me-1"></i>
                                    <p className=' mb-0'>Files</p>
                                </div>
                                <div className='col-5 col-md-2 mt-2 border rounded-3 me-2 d-flex justify-content-center align-items-center p-1 cursor-pointer'>
                                    <i className="bi bi-check-circle text-primary me-1"></i>
                                    <p className=' mb-0'>E-sign</p>
                                </div>
                                <div className='col-5 col-md-2 mt-2 border rounded-3 me-2 d-flex justify-content-center align-items-center p-1 cursor-pointer'>
                                    <i className="bi bi-check-circle text-primary me-1"></i>
                                    <p className='mb-0'>Campaign</p>
                                </div>
                            </div>


                            <hr className='border-2 ' />

                            <div className='mt-4'>
                                <div className='d-flex justify-content-between mt-5'>
                                    <h5>Contents saved from Clikkle services</h5>
                                    <p>A summary of your services and data</p>
                                    <i class="bi bi-chevron-right"></i>
                                </div>
                            </div>

                            <div className='row mt-3'>
                                <div className='col-5 col-md-2 mt-2 p-1 d-flex justify-content-center align-items-center border rounded-3 me-2 cursor-pointer'>
                                    <img src={bitly} alt='btly' style={{ width: "20px", height: '20px' }} />
                                    <p className='text-center m-0'>Bitly</p>
                                </div>
                                <div className='col-5 col-md-2 mt-2 p-1 d-flex justify-content-center align-items-center border rounded-3 me-2 cursor-pointer'>
                                    <img src={figma} alt='btly' style={{ width: "20px", height: '20px' }} />
                                    <p className='text-center m-0'>Figma</p>
                                </div>
                                <div className='col-5 col-md-2 mt-2 p-1 d-flex justify-content-center align-items-center border rounded-3 me-2 cursor-pointer'>
                                    <img src={framer} alt='btly' style={{ width: "20px", height: '20px' }} />
                                    <p className='text-center m-0'>Framer</p>
                                </div>
                                <div className='col-5 col-md-2 mt-2 p-1 d-flex justify-content-center align-items-center border rounded-3 me-2 cursor-pointer'>
                                    <img src={webflow} alt='btly' style={{ width: "20px", height: '20px' }} />
                                    <p className='text-center m-0'>Webflow</p>
                                </div>
                                <div className='col-5 col-md-2 mt-2 p-1 d-flex justify-content-center align-items-center border rounded-3 me-2 cursor-pointer'>
                                    <img src={freePic} alt='btly' style={{ width: "20px", height: '20px' }} />
                                    <p className='text-center m-0'>Freepik</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* page 9 */}
                <div className='row'>
                    <div className='col-12 col-md-10 mx-auto'>
                        <div className='row mb-4 mt-5'>
                            <div className='col-12 col-md-5 mx-auto border p-2'>
                                <div className='d-flex'>
                                    <div className='col-12 col-md-8'>
                                        <h2>Email from Clikkle services</h2>
                                        <p className='mt-4'>See and unsubscribe from emails you get from Clikkle services, suc as newsletters, product tips & more.</p>
                                    </div>
                                    <div className='col-12 col-md-4 mt-4'>
                                        <img src={group_31} alt='Group 31' style={{ width: "150px" }} />
                                    </div>
                                </div>
                                <div>
                                    <hr className='border-2' />
                                    <p className='text-primary'>Manage email preferences</p>
                                </div>
                            </div>
                            <div className='col-12 col-md-5 mx-auto border p-2'>
                                <h2>Download or delete your data</h2>
                                <div className='row mt-4'>
                                    <div className='d-flex '>
                                        <img src={humbleicons} alt='Humbleicons' className='me-3' style={{ width: '40px', height: "50px" }} />
                                        <div className='col'>
                                            <h5>Download your data</h5>
                                            <p>Make a copy of your data to back it up</p>
                                        </div>
                                        <i class="bi bi-chevron-right"></i>
                                    </div>
                                </div>
                                <hr className='border-2' />
                                <div className='row mt-4'>
                                    <div className='d-flex '>
                                        <img src={memory_trash} alt='Humbleicons' className='me-3' style={{ width: '30px', height: "40px" }} />
                                        <div className='col'>
                                            <h5>Delete a Clikkle service</h5>
                                            <p>Remove a service you no longer use.</p>
                                        </div>
                                        <i class="bi bi-chevron-right"></i>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>

                        <div className='row mt-5 align-items-center'>

                            <div className='col-12 col-md-8 d-flex '>
                                <div className='row'>
                                    <h1>More options</h1>
                                    <p className='mt-4'>Alternative methods for managing your data, such as selecting preferences for its treatment upon account inactivity or opting to delete your account.</p>
                                </div>
                            </div>
                            <div className='col-12 col-md-4'>
                                <img src={settings_rafiki} alt='' style={{ width: "260px" }} />
                            </div>
                        </div>
                        <div className='row mb-5 border'>
                            <div className='col d-flex justify-content-between align-items-center p-2'>
                                <div className='col d-flex mb-0 align-items-center '>
                                    <img src={ph_hand} className='me-2' alt='ph_hand' style={{ width: "20px", height: "20px" }} />
                                    <p className='mb-0'>Make a plan for your digital legacy</p>
                                </div>
                                <div className='col'>
                                    <p className='mb-0'>Plan what happens to your data</p>
                                </div>
                                <i class="bi bi-chevron-right"></i>
                            </div>
                            <hr className='border-2 mt-3' />
                            <div className='col d-flex justify-content-between align-items-center p-2'>
                                <div className='col d-flex mb-0 align-items-center '>
                                    <img src={memory_trash} className='me-2' alt='ph_hand' style={{ width: "20px", height: "20px" }} />
                                    <p className='mb-0'>Delete your Clikkle account</p>
                                </div>
                                <div className='col'>
                                    <p className='mb-0'>Delete your entire account and data</p>
                                </div>
                                <i class="bi bi-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* page 10 */}
                <div className='row'>
                    <div className='col-12 col-md-10 mx-auto mb-4 '>
                        <div className='border rounded p-2'>
                            <h2 className='my-3'>Looking for something else?</h2>
                            <div className=''>
                                <div className='d-flex mt-3 pt-4 px-2 cursor-pointer'>
                                    <div className='col d-flex justify-content-baseline'>
                                        <img src={search} className='me-3' alt='Search' style={{ width: '20px', height: "20px" }} />
                                        <p>Search Clikkle Account</p>
                                    </div>
                                    <i class="bi bi-chevron-right"></i>
                                </div>
                                <hr />
                                <div className='d-flex px-2 cursor-pointer'>
                                    <div className='col d-flex justify-content-baseline'>
                                        <img src={carbon_help} className='me-3' alt='carbon_help' style={{ width: '20px', height: "20px" }} />
                                        <p>Search help options</p>
                                    </div>
                                    <i class="bi bi-chevron-right"></i>
                                </div>
                                <hr />
                                <div className='d-flex px-2 cursor-pointer'>
                                    <div className='col d-flex justify-content-baseline'>
                                        <img src={feedback} className='me-3' alt='feedback' style={{ width: '20px', height: "20px" }} />
                                        <p>Send feedback</p>
                                    </div>
                                    <i class="bi bi-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
