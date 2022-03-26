import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="question-one">
                <h2>#How React Works</h2>
                <p>React.js is one of the most talked about JavaScript library which is used for building user interfaces.Using React to build user interfaces means that we can declare the structure of the UI with JSX.React has virtual DOM, which is used to keep a representation of the real DOM elements in memory. when user each time re-render a component virtual DOM can compare with the new content to the content which is already displayed/rendered on the UI. According to the difference, the virtual DOM can execute the necessary steps to make the changes to the UI.To Update the UI React uses the Reconciliation Algorithm compare the two trees to updates the DOM. So not only do we get to keep our declarative code when we need to update the UI, React will also make sure that it’s done in a performant way</p>
            </div>  
            <div className="question-two">
                <h2>#State vs Props</h2>
                <p>State is a local state of a component as we know that and we can change or modified it within the component that means state are mutable.Props is process to pass data to one component to another component. Props can not be changed only it will read form component which is works as a immutable way.State can define in the component itself but props can pass properties from parent components to child component.State is set and updated by the object through setSate. Props are passed data to component like a function parameter whereas state is managed data within the component like variables declared in function body</p>
            </div>  
        </div>
    );
};

export default Footer;