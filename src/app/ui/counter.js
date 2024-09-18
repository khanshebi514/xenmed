'use client'

import { useEffect, useState } from "react";
import CountUp from "react-countup";


export default function Counter() {

  const [width, setWidth]   = useState(window.innerWidth);

  const updateDimensions = () => {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  
const values = [
  {
    start:0,
    end:900,
    suffix:'+',
  },

  {
    start:0,
    end:50,
    suffix:'+',
  },

  {
    start:0,
    end:30,
    suffix:'+',
  },

  {
    start:0,
    end:98,
    suffix:'%',
  },
]

const mobStyling = {fontSize:'2em', color:'#333', fontWeight:'600'  , font:'Opan Sans, sans-sarif'}
const deskTopStyling = {fontSize:'4em', color:'#333', fontWeight:'600' , font:'Opan Sans, sans-sarif' }

const styling = width<716 ? mobStyling : deskTopStyling
  const paraStyle = 'text-[#333] text-wrap text-lg opan-sans'
  return (
    <div className={`w-full grid grid-cols-1 md:grid-cols-4 bg-white place-items-center rounded-lg rounded-bl-none`}>
      <div className="w-full bg-primary content-center text-center rounded-lg rounded-bl-none">
        <CountUp start={values[0].start} suffix={values[0].suffix} end={values[0].end} style={styling} className="!text-white"></CountUp>
        <p className={'text-[#fff] text-wrap text-lg opan-sans'}>Physicians Served</p>
      </div>

      <div className="content-center text-center">
      <CountUp start={values[1].start} suffix={values[1].suffix} pr end={values[1].end} style={styling}></CountUp>
      <p className={paraStyle}>Specialities Served</p>
      </div>

      <div className="content-center text-center">
      <CountUp start={values[2].start} suffix={values[2].suffix} end={values[2].end} style={styling}></CountUp>
      <p className={paraStyle}>Software & EHR</p>
      </div>

      <div className="w-full content-center text-center rounded-r-lg">
      <CountUp start={values[3].start} suffix={values[3].suffix} end={values[3].end} style={styling}></CountUp>
      <p className={paraStyle}>First Pass Rate</p>
      </div>
    </div>
  );
}