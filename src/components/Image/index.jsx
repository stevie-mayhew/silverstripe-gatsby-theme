import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { STATES, BREAKPOINTS } from 'config';
import './styles.scss';

// The percentage of the image that needs to visible before loading it
const RATIO = 0.1;

// The percentage of the image needs to be visible before firing the callback
const THRESHOLD = 0.1;

const CLASS_NAMES = ['c-image'];

/**
 * Image - Lazy loaded
 *
 * @param src
 * @param width
 * @param height
 * @param alt
 * @param modifier
 * @param sizes
 * @param forceLoad
 * @returns {*}
 */
const Image = ({
  src,
  width,
  height,
  alt,
  modifier,
  sizes,
  forceLoad,
}) => {
  // We need a browser environment and intersection observer for lazy loading
  const DEFAULT = (typeof window === 'undefined' && typeof IntersectionObserver === 'undefined') || forceLoad;
  const [inView, setInView] = useState(DEFAULT);
  const [loaded, setLoaded] = useState(false);
  const PICTURE_REF = useRef(null);

  if (!DEFAULT) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= RATIO) {
            setInView(true);
            // Stop from observing any target
            observer.unobserve(entry.target);
            observer.disconnect();
          }
        });
      },
      {
        threshold: THRESHOLD,
      },
    );

    useEffect(() => {
      if (PICTURE_REF && PICTURE_REF.current) {
        observer.observe(PICTURE_REF.current);
      } else {
        setInView(true);
      }

      // If observing return function to remove observer
      return () => {
        if (PICTURE_REF && PICTURE_REF.current) {
          observer.unobserve(PICTURE_REF.current);
          observer.disconnect();
        }
      };
    }, []);
  }

  if (modifier && !CLASS_NAMES.includes(modifier)) {
    CLASS_NAMES.push(modifier);
  }

  if (loaded && !CLASS_NAMES.includes(STATES.LOADED)) {
    CLASS_NAMES.push(STATES.LOADED);
  }

  return (
    <div ref={PICTURE_REF} className={CLASS_NAMES.join(' ')}>
      {width && height ? (
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          aria-hidden="true"
        >
          <rect width={width} height={height} />
        </svg>
      ) : null}
      <picture>
        {Object.entries(sizes)
          .map(
            ([key, value]) => BREAKPOINTS[key] && (
              <source
                key={key}
                srcSet={inView ? value : ''}
                media={`(max-width: ${BREAKPOINTS[key]}px)`}
              />
            ),
          )}
        <img
          src={inView ? src : ''}
          alt={alt}
          width={width}
          height={height}
          onLoad={() => {
            setLoaded(true);
          }}
        />
      </picture>
    </div>
  );
};

Image.defaultProps = {
  width: '',
  height: '',
  modifier: '',
  sizes: {},
  forceLoad: false,
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  modifier: PropTypes.string,
  sizes: PropTypes.object,
  forceLoad: PropTypes.bool,
};

export default Image;
