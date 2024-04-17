package com.example.oblig2webprog;


import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public class BillettRepository {
    private final ArrayList<Kinobilletter> billettlist = new ArrayList<>();
    private void leggInn(Kinobilletter kinobilletter){
        billettlist.add(kinobilletter);
    }

}

