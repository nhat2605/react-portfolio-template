import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header/";
import ExampleCard from "../components/ExampleCard";
import Head from "next/head";
import Image from 'next/image';
import axios from 'axios';
import logo from '../public/images/logo.svg';
import toast, { Toaster } from "react-hot-toast";

const Playground = () => {
  const [imageLink, setImageLink] = useState('');
  const [message, setMessage] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    const resizeTextarea = () => {
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    };

    resizeTextarea(); // Resize on mount
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
      const contentType = response.headers['content-type'];
      if (contentType && contentType.startsWith('image/')) {
        setImageLink(message);
        console.log('Valid image URL');
        const classifyResult = await axios.post('https://lamduynhatle.pythonanywhere.com/classify/', {
          image_url: message,
        });
        console.log(classifyResult.data.results);
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
        <div className={`fixed left-0 right-0  justify-center`} style={{ textAlign: 'center', marginTop: '100px' }}>
          {imageLink === "" ? (
            <>
              <Image src={logo} alt="Logo" width={100} height={100} />
              <p>Hello, I am Nebula version 1.0</p>
              <p>I can help you guess if an image is of a <b>mountain, sea, glacier, forest, building or street.</b></p>
              <p>Please give me the URL to the image</p>
            </>
          ) : null}
        </div>

        <div className="flex flex-col items-center justify-center " style={{ marginTop: '90px' }}>
          {imageLink !== "" ? (
            <>
              <img
                style={{ maxWidth: '50%', width: 'auto', height: 'auto' }}
                src={imageLink}
                alt="Descriptive text"
              />
              <div className="grid grid-cols-2 gap-4 w-1/2"> {/* Adjust the width as needed */}
                <p>Hello Here is the graph</p>
                <p>Here is the description</p>
              </div>
            </>
          ) : null}
        </div>


        
        {imageLink === "" ? (<div className="fixed bottom-0 left-0 right-0 flex justify-center items-center" style={{ marginBottom: '90px' }}>
          <div className="grid grid-cols-2 gap-7 m-4" style={{ maxWidth: '1200px' }}>  
            <div className="flex justify-end">
              <ExampleCard url="https://cdn.mos.cms.futurecdn.net/xaycNDmeyxpHDrPqU6LmaD.jpg" handleClick={handleClick}/>
            </div>
            <ExampleCard url="https://miro.medium.com/v2/resize:fit:2000/1*0drOXMZVz0cx8jlXW2SxTg.jpeg" handleClick={handleClick}/>

            <div className="flex justify-end">
              <ExampleCard url="https://thedailyaus.com.au/wp-content/uploads/2023/10/Website-Featured-Images-NEW-73.png" handleClick={handleClick}/>
            </div>
            <ExampleCard url="https://lh3.googleusercontent.com/proxy/8SGaYSXNB_CJA54ecMtbYJhJ1BtxGQzCI_O0D7XuR95xHHMK45Cu8bUuM6wM6qi6YIL16NRvwnDVUWdRhAGuOvvveywXpPNSOd3384Y5ifMvXo_ap5NztmDgxJrk-KaQ1oWjq8PZxueFtTjHs1obUw" handleClick={handleClick}/>
          </div>
        </div>) : null}
        
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-transparent dark:bg-gray-800 flex justify-center items-end">
          <div className={`w-1/2 relative ${isShaking ? 'shake-animation' : ''}`}>
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