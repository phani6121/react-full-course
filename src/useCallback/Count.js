import React from 'react'

const count = ({ text, number }) => {
    console.log(`${text} rendered`);
    return (
        <h3>
            {text}:{number}
        </h3>
    )
}

export default React.memo(count);

//react.memo is solution for the app performance basically components with out react.memo one component render remaining components also render so we are used to react.memo to when ever the component state or props will change in that time only will render the component.