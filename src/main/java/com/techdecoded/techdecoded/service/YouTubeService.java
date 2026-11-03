package com.techdecoded.techdecoded.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class YouTubeService {

    @Value("${youtube.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    private String fetchVideos(String playlistId) {
        String url = "https://www.googleapis.com/youtube/v3/playlistItems"
                + "?part=snippet,contentDetails"
                + "&playlistId=" + playlistId
                + "&maxResults=10"
                + "&key=" + apiKey;

        return restTemplate.getForObject(url, String.class);
    }

    public String getLatestTechDecodedVideos() {
        return fetchVideos("UUZUi2K4EGugcxrvJh1afQbw");
    }

    public String getLatestTgogVideos() {
        return fetchVideos("UU bPvLMn3Bkk4cBeZFyQq_oA".replace(" ", ""));
    }
}
