// For those users who have not logged in

import * as React from 'react';
import SkillNest from '../assets/SkillNest.png';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../LandingPage/LandingPage.css';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import OutCourses from '../assets/OutCourses.ts';


export default function LandingPage() {
    return (
        <div className="LandingPageUpperNavbar">
            <div className="SkillNestLogo">
                <img src={SkillNest} alt="SkillNest Logo" />
            </div>
            <div className='SearchBar'>
                <Autocomplete
                    className='SearchBarBox'
                    options={OutCourses}
                    sx={{ width: 300,
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '80px'
                        }
                     }}
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                />
            </div>

            <div className="AppNavbarButtons">
                <Stack spacing={2} direction="row">
                    <Button variant="contained">Login</Button>
                    <Button variant="contained">Sign Up</Button>
                </Stack>
            </div>

        </div>
    );
}