import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';

import './Recommended.css'
import StarIcon from '@mui/icons-material/Star';



function Recommended() {
 



    return (
        <div style={{display:'flex'}}>
        <><Card sx={{ maxWidth: 220, maxHeight: 520 }}>

            <img src="https://f.nooncdn.com/products/tr:n-t_240/v1662964834/N53346828A_1.webp" alt="s" height={280} />
            <CardContent sx={{ py: 0, px: 3, m: 0 }}>
                <div className='Recommended_card_word' sx={{ m: 0 }}>

                    <p> Apple iPhone 14 pro Max Physical Dual Sim 256 GB...</p>
                    <p><span>AED</span><span> 5199.00 </span></p>
                </div>
            </CardContent>
            <div className="Recommended_card_end">
                <div>
                    <img src="https://f.nooncdn.com/products/tr:n-t_240/v1662964834/N53346828A_1.webp" alt="a" height={15} className="" />

                </div>
                <div>
                    <div>
                        <div>  <p><span className="Recommended_card_end_1">4.0 <StarIcon sx={{ fontSize: 10, }} /></span>(106)</p></div>

                    </div>
                </div>

            </div>

        </Card><Card sx={{ maxWidth: 220, maxHeight: 520 }}>

                <img src="https://f.nooncdn.com/products/tr:n-t_240/v1662964834/N53346828A_1.webp" alt="s" height={280} />
                <CardContent sx={{ py: 0, px: 3, m: 0 }}>
                    <div className='Recommended_card_word' sx={{ m: 0 }}>

                        <p> Apple iPhone 14 pro Max Physical Dual Sim 256 GB...</p>
                        <p><span>AED</span><span> 5199.00 </span></p>
                    </div>
                </CardContent>
                <div className="Recommended_card_end">
                    <div>
                        <img src="https://f.nooncdn.com/products/tr:n-t_240/v1662964834/N53346828A_1.webp" alt="a" height={15} className="" />

                    </div>
                    <div>
                        <div>
                            <div>  <p><span className="Recommended_card_end_1">4.0 <StarIcon sx={{ fontSize: 10, }} /></span>(106)</p></div>

                        </div>
                    </div>

                </div>

            </Card></>





            </div>
        
    );
}


export default Recommended;