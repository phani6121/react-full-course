import React, { useState } from 'react'

const Index = () => {

    const [showData, setShowData] = useState(true);

    const dataStatus = () => {
        setShowData(!showData);
    }
    // These type of styles are called conditional renderings 

    return (
        <div>
            {/* In button we are used the ternary operator it works like if showData is true button will change to Hide otherwise button will be show  */}
            <button onClick={dataStatus}>{showData ? "Hide" : "Show"}</button>
            {/* At here showData when it is true data will be displayed. If showData is false data will not displayed */}


            {/* {showData && (
                <div className="content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, fuga accusamus vero unde tempore itaque, voluptatem cum aperiam tempora sed dignissimos eaque quibusdam, quis a. Perspiciatis debitis deserunt alias cumque
                </div>
            )} */}

            {
                showData ? <div className='content'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni voluptate perspiciatis vel, dolores soluta, quibusdam repellat aperiam odit consequatur fugit dolore illo veritatis repudiandae a delectus possimus omnis inventore.
                </div> : <h3>data is hidden</h3>
            }


        </div>
    );
};

export default Index;