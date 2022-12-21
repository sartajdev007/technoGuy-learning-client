import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Instructors = () => {
    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch('https://learning-website-server-azure.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    return (
        <div className='my-10 mx-auto flex flex-col justify-center'>
            <h1 className='text-5xl font-bold text-green-500'>Meet Our Best Instructors</h1>
            <p className='text-xl pt-5'>Here are some of our best instructors, who are working tirelessly to provide the best course to you</p>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                className='py-10'
            >
                {
                    instructors.map(instr => <div key={instr.id} className="card w-96 bg-base-200 shadow-xl shadow-teal-200">
                        <figure className=' p-3'><img src={instr.image} alt="" className='w-[250px] h-[300px] rounded-xl shadow-lg' /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">
                                {instr.name}
                                <div className="badge bg-teal-500">Pro</div>
                            </h2>
                            <p className='text-start font-bold'>Expert: <span className='text-red-500 text-lg font-semibold'>{instr.specialty}</span></p>
                        </div>
                    </div>)
                }
            </Carousel>
        </div>
    );
};

export default Instructors;