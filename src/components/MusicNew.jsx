// src/components/MusicPlayer.js
import React, { useState, useRef, useEffect } from "react";
//import "./MusicPlayer.css"; // Import your CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faPlay, faPause, faForward } from "@fortawesome/free-solid-svg-icons";
import styles from"./MusicNew.module.css";

const songs = [
  {
    name: "gajraj-1",
    title: "😎🅷🅰🆃 🅹🅰 🆃🅰🆄 🅿🅰🅲🅷🅷🅴 🅽🅴😎",
    artist: "𝓥𝓲𝓴𝓪𝓼𝓱 𝓚𝓾𝓶𝓪𝓻",
  },
  {
    name: "gajraj-2",
    title: "😎🅶🅰🅹🅱🅰🅽😎",
    artist: "𝓥𝓲𝓼𝓱𝓿𝓪𝓳𝓮𝓮𝓽 𝓒𝓱𝓸𝓾𝓭𝓱𝓪𝓻𝔂",
  },
  {
    name: "gajraj-3",
    title: " 🎂𝐵𝒶𝒷𝓎 𝑀𝑒𝓇𝑒 𝐵𝒾𝓇𝓉𝒽𝒹𝒶𝓎 𝒫𝑒 𝒢🌸𝓁𝒾 𝒞𝒽𝒶𝓁𝑒𝑔𝒾 ",
    artist: "𝓚𝓪𝓴𝓪 𝓦𝓡𝓛𝓓,𝓜𝓮𝓰𝓪 𝓚𝓲𝓼𝓱𝓸𝓻𝓮",
  },
  {
    name: "gajraj-4",
    title: "♥ Kaala Chashma ♥",
    artist: "𝗕𝗮𝗱𝘀𝗵𝗮 & 𝗡𝗲𝗵𝗮 𝗞𝗮𝗸𝗸𝗮𝗿",
  },
  {
    name: "gajraj-5",
    title: "𝕽𝖆𝖆𝖙𝖆𝖆𝖓 𝕷𝖆𝖒𝖇𝖎𝖞𝖆𝖓",
    artist: "𝕵𝖚𝖇𝖎𝖓 𝕹𝖆𝖚𝖙𝖎𝖞𝖆𝖑 & 𝕬𝖘𝖊𝖊𝖘 𝕶𝖆𝖚𝖗",
  },
  {
    name: "gajraj-6",
    title: "🐦  🎀  𝒜𝓊𝓇 𝑅𝒶𝓃𝑔 𝒟𝑒  🎀  🐦",
    artist: "𝗞𝗮𝘃𝗶𝘁𝗮 𝗗𝗮𝗻𝗴𝗶ngi",
  },
  {
    name: "gajraj-7",
    title: "𝕭𝖆𝖑𝖆𝖒 𝕮𝖍𝖔𝖙𝖔 𝖘𝖔",
    artist: "𝓢𝓮𝓮𝓶𝓪 𝓜𝓲𝓼𝓱𝓪𝓻𝓪 & 𝓑𝓪𝓭𝓻𝓲 𝓥𝔂𝓪𝓼",
  },
   
];

const MusicNew = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songIndex, setSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, songIndex]);

  const playMusic = () => {
    setIsPlaying(true);
  };

  const pauseMusic = () => {
    setIsPlaying(false);
  };

  const nextSong = () => {
    setSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const prevSong = () => {
    setSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
  };

  const onTimeUpdate = () => {
    const audio = audioRef.current;
    setCurrentTime(audio.currentTime);
    setDuration(audio.duration);
  };

  const onProgressClick = (event) => {
    const audio = audioRef.current;
    const progressWidth = progressRef.current.clientWidth;
    const clickX = event.nativeEvent.offsetX;
    const newTime = (clickX / progressWidth) * audio.duration;
    audio.currentTime = newTime;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.gajraj}>🥪 𝓖𝓐𝓙𝓡𝓐𝓙 𝓜𝓤𝓢𝓘𝓒 𝓓𝓐𝓣𝓐 𝓑𝓐𝓝𝓚 🥙</h1>
      <div className={styles.musicContainer}>
        <h2 id={styles.title}>{songs[songIndex].title}</h2>
        <h3 id={styles.artist}>{songs[songIndex].artist}</h3>
        <div className={styles.imgContainer}> 
          <img src={`/images/${songs[songIndex].name}.jpg`} className={isPlaying ? styles.anime : ""} alt="" />
        </div>
        <audio
          ref={audioRef}
          src={`/music/${songs[songIndex].name}.mp3`}
          onTimeUpdate={onTimeUpdate}
          onEnded={nextSong}
        ></audio>

        <div className={styles.progressbarContainer} id="progress_container">
          <div className={styles.progressDurationMeter}>
            <div id="current_time">{formatTime(currentTime)}</div>
            <div id="duration">{formatTime(duration)}</div>
          </div>
          <div
            className={styles.progressDiv}
            id="progress_div"
            onClick={onProgressClick}
            ref={progressRef}
          >
            <div
              className={styles.progress}
              id="progress"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <div className={styles.musicControls}>
          <FontAwesomeIcon icon={faBackward} id="prev" onClick={prevSong} />
          <FontAwesomeIcon
            icon={isPlaying ? faPause : faPlay} 
            id="play" 
            onClick={isPlaying ? pauseMusic : playMusic} 
          
          />
          <FontAwesomeIcon icon={faForward} id="next" onClick={nextSong} />
        </div>

        <h2 className={styles.copyRight}>@copyright-Mahendra Singh Gajraj</h2>
      </div>
    </div>
  );
};

export default MusicNew;
