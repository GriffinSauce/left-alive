import { FiChevronDown } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import useDimensions from '../hooks/useDimensions';

const Truncate = ({ children, maxHeight }) => {
  const [descriptionRef, { height }] = useDimensions();
  const [isCollapsed, setIsCollapsed] = useState(height > maxHeight);
  useEffect(() => setIsCollapsed(height > maxHeight), [height]);

  return (
    <>
      <div className={isCollapsed ? 'description-truncate' : ''}>
        <div ref={descriptionRef}>{children}</div>
      </div>
      {isCollapsed ? (
        <button
          type="button"
          className="flex flex-col items-center justify-center w-full p-3 pb-0 border-t border-gray-700"
          onClick={() => setIsCollapsed(false)}
        >
          <span>read more</span>
          <FiChevronDown />
        </button>
      ) : null}
      <style jsx>{`
        .description-truncate {
          position: relative;
          overflow-y: hidden;
          max-height: ${maxHeight}px;
        }

        .description-truncate:after {
          position: absolute;
          display: block;
          content: '';
          width: 100%;
          height: 50px;
          background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0) 100%
          );
          bottom: 0;
          left: 0;
        }
      `}</style>
    </>
  );
};

export default Truncate;
