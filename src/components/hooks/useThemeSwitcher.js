//import React, { useEffect, useState } from 'react'


import React , { useState, useEffect } from 'react';

const preferDarkQuery = "(prefer-color-scheme: dark)";


const useDarkMode = () => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      const check = userPref || (mediaQuery.matches ? "dark" : "light");
      setMode(check);

      if (check === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    window.localStorage.setItem("theme", newMode);

    if (newMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return [mode, toggleMode];
};

export default useDarkMode;


/** const useThemeSwitcher= () => {


    const preferDarkQuery = "(prefer-color-scheme: dark)";

    const [mode, setMode] = useState("");

    useEffect(() => {

        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme");

        const handleChange = () => {
            if(userPref){
                let check = userPref === "dark" ? "dark" : "light";
                setMode(check);
                if(check === "dark"){
                    document.documentElement.classList.add("dark")
                }else{
                    document.documentElement.classList.remove("dark")
                }
            }else{
                let check = mediaQuery.matches ? "dark" : "light";
                setMode(check);
                window.localStorage.setItem("theme",check);
                if(check === "dark"){
                    document.documentElement.classList.add("dark")
                }else{
                    document.documentElement.classList.remove("dark")
                }
            }
        }

        handleChange();

        mediaQuery.addEventListener("change", handleChange)

        return () => mediaQuery.removeEventListener("change", handleChange)


    },[]) 

    useEffect(() => {
        if(mode === "dark"){
            window.localStorage.setItem("theme","dark");
            document.documentElement.classList.add("dark")
        }else{
            window.localStorage.setItem("theme","light");
            document.documentElement.classList.remove("dark")
        }
    },[mode]) 

  
    return [mode, setMode]
};

export default useThemeSwitcher  **/