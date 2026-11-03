package com.techdecoded.techdecoded.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class TgogInstagramService {

    @Value("${instagram.tgog.access.token}")
    private String accessToken;

    private final RestTemplate restTemplate = new RestTemplate();

    public String getLatestReels() {

        String url = UriComponentsBuilder
                .fromUriString("https://graph.instagram.com/v25.0/me/media")
                .queryParam(
                        "fields",
                        "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp"
                )
                .queryParam("limit", 20)
                .queryParam("access_token", accessToken)
                .build()
                .encode()
                .toUriString();

        return restTemplate.getForObject(url, String.class);
    }
}
