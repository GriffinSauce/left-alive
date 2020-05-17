import { useState } from 'react';

const Youtube = ({ title, videoId }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <div className="relative h-0 youtube-container">
        {loaded ? (
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            title={title}
            src={`https://www.youtube.com/embed/${videoId}?rel=0&amp;showinfo=0&autoplay=1`}
            width="560"
            height="315"
            frameBorder="0"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url("https://img.youtube.com/vi/${videoId}/0.jpg")`,
            }}
          >
            <svg
              version="1.1"
              viewBox="0 0 68 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="bg"
                d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                fill="#212121"
                fillOpacity="0.8"
              />
              <path d="M 45,24 27,14 27,34" fill="#fff" />
            </svg>
          </button>
        )}
      </div>
      <style jsx>{`
        /* 16:9 */
        .youtube-container {
          padding-bottom: 56%;
        }

        /* Mimick YT player exactly */
        svg {
          width: 68px;
          height: 48px;
        }
        button:hover svg .bg {
          fill: #f00;
          fill-opacity: 1;
        }
      `}</style>
    </>
  );
};
export default Youtube;
