import React from 'react';
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

function Parent2() {

    const [Passwords, setPasswords] = useState(false);

    const togglePassword = () => {
        setPasswords(!Passwords);
    };
  return (
    <section className="flex justify-center items-center gap-4 bg-white p-4 rounded-lg shadow-md">
        <div>
           <img src="public/Doctors.jpg.jpeg" alt="Doctors" />
        </div>
        <div>
            <form action="">
                <div><label htmlFor="name">Username:</label>
                <br />
                <input type="text" id="name" name="name" className='border-2 rounded-2xl'/>
                </div>
                <br />
                <div><label htmlFor="email">Email:</label>
                <br />
                <input type="email" id="email" name="email" className='border-2 rounded-2xl'/>
                </div>
                <br />
                <div><label htmlFor="password">Password:</label>
                <br />
                <div className="relative border-2 rounded-lg">
                    <input type="password" id="password" name="password" type={Passwords ? "text" : "password"} className=' rounded-2xl outline-0 pl-2'
                    />
                    <button
                        type="button"
                        onClick={togglePassword}
                        className="absolute right-3 top-1 text-gray-500"
                    >
                        {Passwords ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
                    </button>
                </div>
                </div>
                <br />
                <div><label htmlFor="password">Confirm Password:</label>
                <br />
                <div className="relative border-2 rounded-lg flex items-center">
                    <input type="password" id="password" name="password" type={Passwords ? "text" : "password"} className=' rounded-2xl outline-0 pl-2'
                    />
                    <button
                        type="button"
                        onClick={togglePassword}
                        className="absolute right-3 top-1 text-gray-500"
                    >
                        {Passwords ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
                    </button>
                </div>
                </div>
                <br />
                <label htmlFor="terms">
                    <input type="checkbox" id="terms" name="terms" />
                    I agree to the terms and conditions
                </label>
                <br />
                <button type="submit">Sign Up</button>
            </form>
        </div>

    </section>
  )
}

export default Parent2