import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const ReviewArticle = () => {
     return (
          <div>
               <article>
                    <div className="flex items-center mb-4">
                         <img className="w-10 h-10 me-4 rounded-full" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EAEUQAAIBAwMCAwUFAwkFCQAAAAECAwAEEQUSITFBBhNRIjJhcZEUFkKBkhUjoQczUlNigsHR4SQ0cpPxJUNEVGNzorHw/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAIxEAAgICAgIDAAMAAAAAAAAAAAECEQMhEjEEEyJBUQUyYf/aAAwDAQACEQMRAD8AwdouZMmmUsgSPFB2MTvtxRNxCygbqVtWc9lcTbjk9KbacpEoI6GlcKYIppYTCCXD1PMrjoDNdb4EQOeQKzviOZjGdo5pzY3CTAKtValprSqxC5GK8bGvXktkr2fO0lKuWxg96v8AtWSAR3q++sXgmwVOCeKdaR4Ue8i8yUEKa9jnFqyyaZGzMfkgqRnFD6rMqxYDZNN9Q8MTWMPmWkzfEHkVlrmObftmzmjBfYDkbF3PNFQ55FBxDHTim+mQ+YRxmqS2FgkkbAEuCaVzLiTgEVtpbFTH7nb0rL3kO2Vhg/nSw0BMEV8CvK+WrnlknAouKwbZuYGnboYL0+TBFPIFDFW+NZtA0LADNOrKbK80rJyQyvBEFLZGKy+p75rgeUCVXqcU4nYzOEyQneio7eIR8IPpSyk49GTMvGJQPa4q1oiwBPSm1/aouCFxmgWG0YrR27YbFsqle1TsJZIJN2OD1q5I/PkwM49KZJYgL7uKaU0nQbLo9VYR7VUgVD7bI3PSqzEEOBXRGD1ouVGL/Cml/b3I/CtaHW/DMa2zGP3gKH8ATRQzSQSYDt7QzW5vkRrc5wOKRx4rkKfGjbtE+D8qlKCBkdq0mpaaPMdh61nbxDESD0rY8scmkZSsdeFY2mfJ7Gt39kT7Ll8dO9fPfCN6tvOQ+MZrc3eqr9jfaUxt6Me9ef5ELyUbiZjWrKIzqeMA9qfWFza2tmC0qKcdCetYO/1Of7RI0k4IB/CODSa8vRKwZfaHxOcV2Q8akrZRQNr4g8TK03lWqhlQ+3nGKTubfVNrxDZIcghumaz4mDgbVwfQdDRlrJKAFSRNpOWRvUfxrqUUkNQVHpLtI534wcY65ppZQNDMqImTjpQK3u5fLbKSg53f5HvTO01GPcPtTIsmMBumRWcQOAVLcL5YxxkfWs5fR+ZKWpxLbGf+ZZRIeinv8qDa3dTtkUq3oRUJ8oE2qYvs7UNNz2rRQWCNCPlSuICJ84pit6Am0EVv7AuwK9skU4quCMRgYoma4V8jrQhlAbAp30Evdc1fDcqvDihFmqzbnkUEhaodQQCUZZPZ7UFrFlGqZVQCfSrbfWo7aPbNC24cZB4NL7zVftcmBwtGWg0U6bbBSSfWm0saLHQVm4U89KuubgFcCuRJykLTFc0gEhAqppOahcPh81ASKfjXV9DpBcMrRETRkqw7g05t/EU0qLFNOcD1rPxtmICpwWLSuCM80uZri7MzUy3kTw53g5FZrU2V246Zoi4sbiKPjOKVypIre3n86h4mNR2jRQJ9oa2lymaYSas724Ejn/hz1pVcgq+Tiht5bjnb6nrXZwi3bKqIRc3PmhlGee+OtAMuSFBGfj3rkkwDAAZxVZkz+GnqhglYJVIYAY+dXrJhsyKxYfiFBrNIPcbjoRXkJB53fDB6UxhtFcjJyeO+c0zhlgljCTRnn3Qxz9DWcSSQdSufpRUFwYh++gk2Hupzj4g1gmlt8xuPKYyIMDynPtKP7Jpmsoly0uXjzgt3U/EVmLGaUTDyZTcRHjDD20FOVlmhm32eZARzwOnx9aVq+zNJhL2Lyo5hIlROdy9gaVXlvLEMkMM0+068WQPLaSmOUA+ZF2P/AOxVr2c2owu4Qhu+fdzjjmp+uuiUoUZy2KoPaOTXp9rAkcVC8jks5/LnRkbtkdfjQ0spOFXPWlvdMUJghc80ao2J7XFEaPEsqDPpR15Zjy/ZFOo6AzO3XtNheaFj9ljmmb22x/n61RPCFpJIxBZyoqD3eAc1OK3O0k1GWDKmkSQRfNMZDwKnGhZc1dHaFs8dKuS3KjAU1VqkEogb2BWh0R0kwD1pBGmFxTXSfYmArn8mN42JLo1s1vG0P5Vj9ZjVGOOgrXLMvkcntWG8VXW2YQR5yeWPwrh/j5S5tAhtia6mWR8Ljn17mgZmA9lCc9yak/vHPQdKH5JPGK9o6UiBQg8c17GDzx86ksXU9TV625bnA/KtY3EoUVaq5/CPrVwtTjqB8Kst7J5WwlbkjcWVIj9sD8+KYQOzx7DtH/Dx/Ci4NIcLk4+lHQaacYYnH/3S+xFFikwS3gx1kAI/GvB+tM7KTaPbAB6BscN86Ii0pfKBboR3o6301Ysh4weABQ5heJoVtCkMvn26eW3fB6H1Hzou01qEkQ3SnkeWxBOCD2NX32mPAPNh3bfxxk9RSC5WJ7kGaJl3cZX8Q+Ip0ybiaDX7RXRYtrOIoxy3O0npzWcaEKSpXBHb0rWQSIlrBHccwzReW7YHGOn0rPyQOt08DKQynHrUM8Xdo556PaPcNFIUPrWoVvOiyKXWGl+623nHpT62tdo6YpoyaJchHdWuRuxzSm6UqckdK2stqrLj/CkGtWyqDgdBWcrCmI45dx2gZogWkj+6uahpUO6fBFaq1swp5HFbgOJYNPJQcYNceyKtjBrSGFUY7cUNKmW4Fc0szg6YrZiIsMKMtTsYGtBH/J3rcZG4wH+9RI8B6wO0X6q6pQ5KjMVi5zCVJrF65cGS9kGfd4zX0seB9XA9yP8AJq+U6pHJDqFzFN/OJIwb55/0qeDx1jbY2OINtxH1JxUkgLAnNW2cLTyBVFOLPSTgiR8Be+OtXs6VGwC1swy8jOaYw6V5gyrlfmM0SI1UgKOBxR9uoGOKjOTR2Y8aoVroZZxmX8xx/CnNhp0UCgcH1Jq6Nec4omJQc571JybLLHFEHgBUqqirYbUkKvQd6IRathUgmggsJjt0I90YA6Y6c1cbKeRCNy4OMcdMVKzYK4z06UwWT94T9KrElIDlgzCT1OP41mtf0yJEWTbtIIOTW1JU84GSeaS+JSDYy5UELgniqJ7IyhoyXns+msCSQsmVBAwAeKYqFuZ47ggZkQZx9Kzs1yClxEvs+yNp9fStF4Q07U9U01pIId4ilZCx9aebtHFkWtDy3ZEUY9KJWVfWoroOrD/wp/VUv2Fq46Wx+oqHyOan+FVzdxxryRWT1zU1ZW249K0d74b12UER2ef74pNP4F8QzHP2MfnIKKTGSEWn3e2QOTg1p4tTDQj2hn4UAP5P/EQbIs1/5i0wtvBWvpjfar/zBVUPZWL9txyatF7u5wKYR+ENUAG63+jirvulqXa3/wDmKhkwcnYjv8D/ANr6h/5h/rXRrGof17VM21t6j614QW3qPrVzro5+2dR7Tk18W8SwSRa7eLL7zyF8+ua+1+TajqK+d/yn2lvDd2dxbgbpEZJD8sYrI1GX0CP/AGncegrVSKBBxWY0c7ZwnrWmYfusUGUgBY9rmi4WxigXyG60XbhiR6VGR2YxhFzRCIw24xVMCEmj4ovYqRZk4/aGRVkXU5ocEoDzV9uN4ooVhcXUAUYNwPpULaIDBNFsYsgbgD8aouiUuyCtgHJpZrOWhKN7r8GmcqEJkDPPUUNfxG4tnQLg4yPnRvYGrR81nti85Rc88Cvo3g+9udK0dIYxHh3aT3fXj/CshHbAzqG4bJx86ZzatJp+22WNWCoMH+NXX+HC1RuPvFedgn6a994bz0j/AE1gx4lk/qB9al95H/qB9a1MGjd/eC89I/0177wXfon6awg8SSf1A+tSHiNj1hH1rUwUjcjxBd+kf6a794Lv0j/TWIHiAn/uR9atXXc9YgPzrUw0jZfeC87LH+mvfeC77on0rKJqm7nYPrVy34I90D862zUXmzu/6Vc+xXfrXzyTWtWQ/wC/S/WvL4g1XIzey4+dAXkj6EbS8XnNZjx7Y3B0yOaTJWKTsOmRUtMv764UFrubn41ZrSz3FlJBJO7qw6MaCkhfYmzFaSP9tiH9oVrrgrHEZJW2oPWsnpPGowg8EOBin+uwyTLGittHcUS8XoXPqEBkOBxmj7K/t2YDeoPxNKY9G83l3w1RbSpYTlWViPQ0rUWVjKS2bO1dG5BB+VMRjZWGs57q2cb1JT4GtFaaiZEwR2qLjR1RnyGLqMjPSpG7itoyT+HmgGnY8jNLbxtxYu5APb1oJBm9DG58RyqCsKe9yPWqLa+v7thtk3HuAOlIp7uGDDmJ5QDjIHGabafrMwi3R2GFVdzbQGwPUgVXrpHM3b2zQ2U2oWzAly4PBUjNPVRmQMUxnqKzun6st4VG1lyOCOQa0+nDfFzSuVjxi0Y7UYv+0T7OBuIqnVvDV7e38twDw9ONWSOPUZGkIAVs5J+tCWeteINUMjaWgkhjPTZnH8arF6OXKny0J/ubfjgPwK4fCGof0qJm8ZatDK0UkkKspwymLGDTnSta1K9GWuIh8o/9aLnXZFyRnPulqHYivfdTU/Xitpc3t9GgYTp+ilc3iC/ibAlj/RS+1Cc4sQDwnqR/6V37pal2pu3irUlPstEf7lG2Ovajcj25YQfTZ/rT+wblEzf3T1MfiI+Wa991NU/pN9TW0hv72R9r3UCfOPP+NE51Dte25H/tn/OjtmtHx65V4/eFBl8VstR0pWUleeKzlzppibp0qdk1JGh8OHfEpp3dxoVHIzjgE9azehyGIAdOar8YYv0iijdkliyylTwc9jQ0GGN5JUgCW2+y69EAPZaVSD+daS/VVVXPvAcV890+WeHVIY7hn9mQcMc45+NfQ7wFo1bAPA60zOvGvpmckSae7VZpXhgJ9p1HOPQf512XQnS7zbSRzxMvDyyDAHx+NHuhd+vHoRUzCq8kDHxpOdF1icu2DajaxWgh/Z8skw6SA52j4gmp2UuG5qq9vobaMiR+T0z1pJLq7ji2XZ/aPX/StTkblGH2fUtGto7q3ZivIH0pR4i0zhpUHKisJY6rqMDl4b64VmOWw/BNP7fxffqhS8ihuoz13Da31FH1NG98X2FRkSWZs54FeMnIZRtK/I078ORJp1tJFbx7Wl9+RyGYj4dAPpWai1m0E25VkjQ87X5C/mP8q1uiXtpdIGjkQ8djSvkg1jltDSx0a1Ql41ZWbk4PB/KnVrbiIAZ5qq12lRtNW3V7b2kDSzyoiqOdxoUO3owfj9mfUIbaI4Mq5cA9ewo5UudE0uGOycKiHazFfaPfNLjM+ta1danEmYrdQEBHXt/nTie6bUdMnRgPMwCB8c0MjaVB8eKcnJmU8aqJtRt7oqA9xbq8mPXkf4Cj/DEo2AZ6Uv8AEUiT6p5YbKW0SwD5jr/HNVWFwbSQFfdNPVxPLzpObo216QYMg9qyt7J+8I703/aCywdqS3IDz/A0kVbIJbIou4Zoq3n8psmqigiXmldzcMr8Hiq0OOrrUcMDGTmrbfUZmjGXP1rPcsu7k1as2wAA0vsoxpLSdJo/bNVX1rGwLACkttqIUKNw5ov9obxjPFTc+PZOmBsrQSez60PqLgtDN2ddh+Boi6lBOc0vVjJIYHxtfpnse1BOzr8XJwyA2uW8UipKgIuEIIb4fGn1jrFncadF5txGkwXDq7Y5pNcLKJ45QhkVWBcDtjrmkl1GscrKvujlfkatDaOrN8ZWjXTavpsCkm4V29I/apHqGvyzZS3Xy09TyaS17NMoInLM2qJvIzksxyx7muCoiu5qiIsLtRnHzorAoW0PHyNE76IGcI9DXgcHIyreqnFdzmomsawuPU7+MAJe3CgdhKa79pnuH/fzSSn+25NB1bDyw7UOKDyfR9P8KQx2uho2N0l0SduOT6VIwnT7W5mmG1olMpTrtx0z+dMNBdDpNgyY2CMY+FAfyhXcdnoMkce1bm7dQcdSo61yS3I71L14j5vHc75SznLMcn50WsmcY7UpjQlsimFudo5q55j2NIJ8IF9KtQGRt3pSgyEdKY6XNk4Y96EYiUGXCMU6Ugu1wxyOlbZbcSxHC0h1ax2ZOPjTtBEkNwQME8VJnBOc5oRgAxxV0UbOuR61Bx2YVW9w28Bu1O4plMY5570tuLFonOBgV2BGXAJozgpIOmHtMzNgDiqZSQeDg0XHH+74xQN1wecUsYoyHlqIpUN7GCXkXZIM9+9ZzXf9893aNowKIsL2a1lPlYIYe0jdDQuutLLMs7JhWUKCO1UhpnT7VKFfYsPWuV047VyrEz1erleoGCrQnDD4ir+c0NaNh2+NFFqYxJTXmqG6vFqwDueamJAvWqc81IZbA+Nawm88N65ex2dvFFGpiSPkHrkk4pZ4oku9Quhc3GfZGFUfhFM9ChS1s4oyvLDJzRmo2gdDtUYIqLirElmk1R8/RsNRivlc1260+QXOIl6mrRYTouSuRRE7ORQvNnaOB3pjpdk6TDdmrLIAx7TxjrR3mpDhlxuFMmY0tkFEW0gUs11EMbjgcUD94kiX20wR3pRqWsm6Bw2FNFsNiSRSJGGO9TR2QYANeEwJJPU1LO7mp0YYSIk9AzxLGCasilqi7m5NICiUZdl4JoW5heMFm70VYvt/Ouam5cYWiuzC6M4rRabaRanZNby8bhw2OVPY1mCWXrWo8JHc4pjP9Mlf2k1jdSW1wMOhx8x60NW38W6eLy5lKDEqcqfXjpWJZSh2sMEdvSqIulqzleNer1YyJwth8j0q8Pu6UMnvr86JxRQGTzXs1wV40THs8078L6U+o3bSsMW9upeRvU9l/M0BpWmXGp3IigGB+Jz0UV9Ms7CHTNClt4FwBHy3dj3JqUppDrG3FsStd4mCkgYPSntoRcRgcHisdqxwwYdRT/wrdGWMKRSxlZyVYxfR0dt23+FU3WlGONiBx6VqEH7uhL3+bxTNm6PnN1K9rMNwwOc0VYxG/Odxx8qt8QwqsbH0onw60XkjacHvUMk2loxCTQGkX3fzNZ/UNGltnYAmvpvnwR2+ScnFZbUGErO3Y0uPI32MjEqpU4bqKuGQOKPFk09wQgzz1pmvhyUqDvHNXckESTwuD7FBzwSA85rWW1n5oyQKp1LT8ISB2rjXlRcuInNGbtyy8UaiBxyRQ7JscgjFeWYxtk9K6Q2cvLLALLUtCvxZzCN2xg8UwTE0Oe1JL62KTZTr8KeMg9mn1OcS3DSxnO8A5pBqVilwpkj9mX19aPiYmzgyQT5YyQc1Ua10ehGFxMvJGyMVcEH41E1o7q1juFw64PY96Vy6RMv82yv/AAqikiUsbQvHvD51eG55rz2Fwoz5Y+tX2+nzTfAk9MVrQvCTOLxTnR9Bnv3EkoaOAH3u7fKmOi6BEGEkqmRv7XQflWtgt1iUYqcsn4Whgf2U6faQ2kIit49iL29aYS+1YXK/+m1QVR2q9bdbuCa1kYqs6NGSPRhior5S2XlH4NGIu7eSWUIVYAnnIrQ6Gy2YCIoHzrI3K6no19Lp93JvaHhWI94diK5b+IrmN/LnycHgrxkV1rGqPLcaZ9NutREUWRg/Ks/NrDvIV3DHzpH+2oZT5V1M2D7rYINWS2zLteBvMRujA9fl60ssbA0R1aZp0PtE0otrma1c7Go248xWw6MvzFAsPaJqfF1sWqGkOp3BGGYEVK5uJHhJ91aXwkY6126n2xhM8ntS8Ugj3w80TFiw9qtHlD6V8/tbl4mzGfpTRdVuAPepJJsKdH//2Q==" alt="" />
                         <div className="font-medium dark:text-white">
                              <p>Jese Leos <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
                         </div>
                    </div>
                    <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                         {[...Array(4)].map((_, index) => (
                              <FaStar key={index} className="w-4 h-4 text-yellow-300" />
                         ))}
                         <FaStarHalfAlt className="w-4 h-4 text-gray-300 dark:text-gray-500" />
                         <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
                    </div>
                    <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                         <p>Reviewed in the United Kingdom on <time dateTime="2017-03-03 19:00">March 3, 2017</time></p>
                    </footer>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
                    <p className="mb-3 text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
                    <a href="#" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
                    <aside>
                         <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
                         <div className="flex items-center mt-3">
                              <a href="#" className="px-2 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Helpful</a>
                              <a href="#" className="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600">Report abuse</a>
                         </div>
                    </aside>
               </article>
               <article>
                    <div className="flex items-center mb-4">
                         <img className="w-10 h-10 me-4 rounded-full" src="data:image/jpeg;base64,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" alt="" />
                         <div className="font-medium dark:text-white">
                              <p>Jese Leos <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
                         </div>
                    </div>
                    <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                         {[...Array(4)].map((_, index) => (
                              <FaStar key={index} className="w-4 h-4 text-yellow-300" />
                         ))}
                         <FaStarHalfAlt className="w-4 h-4 text-gray-300 dark:text-gray-500" />
                         <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
                    </div>
                    <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                         <p>Reviewed in the United Kingdom on <time dateTime="2017-03-03 19:00">March 3, 2017</time></p>
                    </footer>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
                    <p className="mb-3 text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
                    <a href="#" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
                    <aside>
                         <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
                         <div className="flex items-center mt-3">
                              <a href="#" className="px-2 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Helpful</a>
                              <a href="#" className="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600">Report abuse</a>
                         </div>
                    </aside>
               </article>
          </div>
     );
};

export default ReviewArticle;
