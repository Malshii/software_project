import React from 'react';
import News from "../../Resources/News_Img.jpg";

function Home_Section6(){
    return(
        <div class="container py-5">
                <h3 class="text-center font-weight-bold mb-4">Latest News</h3>
                <img class="newsimg" src={News}/>               
            </div>
    )
}
 
export default Home_Section6;