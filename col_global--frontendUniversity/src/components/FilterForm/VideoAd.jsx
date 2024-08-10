const VideoAd = () => {
  const gifs = [
    { src: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnk3Z2NsaHowOWloM290YzBqcWpjaTRzeWIyNHhuaTlybHoxczJpcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gFiRtXIP1v49UfmFRu/200.webp', alt: 'GIF 1' },
    { src: 'https://media2.giphy.com/media/XBFI1t4alpx3ORw8P2/200.webp?cid=790b7611fy7gclhz09ih3otc0jqjci4syb24xni9rlz1s2is&ep=v1_gifs_search&rid=200.webp&ct=g', alt: 'GIF 2' },
    { src: 'https://media0.giphy.com/media/cl27Mh8srUEog5GtUR/200.webp?cid=790b7611fy7gclhz09ih3otc0jqjci4syb24xni9rlz1s2is&ep=v1_gifs_search&rid=200.webp&ct=g', alt: 'GIF 3' }
  ];

  return (
    <div className="flex justify-between p-4">
      {gifs.map((gif, index) => (
        <div
          key={index}
          className="hidden lg:block w-full md:w-1/3 lg:w-1/3 p-2"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src={gif.src}
              alt={gif.alt}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoAd;
