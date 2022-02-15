// console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  { songName: "1.01", filePath: "songs/1.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.02", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.03", filePath: "songs/3.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.04", filePath: "songs/4.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.05", filePath: "songs/5.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.06", filePath: "songs/6.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.07", filePath: "songs/7.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.08", filePath: "songs/8.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.09", filePath: "songs/9.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.10", filePath: "songs/10.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.11", filePath: "songs/11.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.12", filePath: "songs/12.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.13", filePath: "songs/13.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.14", filePath: "songs/14.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.15", filePath: "songs/15.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.16", filePath: "songs/16.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.17", filePath: "songs/17.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.18", filePath: "songs/18.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.19", filePath: "songs/19.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.20", filePath: "songs/20.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.21", filePath: "songs/21.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.22", filePath: "songs/22.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.23", filePath: "songs/23.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.24", filePath: "songs/24.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.25", filePath: "songs/25.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.26", filePath: "songs/26.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.27", filePath: "songs/27.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.28", filePath: "songs/28.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.29", filePath: "songs/29.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.30", filePath: "songs/30.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.31", filePath: "songs/31.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.32", filePath: "songs/32.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.33", filePath: "songs/33.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.34", filePath: "songs/34.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.35", filePath: "songs/35.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.36", filePath: "songs/36.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.37", filePath: "songs/37.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.38", filePath: "songs/38.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.39", filePath: "songs/39.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.40", filePath: "songs/40.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.41", filePath: "songs/41.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.42", filePath: "songs/42.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.43", filePath: "songs/43.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.44", filePath: "songs/44.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.45", filePath: "songs/45.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.46", filePath: "songs/46.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.47", filePath: "songs/47.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.48", filePath: "songs/48.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.49", filePath: "songs/49.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.50", filePath: "songs/50.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.51", filePath: "songs/51.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.52", filePath: "songs/52.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.53", filePath: "songs/53.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.54", filePath: "songs/54.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.55", filePath: "songs/55.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.56", filePath: "songs/56.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.57", filePath: "songs/57.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.58", filePath: "songs/58.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.59", filePath: "songs/59.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.60", filePath: "songs/60.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.61", filePath: "songs/61.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.62", filePath: "songs/62.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.63", filePath: "songs/63.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.64", filePath: "songs/64.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.65", filePath: "songs/65.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.66", filePath: "songs/66.mp3", coverPath: "covers/2.jpg" },
  // this  is the second section (1-59)2 :67
  { songName: "2.01", filePath: "songs/67.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.02", filePath: "songs/68.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.03", filePath: "songs/69.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.04", filePath: "songs/70.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.05", filePath: "songs/71.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.06", filePath: "songs/72.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.07", filePath: "songs/73.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.08", filePath: "songs/74.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.09", filePath: "songs/75.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.10", filePath: "songs/76.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.11", filePath: "songs/77.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.12", filePath: "songs/78.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.13", filePath: "songs/79.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.14", filePath: "songs/80.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.15", filePath: "songs/81.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.16", filePath: "songs/82.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.17", filePath: "songs/83.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.18", filePath: "songs/84.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.19", filePath: "songs/85.mp3", coverPath: "covers/2.jpg" },
  { songName: "1.20", filePath: "songs/86.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.21", filePath: "songs/87.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.22", filePath: "songs/88.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.23", filePath: "songs/89.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.24", filePath: "songs/90.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.25", filePath: "songs/91.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.26", filePath: "songs/92.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.27", filePath: "songs/93.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.28", filePath: "songs/94.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.29", filePath: "songs/95.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.30", filePath: "songs/96.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.31", filePath: "songs/97.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.32", filePath: "songs/98.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.33", filePath: "songs/99.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.34", filePath: "songs/100.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.35", filePath: "songs/101.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.36", filePath: "songs/102.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.37", filePath: "songs/103.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.38", filePath: "songs/104.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.39", filePath: "songs/105.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.40", filePath: "songs/106.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.41", filePath: "songs/107.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.42", filePath: "songs/108.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.43", filePath: "songs/109.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.44", filePath: "songs/110.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.45", filePath: "songs/111.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.46", filePath: "songs/112.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.47", filePath: "songs/113.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.48", filePath: "songs/114.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.49", filePath: "songs/115.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.50", filePath: "songs/116.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.51", filePath: "songs/117.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.52", filePath: "songs/118.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.53", filePath: "songs/119.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.54", filePath: "songs/120.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.55", filePath: "songs/121.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.56", filePath: "songs/122.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.57", filePath: "songs/123.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.58", filePath: "songs/124.mp3", coverPath: "covers/2.jpg" },
  { songName: "2.59", filePath: "songs/125.mp3", coverPath: "covers/2.jpg" },
  // section 3...(1-84)3
  { songName: "3.01", filePath: "songs/126.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.02", filePath: "songs/127.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.03", filePath: "songs/128.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.04", filePath: "songs/129.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.05", filePath: "songs/130.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.06", filePath: "songs/131.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.07", filePath: "songs/132.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.08", filePath: "songs/133.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.09", filePath: "songs/134.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.10", filePath: "songs/135.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.11", filePath: "songs/136.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.12", filePath: "songs/137.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.13", filePath: "songs/138.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.14", filePath: "songs/139.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.15", filePath: "songs/140.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.16", filePath: "songs/141.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.17", filePath: "songs/142.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.18", filePath: "songs/143.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.19", filePath: "songs/144.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.20", filePath: "songs/145.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.21", filePath: "songs/146.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.22", filePath: "songs/147.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.23", filePath: "songs/148.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.24", filePath: "songs/149.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.25", filePath: "songs/150.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.26", filePath: "songs/151.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.27", filePath: "songs/152.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.28", filePath: "songs/153.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.29", filePath: "songs/154.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.30", filePath: "songs/155.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.31", filePath: "songs/156.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.32", filePath: "songs/157.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.33", filePath: "songs/158.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.34", filePath: "songs/159.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.35", filePath: "songs/160.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.36", filePath: "songs/161.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.37", filePath: "songs/162.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.38", filePath: "songs/163.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.39", filePath: "songs/164.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.40", filePath: "songs/165.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.41", filePath: "songs/166.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.42", filePath: "songs/167.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.43", filePath: "songs/168.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.44", filePath: "songs/169.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.45", filePath: "songs/160.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.46", filePath: "songs/171.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.47", filePath: "songs/172.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.48", filePath: "songs/173.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.49", filePath: "songs/174.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.50", filePath: "songs/175.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.51", filePath: "songs/176.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.52", filePath: "songs/177.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.53", filePath: "songs/178.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.54", filePath: "songs/179.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.55", filePath: "songs/180.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.56", filePath: "songs/181.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.57", filePath: "songs/182.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.58", filePath: "songs/183.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.59", filePath: "songs/184.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.60", filePath: "songs/185.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.61", filePath: "songs/186.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.62", filePath: "songs/187.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.63", filePath: "songs/188.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.64", filePath: "songs/189.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.65", filePath: "songs/190.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.66", filePath: "songs/191.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.67", filePath: "songs/192.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.68", filePath: "songs/193.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.69", filePath: "songs/194.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.70", filePath: "songs/195.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.71", filePath: "songs/196.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.72", filePath: "songs/197.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.73", filePath: "songs/198.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.74", filePath: "songs/199.mp3", coverPath: "covers/2.jpg" },
  
  { songName: "3.75", filePath: "songs/200.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.76", filePath: "songs/201.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.77", filePath: "songs/202.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.78", filePath: "songs/203.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.79", filePath: "songs/204.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.80", filePath: "songs/205.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.81", filePath: "songs/206.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.82", filePath: "songs/207.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.83", filePath: "songs/208.mp3", coverPath: "covers/2.jpg" },
  { songName: "3.84", filePath: "songs/209.mp3", coverPath: "covers/2.jpg" },

  // section 4 (1-60)4.....
  { songName: "4.01", filePath: "songs/210.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.02", filePath: "songs/211.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.03", filePath: "songs/212.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.04", filePath: "songs/213.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.05", filePath: "songs/214.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.06", filePath: "songs/215.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.07", filePath: "songs/216.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.08", filePath: "songs/217.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.09", filePath: "songs/218.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.10", filePath: "songs/219.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.11", filePath: "songs/220.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.12", filePath: "songs/221.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.13", filePath: "songs/222.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.14", filePath: "songs/223.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.15", filePath: "songs/224.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.16", filePath: "songs/225.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.17", filePath: "songs/226.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.18", filePath: "songs/227.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.19", filePath: "songs/228.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.20", filePath: "songs/229.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.21", filePath: "songs/230.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.22", filePath: "songs/231.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.23", filePath: "songs/232.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.24", filePath: "songs/233.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.25", filePath: "songs/234.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.26", filePath: "songs/235.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.27", filePath: "songs/236.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.28", filePath: "songs/237.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.29", filePath: "songs/238.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.30", filePath: "songs/239.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.31", filePath: "songs/240.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.32", filePath: "songs/241.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.33", filePath: "songs/242.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.34", filePath: "songs/243.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.35", filePath: "songs/244.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.36", filePath: "songs/245.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.37", filePath: "songs/246.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.38", filePath: "songs/247.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.39", filePath: "songs/248.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.40", filePath: "songs/249.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.41", filePath: "songs/240.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.42", filePath: "songs/251.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.43", filePath: "songs/252.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.44", filePath: "songs/253.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.45", filePath: "songs/254.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.46", filePath: "songs/255.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.47", filePath: "songs/256.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.48", filePath: "songs/257.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.49", filePath: "songs/258.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.50", filePath: "songs/259.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.51", filePath: "songs/260.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.52", filePath: "songs/261.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.53", filePath: "songs/262.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.54", filePath: "songs/263.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.55", filePath: "songs/264.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.56", filePath: "songs/265.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.57", filePath: "songs/266.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.58", filePath: "songs/267.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.59", filePath: "songs/268.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.60", filePath: "songs/269.mp3", coverPath: "covers/2.jpg" },
  { songName: "4.61", filePath: "songs/270.mp3", coverPath: "covers/2.jpg" },
];
songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 30) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
