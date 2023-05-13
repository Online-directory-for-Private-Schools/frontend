import React from "react";
import { SchoolCardProps } from "@/interfaces/SchoolCard";
import Image from "next/image";
import Logo from "@/public/School_Logo.svg";
import Link from "next/link";
import { AiTwotoneStar } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import TabBar from "../Home/TabBar";
import { useState } from "react";




import SchoolCard from './SchoolCard';

export const SchoolCardList = () => {
  const schools = [
    {
      schoolName: "School 1",
      schoolCity: "City 1",
      googleMapLocation: "Location 1",
      initialFavorite: false,
      rating: 4,
      description: "Lorem ipsum dolor sit amet",
    },
    {
      schoolName: "School 2",
      schoolCity: "City 2",
      googleMapLocation: "Location 2",
      initialFavorite: true,
      rating: 3,
      description: "Lorem ipsum dolor sit amet",
    },
    {
      schoolName: "School 3",
      schoolCity: "City 3",
      googleMapLocation: "Location 3",
      initialFavorite: false,
      rating: 5,
      description: "Lorem ipsum dolor sit amet",
    },
    {
      schoolName: "School 4",
      schoolCity: "City 4",
      googleMapLocation: "Location 4",
      initialFavorite: false,
      rating: 4,
      description: "Lorem ipsum dolor sit amet",
    },
    {
      schoolName: "School 5",
      schoolCity: "City 5",
      googleMapLocation: "Location 5",
      initialFavorite: false,
      rating: 4,
      description: "Lorem ipsum dolor sit amet",
    }
  ];

  return (
    <div className="container">
      <div className="row">
        {schools.map((school, index) => (
          <div key={index} className="col-md-4 mb-4">
            <SchoolCard SchoolProps={school} />
          </div>
        ))}
      </div>
    </div>
  );
};



import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { fontFamily } from "@mui/system";
import { red } from "@mui/material/colors";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function SchoolTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  let [course , setCourse] = useState(false);
  return (
    <div>
    {/* <Box sx={{ width: '87%', bgcolor: '#D9D9D9',  ml:9}}>
      <Box sx={{ display: 'flex', justifyContent: 'center', borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab sx={{color:red, ml:20, mr:15}} label="Courses" {...a11yProps(0)} />
          <Tab sx={{color:red, ml:15, mr:20}} label="Gallery" {...a11yProps(1)} />
        </Tabs>
        {value === 0 && (
          <Button sx={{ ml: 30 , color:"#ccc", background:"#1ACD77"}} variant="contained" >
            <span style={{color:"#1ACD77", fontFamily:"Niramit"}}>Edit Course</span>
            
          </Button>
        )}
        {value === 1 && (
          <Button sx={{ ml: 30 }} variant="contained">
            <span style={{color:"#1ACD77", fontFamily:"Niramit"}}>Edit Gallery</span>
          </Button>
        )}
      </Box>
      <TabPanel value={value} index={0}>
        <SchoolCardList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Photos
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nytimes.com%2F2021%2F07%2F12%2Fbriefing%2Fremote-learning-covid.html&psig=AOvVaw0uX9NhT0zYEuGijFFFwUtv&ust=1682875148586000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLD4sM3Mz_4CFQAAAAAdAAAAABAE" alt="" />
      </TabPanel>
    </Box> */}
    <TabBar course = {course} setCourse={setCourse} />
    </div>
  );
}





// Should have added a parameter to check the School


export function SchoolProfile() {
  return (
    <div className="container-1">
      <div className="hero">
        <div className="SchoolMain">
          <Image 
          src={"/chalal.jpg"}
          alt="Hi"
          width={10}
          height={10}
          /> 

          
          <h1>School Name</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            ullam quasi facilis quam necessitatibus, esse debitis, nihil ad
            dignissimos similique porro sunt deserunt voluptate eveniet nisi cum.
            Eius, distinctio similique.
          </div>
        </div>
        <div className="add-to-favorite">Add to favorite</div>
      </div>

      <div className="map">
        <h2>map</h2>
      </div>

      <div className="info">
        <h2>Contact Info</h2>
        <p>Phone Number: 123-456-7890</p>
        <p>Email: info@schoolname.com</p>
      </div>
      <SchoolTab />
    </div>
  );
}

