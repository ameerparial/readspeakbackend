const {
  generateAudio,
  getAudioDuration,
  getVoices,
} = require("../services/ttsservice.js");

const express = require("express");
// const {getAudioDurationInSeconds} = require( "get-audio-duration");
const router = express.Router();

router.post("/read-aloud", async (req, res) => {
  try {
    const { text, shortname } = req.body; // Text chunk sent = require( frontend (sentence))

    // Step 1: Generate the audio buffer using Azure TTS SDK
    const { audioBuffer, wordTimings } = await generateAudio(text, shortname);

    // Getting duration in seconds.
    const duration = await getAudioDuration(audioBuffer);

    res.json({
      audio: audioBuffer.toString("base64"),
      wordTimings,
      duration,
    });
  } catch (error) {
    console.error("Error generating audio or extracting duration:", error);
    res.status(500).json({ message: "Server error generating audio" });
  }
});

router.get("/getvoices", getVoices);

module.exports = router;
