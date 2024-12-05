import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-12 px-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">About Me</h1>
        <p className="text-lg text-gray-700 mb-4">
          Hello, I'm Noor e Nazar, a passionate frontend developer with expertise in modern web technologies.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          I specialize in creating dynamic, user-friendly web applications with a focus on design and performance. I'm skilled in JavaScript, React.js, and Next.js, and I'm continuously expanding my skills in full-stack development, including the MERN stack.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          When I'm not coding, you'll find me exploring new tech trends or enjoying a good design challenge. Let's connect and build something amazing together!
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            Contact Me
          </a>
          <a
            href="#"
            className="bg-gray-600 text-white py-2 px-6 rounded-lg shadow hover:bg-gray-700 transition duration-300"
          >
            My Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
