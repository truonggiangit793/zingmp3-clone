const express = require("express");
const router = express.Router();
const { ZingMp3 } = require("zingmp3-api-full");

router.get("/audio/stream/:id", async (req, res, next) => {
    const id = req.params.id;
    const data = await ZingMp3.getSong(id);
    return res.json(data);
});

router.get("/playlist-detail/:id", async (req, res, next) => {
    const id = req.params.id;
    const data = await ZingMp3.getDetailPlaylist(id);
    return res.json(data);
});

router.get("/get-home", async (req, res, next) => {
    let page = req.query.page || 1;
    console.log(ZingMp3);
    const data = await ZingMp3.getHome(page);
    return res.json(data);
});

router.get("/playlist-mv/:id", async (req, res, next) => {
    const id = req.params.id;
    let page = req.query.page || 1;
    let count = req.query.count || 15;
    const data = await ZingMp3.getListMV(id, page, count);
    return res.json(data);
});

router.get("/get-top-100", async (req, res, next) => {
    const data = await ZingMp3.getTop100();
    return res.json(data);
});

router.get("/get-chart-home", async (req, res, next) => {
    const data = await ZingMp3.getChartHome();
    return res.json(data);
});

router.get("/new-release-chart", async (req, res, next) => {
    const data = await ZingMp3.getNewReleaseChart();
    return res.json(data);
});

router.get("/song-detail/:id", async (req, res, next) => {
    const id = req.params.id;
    const data = await ZingMp3.getInfoSong();
    return res.json(data);
});

router.get("/lyric/:id", async (req, res, next) => {
    const id = req.params.id;
    const data = await ZingMp3.getLyric(id);
    return res.json(data);
});

router.get("/search/:keyword", async (req, res, next) => {
    const keyword = req.params.keyword;
    const data = await ZingMp3.search(keyword);
    return res.json(data);
});

router.get("/nghe-si/:keyword", async (req, res, next) => {
    const keyword = req.params.keyword;
    const data = await ZingMp3.getArtist(keyword);
    return res.json(data);
});

router.get("/category-mv/:id", async (req, res, next) => {
    const id = req.params.id;
    const data = await ZingMp3.getCategoryMV(id);
    return res.json(data);
});

router.get("/video/stream/:id", async (req, res, next) => {
    const id = req.params.id;
    const data = await ZingMp3.getVideo(id);
    return res.json(data);
});

module.exports = router;
