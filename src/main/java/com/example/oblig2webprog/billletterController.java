package com.example.oblig2webprog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController

@RequestMapping("/")
public class billletterController {
    @Autowired
    public final List<Kinobilletter> kinobillett = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagre(Kinobilletter kinobilletter){
        kinobillett.add(kinobilletter);
    }
    @GetMapping("/hentAlle")
    public List<Kinobilletter> hentAlle(){
        return kinobillett;
    }
    @GetMapping("/slett")
    public void slettBillett(){
        kinobillett.clear();
    }
}
