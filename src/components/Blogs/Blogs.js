import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Loader from '../Loader/Loader';

const Blogs = () => {
    const { loading } = useContext(AuthContext)

    if (loading) {
        return <Loader></Loader>
    }



    return (
        <div>
            <div className="hero h-96 bg-green-200">
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-semibold text-black">Blog</h1>
                    </div>
                </div>
            </div>
            <div className='mt-7'>
                <p className='text-5xl font-bold text-green-500'>TechnoBoy Blogs</p>
            </div>
            <div className='my-10 mx-auto flex flex-col justify-center w-[800px]'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                    <input type="checkbox" name="" id="" />
                    <div className="collapse-title text-xl font-medium">
                        How does the private route work?
                    </div>
                    <div className="collapse-content text-start">
                        Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <input type="checkbox" name="" id="" />
                    <div className="mt-3 collapse-title text-xl font-medium">
                        What is cors?
                    </div>
                    <div className="collapse-content text-start">
                        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

                        An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.

                        For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.
                    </div>
                </div>
                <div tabIndex={0} className="mt-3 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <input type="checkbox" name="" id="" />
                    <div className="collapse-title text-xl font-medium">
                        Why are we using firebase? What other options do we have to implement authentication?
                    </div>
                    <div className="collapse-content text-start">
                        The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. When the device regains connection, the Realtime Database synchronizes the local data changes with the remote updates that occurred while the client was offline, merging any conflicts automatically.

                        The Realtime Database provides a flexible, expression-based rules language, called Firebase Realtime Database Security Rules, to define how your data should be structured and when data can be read from or written to. When integrated with Firebase Authentication, developers can define who has access to what data, and how they can access it.
                        <br />
                        The other alternatives are:
                        <ul>
                            <li>Parse</li>
                            <li>AWS Amplify</li>
                            <li>Back4App</li>
                            <li>Kuzzle</li>
                            <li>Couchbase</li>
                        </ul>
                    </div>
                </div>
                <div tabIndex={0} className="mt-3 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <input type="checkbox" name="" id="" />
                    <div className="collapse-title text-xl font-medium">
                        What is Node? How does Node work?
                    </div>
                    <div className="collapse-content text-start">
                        Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;