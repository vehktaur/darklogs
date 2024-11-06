interface SVGProps {
  className?: string;
  svgClassName?: string;
}

export const ImageCircleIcon = ({ className, svgClassName }: SVGProps) => {
  return (
    <span className={`${className}`}>
      <svg
        className={`${svgClassName}`}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
      >
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m7 0v3m0 3V5m0 0h3m-3 0h-3'
        />
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M6.978 6.488A2.674 2.674 0 0 1 8.5 6c.41 0 1.003.115 1.522.488.57.41.978 1.086.978 2.012 0 .926-.408 1.601-.978 2.011A2.674 2.674 0 0 1 8.5 11c-.41 0-1.003-.115-1.522-.489C6.408 10.101 6 9.427 6 8.5c0-.926.408-1.601.978-2.012zm9.353 15.456C18.611 21.177 23 18.143 23 12a1 1 0 0 0-1-1h-1c-4.803 0-8.21 1.072-10.555 2.622 2.035.662 4.076 1.82 5.63 3.751a1 1 0 0 1-1.56 1.254c-1.515-1.884-3.65-2.912-5.796-3.41a15.464 15.464 0 0 0-3.531-.388c-.784.003-1.477.066-2.024.157a1.005 1.005 0 0 1-.232.012l-.096.016a1 1 0 0 0-.76 1.367c.652 1.584 2.135 3.723 4.51 5.097 2.42 1.399 5.684 1.958 9.745.466z'
          clipRule='evenodd'
        />
      </svg>
    </span>
  );
};

export const EntertainmentIcon = ({ className, svgClassName }: SVGProps) => {
  return (
    <span className={`${className}`}>
      <svg
        className={`${svgClassName}`}
        xmlns='http://www.w3.org/2000/svg'
        id='Layer_1'
        data-name='Layer 1'
        viewBox='0 0 24 24'
      >
        <path d='m19,1H5C2.243,1,0,3.243,0,6v12c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V6c0-2.757-2.243-5-5-5Zm3,6h-3.894l3.066-3.066c.512.538.828,1.266.828,2.066v1Zm-2.734-3.988l-3.973,3.973s-.009.01-.014.015h-3.423l4-4h3.144c.09,0,.178.005.266.012Zm-6.238-.012l-3.764,3.764c-.071.071-.13.151-.175.236h-3.483l4-4h3.422Zm-8.028,0h1.778L2.778,7h-.778v-1c0-1.654,1.346-3,3-3Zm14,18H5c-1.654,0-3-1.346-3-3v-9h20v9c0,1.654-1.346,3-3,3Zm-3.953-5.2l-4.634,2.48c-.622.373-1.413-.075-1.413-.8v-4.961c0-.725.791-1.173,1.413-.8l4.634,2.48c.604.362.604,1.238,0,1.6Z' />
      </svg>
    </span>
  );
};

export const LifestyleIcon = ({ className, svgClassName }: SVGProps) => {
  return (
    <span className={`${className}`}>
      <svg
        className={`${svgClassName}`}
        enableBackground='new 0 0 512 512'
        id='Layer_1'
        version='1.1'
        viewBox='0 0 512 512'
        xmlSpace='preserve'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <g>
          <path d='M306.9,122.6c0.1-1.4,0.4-2.8,0.4-4.2c0-24.5-19.9-44.4-44.4-44.4s-44.4,19.9-44.4,44.4   c0,1.5,0.3,2.8,0.4,4.2H306.9z' />
          <path d='M457.6-0.8h-64.9c-7.9,0-15.1,4.7-18.3,12L320.1,136H52.4c-16,0-24,19.3-12.7,30.7l170.9,170.9v144.2h-68.8   c-8.5,0-15.5,7-15.5,15.5c0,8.5,7,15.5,15.5,15.5h168c8.5,0,15.5-7,15.5-15.5c0-8.5-7-15.5-15.5-15.5h-68.8V337.5L412,166.6   c11.3-11.3,3.3-30.7-12.7-30.7h-35.7l42.2-96.8h51.8c11,0,20-8.9,20-20C477.6,8.2,468.7-0.8,457.6-0.8z' />
        </g>
      </svg>
    </span>
  );
};

export const OthersIcon = ({ className, svgClassName }: SVGProps) => {
  return (
    <span className={`${className}`}>
      <svg
        className={`${svgClassName}`}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        fill='none'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
        />
      </svg>
    </span>
  );
};

export const FinanceIcon = ({ className, svgClassName }: SVGProps) => {
  return (
    <span className={`${className}`}>
      <svg
        className={`${svgClassName}`}
        id='svg8'
        version='1.1'
        viewBox='0 0 24 24'
      >
        <defs id='defs2'>
          <rect
            height='7.0346723'
            id='rect2504'
            width='7.9207187'
            x='-1.1008456'
            y='289.81766'
          />
        </defs>
        <g
          id='g2963'
          transform='matrix(3.7984262,0,0,3.819826,-0.05887475,-1110.3615)'
        >
          <path
            d='m 20.267578,48.617188 v 0.498046 11.064454 h -2.144531 v -9.921876 -0.5 h -0.994141 v 0.5 9.921876 H 14.992188 V 51.75 51.242188 h -1 V 51.75 60.179688 H 11.638672 11.142578 V 61.1875 h 0.496094 10.410156 0.496094 V 60.179688 H 22.048828 21.261719 V 49.115234 48.617188 Z'
            id='path2866'
            transform='matrix(0.26326693,0,0,0.26179203,0.01575684,280.21211)'
          />
          <path
            d='m 17.195312,42.8125 v 1.005859 h 0.50586 1.341797 l -3.033203,3.082032 -1.707032,-1.730469 -3.835937,4.132812 -0.210938,0.226563 C 9.3647547,48.953899 8.3082544,48.617188 7.1738281,48.617188 c -3.1558392,0 -5.7207031,2.583422 -5.7207031,5.757812 0,3.174352 2.5648639,5.759766 5.7207031,5.759766 3.1558389,0 5.7265629,-2.585414 5.7265629,-5.759766 0,-1.669956 -0.715598,-3.171367 -1.84961,-4.224609 l 0.150391,-0.16211 3.130859,-3.371093 1.677735,1.701171 3.724609,-3.785156 v 1.359375 0.5 h 1 v -0.5 V 42.8125 H 17.701172 Z M 7.1738281,49.623047 c 2.6167423,0 4.7324219,2.119367 4.7324219,4.751953 0,2.632548 -2.1156796,4.753906 -4.7324219,4.753906 -2.6167422,0 -4.7265625,-2.121358 -4.7265625,-4.753906 0,-2.632586 2.1098203,-4.751953 4.7265625,-4.751953 z'
            id='ellipse2880'
            transform='matrix(0.26326693,0,0,0.26179203,0.01575684,280.21211)'
          />
          <path
            d='m 6.6738281,51.251953 v 0.503906 0.292969 H 5.421875 V 54.875 h 2.5078125 v 0.822266 H 5.9277344 5.421875 v 1.005859 H 5.9277344 6.6738281 V 56.994141 57.5 h 1.0039063 v -0.505859 -0.291016 h 1.2460937 v -2.833984 h -2.5 v -0.814453 h 2.0039063 0.4960937 v -1.00586 h -0.4960937 -0.75 v -0.292969 -0.503906 z'
            id='path2882'
            transform='matrix(0.26326693,0,0,0.26179203,0.01575684,280.21211)'
          />
        </g>
      </svg>
    </span>
  );
};

export const CulinaryIcon = ({ className, svgClassName }: SVGProps) => {
  return (
    <span className={`${className}`}>
      <svg
        className={`${svgClassName}`}
        enableBackground='new 0 0 48 48'
        version='1.1'
        viewBox='0 0 48 48'
        xmlSpace='preserve'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <g id='Expanded'>
          <g>
            <g>
              <path d='M31,48c-0.553,0-1-0.447-1-1V1c0-0.553,0.447-1,1-1s1,0.447,1,1v46C32,47.553,31.553,48,31,48z' />
            </g>
            <g>
              <path d='M37,31h-6c-0.553,0-1-0.447-1-1s0.447-1,1-1h4.996c-0.133-16.802-3.585-26.66-5.014-27.002     c-0.552,0-0.991-0.446-0.991-0.999C29.991,0.447,30.447,0,31,0c4.188,0,7,15.512,7,30C38,30.553,37.553,31,37,31z' />
            </g>
            <g>
              <path d='M17,18c-3.859,0-7-3.141-7-7V1c0-0.553,0.447-1,1-1s1,0.447,1,1v10c0,2.757,2.243,5,5,5s5-2.243,5-5V1     c0-0.553,0.447-1,1-1s1,0.447,1,1v10C24,14.859,20.859,18,17,18z' />
            </g>
            <g>
              <path d='M17,48c-0.553,0-1-0.447-1-1V1c0-0.553,0.447-1,1-1s1,0.447,1,1v46C18,47.553,17.553,48,17,48z' />
            </g>
          </g>
        </g>
      </svg>
    </span>
  );
};

export const TechIcon = ({ className, svgClassName }: SVGProps) => {
  return (
    <span className={`${className}`}>
      <svg
        className={`${svgClassName}`}
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M9.6 20.75C5.21 20.75 3.25 18.79 3.25 14.4V9.6C3.25 5.21 5.21 3.25 9.6 3.25H14.4C18.79 3.25 20.75 5.21 20.75 9.6C20.75 10.01 20.41 10.35 20 10.35C19.59 10.35 19.25 10.01 19.25 9.6C19.25 6.02 17.98 4.75 14.4 4.75H9.6C6.02 4.75 4.75 6.02 4.75 9.6V14.4C4.75 17.98 6.02 19.25 9.6 19.25C10.01 19.25 10.35 19.59 10.35 20C10.35 20.41 10.01 20.75 9.6 20.75Z' />
        <path d='M7.98999 17.1C7.82999 17.1 7.65999 17.05 7.51999 16.94C6.64999 16.25 6.23999 15.15 6.23999 13.5V10.5C6.23999 7.6 7.58999 6.25 10.49 6.25H13.49C15.14 6.25 16.23 6.66 16.93 7.53C17.19 7.85 17.13 8.33 16.81 8.58C16.49 8.84 16.01 8.79 15.76 8.46C15.52 8.15 15.02 7.75 13.5 7.75H10.5C8.41999 7.75 7.74999 8.42 7.74999 10.5V13.5C7.74999 15.02 8.15999 15.52 8.45999 15.76C8.77999 16.02 8.83999 16.49 8.57999 16.81C8.42999 17 8.20999 17.1 7.98999 17.1Z' />
        <path d='M8.01001 4.75C7.59001 4.75 7.26001 4.41 7.26001 4V2C7.26001 1.59 7.60001 1.25 8.01001 1.25C8.42001 1.25 8.76001 1.59 8.76001 2V4C8.76001 4.41 8.42001 4.75 8.01001 4.75Z' />
        <path d='M12 4.75C11.59 4.75 11.25 4.41 11.25 4V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V4C12.75 4.41 12.41 4.75 12 4.75Z' />
        <path d='M16 4.75C15.59 4.75 15.25 4.41 15.25 4V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V4C16.75 4.41 16.41 4.75 16 4.75Z' />
        <path d='M22 8.75H20C19.59 8.75 19.25 8.41 19.25 8C19.25 7.59 19.59 7.25 20 7.25H22C22.41 7.25 22.75 7.59 22.75 8C22.75 8.41 22.42 8.75 22 8.75Z' />
        <path d='M8.01001 22.75C7.60001 22.75 7.26001 22.41 7.26001 22V20C7.26001 19.59 7.60001 19.25 8.01001 19.25C8.42001 19.25 8.76001 19.59 8.76001 20V22C8.76001 22.41 8.42001 22.75 8.01001 22.75Z' />
        <path d='M4 8.75H2C1.59 8.75 1.25 8.42 1.25 8C1.25 7.58 1.59 7.25 2 7.25H4C4.41 7.25 4.75 7.59 4.75 8C4.75 8.41 4.42 8.75 4 8.75Z' />
        <path d='M4 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H4C4.41 11.25 4.75 11.59 4.75 12C4.75 12.41 4.42 12.75 4 12.75Z' />
        <path d='M4 16.75H2C1.59 16.75 1.25 16.41 1.25 16C1.25 15.59 1.59 15.25 2 15.25H4C4.41 15.25 4.75 15.59 4.75 16C4.75 16.41 4.42 16.75 4 16.75Z' />
        <path d='M16.7101 19.34C15.4201 19.34 14.3701 18.29 14.3701 17C14.3701 15.71 15.4201 14.66 16.7101 14.66C18.0001 14.66 19.0501 15.71 19.0501 17C19.0401 18.29 18.0001 19.34 16.7101 19.34ZM16.7101 16.16C16.2501 16.16 15.8701 16.54 15.8701 17C15.8701 17.46 16.2501 17.84 16.7101 17.84C17.1701 17.84 17.5501 17.46 17.5501 17C17.5401 16.54 17.1701 16.16 16.7101 16.16Z' />
        <path d='M18.3999 22.75C17.8399 22.75 17.2899 22.46 16.9899 21.94L16.9199 21.83C16.8099 21.64 16.7199 21.59 16.6999 21.58C16.6899 21.58 16.5899 21.64 16.4799 21.83L16.4199 21.93C15.9599 22.72 14.9499 22.98 14.1799 22.52L13.2799 22C12.8699 21.77 12.5799 21.39 12.4599 20.93C12.3399 20.48 12.3999 20 12.6299 19.6C12.7399 19.41 12.7399 19.3 12.7299 19.28C12.7199 19.27 12.6299 19.22 12.4099 19.22C11.4399 19.22 10.6499 18.43 10.6499 17.47V16.54C10.6499 15.57 11.4399 14.79 12.3999 14.79C12.6199 14.79 12.7099 14.73 12.7299 14.72C12.7299 14.71 12.7299 14.6 12.6199 14.41C12.3899 14 12.3199 13.53 12.4499 13.08C12.5699 12.63 12.8599 12.25 13.2699 12.01L14.1799 11.48C14.9399 11.03 15.9499 11.29 16.3999 12.07L16.4599 12.18C16.5699 12.37 16.6599 12.42 16.6799 12.43C16.6899 12.43 16.7899 12.37 16.8999 12.18L16.9599 12.08C17.4299 11.29 18.4299 11.03 19.1999 11.49L20.1299 12C20.5399 12.23 20.8299 12.61 20.9499 13.07C21.0699 13.52 21.0099 14 20.7799 14.4C20.6699 14.59 20.6699 14.7 20.6799 14.72C20.6899 14.73 20.7799 14.78 20.9999 14.78C21.9699 14.78 22.7599 15.57 22.7599 16.53V17.46C22.7599 18.43 21.9699 19.21 21.0099 19.21C20.7899 19.21 20.6999 19.27 20.6799 19.28C20.6799 19.29 20.6799 19.4 20.7899 19.59C21.0199 20 21.0899 20.47 20.9599 20.92C20.8399 21.37 20.5499 21.75 20.1399 21.99L19.2299 22.52C18.9599 22.67 18.6799 22.75 18.3999 22.75ZM16.7099 20.08C17.3099 20.08 17.8599 20.44 18.2299 21.08L18.2899 21.19C18.3199 21.24 18.3999 21.27 18.4599 21.23L19.3799 20.7C19.4599 20.66 19.4899 20.58 19.4999 20.54C19.5099 20.5 19.5199 20.43 19.4799 20.35C19.1099 19.72 19.0799 19.06 19.3799 18.54C19.6799 18.02 20.2699 17.72 20.9999 17.72C21.1399 17.72 21.2599 17.6 21.2599 17.47V16.54C21.2599 16.4 21.1399 16.29 21.0099 16.29C20.2799 16.29 19.6799 15.99 19.3899 15.47C19.0899 14.95 19.1299 14.29 19.4899 13.66C19.5399 13.58 19.5299 13.5 19.5099 13.47C19.4999 13.43 19.4699 13.36 19.3899 13.31L18.4799 12.78C18.4099 12.74 18.3299 12.77 18.2899 12.83L18.2399 12.92C17.8699 13.56 17.3199 13.92 16.7199 13.92C16.1199 13.92 15.5699 13.56 15.1999 12.92L15.1399 12.82C15.1099 12.76 15.0199 12.74 14.9699 12.77L14.0499 13.3C13.9699 13.34 13.9399 13.42 13.9299 13.46C13.9199 13.5 13.9099 13.57 13.9499 13.65C14.3199 14.28 14.3499 14.94 14.0499 15.46C13.7499 15.98 13.1599 16.28 12.4299 16.28C12.2899 16.28 12.1699 16.4 12.1699 16.53V17.46C12.1699 17.6 12.2899 17.71 12.4199 17.71C13.1499 17.71 13.7499 18.01 14.0399 18.53C14.3399 19.05 14.2999 19.71 13.9399 20.34C13.8999 20.42 13.9099 20.49 13.9199 20.53C13.9299 20.57 13.9599 20.64 14.0399 20.69L14.9499 21.22C15.0199 21.26 15.0999 21.23 15.1399 21.17L15.1899 21.07C15.5499 20.44 16.1099 20.08 16.7099 20.08Z' />
      </svg>
    </span>
  );
};

export const ImageToggleIcon = ({ className, svgClassName }: SVGProps) => {
  return (
    <span className={`${className}`}>
      <svg
        className={`${svgClassName}`}
        fill='none'
        height='20'
        viewBox='0 0 20 20'
        width='20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M14.8536 2.14645C14.6583 1.95118 14.3417 1.95118 14.1464 2.14645C13.9512 2.34171 13.9512 2.65829 14.1464 2.85355L15.2929 4H4C2.89543 4 2 4.89543 2 6V12.5C2 12.7761 2.22386 13 2.5 13C2.77614 13 3 12.7761 3 12.5V6C3 5.44772 3.44772 5 4 5H15.2929L14.1464 6.14645C13.9512 6.34171 13.9512 6.65829 14.1464 6.85355C14.3417 7.04882 14.6583 7.04882 14.8536 6.85355L16.8536 4.85355C17.0488 4.65829 17.0488 4.34171 16.8536 4.14645L14.8536 2.14645ZM16 15C16.5523 15 17 14.5523 17 14V7.5C17 7.22386 17.2239 7 17.5 7C17.7761 7 18 7.22386 18 7.5V14C18 15.1046 17.1046 16 16 16H4.70711L5.85355 17.1464C6.04882 17.3417 6.04882 17.6583 5.85355 17.8536C5.65829 18.0488 5.34171 18.0488 5.14645 17.8536L3.14645 15.8536C2.95118 15.6583 2.95118 15.3417 3.14645 15.1464L5.14645 13.1464C5.34171 12.9512 5.65829 12.9512 5.85355 13.1464C6.04882 13.3417 6.04882 13.6583 5.85355 13.8536L4.70711 15H16ZM13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10ZM12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12C11.1046 12 12 11.1046 12 10Z'
          fill='#212121'
        />
      </svg>
    </span>
  );
};
