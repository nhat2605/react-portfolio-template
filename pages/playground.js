import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header/";
import ExampleCard from "../components/ExampleCard";
import Head from "next/head";
import Image from 'next/image';
import axios from 'axios';
import logo from '../public/images/logo.svg';
import toast, { Toaster } from "react-hot-toast";
import ResultChart from "../components/ResultChart";


const Playground = () => {
  const [imageLink, setImageLink] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(null);
  const [isShaking, setIsShaking] = useState(false);
  const textareaRef = useRef(null);

  const resizeTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    resizeTextarea(); // Resize on mount and on message change
  }, [message]); // Dependency on message state

  useEffect(() => {
    async function getLoader() {
      const { quantum } = await import('ldrs')
      quantum.register()
    }
    getLoader()
  }, [])

  useEffect(() => {
    window.addEventListener('resize', resizeTextarea);
    return () => {
      window.removeEventListener('resize', resizeTextarea);
    };
  }, []);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleEnter = async () => {
    try {
      const response = await axios.head(message);
      setMessage('');
      setResult(null);
      const contentType = response.headers['content-type'];
      if (contentType && contentType.startsWith('image/')) {
        setImageLink(message);
        console.log('Valid image URL');
        const classifyResult = await axios.post('https://lamduynhatle.pythonanywhere.com/classify/', {
          image_url: message,
        });
        console.log(classifyResult.data.results);
        setResult(classifyResult.data.results)
        setIsShaking(false);
      } else {
        console.log('Invalid image URL');
        setIsShaking(true);
      }
    } catch (error) {
      console.log('Invalid URL or network error');
      setIsShaking(true);
    } finally {
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  const handleClick = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success('URL copied to clipboard!', {
        position: "top-center"
      });
    } catch (error) {
      toast.error('Failed to copy URL.', {
        position: "top-center"
      });
    }
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      handleEnter();
      
    }
  };

  let highestCategory = "";
  if (result) {
    highestCategory = Object.keys(result).reduce((a, b) => result[a] > result[b] ? a : b);
  }

  return (
    <>
    <Toaster />
      <Head>
        <title>Playground</title>
      </Head>
      <div className="fixed left-0 right-0 container mx-auto mb-10">
        <div className="gradient-circle"></div>
        <div className="filler"></div>
  
        <Header isBlog={true} />
        
        <div className={`relative flex justify-center items-center mt-6`} style={{
            maxHeight: '77vh',
            maxWidth: "80vh",
            overflowY: 'auto',
            zIndex: 1,
            margin: '0 auto',
            width: '50%',
            textAlign: 'left'
          }}>
          {/* Empty div for flexibility if needed */}
        </div>
        <div className={`fixed left-0 right-0  justify-center`} style={{ textAlign: 'center' }}>
          {imageLink === "" ? (
            <>
              <Image src={logo} alt="Logo" width={100} height={100} />
              <p>Hello, I am Nebula version 1.0</p>
              <p>I can help you guess if an image is of a <b>mountain, beach, glacier, forest, building or street.</b></p>
              <p>Please give me the URL to the image</p>
            </>
          ) : null}
        </div>

        <div className="flex flex-col items-center justify-center " style={{ marginTop: '50px' }}>
          {imageLink !== "" ? (
            <>
              <div style={{ position: 'relative', minWidth:"30%", maxWidth: '50%' }}>
                <img
                  style={{ width: 'auto', height: 'auto' }}
                  src={imageLink}
                  alt="Descriptive text"
                />
                {result === null && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark filter with 50% opacity
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <l-quantum
                      size="100"
                      speed="2.2"
                      color="white"
                    ></l-quantum>
                  </div>
                )}
              </div>
              <div className="w-full md:w-3/4 lg:w-1/2">
                <div className="grid grid-cols-1 gap-4 items-center justify-center">
                  {result && (
                    <div>
                    <ResultChart result={result} /> 
                    <p className="text-center">The image is likely of a {highestCategory.toLowerCase()}.</p>
                    </div>
                  )}
                </div>
              </div>



            </>
          ) : null}
        </div>

        {imageLink === "" ? (
        <div className="hidden mob:flex left-0 right-0 justify-center items-center" style={{ marginTop: '170px' }}>
          <div className="grid grid-cols-2 gap-7 m-4" style={{ maxWidth: '1200px' }}>  
            <div className="flex justify-end">
              <ExampleCard url="https://cdn.mos.cms.futurecdn.net/xaycNDmeyxpHDrPqU6LmaD.jpg" handleClick={handleClick}/>
            </div>
            <div>
              <ExampleCard url="https://miro.medium.com/v2/resize:fit:2000/1*0drOXMZVz0cx8jlXW2SxTg.jpeg" handleClick={handleClick}/>  
            </div>
            <div className="hidden desktop:block justify-end">
              <ExampleCard url="https://thedailyaus.com.au/wp-content/uploads/2023/10/Website-Featured-Images-NEW-73.png" handleClick={handleClick}/>
            </div>
            <div className="hidden desktop:block"> 
              <ExampleCard url="https://thedailyaus.com.au/wp-content/uploads/2023/08/Website-Featured-Images-NEW-3-1.png" handleClick={handleClick}/>
            </div>
          </div>
        </div>
      ) : null}

        
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-transparent dark:bg-gray-800 flex justify-center items-end">
          <div className={`w-3/4 relative ${isShaking ? 'shake-animation' : ''}`}>
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
                style={{ width: '2.5rem', height: '2.5rem', transform: 'translate(10%, 15%)' }}
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
