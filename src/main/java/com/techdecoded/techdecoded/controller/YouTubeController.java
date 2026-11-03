package com.techdecoded.techdecoded.controller;

import com.techdecoded.techdecoded.service.YouTubeService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/youtube")
public class YouTubeController {

    private final YouTubeService youTubeService;

    public YouTubeController(YouTubeService youTubeService) {
        this.youTubeService = youTubeService;
    }

    @GetMapping("/techdecoded")
    public String getTechDecodedVideos() {
        return youTubeService.getLatestTechDecodedVideos();
    }

    @GetMapping("/tgog")
    public String getTgogVideos() {
        return youTubeService.getLatestTgogVideos();
    }

}
