package com.example.oblig2webprog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;


@RestController

@RequestMapping("/")
public class billletterController {
    @Autowired
    BillettRepository repository;

    @PostMapping("/bestill")
    public void lagre(Kinobilletter kinobilletter){

    }
}
