import React from 'react';

const Blogs = () => {
    return (
        <div className='my-8'>
            {/* ------- Question-1 --------- */}
            <div tabIndex="1" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    How will you improve the performance of a React Application?
                </div>
                <div className="collapse-content">
                    <p><strong>Ans: </strong>Optimizing performance of a react application is key for developers who are careful for keeping a user's experience positive to keep them engaged. The five important ways are given below:
                        <li>Keeping component state local where necessary. So where the state has changed, only those components  should update or re-render.</li>
                        <li>Memoizing React components to prevent unnecessary re-renders.</li>
                        <li>Code-splitting in React using dynamic import()</li>
                        <li>Windowing or list virtualization in React</li>
                        <li>Lazy loading images in React</li>
                    </p>
                </div>
            </div>
            {/* ------- Question-2 --------- */}
            <div tabIndex="2" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p><strong>Ans: </strong>There are four main types of state need to manage properly in React apps:
                        <li><strong>Local State: </strong>Local state is data we manage in one or another component. <b>useState</b> is the first tool  or mostly used tool or hook to manage components.</li>
                        <li>
                            <strong>Global State:</strong>
                            Global state is data which is managed across multiple components. In this process we have to face patterns like "lifting up state" and passing callbacks down to update state from components containing a lot of props. To manage it we can use <b>Context API.</b> But the proper way to manage this problem we should use third party libraries like <strong>Zustand</strong>,
                            <strong>Jotai </strong>
                            and
                            <strong> Recoil.</strong>
                        </li>
                        <li><strong>Server State: </strong>In this state, data that comes from an external server is combined with the UI state. But it is hard to manage because every time data is fetched or updated from external server we have to manage several states like loading and error state. To fix this, there are a couple of great libraries that make data fetching in React more easy: <strong>SWR</strong> and <strong>React Query.</strong></li>
                        <li><strong>URL State: </strong>Data that exists on our URLs, including pathName and query parameters. It is an important category of state because we can not imagine a blog without fetching a specific product or order based on its id that is located in the URL. Using <strong>React Router</strong> we can get all the information(location, history, pathName) we need through <strong>useHistory</strong> or <strong>useLocation.</strong> We can use <strong>useParams</strong> hook as well to fetch data based on any route parameters.</li>
                    </p>
                </div>
            </div>
            {/* ------- Question-3 --------- */}
            <div tabIndex="3" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p><strong>Ans: </strong>All objects in JavaScript have a hidden [[Prototype]] property that is either another object or null. The Prototypal Inheritance is a feature in javascript. Whenever an object or array or a function is written, javascript engine adds an object prototype to it. It do not finish until the (._proto_)chain of the prototype reaches to null. So it is a method by which an object can inherit the properties and methods of another object.</p>
                </div>
            </div>
            {/* ------- Question-4 --------- */}
            <div tabIndex="4" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]).
                    Why you do not set products = [...] instead, you use the setProducts?
                </div>
                <div className="collapse-content">
                    <p><strong>Ans: </strong>The view of a component render based on a <strong>state</strong>. React creates virtual DOM to compare between previous state and new state. If the change happens it re-renders the component. But if we change the state directly and call setState() with an empty object. The new state will not be created and previous state will be polluted because of mutation. Because of this, the compare and merge between two states will be disturbed or won't happen, there is only one state now. So this will disrupt all the React's Lifecycle Methods and doesn't re-render the update and sometimes the app will crush.</p>
                </div>
            </div>
            {/* ------- Question-5 --------- */}
            <div tabIndex="5" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    You have an array of products. Each product has a name, price, description, etc.
                    How will you implement a search to find products by name?
                </div>
                <div className="collapse-content">
                    <p><strong>Ans:</strong>

                    </p>
                </div>
            </div>
            {/* ------- Question-6 --------- */}
            <div tabIndex="6" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    What is a unit test? Why should write unit tests?
                </div>
                <div className="collapse-content">
                    <p><strong>Ans: </strong>
                        <li>
                            Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.
                        </li>

                        <p>The Benefits of writing unit testing:
                            <li>Unit testing helps in finding bugs early.</li>
                            <li>Unit testing makes the team in the long run.</li>
                            <li>Unit testing makes debugging easier.</li>
                            <li>Unit testing can be automated.</li>
                            <li>Unit testing decreases the total testing cost.</li>
                        </p>
                    </p>
                </div>
            </div>
        </div >
    );
};

export default Blogs;