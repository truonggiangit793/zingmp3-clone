export default {
    audio: null,
    toast: null,
    alertify: null,
    homeData: false,
    isPlaying: false,
    lyricStatus: {
        isUp: false,
        isDown: false,
    },
    toggleSidebar: true,
    isLoadingToPlay: false,
    title: "Zing MP3 | Nghe tải nhạc chất lượng cao",
    initialTimestamp: new Date().valueOf() + 60000 * 60 /* Set initial time for an hour*/,
    isRepeat: localStorage.getItem("isRepeat") ? JSON.parse(localStorage.getItem("isRepeat")) : false,
    isShuffle: localStorage.getItem("isShuffle") ? JSON.parse(localStorage.getItem("isShuffle")) : false,
    currentIndex: localStorage.getItem("currentIndex") ? JSON.parse(localStorage.getItem("currentIndex")) : 0,
    isControllerShow: localStorage.getItem("currentSongData") ? true : false,
    currentAlbumData: localStorage.getItem("currentAlbumData")
        ? JSON.parse(localStorage.getItem("currentAlbumData"))
        : null,
    currentSongEncodeId: localStorage.getItem("currentSongEncodeId")
        ? JSON.parse(localStorage.getItem("currentSongEncodeId"))
        : null,
    currentSongData: localStorage.getItem("currentSongData")
        ? JSON.parse(localStorage.getItem("currentSongData"))
        : null,
    currentSongSrc: localStorage.getItem("currentSongSrc") ? JSON.parse(localStorage.getItem("currentSongSrc")) : null,
    currentTime: localStorage.getItem("currentTime") ? JSON.parse(localStorage.getItem("currentTime")) : 0,
    currentTimePercent: localStorage.getItem("currentTimePercent")
        ? JSON.parse(localStorage.getItem("currentTimePercent"))
        : 0,
};
