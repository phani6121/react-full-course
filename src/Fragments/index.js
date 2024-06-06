import React from 'react'

const index = () => {
    // return (        
    //     // <h1>example in fragments </h1>
    //     // <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, veritatis quas inventore voluptate maiores at perspiciatis voluptates dolore libero quidem?</p>

    //     // Adjacent JSX elements must be wrapped in an enclosing tag.Did you want a JSX fragment <>...</>? 
    // )

    // Above and below both code difference is above code do not have parent for both children so error also got and mansion there also below we given div parent and inside two children so we are not got any error but we add one extra div so we avoid that parent div to replace the fragments.we use to wrote fragments like ==>> <React.Fragment> children </React.Fragment>

    // <React.Fragment>
    //     <h1>example in fragments </h1>
    //     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, veritatis quas inventore voluptate maiores at perspiciatis voluptates dolore libero quidem?</p>
    // </React.Fragment>

    return (
        <div>
            <h1>example in fragments </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, veritatis quas inventore voluptate maiores at perspiciatis voluptates dolore libero quidem?</p>

        </div>
    )
}

export default index;
