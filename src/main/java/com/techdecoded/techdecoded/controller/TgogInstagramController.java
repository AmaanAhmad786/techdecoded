
package com.techdecoded.techdecoded.controller;

import com.techdecoded.techdecoded.service.TgogInstagramService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/instagram")
public class TgogInstagramController {

    private final TgogInstagramService tgogInstagramService;

    public TgogInstagramController(
            TgogInstagramService tgogInstagramService) {
        this.tgogInstagramService = tgogInstagramService;
    }

    @GetMapping("/tgog")
    public String getTgogReels() {
        return tgogInstagramService.getLatestReels();
    }
}
