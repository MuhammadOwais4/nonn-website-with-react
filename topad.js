import { Button } from '@mui/material';
import { display } from '@mui/system';
import * as React from 'react';
import Img from './img/xnoon.eg.jpg.pagespeed.ic.v76gGYV4mg.webp';
import './topd.css'
import DownloadIcon from '@mui/icons-material/Download';


function TopAd() {
    
    return (
    
        <div >
            <div className='TopAdmain'>

                <div className='first'>
                    <h1> <DownloadIcon className='download' /> </h1>   <p className='dow' > Download the noon app </p>
                    <p>Get 5% castback</p>
                    <div className='ima1'>

                        <img src={Img} alt="y" width={60} height={30} />
                    </div>
                </div>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>


                <div className='second'>
                    <div>

                        <p >Use code: APP15</p>
                    </div>
                    <div><p>T%Cs apply</p></div>
                </div>

            </div>

            <div>
            </div>
            <div className='sliderMain'>

                <div className='slider'>
                    <p>owais</p>


                </div>
                <div>
                    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/b476fa9b-888c-4f9c-9138-e49c7a8419af.png" alt="sale" weight={40} height={200} />
                    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/6b5e97eb-45cd-4e9e-ab06-e556b17cb156.png" alt="sale" height={200} />

                </div>

            </div>




        </div >
    );
}


export default TopAd;