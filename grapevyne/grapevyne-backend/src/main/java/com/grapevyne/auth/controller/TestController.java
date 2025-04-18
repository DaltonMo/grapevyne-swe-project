package com.grapevyne.auth.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/api/test")
    public String testProtected() {
        return "You are authorized and reached a protected endpoint";
    }
}
