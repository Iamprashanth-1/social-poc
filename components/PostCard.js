import Avatar from "./Avatar";
import Card from "./Card";
import ClickOutHandler from 'react-clickout-handler'
import {useState} from "react";
import Link from "next/link";

export default function PostCard() {
  const [dropdownOpen,setDropdownOpen] = useState(false);
  function openDropdown(e) {
    e.stopPropagation();
    setDropdownOpen(true);
  }
  function handleClickOutsideDropdown(e) {
    e.stopPropagation();
    setDropdownOpen(false);
  }
  return (
    <Card>
      <div className="flex gap-3">
        <div>
          <Link href={'/profile'}>
            <span className="cursor-pointer">
              <Avatar />
            </span>
          </Link>
        </div>
        <div className="grow">
          <p>
            <Link href={'/profile'}>
              <span className="mr-1 font-semibold cursor-pointer hover:underline">
                Prashanth
              </span>
            </Link>
            shared a <a className="text-socialBlue">album</a>
          </p>
          <p className="text-gray-500 text-sm">2 hours ago</p>
        </div>
        <div className="relative">
          <button className="text-gray-400" onClick={openDropdown}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="bg-red w-5 h-5 absolute top-0"></div>
          )}
          <ClickOutHandler onClickOut={handleClickOutsideDropdown}>
            <div className="relative">
              {dropdownOpen && (
                <div className="absolute -right-6 bg-white shadow-md shadow-gray-300 p-3 rounded-sm border border-gray-100 w-52">
                  <a href="" className="flex gap-3 py-2 my-2 hover:bg-socialBlue hover:text-white -mx-4 px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                    </svg>
                    Save post</a>
                  <a href="" className="flex gap-3 py-2 my-2 hover:bg-socialBlue hover:text-white -mx-4 px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                    </svg>
                    Turn notifications</a>
                  <a href="" className="flex gap-3 py-2 my-2 hover:bg-socialBlue hover:text-white -mx-4 px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Hide post</a>
                  <a href="" className="flex gap-3 py-2 my-2 hover:bg-socialBlue hover:text-white -mx-4 px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                    Delete</a>
                  <a href="" className="flex gap-3 py-2 my-2 hover:bg-socialBlue hover:text-white -mx-4 px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    Report
                  </a>
                </div>
              )}
            </div>
          </ClickOutHandler>
        </div>
      </div>
      <div>
        <p className="my-3 text-sm">Hello World First Post</p>
        <div className="rounded-md overflow-hidden">
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHkAwgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EADoQAAICAQIEAwQIBAYDAAAAAAECAAMRBCEFEjFBE1FhBhQicTJCUoGSocHhcpGT0RUWI2KC8SRDc//EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACYRAAICAgEFAAMAAwEAAAAAAAABAgMREiEEEzFBURQiUjJCYSP/2gAMAwEAAhEDEQA/APkBS2v4WG0vSORskZBG4MZNtOoG61of9uQPzirEoxIBK+RlkXlFReU8ha6ay2Hbl8oYlAMEsOw5osjjl3C/ImGVmdNwPnM0NGSSLe6paDycvzEVah6icMCPQ5jdK2jes8rDtLPYznFyr8+WBJhlGLWfDFKhghxgkGFUV8x59lJ6gThUGw8g2l6qmdwuI4kU/CLXBSjKuyj6OT1iDKeY7bGatwfT5UgMOhECVV1OSAcdIEhrIZf/AE7XpzbpvEH0kIBHp2MAXaxuQjYbQoexMBcjbB9RD16Vq6vHIyAc4mNrt4K6Rcgq2wO0o1YqcHGV3BxHdClVmprU/Q35pzV1Ac3JjA8u/wAvSD2W7ea8mXtz7dDCOMoGnbKSOVgMefpLLgIQe/SMc6XpiTDc5hKRnOeghtRXymDr2QmMiTjhlGGDtKONxCqOYn0lWhFBBeZ/SFYYUKsvSEBzZ0ktZWbCDC56TAxwX0VShi5IyJTWWm5i3mxMmWQqozuM/LM61ROFH/UVoqm3HVC/hiSE92b7Y/nJFyDV/AZQrsTkSyhkOcfnOoRjHaG+Hw+XbOeuITJJ+CyVl0JA2nUynw/Vla7SBjJxGqQLFYnqIC8EpeAiIAFY9DKMiPYQTtOO/KBCVgFA/rAW4fBWvTFH5gciGT6RCpuRiFqvTmwV2O0stZWwsBkRcllWsfqSrTq4POcsOvrA6qhA4On6jcb9RGWrywKHDeWJ2hK1sKOMHO0OfY7rT/UXroUFTepHNvv3lbrGNoVR/pgkDI6zQ1SG2wXKuDy4x2GItqNOx5GrG+M9ZlIE6XFfqXt0y1aelqckuSWPljtOWV1nTc4zkDzh9EgUslxwDg5z0MNqKkoTDKD8Wx7bwN+iyrTjsZFCArYtgzldhBNR4ZH1vL0mtZpXAS6oKtmf0iVg/wDI+JcHv+sZPk5Z1YSTQlqwGrBURNsqoWarqq8y4zjoYDT6U6nVLWBvnJ+Qjp8HNZU5SSXliaLyIf8AdKFcTR4hUE1VgQYXO0XSoNW7EjK4hTyskZ1OL1E2l6/pCdI5jtLiroAd4xJLkiLzOG+Q/KWFZNTsOi+ffMNRXm4ZB5AOvnAai0czcvfaTkzoiko5YmTvJJJFwS2RcKewhPKUXmHeEDKfpLv6SmDIiDJ9I1TUVJ5m5T6wKqpI5Tt6xmtyU5X3I6Hv8pmisMIl1TrWHxzL9oQdTEZxmNnWNXWFwVGMNgnDY6SltNdgNtDcq53EXH0q0m8xC1uhAx1HURzR2Hm3XNbDGwmTztWclMjG2Y7o7wqAZKn1iyhwXpvSlyO2t4OuBwpRh2MOldGqQkE8/MdsYxELWFgBU/CO4E6dbZVVyjGAMZxuIurxwdKvgpPbwO+KNM4VkJUt5ZzK65RW1TDmKMZTh2opuBW8DfcHGTmP6vSmzTf6O+Dkcudv7RH+suToj/6VvRg7dH4+ORlGF2IP6Qd9T+6tVZksBkGH0/h1ILrkHMNiQ/QfKGvu5q1a1cVMMcwO8GZJj6wlFt+TO0FltiIiqLFQYYv2ier+C7n8vPvNfh9GPFeqhXr+0DvB8Q4fZZh6xkHpnriM5JSIdqU6TFRXt5goJ36ARvgSFeLEMv1CPvxOhBp3YMTkds4ltKAuqrtDEfF8XpDKWYslVXrbF+0xTXVl9XbgZ37RTWOoPhV55R1+c3bdNzW2sndiF9ZiamlfEzKVvhI5urraba9sWqqycmdao9jvChgq9INmJG0Zz5OZVLHJPF8Ko15ywOxiT5J3jBXuYNlm4JTywHLJCchnIMoTVhOX0nQs0xpcjpINIfsw7ov2WZwSEUMP3j3uh+zLDSn7MOyD2pCZDMMHOJEVlzjO/WaC6U+UuNIfKbZDdqXkzgvYiQoSek0xpD9mW90PZYd0btSM+trE2BwIXHPSQwGfOC1ur02m5hzB3H1F/WZp4rd1REXfbvFc0hdlF4ZqKpqbbJGMHabvC9VXp18Utyp9dS30jPCXaq+8lnsYk9hsB90FyMeuZKdikhqb5VvMT2XEbVttYJ8O+6jpF6dRaiPUG+B9jsDieWKEtk5z5zqvahyrupB65mjasYwCV03LY9fw3U6ii8lDyg9TkYmhqeLlQiL8bJ9aeLp4nehy3K/zHWaWg4nprfg1beC/byP39oW4SeWVp6qUY6xeD1lN1PGaj4tKi5dgQcH7xF04a628oxhfSLVUNWVtpYgHcMD1mxpdc7jlsB5wRykSE8x/x8Hr0WQswrfP36ZOoGdUUrfIQ43GMY6mZF7B2Yr032npNRwx6677VYZsPTy8xPOatGrOHKn5bQQsyL1NDisiS1vY4VfOFsp8MlSd+4htMVQDlBLHbML4SISzAu3ftG25ORUrQQNe2SdoJgOwjV3MxwoA9JT3fAzY2/lKbZOaVfwV5TOw3hr5yQE9T0qaaEGnHpGgoxOhPISOzPWVSFvdh5Sy6UeUbCiXAEzmx1VEUGk36Q1ekHlGkURmtBJu1jquImuhB7QXEKqtForL7mVFUbFmwM9hmbSrgdBEeKaGnielfSakE1tjcdQfMQKx5BOtavVcnyZa2uZ7nZQSc4Pc+QhqaNM5wbHBI2yNyfLE9Vxv2Xuq1KXcK0ytSibjmHNn5HbvEf8AL/FrLyb6mYkhTZkMAuMdP1zmX3TPAfT2RlhoyTwyxdwCdskA9o3Rwx3G+yjqe4hUW/T2vprQ4IOAHQ5A9Mz2/srwyviTppgzc1mSyscAjqJz226nodN00ZRzLweJ1PCHqsI5CpXGVfG0zv8AD7Gb0JIz92f1n1r2n9mxwMLXaxtNgyTWfpeX5z53qWvD2U08/OxGOVOZ9vKCq3LwzXdPBw3h4MW/S1UHw3djbnBx0x6QDUhkZkbdTsrfSM3h7NcYurZl0LfEvMpZuUk+f7HEY/ydx/VuDYiqRgmx3z1/tOjuRXs8/wDHsfiI97JX+/cMWk2K1lWzDJyBnYnM3k0eW5a0+Pz7wXs37N/4NS5crZqbPpvjp6CbtYsqsV1G49JKVvPDPZqqkq0prkRPDSqn3i8DzGe8xdZoNEtptBDkdidhPS6sVXsGvJzjsSZn2pp02rQY8iDOSd0m/J61FVSh4yeYtpyeZV3P3Yl69Fe45UrB/wB03CgLfDyj/iZZUI63ADyxKK/AsqE3wjGXgepcZY4H8oLUcGFYzY/5zesJK494wPSZ2qqpOc3uT6YjRv5IWdJHBi+40/a/OSNHS0Z+lZ/P9pJbvHF+KzFHtFxHzp/B+8svtHxH7VP4P3mPLDE7NEeIrrPpsf5i4j9ur+nLD2g4ifr1/gEyBLjE2i+DK6z+jZT2h4mOltf9MQ1ftHxUdLq/6SzEUwqNjvDpD4UV9n9M3V9o+MHbx0x/8l/tD08a4oxz4qfgEwq29THKbMEdf5RXVD4dFd8s8s3q+K8VYYNq4/gX+0PVr9eDk2qD5hBMiq8Dq2PQnH6xqu7Mk4JejvrtTNRbrLkam5a2Rm5mHIBk5znYTc0mr9203OgQeGrMnKoBBxPIe/V0tzO4UDuWl7vaPQpp3T3lSxUjAOe05bYKXGDpU69XnB6rh/HtRxjhlOu1HK99itliudskY/KKHVXaYt4Fda564QDP3zynsxx3SaTg9Wm1N6o6c2zHzYn9ZsJxbRaoHwNTWx/iiQqUWw1WVOtYwNW8b4iowoqPzWLt7R8XQHC04PX4P3ieou64PSJPqB2/L/udUaYP0QttjEcu9peKjtUD/B+8Ts9quLDvT/T/AHiOouz6RKx/WWVFfw4LOqn6kO3e0PE2OS9ef4P3i7ce4gQQXTH8MSdh5iBYiHsVfyRfW9R6mx88c14+sh/4/vKNx3Xnq9f4ZnkiVOIOxX8J/m9R/bHm45rj1sT8EC3F9a3WxfwxQ4lIe1D4Tl1d7/3Y1/iWr+2P5SRTEkPbj8E/Ju/pkzOgyuQJw2Ko3MfKIBRLiKHUN0UYEG1jN1JiboOR/wARU+kwE6NTUP8A2frM2SDdh2ZpjXVL3J/4wtfFKV6838pjyTbsKm0bx4zUAAvi/dAW8c1JyKeVB6dZlDpJFbbKK2f0NbqbbW5rbGZvUyvP6wckXAuzYTnlefBypwfMSsk2DbMcp4rrKtvHZh5NvG140x+nUSRt9KZGZDGTx4D3ZL2arcWrP1GHyAgm4hWezj7hM2SNuxHYx86ys/ak94rP1ohJNuwbMf5lPRh90hiA23BIMutrjqcwqYMjOZw7Qa3A9Rgy3MD3jZTAW5pyc++SHJhcsTOd/OSSQMSSSSYxJJJJjEkkkmMSdBnJBMFFhJIOkkwxzOJCZDOTCtkkkkmASSSSYxJJJJjEkkkmMSSSSYxMnznZySYx/9k=" alt=""/>
        </div>
      </div>
      <div className="mt-5 flex gap-8">
        <button className="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          72
        </button>
        <button className="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
          11
        </button>
        <button className="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
          </svg>
          4
        </button>
      </div>
      <div className="flex mt-4 gap-3">
        <div>
          <Avatar />
        </div>
        <div className="border grow rounded-full relative">
          <textarea className="block w-full p-3 px-4 overflow-hidden h-12 rounded-full" placeholder="Leave a comment"/>
          <button className="absolute top-3 right-3 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </button>
        </div>
      </div>
    </Card>
  );
}