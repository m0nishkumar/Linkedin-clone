import React,{useState} from 'react'
import { ResumeContact } from './resume-contact'
import { ResumeWork } from './Resume-work'
import { ResumeExperience } from './resume-job'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'    
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add( faCheckSquare, faCoffee)

export function Plugin(){
    const [page,setPage]=useState(0)
    const [color,setColor]=useState(["skyblue","black"])
    const [name,setName]=useState("Monish")
    const [namelast,setNamelast]=useState("kumar B")
    const [job,setJob]=useState("MERN Stack Developer")
    const [address,setAddress]=useState("5/112, kk nagar")
    const [city,setCity]=useState(",Dharapuram")
    const [state,setState]=useState("Tamil Nadu")
    const [pincode,setPinocde]=useState("638706")
    const [phone,setPhone]=useState("7010******")
    const [link_tag,setLinktag]=useState("Portfolio")
    const [link,setLink]=useState("https://github.com/m0nishkumar")
    const [email,setEmail]=useState("monishkumar@4050gamil.com")
    const [description,setDescription]=useState("I have just started #300daysofcode to improve my skills in react js,node js and CSS.I believe i will drag myself till the end 🤠.I will post my learning for the day along with screenshot I have accomplished for the day.It's an experiment to test compound growth 📈.The compound effect is the strategy of reaping huge rewards 🏆 from small, seemingly insignificant actions.Sounds interesting right,let's experiment it over #300daysofcode 🚀..")
    const page_array=["Contact Information","Education","Work Experience"]
     const resume_contact=()=>{
        if(page==0){
            return<ResumeContact setName={setName} setNamelast={setNamelast} setJob={setJob} setDescription={setDescription} setAddress={setAddress} setCity={setCity} setPhone={setPhone} setPinocde={setPinocde} setEmail={setEmail} setLink={setLink} setLinktag={setLinktag} setState={setState}/>;
        }
        else if(page==1){
            return <ResumeWork />;
        }else{
            return <ResumeExperience />;
        }
    }
    return(
        <div className='content-plugin'>
       <div className='output-section' style={{backgroundColor:"white",borderRadius:"7px",width:"50vw",marginLeft:"20px",height:"600px"}}>
           <div className='header-resume'style={{backgroundColor:color[0],padding:"20px",color:color[1]}}> 
           <div><h2 style={{display:"inline"}}>{name}</h2>
            <h2 style={{display:"inline"}}>{" "+namelast}</h2>
            <h4 style={{marginTop:"-10px",color:"grey"}}>{job}</h4>
            </div>
            <div>
            <h5 style={{display:"inline"}}>{address}</h5>
            <h5 style={{display:"inline"}}>{" "+city}</h5>
            <br/>
            <h5 style={{display:"inline"}}>{state}</h5>
            <h5  style={{display:"inline"}}>{" ,"+pincode}</h5>
            <br/>
            <h5 style={{display:"inline"}}>{"+91  "+phone}</h5>
            <br/>
            <h5  style={{display:"inline"}}>{email}</h5>
            <br/>
            <h5  style={{display:"inline"}}>{link_tag+": "}</h5>
            <h5  style={{display:"inline"}}>{link}</h5>
            </div>
           
            </div>
            <p style={{padding:"0px 20px"}}>{description}</p>
            <hr style={{height:"5px",backgroundColor:color[0],border:"none",margin:"0px 20px"}}/>
            <h3 style={{padding:"0px 20px"}}>Education Qualification:</h3>

        </div>
        <div className='input-section' style={{width:"50vw",textAlign:"center"}}>

            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <div className='progress-bar'style={{height:"10px",width:"400px",backgroundColor:"#F0E68C"}}>
                <div style={{height:"10px",width:(page==0)?"33.3%":(page==1)?"66.6%":"99.9%",backgroundColor:"green"}}>

                </div>
            </div>
                <h1>{page_array[page]}</h1>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",height:"450px",width:"48vw"}}>
                {resume_contact()}
            </div>
            <div className='resume-button'>
            <button disabled={page==0} onClick={()=>{
                setPage(page-1)
            }}><i class="gg-arrow-left"></i></button>
            <button onClick={()=>{
                if(page==page_array.length-1){
                    alert("submitted")}
                else{
                    setPage(page+1)
                }
            }}>{page==page_array.length-1?<i class="gg-check"></i>:<i class="gg-arrow-right"></i>}</button>
            </div>
            </div>

            <div className='colors-resume' style={{marginRight:"20px"}}>
                <div className='navy' style={{marginBottom:"10px"}} onClick={()=>{
                    setColor(["navy","white"])
                }}></div>
                <div className='red'style={{marginBottom:"10px"}} onClick={()=>{
                    setColor(["red","white"])
                }}></div>
                <div className='pink' style={{marginBottom:"10px"}} onClick={()=>{
                    setColor(["pink","black"])
                }}></div>
                <div className='skyblue' onClick={()=>{
                    setColor(["skyblue","black"])
                }}></div>
            </div>

        </div>
        </div>
    )
}