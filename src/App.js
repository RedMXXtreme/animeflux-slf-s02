import React, { useState, useEffect } from "react";
import { FaRandom, FaSearch } from "react-icons/fa";
const AnimePage = () => {
  const videos = [
    { id: 1, src: "https://yasdownloads.org/shangri-la-frontier-season-2-19324?season=01&episode=1", HD1: "https://swishsrv.com/e/nq9arly2tbb3", HD2: "https://swishsrv.com/e/nq9arly2tbb3", HDSUB1: "https://boosterx.stream/v/38GcvnhoyNg1/", HDSUB2: "https://swishsrv.com/e/vuxjoqfd099d" },
    { id: 2, src: "https://yasdownloads.org/shangri-la-frontier-season-2-19324?season=01&episode=2", HD1: "https://swishsrv.com/e/zo83xzg3ml0v", HD2: "https://swishsrv.com/e/zo83xzg3ml0v", HDSUB1: "https://boosterx.stream/v/Xv108VflSRJD/", HDSUB2: "https://swishsrv.com/e/2r7nc0mm6m2s" },
    { id: 3, src: "https://yasdownloads.org/shangri-la-frontier-season-2-19324?season=01&episode=3", HD1: "https://swishsrv.com/e/j5kbixts0b48", HD2: "https://swishsrv.com/e/j5kbixts0b48", HDSUB1: "https://boosterx.stream/v/ZDn3SHTrElVF/", HDSUB2: "https://swishsrv.com/e/0aoqbax8prwu" },
    { id: 4, src: "https://yasdownloads.org/shangri-la-frontier-season-2-19324?season=01&episode=4", HD1: "https://swishsrv.com/e/l9v17r4jhsjb", HD2: "https://swishsrv.com/e/l9v17r4jhsjb", HDSUB1: "https://boosterx.stream/v/t9pPcV7M7GZ4/", HDSUB2: "https://swishsrv.com/e/ovyiswwqr9yu" },
    { id: 5, src: "https://yasdownloads.org/shangri-la-frontier-season-2-19324?season=01&episode=5", HD1: "https://boosterx.stream/v/iIWeKfuPafzR/", HD2: "https://boosterx.stream/v/iIWeKfuPafzR/", HDSUB1: "https://boosterx.stream/v/t75TA1D85Zrk/", HDSUB2: "https://swishsrv.com/e/4h6j9hfemvgh" },
    { id: 6, src: "https://yasdownloads.org/shangri-la-frontier-season-2-19324?season=01&episode=6", HD1: "https://boosterx.stream/v/rbwKYarc1ejf/", HD2: "https://boosterx.stream/v/rbwKYarc1ejf/", HDSUB1: "https://boosterx.stream/v/HrMhQzXbd24A/", HDSUB2: "https://swishsrv.com/e/80ii1ijkdjt8" },
    { id: 7, src: "https://yasdownloads.org/shangri-la-frontier-season-2-19324?season=01&episode=7", HD1: "https://boosterx.stream/v/lB1CYizgXIVu/", HD2: "https://boosterx.stream/v/lB1CYizgXIVu/", HDSUB1: "https://boosterx.stream/v/qf4kE9Llyg1V/", HDSUB2: "https://swishsrv.com/e/tulxha0a1p9f" },
    { id: 8, src: "https://yasdownloads.org/shangri-la-frontier-season-2-19324?season=01&episode=8", HD1: "https://boosterx.stream/v/zDqvpaiGQzZW/", HD2: "https://boosterx.stream/v/zDqvpaiGQzZW/", HDSUB1: "https://boosterx.stream/v/Sjl47APoc7Jw/", HDSUB2: "https://sstream.site/e/ir7p4ebyeaam" },
    { id: 9, src: "https://yasdownloads.org/shangri-la-frontier-season-2-19324?season=01&episode=9", HD1: "https://boosterx.stream/v/fH16zvpmUxv8/", HD2: "https://boosterx.stream/v/fH16zvpmUxv8/", HDSUB1: "https://boosterx.stream/v/KAroBLabt3iE/", HDSUB2: "https://sstream.site/e/jh9r58ebssvp" },
    { id: 10, src: "https://yasdownloads.org/shangri-la-frontier-season-2-19324?season=01&episode=10", HD1: "https://boosterx.stream/v/wJOMeaZnxKFK/", HD2: "https://boosterx.stream/v/wJOMeaZnxKFK/", HDSUB1: "https://boosterx.stream/v/7rjNyr0SOrqa/", HDSUB2: "https://swishsrv.com/e/ds8oe3p6squb" },
    { id: 11, src: "https://yasdownloads.org/shangri-la-frontier-season-2-19324?season=01&episode=11", HD1: "https://boosterx.stream/v/MSegHeB9oVL5/", HD2: "https://boosterx.stream/v/MSegHeB9oVL5/", HDSUB1: "https://boosterx.stream/v/a06Bf8ONyUXm/", HDSUB2: "https://swishsrv.com/e/3wjpt496pcjq" },
    { id: 12, src: "https://yasdownloads.org/shangri-la-frontier-season-2-19324?season=01&episode=12", HD1: "https://boosterx.stream/v/1Pqrm9i69Z7Z/", HD2: "https://boosterx.stream/v/1Pqrm9i69Z7Z/", HDSUB1: "https://boosterx.stream/v/i2TCo7b2TWh1/", HDSUB2: "https://swishsrv.com/e/gorx5t4pqu90" },
    { id: 13, src: "https://yasdownloads.org/shangri-la-frontier-season-2-19324?season=01&episode=13", HD1: "https://boosterx.stream/v/CHfSVy9B67Cr/", HD2: "https://boosterx.stream/v/CHfSVy9B67Cr/", HDSUB1: "https://boosterx.stream/v/aTiwWJeL1Piu/", HDSUB2: "https://swishsrv.com/e/evfv46seqsck" },
    { id: 14, src: "https://yasdownloads.org/shangri-la-frontier-season-2-19324?season=01&episode=14", HD1: "https://boosterx.stream/v/aZ8TPrQDmYGt/", HD2: "https://boosterx.stream/v/aZ8TPrQDmYGt/", HDSUB1: "https://boosterx.stream/v/3ax7Se7g8APB/", HDSUB2: "https://swishsrv.com/e/kn64p9e9ngvp" },
    { id: 15, src: "https://yasdownloads.org/shangri-la-frontier-season-2-19324?season=01&episode=15", HD1: "https://boosterx.stream/v/B5NDWa4oPm8f/", HD2: "https://boosterx.stream/v/B5NDWa4oPm8f/", HDSUB1: "https://boosterx.stream/v/0l7EamTapikD/", HDSUB2: "https://swishsrv.com/e/c36qvln9hbsg" },
    { id: 16, src: "https://yasdownloads.org/shangri-la-frontier-season-2-19324?season=01&episode=16", HD1: "https://boosterx.stream/v/C9vqUSa89wNO/", HD2: "https://boosterx.stream/v/C9vqUSa89wNO/", HDSUB1: "https://boosterx.stream/v/nSQ70yz3ttTV/", HDSUB2: "https://swishsrv.com/e/dfmc9kx7zjo3" },
    { id: 17, src: "https://yasdownloads.org/shangri-la-frontier-season-2-19324?season=01&episode=17", HD1: "https://boosterx.stream/v/aTcrRm2EH5yZ/", HD2: "https://boosterx.stream/v/aTcrRm2EH5yZ/", HDSUB1: "https://boosterx.stream/v/4ZGLkRy3ghzI/", HDSUB2: "https://swishsrv.com/e/a6846tzr26vi" },
    { id: 18, src: "https://yasdownloads.org/shangri-la-frontier-season-2-19324?season=01&episode=18", HD1: "https://boosterx.stream/v/FbTakwHaAaEQ/", HD2: "https://boosterx.stream/v/FbTakwHaAaEQ/", HDSUB1: "https://boosterx.stream/v/l43WySnmjTD5/", HDSUB2: "https://swishsrv.com/e/ts15mg4o1qye" },
    { id: 19, src: "https://yasdownloads.org/shangri-la-frontier-season-2-19324?season=01&episode=19", HD1: "https://newer.stream/v/il0ortemHxgM/", HD2: "https://newer.stream/v/il0ortemHxgM/", HDSUB1: "https://boosterx.stream/v/I5XDyYGmp7Jy/", HDSUB2: "https://swishsrv.com/e/yrj2i7xinxf5" },
    { id: 20, src: "https://yasdownloads.org/shangri-la-frontier-season-2-19324?season=01&episode=20", HD1: "https://newer.stream/v/zOl9PjQhiDfC/", HD2: "https://newer.stream/v/zOl9PjQhiDfC/", HDSUB1: "https://boosterx.stream/v/BVTPVCQajtx7/", HDSUB2: "https://swishsrv.com/e/kxu74koz1bws" },
    { id: 21, src: "https://yasdownloads.org/shangri-la-frontier-season-2-19324?season=01&episode=21", HD1: "https://newer.stream/v/tFkyPNcC3WOH/", HD2: "https://newer.stream/v/tFkyPNcC3WOH/", HDSUB1: "https://newer.stream/v/p8XFwapatveF/", HDSUB2: "https://swishsrv.com/e/0gy4bwbxupt8" },
    { id: 22, src: "https://yasdownloads.org/shangri-la-frontier-season-2-19324?season=01&episode=22", HD1: "https://newer.stream/v/lmtzH2AO3gm6/", HD2: "https://newer.stream/v/lmtzH2AO3gm6/", HDSUB1: "https://newer.stream/v/xbWJGuNzg4QS/", HDSUB2: "https://sstream.site/e/mp5qmks1rmc8" },
    { id: 23, src: "https://yasdownloads.org/shangri-la-frontier-season-2-19324?season=01&episode=23", HD1: "https://newer.stream/v/TQ0l55JW8Cz9/", HD2: "https://newer.stream/v/TQ0l55JW8Cz9/", HDSUB1: "https://newer.stream/v/Gk746WirTbVg/", HDSUB2: "https://sstream.site/e/r93cayfwbm30" },
    { id: 24, src: "https://yasdownloads.org/shangri-la-frontier-season-2-19324?season=01&episode=24", HD1: "https://newer.stream/v/W5WQHStmyVgD/", HD2: "https://newer.stream/v/W5WQHStmyVgD/", HDSUB1: "https://newer.stream/v/W5WQHStmyVgD/", HDSUB2: "https://sstream.site/e/fjkpbsxgxulm" },
    { id: 25, src: "https://yasdownloads.org/shangri-la-frontier-season-2-19324?season=01&episode=25", HD1: "https://newer.stream/v/OfoZ0RvBD9ZB/", HD2: "https://newer.stream/v/OfoZ0RvBD9ZB/", HDSUB1: "https://newer.stream/v/OfoZ0RvBD9ZB/", HDSUB2: "https://sstream.site/e/oezr6xy80pq1" },
  ];

  const ranvideo = [
    { link: "https://animeflux-jujutsukaisen-s02.pages.dev/" },
    { link: "https://animeflux-jujutsukaisen-s01.pages.dev/" },
    { link: "https://animeflux-chainsawman-s01.pages.dev/" },
    { link: "https://anime-flux-bleach-re3j-s01.pages.dev/", },
    { link: "https://anime-flux-demon-slayer-kimetsu-no-yaiba-hashira-training-arc.pages.dev/", },
    { link: "https://animeflux-demon-slayer-kimetsu-no-yaiba-swordsmith-village-arc.pages.dev/", },
    { link: "https://animeflux-demon-slayer-kimetsu-no-yaiba-arc.pages.dev/", },
    { link: "https://animeflux-hunter-x-hunter-2011.pages.dev/", },
    { link: "https://animeflux-demon-slayer-kimetsu-no-yaiba-mugen-train-arc.pages.dev/", },
    { link: "https://animeflux-code-geass-lelouch-of-the-rebellion.pages.dev/", },
    { link: "https://animeflux-psyco-pass-3-first-inspector.pages.dev/", },
    { link: "https://animeflux-god-of-high-school.pages.dev/", },
    { link: "https://animeflux-ao-ashi.pages.dev/", },
    { link: "https://animeflux-bluelock-s01.pages.dev/", },
    { link: "devhttps://animeflux-bluelock-s02.pages./", },
    { link: "https://animeflux-that-time-i-got-reicarnated-as-slime-s01.pages.dev/", },
    { link: "https://animeflux-that-time-i-got-reicarnated-as-slime-s02.pages.dev/", },
    { link: "https://animeflux-that-time-i-got-reicarnated-as-slime-s03.pages.dev/", },
    { link: "https://animeflux-one-punch-man-s01.pages.dev/", },
    { link: "https://animeflux-windbreaker.pages.dev/", },
    { link: "https://animeflux-tower-of-god-s01.pages.dev/", },
    { link: "https://animeflux-tower-of-god-s02.pages.dev/", },
    { link: "https://animeflux-sakamoto-days.pages.dev/", },
    { link: "/https://animeflux-god-of-high-school.pages.dev", },
  ];

  const searchLinks = {
    "Death Note": { link: "https://animeflux-death-note", img: "https://static1.animekai.to/7e/i/f/bf/67664a569f3a5@100.jpg", year: "2006", type: "TV", rating: "R" },
    "Attack on Titan": { link: "https://animeflux-attack-on-titan.pages.dev/", img: "https://static1.animekai.to/45/i/b/79/67664a45311fc.jpg", year: "2013", type: "TV", rating: "R" },
    "Demon Slayer: Kimetsu no Yaiba": { link: "https://animeflux-demon-slayer-kimetsu-no-yaiba-arc.pages.dev/", img: "https://static1.animekai.to/70/i/5/79/67664a9bdad80@300.jpg", year: "2019", type: "TV", rating: "PG-R" },
    "Demon Slayer: Kimetsu no Yaiba Mugen Train Arc": {link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-mugen-train-arc.pages.dev/", img: "https://static1.animekai.to/78/i/0/44/67664a81b5dd4@300.jpg", year: "2021", type: "Movie", rating: "PG-R"},
    "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc": {link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-entertainment-arc.pages.dev/", img: "https://static1.animekai.to/d3/i/e/9c/67664a00ed86e@300.jpg", year: "2021", type: "TV", rating: "PG-R"},
    "Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc": {link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-swordsmith-village-arc.pages.dev/", img: "https://static1.animekai.to/28/i/d/60/67664938b51c4@300.jpg", year: "2023", type: "TV", rating: "PG-R"},
    "Demon Slayer: Kimetsu no Yaiba Hashira Training Arc": {link:"https://animeflux-demon-slayer-kimetsu-no-yaiba-hashira-training-arc.pages.dev/", img: "https://static1.animekai.to/d1/i/d/30/67664a1707993@300.jpg", year: "2024", type: "TV", rating: "PG-R"},
    "Hunter x Hunter (2011)": {link:"", img: "https://animekai.to/assets/uploads/37585a39fe8c8d8fafaa2c7bfbf5374ecac859ea6a0886b7dc.png", year: "2011", type: "TV", rating: "PG-13"},
    "Jujutsu Kaisen S1": {link:"https://animeflux-jujutsukaisen-s01.pages.dev/", img: "https://static1.animekai.to/43/i/f/d2/67664a638ddda@100.jpg", year: "2020", type: "TV", rating: "PG-13"},
    "Jujutsu Kaisen S2": {link:"https://animeflux-jujutsukaisen-s02.pages.dev/", img: "https://static1.animekai.to/44/i/9/b8/6766493099d89@100.jpg", year: "2021", type: "TV", rating: "PG-13"},
    "Jujutsu Kaisen 0": {link:"", img: "https://static1.animekai.to/8d/i/d/0f/67664a6c4ae80@100.jpg", year: "2022", type: "TV", rating: "PG-13"},
    "Puka Puka Juju": {link:"", img: "https://static1.animekai.to/a5/i/b/76/67664a0d0aeb9@100.jpg", year: "2023", type: "TV", rating: "PG-13"},
    "Sakamot Days": { link:"https://animeflux-sakamoto-days.pages.dev/", img: "https://static1.animekai.to/09/i/e/90/6782958e57c23.jpg", year: "2025", type: "TV", rating: "R" },
    "Tower of god s01": { link:"https://animeflux-tower-of-god-s01.pages.dev/", img: "https://static1.animekai.to/ca/i/8/0a/67664a6d3f5a2.jpg", year: "2020", type: "TV", rating: "PG-13" },
    "Tower of god s02": { link:"https://animeflux-tower-of-god-s02.pages.dev/", img: "https://static1.animekai.to/3c/i/b/05/676649ad3a95d.jpg", year: "2024", type: "TV", rating: "PG-13" },
    "Wind Breaker": { link:"https://animeflux-windbreaker.pages.dev/", img: "https://static1.animekai.to/bd/i/5/4c/676649ee7430d.jpg", year: "2024", type: "TV", rating: "PG-13" },
    "One Punch man s01": { link:"https://animeflux-one-punch-man-s01.pages.dev/", img: "https://static1.animekai.to/db/i/0/b6/67664ab866dbf.jpg", year: "2015", type: "TV", rating: "R" },
    "One Punch man s02": { link:"https://animeflux-one-punch-man-s02.pages.dev/", img: "https://static1.animekai.to/8d/i/b/f4/676649c3e82f2.jpg", year: "2019", type: "Tv", rating: "R" },
    "Ao Ashi": { link:"https://animeflux-ao-ashi.pages.dev/", img: "https://static1.animekai.to/03/i/3/1f/6766494451516.jpg", year: "2022", type: "TV", rating: "PG-13" },
    "Blue Lock s01": { link:"https://animeflux-bluelock-s01.pages.dev/", img: "https://static1.animekai.to/34/i/3/bd/67664ab2e7771.jpg", year: "2022", type: "TV", rating: "PG-13" },
    "Blue Lock s02": { link:"devhttps://animeflux-bluelock-s02.pages./", img: "https://static1.animekai.to/56/i/d/36/67664aa7a69dd.jpg", year: "2024", type: "TV", rating: "PG-13" },
    "God of high school": { link:"/https://animeflux-god-of-high-school.pages.dev", img: "https://static1.animekai.to/4d/i/1/d8/67664984e84a9.jpg", year: "2020", type: "TV", rating: "PG-13" },
    "Psyco Pass 1": { link:"https://animeflux-psyco-pass-2-first-inspector.pages.dev/", img: "https://static1.animekai.to/f1/i/f/ba/67664970838b9.jpg", year: "2012", type: "TV", rating: "R" },
    "Code Geass: Lelouch of the Rebellion": { link:"https://animeflux-code-geass-lelouch-of-the-rebellion.pages.dev/", img: "https://static1.animekai.to/4d/i/3/52/67664928cd5ca.jpg", year: "2006", type: "TV", rating: "R" },
    "That Time I Got Reincarnated as a Slime S01": { link:"https://animeflux-that-time-i-got-reicarnated-as-slime-s01.pages.dev/", img:"https://static1.animekai.to/12/i/9/08/676649d245eb3.jpg", year: "2018", type: "TV", rating: "Pg-13" },
    
  };

  const [currentVideo, setCurrentVideo] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedserver, setSelectedServer] = useState([]);
  const [toggle, setToggle] = useState();
  // Set default video and server on initial render
  React.useEffect(() => {
    const defaultVideo = videos.find(video => video.id === 1);
    setCurrentVideo(defaultVideo.HDSUB1);
    setSelectedServer("HDSUB1");
    setToggle(1);
  }, []);


  
  const movies = Object.keys(searchLinks);


  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * ranvideo.length);
    window.location.href = ranvideo[randomIndex].link;
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.length > 0) {
      const results = movies.filter((movie) =>
        movie.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMovies(results);
    } else {
      setFilteredMovies([]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchLinks[searchQuery]) {
      window.location.href = searchLinks[searchQuery];
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
        // Disable F12, Ctrl+Shift+I, Ctrl+U
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'U')) {
            e.preventDefault();
        }
    };

    const handleContextMenu = (e) => {
        e.preventDefault(); // Disable right-click context menu
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  const handleEpisodetoggle = (id) => {
    setToggle((prev) => {
      if (prev === id) {
        return id; // Prevent toggling out
      } else {
        const selectedVideo = videos.find(video => video.id === id);
        if (selectedserver === "HDSUB1") {
          setCurrentVideo(selectedVideo.HDSUB1);
        } else if (selectedserver === "HDSUB2") {
          setCurrentVideo(selectedVideo.HDSUB2);
        } else if (selectedserver === "HD1") {
          setCurrentVideo(selectedVideo.HD1);
        } else if (selectedserver === "HD2") {
          setCurrentVideo(selectedVideo.HD2);
        } else {
          setCurrentVideo(selectedVideo.src);
        }
        return id;
      }
    });
  };

  return (
    
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      
    <nav className="bg-gray-900 p-4 flex items-center justify-between sticky top-0 z-10 shadow-lg">
      <a href="/">
      <span className="text-orange-500 text-2xl font-bold">Anime Flux</span>
      </a>

      <div className="relative w-full max-w-md mx-auto">
          <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden bg-white p-2">
            <FaSearch className="text-gray-500 ml-2" />
            <input
              type="text"
              placeholder="Search for a show..."
              className="w-full px-3 py-2 outline-none text-black"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          {filteredMovies.length > 0 && (
            <ul
              className={`absolute w-full bg-gray-800 border border-gray-600 mt-1 rounded-lg shadow-lg overflow-hidden ${
                filteredMovies.length > 4 ? "max-h-64 overflow-y-auto" : ""
              }`}
            >
              {filteredMovies.map((movie, index) => (
                <li
                  key={index}
                  className="flex items-center p-2 cursor-pointer hover:bg-gray-700"
                  onClick={() => (window.location.href = searchLinks[movie].link)}
                  onKeyDown={handleKeyPress}
                >
                  <img
                    src={searchLinks[movie].img}
                    alt={movie}
                    className="w-12 h-12 rounded-md mr-3"
                  />
                  <div>
                    <p className="text-white font-bold">{movie}</p>
                    <p className="text-gray-400 text-sm">
                      {searchLinks[movie].year} • {searchLinks[movie].type} •{" "}
                      {searchLinks[movie].rating}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <button onClick={handleRandom} className="text-white text-2xl p-2 rounded-full hover:bg-gray-700 transition">
          <FaRandom />
        </button>
      </nav>

     { /* Main Page Content */}
        <div className="flex flex-col lg:flex-row p-4 gap-4">
            <div className="bg-gray-800 p-4 w-full md:w-1/3 lg:w-1/4 rounded-lg shadow-md">
            <img
          src="https://static1.animekai.to/94/i/a/bd/67664ad7ae926.jpg"
          alt="Anime poster"
          className="w-16 md:w-32 lg:w-48"
          style={{ height: "191px", width: "min-content", objectFit: "cover" }}
            />
            <h2 className="text-2xl font-bold mt-2 text-center" style={{ fontSize: "10px" }}></h2>

            <h2 className="text-xl font-bold mb-4">List of episodes:</h2>
            <div className="grid grid-cols-4 gap-2">
          {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => handleEpisodetoggle(video.id)}
            className={`px-4 py-2 rounded-lg text-center ${
              toggle === video.id ? "bg-purple-600" : "bg-gray-700 hover:bg-gray-600"
            }`}
              >
            {video.id}
              </button>
          ))}
            </div>
          </div>
          <div className="flex-1 p-4 bg-gray-800 rounded-lg shadow-md">
            <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingTop: "56.25%" }}>
          <iframe
            src={currentVideo}
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            allow="autoplay" 
            allowFullScreen
            style={{ backgroundImage: "url('https://comicbook.com/wp-content/uploads/sites/4/2025/02/Shangri-La-Frontier-Season-2-GGC-Arc.jpg?resize=2000')", backgroundSize: "cover" }}
          ></iframe>
            </div>
        {/* Episode Selection UI */}

        {videos.map((video) => (
        toggle === video.id && (
       <div className="mt-6 w-full bg-gray-800 p-4 rounded-lg max-w-lg mx-auto text-center shadow-lg" style={{ maxWidth: "67rem" }}>
       <div className="bg-yellow-400 text-black p-3 rounded-t-lg font-bold">
        <p>You are watching</p>
        <p className="text-lg">Episode {video.id}</p>
        <p className="text-sm mt-1">If the current server doesn't work, please try other servers beside.</p>
      </div>

      <div className="bg-gray-900 p-4 rounded-b-lg text-center">
        <div className="mb-4">
          <p className="text-yellow-400 font-semibold inline-flex items-center">
            <span className="mr-2">🔠 SUB:</span>
            <button
              className={`px-4 py-2 text-sm rounded ml-2 ${
                selectedserver === "HDSUB1" ? "bg-yellow-400 text-black" : "bg-gray-700"
              }`}
              onClick={() => {
                setSelectedServer("HDSUB1");
                setCurrentVideo(video.HDSUB1);
              }}
            >
              HD-1
            </button>
            <button
              className={`px-4 py-2 text-sm rounded ml-2 ${
                selectedserver === "HDSUB2" ? "bg-yellow-400 text-black" : "bg-gray-700"
              }`}
              onClick={() => {
                setSelectedServer("HDSUB2");
                setCurrentVideo(video.HDSUB2);
              }}
            >
              HD-2
            </button>
          </p>
          <div className="mt-4">
          <p className="text-yellow-300 font-semibold inline-flex items-center">
            <span className="mr-2">🎤 DUB:</span>
            <button
            
              className={`px-4 py-2 text-sm rounded ml-2 ${
                selectedserver === "HD1" ? "bg-yellow-400 text-black" : "bg-gray-700"
              }`}
              onClick={() => {
                setSelectedServer("HD1");
                setCurrentVideo(video.HD1);
              }}
            >
              HD-1
            </button>
            <button
            
              className={`px-4 py-2 text-sm rounded ml-2 ${
                selectedserver === "HD2" ? "bg-yellow-400 text-black" : "bg-gray-700"
              }`}
              onClick={() => {
                setSelectedServer("HD2");
                setCurrentVideo(video.HD2);
              }}
            >
              HD-2
            </button>
            <button
              style={{ fontSize: "15px" }}
              className={`px-4 py-2 text-sm rounded ml-2 ${
                selectedserver === "Multi" ? "bg-yellow-400 text-black" : "bg-gray-700"
              }`}
              onClick={() => {
                setSelectedServer("Multi");
                setCurrentVideo(video.src);
              }}
            >
              Multi
            </button>
          </p>
          </div>
        </div>
      </div>
    </div>
  )
))}
      <div className="p-4 mt-8 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Seasons</h2>
        <div className="flex gap-4 overflow-x-auto">
          <a href="https://www.animekai.to/seasons/season-1"><button>
          <div className="bg-gray-700 p-4 rounded-lg flex-shrink-0 w-48"
          style={{ backgroundImage: "url('https://static1.animekai.to/6e/i/0/28/67664acada30d.jpg')", backgroundSize: "cover" }}>
            <h3 className="font-bold">Season 1</h3>
            <span className="bg-red-600 px-2 py-1 rounded text-sm">25 Eps</span>
          </div>
          </button>
          </a>
          <a href="https://www.animekai.to/seasons/season-2">
          <button>
          <div className="bg-gray-700 p-4 rounded-lg flex-shrink-0 w-48"
          style={{ backgroundImage: "url('https://static1.animekai.to/94/i/a/bd/67664ad7ae926.jpg')", backgroundSize: "cover" }}>
            <h3 className="font-bold">Season 2</h3>
            <span className="bg-red-600 px-2 py-1 rounded text-sm">25 Eps</span>
          </div>
          </button>
          </a>
        </div>
      </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="mt-8 p-4 bg-black text-gray-400 text-center">
        <p>Copyright ©AnimeFlux. All Rights Reserved</p>
        <p className="text-sm mt-1">
          This site does not store any files on its server. All contents are provided by non-affiliated third parties.
        </p>
        <p className="mt-2">Socials: <span className="text-white">🐦</span></p>

      </footer>
      </div>

    
  );
};

export default AnimePage;
