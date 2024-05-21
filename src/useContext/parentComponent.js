import React from 'react'
import ChildComponent from "./childComponent"

const ParentComponent = () => {
    return (
        <div>useContext Parent Component
            <ChildComponent />
        </div>
    )
}
export default ParentComponent;