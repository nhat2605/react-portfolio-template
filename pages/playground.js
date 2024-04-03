import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header/"
import Head from "next/head";
import axios from 'axios';

const Playground = () => {
  let imageLink = []
  const [message, setMessage] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    console.log(isShaking);
  }, [isShaking]);
  useEffect(() => {
    function resizeTextarea() {
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }

    resizeTextarea(); // Resize on mount

    window.addEventListener('resize', resizeTextarea);
    return () => {
      window.removeEventListener('resize', resizeTextarea);
    };
  }, [message]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleEnter = async () => {
    try {
      const response = await axios.head(message);
      const contentType = response.headers['content-type'];
      if (contentType && contentType.startsWith('image/')) {
        console.log('Valid image URL');
        setIsShaking(false);
      } else {
        console.log('Invalid image URL');
        setIsShaking(true);
      }
    } catch (error) {
      console.log('Invalid URL or network error');
      setIsShaking(true);
    } finally {
      // Remove the shake effect after a delay
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  const onEnterPress = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      handleEnter();
    }
  }

  return (
    <>
      <Head>
        <title>Playground</title>
      </Head>
      <div className="container mx-auto mb-10">
        <div className="gradient-circle"></div>
        <div className="filler"></div>

        <Header isBlog={true} />
        <div
          className={`relative flex justify-center items-center`}
          style={{
            maxHeight: '77vh',
            maxWidth: "80vh",
            overflowY: 'auto',
            zIndex: 1,
            margin: '0 auto',
            width: '50%',
            textAlign: 'left'
          }}>
          <p> </p>
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-transparent dark:bg-gray-800 flex justify-center items-end">
          <div className={`w-1/2 relative ${isShaking ? 'shake-animation' : ''}`} >
            <div className="relative flex w-full">
              <textarea
                ref={textareaRef}
                id="prompt-textarea"
                rows="1"
                placeholder="Enter a prompt"
                className={`form-textarea resize-none border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-0 focus-visible:ring-0 dark:bg-transparent rounded-lg py-3.5 pl-10 w-full`}
                style={{ paddingRight: '3rem', overflowY: 'hidden' }}
                value={message}
                onChange={handleMessageChange}
                onKeyDown={onEnterPress}
              />
              <button
                onClick={handleEnter}
                className="absolute flex justify-center items-center bg-black rounded-lg right-0 bottom-0 mb-3 mr-3"
                style={{ width: '2.5rem', height: '2.5rem', transform: 'translate(10%, 15%)' }} // Center the button to the corner of the textarea
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playground;
