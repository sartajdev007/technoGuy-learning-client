import React from 'react';

const AboutUs = () => {
    return (
        <div className='my-10 shadow-lg shadow-base-200 mx-24'>
            <div className="flex flex-col justify-between md:flex-row p-12">
                <div className='text-start'>
                    <h1 className='text-4xl font-bold text-green-500'>
                        We are TechnoGuys
                    </h1>
                    <p className='w-[800px] text-justify pt-5'>
                        We are a team of dedicated insructors to provide quality education to those who are willing to achieve something in their lives. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore blanditiis recusandae commodi magnam natus numquam optio et repellat tempora eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nobis possimus? Error repellat nihil, perspiciatis fugiat explicabo sit odio vitae fugit magnam rerum esse quibusdam voluptate quam suscipit quod, nostrum quis saepe quasi neque nam minima voluptatibus iusto aliquam harum. Illum itaque cupiditate molestiae ullam aperiam saepe? Obcaecati quaerat fugiat reiciendis veniam consectetur explicabo voluptas a saepe dignissimos, dicta recusandae voluptatibus possimus illo, hic magnam alias assumenda! Velit facere nostrum necessitatibus aut, quasi ratione ullam officia voluptas, similique cupiditate doloribus? Nobis quis possimus praesentium autem odio provident nemo, quia aut obcaecati a commodi reprehenderit assumenda vel nam quibusdam corporis delectus.
                    </p>
                </div>
                <div className='shadow-xl shadow-teal-200'>
                    <img src="https://images.unsplash.com/photo-1600195077077-7c815f540a3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80" className='h-[400px]' alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;